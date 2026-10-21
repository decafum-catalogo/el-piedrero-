import * as THREE from 'three';

export class CollisionSystem {
  constructor() {
    this.colliders = []; // { box: THREE.Box3, mesh }
    this.dynamicColliders = [];
    this._vehicles = new Map();
  }

  /** Registra un mesh como sólido. size opcional para hitbox custom. */
  add(mesh, size) {
    const box = size
      ? new THREE.Box3().setFromCenterAndSize(
          mesh.position.clone().setY(mesh.position.y + size.y / 2),
          size
        )
      : new THREE.Box3().setFromObject(mesh);
    this.colliders.push({ box, mesh });
  }

  clear() { this.colliders = []; this.dynamicColliders = []; this._vehicles.clear(); }

  /** Una caja AABB por vehículo; no recorre geometrías ni crea mallas de render. */
  setVehicles(cars = [], bus = null) {
    const present = new Set(cars);
    if (bus) present.add(bus);
    for (const vehicle of this._vehicles.keys()) if (!present.has(vehicle)) this._vehicles.delete(vehicle);
    this.dynamicColliders.length = 0;
    for (const vehicle of present) {
      let entry = this._vehicles.get(vehicle);
      if (!entry) { entry = { vehicle, box: new THREE.Box3() }; this._vehicles.set(vehicle, entry); }
      const isBus = vehicle === bus;
      const c = isBus ? 0 : Math.abs(Math.cos(vehicle.group.rotation.y));
      const s = isBus ? 1 : Math.abs(Math.sin(vehicle.group.rotation.y));
      const halfX = (c * vehicle.length + s * vehicle.width) / 2;
      const halfZ = (s * vehicle.length + c * vehicle.width) / 2;
      const p = vehicle.position;
      entry.box.min.set(p.x - halfX, p.y, p.z - halfZ);
      entry.box.max.set(p.x + halfX, p.y + (isBus ? 3 : 1.65), p.z + halfZ);
      this.dynamicColliders.push(entry);
    }
  }

  /**
   * Resuelve el movimiento del player (radio `radius`).
   * Devuelve nueva posición válida.
   */
  resolveMove(currentPos, delta, radius = 0.4, result = new THREE.Vector3()) {
    const pos = result.copy(currentPos);
    // Un vehículo que avanza lentamente empuja hacia la cara más próxima.
    for (const { box } of this.dynamicColliders) {
      if (pos.y > box.max.y || pos.y + 1.6 < box.min.y) continue;
      const x0 = box.min.x - radius, x1 = box.max.x + radius;
      const z0 = box.min.z - radius, z1 = box.max.z + radius;
      if (pos.x <= x0 || pos.x >= x1 || pos.z <= z0 || pos.z >= z1) continue;
      const distances = [pos.x - x0, x1 - pos.x, pos.z - z0, z1 - pos.z];
      const face = distances.indexOf(Math.min(...distances));
      if (face === 0) pos.x = x0; else if (face === 1) pos.x = x1;
      else if (face === 2) pos.z = z0; else pos.z = z1;
    }

    this._moveAxis(pos, radius, 'x', 'z', delta.x);
    this._moveAxis(pos, radius, 'z', 'x', delta.z);

    return pos;
  }

  _moveAxis(pos, radius, axis, other, delta) {
    if (delta === 0) return;
    const epsilon = 1e-7;
    const start = pos[axis];
    let end = start + delta;
    for (const { box, vehicle } of this._allColliders()) {
      if (vehicle && (pos.y > box.max.y || pos.y + 1.6 < box.min.y)) continue;
      // El contacto tangencial no es penetración (incluye error de coma flotante).
      if (pos[other] <= box.min[other] - radius + epsilon ||
          pos[other] >= box.max[other] + radius - epsilon) continue;
      const min = box.min[axis] - radius;
      const max = box.max[axis] + radius;
      if (delta > 0 && start <= min + epsilon && end > min) {
        end = Math.max(start, min);
      } else if (delta < 0 && start >= max - epsilon && end < max) {
        end = Math.min(start, max);
      } else if (start > min + epsilon && start < max - epsilon) {
        // Una posición ya solapada puede salir por el lado más cercano,
        // pero nunca se corrige saltando al otro extremo de una manzana.
        if ((delta > 0 && start < (min + max) / 2) ||
            (delta < 0 && start > (min + max) / 2)) end = start;
      }
    }
    pos[axis] = end;
  }

  *_allColliders() { yield* this.colliders; yield* this.dynamicColliders; }
}
