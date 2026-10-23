import * as THREE from 'three';
import { articulatedBus, ARTICULATED_BUS_SIZE } from './props.js';
import { createImportedModel, disposeImportedInstance } from '../../utils/ImportedModels.js';

const ACCELERATION = 1.1, BRAKING = 4, CRUISE_SPEED = 5;
const STOP_SECONDS = 4, END_FADE_METERS = 6;

/** Servicio hacia el norte por el carril exclusivo, con relevo en los extremos. */
export class BusService {
  constructor({ x, startZ, endZ, stationZ, height = 0.02, groundHeight = null }) {
    if (!(startZ > stationZ && stationZ > endZ)) throw new Error('La estación debe quedar dentro del recorrido del bus.');
    this.group = articulatedBus();
    this.group.userData.noMerge = true;
    this.group.name = 'Bus troncal Caracas';
    this.position = this.group.position;
    this.length = ARTICULATED_BUS_SIZE.length;
    this.width = ARTICULATED_BUS_SIZE.width;
    this.startZ = startZ;
    this.endZ = endZ;
    this.stationZ = stationZ;
    this.height = height;
    this.groundHeight = groundHeight;
    this.position.set(x, groundHeight?.(x, startZ) ?? height, startZ);
    this.speed = 0;
    this.servedStation = false;
    this.dwellRemaining = 0;
    this.materials = new Map();
    this.group.traverse(mesh => {
      if (!mesh.isMesh) return;
      const material = mesh.material;
      this.materials.set(material, material.opacity);
    });
    this._alignToGround();
    this._updateVisibility();
  }

  _clearance(position) {
    // El frente es −Z. Incluye el radio de la persona y un margen ante el parachoques.
    if (Math.abs(position.x - this.position.x) > this.width / 2 + 0.55) return Infinity;
    if (position.z > this.position.z + this.length / 2 + 0.55) return Infinity;
    return Math.max(0, this.position.z - position.z - this.length / 2 - 0.8);
  }

  preloadModel() {
    return this._modelPromise ??= createImportedModel('transmilenio', { ownMaterials: true }).then(model => {
      if (this._disposed) { disposeImportedInstance(model); return; }
      const geometries = new Set();
      this.group.traverse(object => { if (object.geometry) geometries.add(object.geometry); });
      for (const child of [...this.group.children]) this.group.remove(child);
      for (const geometry of geometries) geometry.dispose();
      for (const material of this.materials.keys()) material.dispose();
      this.materials.clear();
      this.group.userData.wheels = [];
      this.model = model;
      this.group.add(model);
      model.traverse(object => {
        for (const material of [object.material].flat().filter(Boolean)) this.materials.set(material, material.opacity);
      });
      this._updateVisibility();
    });
  }

  dispose() {
    this._disposed = true;
    if (this.model) disposeImportedInstance(this.model);
  }

  _alignToGround() {
    if (this.groundHeight) {
      this.position.y = this.groundHeight(this.position.x, this.position.z);
      const front = this.groundHeight(this.position.x, this.position.z - this.length / 2);
      const rear = this.groundHeight(this.position.x, this.position.z + this.length / 2);
      this.group.rotation.x = Math.atan2(front - rear, this.length);
      // El chasis tiene longitud: sus ruedas delanteras alcanzan la rampa antes que el centro.
      // Cinco apoyos evitan que la carrocería corte el tablero en las entradas y la cresta.
      const slope = Math.tan(this.group.rotation.x);
      for (const fraction of [-.5, -.25, 0, .25, .5]) {
        const offset = fraction * this.length;
        this.position.y = Math.max(this.position.y,
          this.groundHeight(this.position.x, this.position.z + offset) + offset * slope);
      }
    }
  }

  _updateVisibility() {
    // El relevo se desvanece en los extremos; nunca cruza los muros del perímetro.
    const opacity = THREE.MathUtils.clamp(Math.min(
      (this.startZ - this.position.z) / END_FADE_METERS,
      (this.position.z - this.endZ) / END_FADE_METERS), 0, 1);
    this.group.visible = opacity > 0;
    for (const [material, baseOpacity] of this.materials) {
      const transparent = opacity < 1;
      if (material.transparent !== transparent) { material.transparent = transparent; material.needsUpdate = true; }
      material.opacity = baseOpacity * opacity;
      material.depthWrite = !transparent;
    }
  }

  update(dt, { player = null, pedestrians = [], vehicles = [] } = {}) {
    this.personBlocked = false;
    let remaining = Math.min(Math.max(dt, 0), 0.5);
    while (remaining > 1e-8) {
      const step = Math.min(remaining, 0.05);
      remaining -= step;
      if (this.dwellRemaining > 0) {
        this.dwellRemaining = Math.max(0, this.dwellRemaining - step);
        continue;
      }
      let clearance = this.position.z - this.endZ;
      clearance = Math.min(clearance, this.signals?.busClearance(this.position, this.length) ?? Infinity);
      if (!this.servedStation) clearance = Math.min(clearance, this.position.z - this.stationZ);
      let personClearance = player ? this._clearance(player) : Infinity;
      for (const npc of pedestrians) personClearance = Math.min(personClearance, this._clearance(npc.position));
      for (const { car } of vehicles) {
        const cos = Math.abs(Math.cos(car.group.rotation.y)), sin = Math.abs(Math.sin(car.group.rotation.y));
        const halfX = cos * car.length / 2 + sin * car.width / 2;
        const halfZ = sin * car.length / 2 + cos * car.width / 2;
        if (Math.abs(car.position.x - this.position.x) > this.width / 2 + halfX + .2) continue;
        if (car.position.z > this.position.z + this.length / 2 + halfZ) continue;
        clearance = Math.min(clearance, Math.max(0, this.position.z - car.position.z - this.length / 2 - halfZ - .8));
      }
      this.personBlocked = personClearance < 2.5 || personClearance < Math.min(clearance, 10);
      clearance = Math.min(clearance, personClearance);
      const desiredSpeed = Math.min(CRUISE_SPEED, Math.sqrt(2 * BRAKING * Math.max(0, clearance)));
      const rate = desiredSpeed < this.speed ? BRAKING : ACCELERATION;
      this.speed = THREE.MathUtils.clamp(desiredSpeed, this.speed - rate * step, this.speed + rate * step);
      const travel = Math.min(this.speed * step, Math.max(0, clearance));
      this.position.z -= travel;
      this.speed = travel / step;
      for (const wheel of this.group.userData.wheels) wheel.rotateY(travel / 0.5);
      if (!this.servedStation && this.position.z <= this.stationZ + 1e-8) {
        this.position.z = this.stationZ;
        this.servedStation = true;
        this.speed = 0;
        this.dwellRemaining = STOP_SECONDS;
      }
      if (this.position.z <= this.endZ + 1e-8) {
        this.position.z = this.startZ;
        this.servedStation = false;
        this.speed = 0;
      }
    }
    this._alignToGround();
    this._updateVisibility();
  }
}
