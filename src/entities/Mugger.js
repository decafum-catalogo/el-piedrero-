// src/entities/Mugger.js
// Chapulín: de noche merodea en su zona, se le acerca al jugador y le roba parte de la plata.
import * as THREE from 'three';
import { Npc, randomStreetLook } from './Npc.js';

export const MUGGER = { sight: 14, reach: 1.1, speed: 3.4, fleeTime: 8, cooldown: 90, min: .3, max: .6 };

export class Mugger extends Npc {
  constructor(scene, position, opts = {}) {
    super(scene, position, { ...opts, wander: 0, navigation: null, speed: MUGGER.speed, lookFactory: opts.lookFactory ?? (() => randomStreetLook({ gastada: true })) });
    this.kind = 'mugger';
    this.state = 'idle';
    this.timer = 0;
    this.active = false;
    this.root.visible = false;
    this.player = null;
  }

  /** Activa/desactiva según la hora. Cuando está inactivo no se ve ni actúa. */
  setActive(on) {
    if (on === this.active) return;
    this.active = on;
    if (!on) { this.state = 'idle'; this.position.copy(this.home); }
  }

  /** @returns {boolean} true si acaba de asaltar al jugador */
  think(dt, player) {
    if (!this.active) return false;
    this.player = player;
    this.timer = Math.max(0, this.timer - dt);
    const dist = Math.hypot(player.x - this.position.x, player.z - this.position.z);
    let robbed = false;
    if (this.state === 'idle' && this.timer === 0 && dist < MUGGER.sight) this.state = 'approach';
    else if (this.state === 'approach') {
      if (dist < MUGGER.reach) { robbed = true; this.state = 'flee'; this.timer = MUGGER.fleeTime; }
      else if (dist > MUGGER.sight * 2) this.state = 'idle';
    } else if (this.state === 'flee' && this.timer === 0) { this.state = 'idle'; this.timer = MUGGER.cooldown; }
    return robbed;
  }

  _walk(dt) {
    this.moving = false;
    if (!this.active || !this.player) return;
    const p = this.player;
    let dx = 0, dz = 0;
    if (this.state === 'approach') { dx = p.x - this.position.x; dz = p.z - this.position.z; }
    else if (this.state === 'flee') { dx = this.position.x - p.x; dz = this.position.z - p.z; }
    else if (this.state === 'idle' && this.timer === 0) return;
    else if (this.state === 'idle') { dx = this.home.x - this.position.x; dz = this.home.z - this.position.z; if (Math.hypot(dx, dz) < 1) return; }
    const d = Math.hypot(dx, dz);
    if (d < 0.001) return;
    const step = this.walkSpeed * dt;
    const nx = this.position.x + dx / d * step, nz = this.position.z + dz / d * step;
    if (!this.isWalkable(nx, nz)) return;
    this.position.set(nx, this.groundHeight(nx, nz), nz);
    this.moving = true;
    let diff = Math.atan2(dx, dz) - this.root.rotation.y;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.root.rotation.y += diff * Math.min(1, dt * 8);
  }

  update(dt, ctx = {}) {
    super.update(dt, ctx);
    if (!this.active) this.root.visible = false;
  }
}
