// src/entities/Npc.js
// Persona de la calle (ambiente): personaje realista con apariencia al azar que se queda
// quieto o deambula despacio dentro de un radio, solo por donde se puede caminar.
import * as THREE from 'three';
import { createRealisticCharacter, loadCatalog, normalizeReal, optionsFor } from '../character/RealisticCharacter.js';
import { randomLook, DEFAULT_LOOK } from '../character/look.js';

const any = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** Apariencia al azar; `gastada` prefiere ropa vieja (El Cartucho). */
export async function randomStreetLook({ gastada = false } = {}) {
  const catalog = await loadCatalog();
  const sexo = Math.random() < 0.72 ? 'hombre' : 'mujer';
  const ropaOpts = optionsFor(catalog, 'ropa', sexo).map((o) => o.id);
  const viejas = ropaOpts.filter((id) => ['rota', 'saco', 'chaqueta', 'buzo', 'overol', 'sudadera'].includes(id));
  const look = randomLook(DEFAULT_LOOK);
  look.piel = 1 + Math.floor(Math.random() * 5);
  look.real = normalizeReal(catalog, {
    sexo,
    edad: any(['joven', 'adulto', 'adulto', 'mayor']),
    pelo: any(optionsFor(catalog, 'pelo', sexo)).id,
    barba: sexo === 'hombre' && Math.random() < 0.7 ? any(['descuidada', 'candado', 'larga', 'bigote']) : 'ninguna',
    ropa: gastada && viejas.length ? any(viejas) : any(ropaOpts),
    calzado: gastada ? any(['tenis-rotos', 'tenis-rotos', 'botas']) : any(optionsFor(catalog, 'calzado', sexo)).id
  });
  return look;
}

export class Npc {
  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Vector3} position
   * @param {{ wander?: number, facing?: number, isWalkable?: (x:number, z:number) => boolean, look?: object, gastada?: boolean }} opts
   */
  constructor(scene, position, opts = {}) {
    this.scene = scene;
    this.home = position.clone();
    this.position = position.clone();
    this.wander = opts.wander ?? 0;
    this.isWalkable = opts.isWalkable ?? (() => true);
    this.root = new THREE.Group();
    this.root.position.copy(position);
    this.root.rotation.y = opts.facing ?? Math.random() * Math.PI * 2;
    scene.add(this.root);
    this.target = null;
    this.wait = Math.random() * 6;
    this.speed = 0;
    this.character = null;
    this.ready = (async () => {
      const look = opts.look ?? await randomStreetLook({ gastada: opts.gastada });
      this.character = await createRealisticCharacter(look);
      this.root.add(this.character.group);
      // arranca cada uno en otro punto de la animación para que no se muevan al unísono
      this.character.update(Math.random() * 3, { speed: 0 });
    })().catch((e) => console.warn('[Npc] no se pudo crear', e));
  }

  _pickTarget() {
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * this.wander;
      const x = this.home.x + Math.cos(a) * r;
      const z = this.home.z + Math.sin(a) * r;
      if (this.isWalkable(x, z)) return new THREE.Vector3(x, 0, z);
    }
    return null;
  }

  update(dt) {
    if (!this.character) return;
    let moving = false;
    if (this.wander > 0) {
      if (this.target) {
        const d = this.target.clone().sub(this.position);
        d.y = 0;
        const dist = d.length();
        if (dist < 0.15) {
          this.target = null;
          this.wait = 3 + Math.random() * 8;
        } else {
          const step = Math.min(dist, 0.9 * dt);
          const next = this.position.clone().addScaledVector(d.normalize(), step);
          if (this.isWalkable(next.x, next.z)) {
            this.position.copy(next);
            moving = true;
            const ang = Math.atan2(d.x, d.z);
            let diff = ang - this.root.rotation.y;
            while (diff > Math.PI) diff -= Math.PI * 2;
            while (diff < -Math.PI) diff += Math.PI * 2;
            this.root.rotation.y += diff * Math.min(1, dt * 5);
          } else {
            this.target = null;
          }
        }
      } else if ((this.wait -= dt) <= 0) {
        this.target = this._pickTarget();
        if (!this.target) this.wait = 4;
      }
    }
    this.root.position.copy(this.position);
    this.character.update(dt, { speed: moving ? 0.9 / 1.08 : 0 });
  }

  dispose() {
    this.scene.remove(this.root);
  }
}
