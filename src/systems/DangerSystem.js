// src/systems/DangerSystem.js
// Perros callejeros, chapulines nocturnos y avisos al entrar en zonas peligrosas.
import * as THREE from 'three';
import { StrayDog } from '../entities/StrayDog.js';
import { Mugger } from '../entities/Mugger.js';
import { DANGER_ZONES, zoneAt } from '../data/zones.js';

const W = (t) => t * 2;
const DOGS = [[96, 118], [112, 122], [56, 96], [174, 70], [172, 120]];
const MUGGERS = [[100, 125], [112, 112], [54, 100], [54, 126]];

export class DangerSystem {
  /**
   * @param {{scene, getGroundHeight, isWalkableAt}} district
   * @param {{ isNight:()=>boolean, hurt:(n:number)=>void, robFraction:(f:number)=>number, toast:(text:string,type?:string)=>void }} hooks
   */
  constructor(district, hooks, { dogs = DOGS, muggers = MUGGERS, spawnMuggers = true } = {}) {
    this.hooks = hooks;
    this.zone = null;
    this.dogs = [];
    this.muggers = [];
    const common = { groundHeight: (x, z) => district.getGroundHeight(x, z), isWalkable: (x, z) => district.isWalkableAt(x, z) };
    for (const [tx, tz] of dogs) {
      const p = new THREE.Vector3(W(tx), district.getGroundHeight(W(tx), W(tz)), W(tz));
      this.dogs.push(new StrayDog(district.scene, p, common));
    }
    if (spawnMuggers) for (const [tx, tz] of muggers) {
      const p = new THREE.Vector3(W(tx), district.getGroundHeight(W(tx), W(tz)), W(tz));
      const m = new Mugger(district.scene, p, common);
      this.muggers.push(m);
      district.npcs.push(m); // así se anima/oculta con el resto de la gente
    }
  }

  update(dt, player) {
    const night = this.hooks.isNight();
    for (const d of this.dogs) {
      const dmg = d.update(dt, player);
      if (dmg) { this.hooks.hurt(dmg); this.hooks.toast('¡Un perro le mordió!', 'danger'); }
    }
    for (const m of this.muggers) {
      m.setActive(night);
      if (m.think(dt, player)) {
        const lost = this.hooks.robFraction(0.3 + Math.random() * 0.3);
        this.hooks.toast(lost > 0 ? `¡Un chapulín le quitó ₡${lost}!` : '¡Un chapulín lo asaltó, pero no andaba nada!', 'danger');
      }
    }
    const z = zoneAt(player.x, player.z);
    const relevant = z && (!z.night || night) ? z : null;
    if (relevant && relevant !== this.zone) this.hooks.toast(relevant.warn, 'warn');
    this.zone = relevant;
  }

  dispose() {
    for (const d of this.dogs) d.dispose();
    for (const m of this.muggers) m.dispose();
  }
}
