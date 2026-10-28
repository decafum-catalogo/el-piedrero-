// src/entities/TalkNpc.js
// Persona fija con nombre y apariencia propia. Al pulsar E dice una de sus frases (sin repetir
// hasta haber dicho todas). Reutiliza el modelo realista y el LOD de Npc.
import * as THREE from 'three';
import { Npc } from './Npc.js';
import { normalizeLook } from '../character/look.js';
import { loadCatalog, normalizeReal } from '../character/RealisticCharacter.js';

export class TalkNpc extends Npc {
  constructor(scene, position, def, opts = {}) {
    super(scene, position, { ...opts, wander: 0, navigation: null, speed: 0, lookFactory: () => lookFromDef(def) });
    this.kind = 'talk';
    this.id = def.id;
    this.name = def.name;
    this.role = def.role;
    this.lines = def.lines;
    this._queue = [];
    this._def = def;
    this.root.rotation.y = def.facing ?? Math.PI;
  }

  /** Siguiente frase (barajadas, sin repetir hasta agotarlas). */
  say() {
    if (!this._queue.length) {
      this._queue = [...this.lines];
      for (let i = this._queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
      }
    }
    return this._queue.pop();
  }

  // Albino: la textura de piel y pelo es oscura, así que se aclara con emisivo (el color solo multiplica).
  _show(char) {
    if (this._def.albino && char && !char._tinted) {
      char._tinted = true;
      char.group.traverse((o) => {
        if (!o.isSkinnedMesh) return;
        const n = o.name.toLowerCase();
        const hairy = /afro|hair|beard|eyebrow|eyelash/.test(n);
        if (n.endsWith('body')) { o.material.emissive = new THREE.Color(0.62, 0.5, 0.46); o.material.emissiveIntensity = 1; }
        else if (hairy) { o.material.emissive = new THREE.Color(0.85, 0.83, 0.78); o.material.emissiveIntensity = 1; }
      });
    }
    if (this._def.accessory === 'lentes' && char && !char._glasses) {
      let head = null;
      char.group.traverse((o) => { if (o.isBone && /head$/i.test(o.name)) head = o; });
      if (head) { char._glasses = this._makeGlasses(); head.add(char._glasses); }
    }
    super._show(char);
  }

  _makeGlasses() {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 });
    for (const x of [-0.033, 0.033]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.021, 0.0035, 8, 18), mat);
      ring.position.set(x, 0, 0);
      g.add(ring);
    }
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.004, 0.004), mat);
    g.add(bridge);
    g.position.set(0, 0.078, 0.125);
    g.name = 'Lentes';
    return g;
  }
}

export async function lookFromDef(def) {
  const catalog = await loadCatalog();
  const look = normalizeLook({ v: 2, ...def.look, nombre: def.name });
  look.piel = def.look.piel ?? look.piel;
  look.real = normalizeReal(catalog, def.look.real);
  return look;
}
