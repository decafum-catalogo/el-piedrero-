// src/entities/PoliceNpc.js
// Fuerza Pública: patrulla entre puntos y, si ve al jugador con la bolsita, lo persigue.
import { Npc } from './Npc.js';
import { lookFromDef } from './TalkNpc.js';

export const POLICE = { sight: 13, catchDist: 1.2, speed: 3.3, patrolSpeed: 1.3, giveUpDist: 28, giveUpTime: 6 };

const LOOK = {
  name: 'Fuerza Pública',
  look: {
    piel: 3, pelo: 'rapado', barba: 'ninguna', contextura: 'normal',
    real: { sexo: 'hombre', edad: 'adulto', pelo: 'rapado', barba: 'ninguna', ropa: 'chaqueta', calzado: 'botas' }
  }
};

export class PoliceNpc extends Npc {
  constructor(scene, position, route, opts = {}) {
    super(scene, position, { ...opts, wander: 0, navigation: null, speed: POLICE.patrolSpeed, lookFactory: () => lookFromDef(LOOK) });
    this.kind = 'police';
    this.route = route.map(([x, z]) => ({ x, z }));
    this.idx = 0;
    this.state = 'patrol';
    this.lost = 0;
    this.active = false;
    this.player = null;
    this.root.visible = false;
  }

  setActive(on) {
    if (on === this.active) return;
    this.active = on;
    if (!on) { this.state = 'patrol'; this.lost = 0; }
  }

  /** @param {boolean} carrying el jugador lleva la bolsita @returns {'caught'|null} */
  think(dt, player, carrying) {
    this.player = player;
    if (!this.active) return null;
    const dist = Math.hypot(player.x - this.position.x, player.z - this.position.z);
    if (this.state === 'patrol' && carrying && dist < POLICE.sight) this.state = 'chase';
    if (this.state === 'chase') {
      if (!carrying) { this.state = 'patrol'; return null; }
      if (dist < POLICE.catchDist) { this.state = 'patrol'; return 'caught'; }
      this.lost = dist > POLICE.giveUpDist ? this.lost + dt : 0;
      if (this.lost > POLICE.giveUpTime) { this.state = 'patrol'; this.lost = 0; }
    }
    return null;
  }

  _walk(dt) {
    this.moving = false;
    if (!this.active) return;
    let goal;
    let speed;
    if (this.state === 'chase' && this.player) { goal = this.player; speed = POLICE.speed; }
    else {
      goal = this.route[this.idx];
      speed = POLICE.patrolSpeed;
      if (Math.hypot(goal.x - this.position.x, goal.z - this.position.z) < 1) { this.idx = (this.idx + 1) % this.route.length; return; }
    }
    const dx = goal.x - this.position.x, dz = goal.z - this.position.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.001) return;
    const step = speed * dt;
    const nx = this.position.x + dx / d * step, nz = this.position.z + dz / d * step;
    if (!this.isWalkable(nx, nz)) { if (this.state === 'patrol') this.idx = (this.idx + 1) % this.route.length; return; }
    this.position.set(nx, this.groundHeight(nx, nz), nz);
    this.walkSpeed = speed;
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
