// src/systems/SmokingSystem.js
// Fumar un purito: humo en la cara, ánimo arriba y la pantalla se distorsiona un rato (ondas, colores,
// desenfoque). El efecto sube rápido, se sostiene y se va curando solo hasta volver a la normalidad.
import * as THREE from 'three';

export const SMOKE = { rise: 3, hold: 10, cure: 14, animo: 20, vicio: 25, salud: 25 };
export const smokeTotal = () => SMOKE.rise + SMOKE.hold + SMOKE.cure;

/** Intensidad 0..1 del efecto según el tiempo transcurrido: sube, se sostiene y se cura. */
export function smokeIntensity(t) {
  if (t < 0) return 0;
  if (t < SMOKE.rise) return t / SMOKE.rise;
  if (t < SMOKE.rise + SMOKE.hold) return 1;
  const k = (t - SMOKE.rise - SMOKE.hold) / SMOKE.cure;
  return k >= 1 ? 0 : 1 - k * k * (3 - 2 * k);
}

export class SmokingSystem {
  constructor(game) {
    this.game = game;
    this.active = false;
    this.t = 0;
    this.puffs = [];
    this.puffTimer = 0;
    this.overlay = null;
  }

  start() {
    const g = this.game;
    this.active = true;
    this.t = 0;
    this.puffTimer = 0;
    this._ensureOverlay();
    for (const [k, v] of [['animo', SMOKE.animo], ['vicio', SMOKE.vicio], ['salud', SMOKE.salud]]) {
      if (g.stats && typeof g.stats[k] === 'number') g.stats[k] = Math.min(100, g.stats[k] + v);
    }
    window.dispatchEvent(new CustomEvent('toast', { detail: { text: '🚬 Se fumó el purito… le sube el ánimo y se siente mejor (+salud).', type: 'info' } }));
  }

  _ensureOverlay() {
    if (this.overlay || typeof document === 'undefined') return;
    const el = document.createElement('div');
    el.id = 'smoke-overlay';
    Object.assign(el.style, {
      position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '40', opacity: '0',
      background: 'radial-gradient(ellipse at center, rgba(120,255,160,0) 30%, rgba(60,20,110,.55) 100%)'
    });
    document.body.appendChild(el);
    this.overlay = el;
  }

  update(dt) {
    this._updatePuffs(dt);
    if (!this.active) return;
    this.t += dt;
    const k = smokeIntensity(this.t);
    const canvas = document.querySelector('canvas');
    if (this.overlay) {
      this.overlay.style.opacity = String(k);
      const hue = Math.sin(this.t * 0.9) * 60 * k;
      this.overlay.style.backdropFilter = `blur(${(1.5 * k).toFixed(2)}px) hue-rotate(${hue.toFixed(1)}deg) saturate(${(1 + 0.8 * k).toFixed(2)})`;
    }
    if (canvas) {
      const wob = k * 1.4;
      canvas.style.transform = `scale(${1 + 0.02 * k}) rotate(${(Math.sin(this.t * 1.3) * wob).toFixed(2)}deg) translate(${(Math.sin(this.t * 0.7) * 6 * k).toFixed(1)}px, ${(Math.cos(this.t * 0.9) * 4 * k).toFixed(1)}px)`;
    }
    if (this.t < SMOKE.rise + SMOKE.hold && (this.puffTimer -= dt) <= 0) {
      this.puffTimer = 0.45;
      this._puff();
    }
    if (this.t >= smokeTotal()) this.stop(true);
  }

  stop(cured = false) {
    this.active = false;
    this.t = 0;
    if (this.overlay) { this.overlay.style.opacity = '0'; this.overlay.style.backdropFilter = ''; }
    const canvas = typeof document !== 'undefined' ? document.querySelector('canvas') : null;
    if (canvas) canvas.style.transform = '';
    if (cured) window.dispatchEvent(new CustomEvent('toast', { detail: { text: 'Ya se le pasó la traba.', type: 'info' } }));
  }

  _puff() {
    const g = this.game, p = g.player?.position;
    if (!p || !g.sceneMgr?.scene) return;
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0xdddddd, transparent: true, opacity: 0.5, depthWrite: false })
    );
    m.position.set(p.x + (Math.random() - .5) * .2, p.y + 1.6, p.z + (Math.random() - .5) * .2);
    m.userData.life = 0;
    g.sceneMgr.scene.add(m);
    this.puffs.push(m);
  }

  _updatePuffs(dt) {
    for (let i = this.puffs.length - 1; i >= 0; i--) {
      const m = this.puffs[i];
      m.userData.life += dt;
      m.position.y += dt * 0.7;
      m.scale.setScalar(1 + m.userData.life * 2.2);
      m.material.opacity = Math.max(0, 0.5 - m.userData.life * 0.22);
      if (m.userData.life > 2.2) {
        m.parent?.remove(m);
        m.geometry.dispose(); m.material.dispose();
        this.puffs.splice(i, 1);
      }
    }
  }

  dispose() {
    this.stop();
    for (const m of this.puffs) { m.parent?.remove(m); m.geometry.dispose(); m.material.dispose(); }
    this.puffs = [];
    this.overlay?.remove();
    this.overlay = null;
  }
}
