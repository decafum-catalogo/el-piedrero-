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
    if (char && !char._styled) {
      char._styled = true;
      const d = this._def;
      if (d.albino) {
        char.group.traverse((o) => {
          if (!o.isSkinnedMesh) return;
          const n = o.name.toLowerCase();
          if (n.endsWith('body')) {
            // piel muy clara y rosada, conserva el relieve de la cara
            o.material.color.setRGB(1.6, 1.35, 1.3);
            o.material.emissive = new THREE.Color(0.30, 0.20, 0.18);
          } else if (/afro|hair|beard|eyebrow|eyelash/.test(n)) {
            o.material.emissive = new THREE.Color(0.78, 0.76, 0.72);
          }
        });
      }
      if (d.skinMul || d.hairEmissive) {
        char.group.traverse((o) => {
          if (!o.isSkinnedMesh) return;
          const n = o.name.toLowerCase();
          if (d.skinMul && n.endsWith('body')) o.material.color.setRGB(...d.skinMul);
          if (d.hairEmissive && /beard/.test(n)) o.material.emissive = new THREE.Color(...d.hairEmissive);
        });
      }
      if (d.build) char.group.scale.multiply(new THREE.Vector3(d.build.x ?? 1, d.build.y ?? 1, d.build.z ?? 1));
      if (d.accessories?.length) {
        let head = null;
        char.group.traverse((o) => { if (o.isBone && /head$/i.test(o.name)) head = o; });
        if (head) for (const name of d.accessories) head.add(ACCESSORIES[name]());
      }
    }
    super._show(char);
  }
}

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...extra });
// Todo se mide en metros dentro del hueso de la cabeza (Y arriba, Z hacia adelante).
const ACCESSORIES = {
  lentes() {
    const g = new THREE.Group(), m = mat(0x111111, { roughness: 0.4 });
    for (const x of [-0.033, 0.033]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.019, 0.0032, 8, 18), m);
      ring.position.x = x; g.add(ring);
    }
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.004, 0.004), m));
    g.position.set(0, 0.078, 0.125); g.name = 'Lentes';
    return g;
  },
  aretes() {
    const g = new THREE.Group(), m = mat(0xf4f7ff, { metalness: 0.9, roughness: 0.15, emissive: 0x555a66 });
    for (const x of [-0.072, 0.072]) {
      const stud = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 8), m);
      stud.position.set(x, 0.028, -0.005); g.add(stud);
    }
    g.name = 'Aretes';
    return g;
  },
  'gorra-atras'() {
    const g = new THREE.Group(), m = mat(0x1d3d8f);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.112, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), m);
    dome.position.set(0, 0.108, -0.005); g.add(dome);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.008, 0.09), m);
    visor.position.set(0, 0.115, -0.15); g.add(visor);
    g.name = 'Gorra al revés';
    return g;
  },
  sombrero() {
    const g = new THREE.Group();
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.008, 20), mat(0xc9a35a));
    brim.position.y = 0.125; g.add(brim);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.115, 0.1, 16), mat(0xb88f45));
    crown.position.y = 0.175; g.add(crown);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.117, 0.117, 0.02, 16), mat(0x3b2a1a));
    band.position.y = 0.145; g.add(band);
    g.name = 'Sombrero';
    return g;
  },
  cigarro() {
    const g = new THREE.Group();
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.075, 6), mat(0xf2efe6));
    stick.rotation.x = Math.PI / 2; stick.position.set(0.012, 0.03, 0.14); g.add(stick);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.0045, 6, 6), mat(0xff6a1a, { emissive: 0xff4400 }));
    tip.position.set(0.012, 0.03, 0.18); g.add(tip);
    g.name = 'Cigarro';
    return g;
  }
};

export async function lookFromDef(def) {
  const catalog = await loadCatalog();
  const look = normalizeLook({ v: 2, ...def.look, nombre: def.name });
  look.piel = def.look.piel ?? look.piel;
  look.real = normalizeReal(catalog, def.look.real);
  return look;
}
