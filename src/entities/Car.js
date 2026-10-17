// src/entities/Car.js
import * as THREE from 'three';
import { COLORS, CAR_COOLDOWN } from '../utils/constants.js';

export class Car {
  constructor(scene, position, rotation = 0) {
    this.scene = scene;
    this.used = false;
    this.cooldown = 0;

    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.group.rotation.y = rotation;
    scene.add(this.group);

    // Cuerpo del auto
    const bodyMat = new THREE.MeshLambertMaterial({
      color: COLORS.CAR, flatShading: true
    });
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.8, 4), bodyMat
    );
    body.position.y = 0.6;
    body.castShadow = true;
    body.receiveShadow = true;
    this.group.add(body);

    // Cabina
    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 0.7, 2), bodyMat
    );
    cabin.position.y = 1.35;
    cabin.castShadow = true;
    this.group.add(cabin);

    // Ventanas
    const windowMat = new THREE.MeshLambertMaterial({
      color: 0x1a1a2a, flatShading: true
    });
    const windshield = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.6, 0.1), windowMat
    );
    windshield.position.set(0, 1.35, 1);
    this.group.add(windshield);

    // Ruedas
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true });
    const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 8);
    const wheelPositions = [
      [-1.05, 0.4, 1.2], [1.05, 0.4, 1.2],
      [-1.05, 0.4, -1.2], [1.05, 0.4, -1.2]
    ];
    for (const [x, y, z] of wheelPositions) {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.position.set(x, y, z);
      w.rotation.z = Math.PI / 2;
      w.castShadow = true;
      this.group.add(w);
    }

    // Retrovisores (robables)
    const mirrorMat = new THREE.MeshLambertMaterial({
      color: 0x888888, flatShading: true
    });
    this.mirrors = [];
    const mirrorGeo = new THREE.BoxGeometry(0.3, 0.2, 0.15);
    for (const x of [-1.15, 1.15]) {
      const m = new THREE.Mesh(mirrorGeo, mirrorMat);
      m.position.set(x, 1.5, 0.9);
      m.castShadow = true;
      this.group.add(m);
      this.mirrors.push(m);
    }

    // Marcador flotante
    const markerGeo = new THREE.RingGeometry(1.2, 1.5, 24);
    const markerMat = new THREE.MeshBasicMaterial({
      color: COLORS.ACCENT_RED,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    this.marker = new THREE.Mesh(markerGeo, markerMat);
    this.marker.rotation.x = -Math.PI / 2;
    this.marker.position.y = 0.05;
    this.group.add(this.marker);
  }

  get position() { return this.group.position; }

  /**
   * Robar retrovisores.
   * @param {number} caughtMult - mult de probabilidad de atrapar (talentos)
   * @returns { items, caught }
   */
  steal(caughtMult = 1) {
    if (this.used || this.cooldown > 0) return null;

    const items = [];
    const mirrorCount = Math.random() < 0.5 ? 2 : 1;
    for (let i = 0; i < mirrorCount; i++) items.push('retrovisor');
    if (Math.random() < 0.2) items.push('radio');

    const caughtChance = 0.25 * caughtMult;
    const caught = Math.random() < caughtChance;

    this.used = true;
    this.cooldown = CAR_COOLDOWN;
    this.mirrors.forEach((m) => (m.visible = false));
    this.marker.visible = false;

    return { items, caught };
  }

  update(dt) {
    if (this.cooldown > 0) {
      this.cooldown -= dt;
      if (this.cooldown <= 0) {
        this.used = false;
        this.mirrors.forEach((m) => (m.visible = true));
        this.marker.visible = true;
      }
    }
    if (this.marker.visible) {
      this.marker.rotation.z += dt * 0.5;
    }
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      o.geometry?.dispose?.();
      o.material?.dispose?.();
    });
  }
}
