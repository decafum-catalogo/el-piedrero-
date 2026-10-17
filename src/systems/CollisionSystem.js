import * as THREE from 'three';

export class CollisionSystem {
  constructor() {
    this.colliders = []; // { box: THREE.Box3, mesh }
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

  clear() { this.colliders = []; }

  /**
   * Resuelve el movimiento del player (radio `radius`).
   * Devuelve nueva posición válida.
   */
  resolveMove(currentPos, delta, radius = 0.4) {
    const pos = currentPos.clone();

    // Eje X
    pos.x += delta.x;
    this._pushOut(pos, radius, 'x', delta.x);

    // Eje Z
    pos.z += delta.z;
    this._pushOut(pos, radius, 'z', delta.z);

    return pos;
  }

  _pushOut(pos, radius, axis, dir) {
    for (const c of this.colliders) {
      if (
        pos.x + radius > c.box.min.x && pos.x - radius < c.box.max.x &&
        pos.z + radius > c.box.min.z && pos.z - radius < c.box.max.z
      ) {
        // Está dentro → empujar por el eje que se movió
        if (axis === 'x') {
          pos.x = dir > 0 ? c.box.min.x - radius : c.box.max.x + radius;
        } else {
          pos.z = dir > 0 ? c.box.min.z - radius : c.box.max.z + radius;
        }
      }
    }
  }
}