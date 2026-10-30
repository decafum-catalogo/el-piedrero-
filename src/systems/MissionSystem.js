// src/systems/MissionSystem.js
// La vuelta de Celso (solo de noche): recibe la bolsita, la lleva al cliente del parque sin que la
// vea la Fuerza Pública, y regresa con los ₡10.000. Celso le da ₡2.000 y un purito.
import * as THREE from 'three';
import { ITEMS } from '../data/items.js';
import { PoliceNpc } from '../entities/PoliceNpc.js';

export const MISSION = { price: 10000, pay: 2000, fine: 2000 };
const W = (t) => t * 2;
const PATROLS = [
  [[94, 84], [114, 84], [114, 98], [94, 98]],
  [[96, 106], [116, 106], [116, 128], [96, 128]]
];

export class MissionSystem {
  /**
   * @param {{inventory, stats, district}} game
   * @param {{toast:(t:string,type?:string)=>void}} hooks
   */
  constructor(game, hooks = {}, { spawnPolice = true } = {}) {
    this.game = game;
    this.state = 'idle'; // idle | active | delivered | failed
    this.toast = hooks.toast ?? (() => {});
    this.police = [];
    this.timers = [];
    const d = game.district;
    if (spawnPolice && d) {
      for (const route of PATROLS) {
        const [x, z] = route[0];
        const pos = new THREE.Vector3(W(x), d.getGroundHeight(W(x), W(z)), W(z));
        const p = new PoliceNpc(d.scene, pos, route.map(([a, b]) => [W(a), W(b)]), {
          groundHeight: (px, pz) => d.getGroundHeight(px, pz), isWalkable: (px, pz) => d.isWalkableAt(px, pz)
        });
        this.police.push(p);
        d.npcs.push(p);
      }
    }
  }

  get carrying() { return this.game.inventory.count('bolsita') > 0; }

  _say(npc, text, delay = 0) {
    const show = () => this.toast(`🗣️ ${npc.name}: «${text}»`, 'info');
    if (delay) this.timers.push(setTimeout(show, delay)); else show();
  }

  /** @returns {boolean} true si la misión atendió la conversación */
  handleTalk(npc, isNight) {
    const inv = this.game.inventory, st = this.game.stats;
    if (npc.id === 'celso') {
      if (!isNight) { this.toast('🗣️ Celso: «Venga de noche, mae.»', 'info'); return true; }
      if (this.state === 'idle') {
        if (inv.count('bolsita') === 0) inv.add(ITEMS.bolsita, 1);
        this.state = 'active';
        this._say(npc, npc.lines[0]);
        this._say(npc, npc.lines[1], 2200);
        this.toast('📦 Recibió la bolsita. Llévela al cliente en el parque, sin que lo vea la Fuerza Pública.', 'rare');
        return true;
      }
      if (this.state === 'active') { this._say(npc, npc.lines[1]); return true; }
      if (this.state === 'delivered') {
        if (st.dinero < MISSION.price) { this._say(npc, npc.lines[3]); this.state = 'idle'; return true; }
        st.dinero -= MISSION.price;
        st.dinero += MISSION.pay;
        inv.add(ITEMS.purito, 1);
        this.state = 'idle';
        this._say(npc, npc.lines[2]);
        this.toast(`💰 Le entregó los ₡${MISSION.price.toLocaleString('es-CR')} y Celso le dio ₡${MISSION.pay.toLocaleString('es-CR')} y un purito.`, 'sell');
        return true;
      }
      if (this.state === 'failed') { this._say(npc, npc.lines[3]); this.state = 'idle'; return true; }
    }
    if (npc.id === 'cliente' && this.state === 'active' && this.carrying) {
      inv.remove('bolsita', 1);
      st.dinero += MISSION.price;
      this.state = 'delivered';
      this.toast(`🗣️ ${npc.name}: «Ya era hora. Tome la plata y llévesela a Celso.»`, 'info');
      this.toast(`💵 Recibió ₡${MISSION.price.toLocaleString('es-CR')}. Regrese donde Celso.`, 'sell');
      return true;
    }
    return false;
  }

  update(dt, player, isNight) {
    const carrying = this.carrying;
    if (this.state === 'active' && !carrying) {
      this.state = 'failed';
      this.toast('Perdió la bolsita. Hable con Celso.', 'warn');
    }
    for (const p of this.police) {
      p.setActive(isNight);
      if (p.think(dt, player, carrying) === 'caught') this._caught();
    }
  }

  _caught() {
    const st = this.game.stats;
    this.game.inventory.remove('bolsita', this.game.inventory.count('bolsita'));
    const fine = Math.min(st.dinero, MISSION.fine);
    st.dinero -= fine;
    this.state = 'failed';
    this.toast(`🚔 ¡La Fuerza Pública lo agarró! Le quitaron la bolsita${fine ? ` y una multa de ₡${fine.toLocaleString('es-CR')}` : ''}.`, 'danger');
  }

  dispose() {
    for (const t of this.timers) clearTimeout(t);
    for (const p of this.police) p.dispose();
  }
}
