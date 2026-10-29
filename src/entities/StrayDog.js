// src/entities/StrayDog.js
// Perro callejero bravo: merodea cerca de su casa, persigue si el jugador se acerca y muerde.
import * as THREE from 'three';

export const STRAY = { sight: 9, giveUp: 18, bite: 1.2, biteEvery: 1.5, damage: 8, speed: 4.2, wander: 1.2 };

export class StrayDog {
  constructor(scene, position, opts = {}) {
    this.scene = scene;
    this.kind = 'stray';
    this.home = position.clone();
    this.position = position.clone();
    this.groundHeight = opts.groundHeight ?? (() => this.home.y);
    this.isWalkable = opts.isWalkable ?? (() => true);
    this.state = 'wander';
    this.biteTimer = 0;
    this.wait = 0;
    this.target = null;
    this.t = Math.random() * 10;
    this.group = new THREE.Group();
    this.group.position.copy(position);
    const mat = (c) => new THREE.MeshLambertMaterial({ color: c, flatShading: true });
    const coat = [0x3a3028, 0x6b5a45, 0x8a7a62, 0x24201c][Math.floor(Math.random() * 4)];
    const add = (w, h, d, x, y, z, c = coat) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c));
      m.position.set(x, y, z); this.group.add(m); return m;
    };
    add(.3, .28, .6, 0, .36, 0);
    this.head = add(.24, .22, .26, 0, .5, .38);
    add(.14, .1, .16, 0, .45, .53, 0x2a1d14);
    add(.05, .14, .08, .1, .6, .35, 0x1a1410); add(.05, .14, .08, -.1, .6, .35, 0x1a1410);
    this.legs = [[.11, .2], [-.11, .2], [.11, -.2], [-.11, -.2]].map(([x, z]) => add(.08, .24, .08, x, .12, z));
    scene.add(this.group);
  }

  /** @returns {number} daño causado este cuadro (0 si no mordió) */
  update(dt, player) {
    this.t += dt;
    const dx = player.x - this.position.x, dz = player.z - this.position.z;
    const dist = Math.hypot(dx, dz);
    const homeDist = Math.hypot(this.position.x - this.home.x, this.position.z - this.home.z);
    this.biteTimer = Math.max(0, this.biteTimer - dt);
    let damage = 0;

    if (this.state === 'wander' && dist < STRAY.sight) this.state = 'chase';
    else if (this.state === 'chase' && (dist > STRAY.giveUp || homeDist > 30)) { this.state = 'return'; }
    else if (this.state === 'return' && homeDist < 2) this.state = 'wander';

    let goal = null, speed = STRAY.wander;
    if (this.state === 'chase') {
      goal = player; speed = STRAY.speed;
      if (dist < STRAY.bite && this.biteTimer === 0) { this.biteTimer = STRAY.biteEvery; damage = STRAY.damage; }
    } else if (this.state === 'return') {
      goal = this.home; speed = 2.5;
    } else {
      if ((this.wait -= dt) <= 0 || !this.target) {
        this.target = new THREE.Vector3(this.home.x + (Math.random() - .5) * 8, 0, this.home.z + (Math.random() - .5) * 8);
        this.wait = 3 + Math.random() * 5;
      }
      goal = this.target;
    }
    if (goal) this._moveTo(goal, speed, dt, this.state === 'chase' ? STRAY.bite * .8 : .3);
    this.group.position.copy(this.position);
    const sw = Math.sin(this.t * (this.state === 'chase' ? 18 : 8)) * (this._moving ? .5 : 0);
    this.legs.forEach((l, i) => { l.rotation.x = i % 2 ? -sw : sw; });
    return damage;
  }

  _moveTo(goal, speed, dt, stopAt) {
    const dx = goal.x - this.position.x, dz = goal.z - this.position.z;
    const d = Math.hypot(dx, dz);
    this._moving = d > stopAt;
    if (d > 0.001) this.group.rotation.y = Math.atan2(dx, dz);
    if (!this._moving) return;
    const step = Math.min(d, speed * dt);
    const nx = this.position.x + dx / d * step, nz = this.position.z + dz / d * step;
    if (!this.isWalkable(nx, nz)) { this.target = null; this.wait = 0.5; return; }
    this.position.set(nx, this.groundHeight(nx, nz), nz);
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse(o => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
  }
}
