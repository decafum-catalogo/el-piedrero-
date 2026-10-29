// src/entities/TalkNpc.js
// Persona fija con nombre y apariencia propia. Al pulsar E dice una de sus frases (sin repetir
// hasta haber dicho todas). Reutiliza el modelo realista y el LOD de Npc.
import * as THREE from 'three';
import { Npc } from './Npc.js';
import { normalizeLook } from '../character/look.js';
import * as C from '../character/customize.js';
import { hairCap, beardFromFace } from '../character/headParts.js';
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

  /** Aplica una sola vez la apariencia propia del personaje (colores, ropa pintada, accesorios). */
  _show(char) {
    if (char && !char._styled) {
      char._styled = true;
      try { this._style(char); } catch (e) { console.warn('[TalkNpc] estilo', this.id, e); }
    }
    super._show(char);
  }

  _style(char) {
    const d = this._def, s = d.style ?? {};
    const by = {};
    let head = null;
    char.group.traverse((o) => {
      if (o.isBone && /head$/i.test(o.name)) head = o;
      if (o.isSkinnedMesh) by[o.name.toLowerCase()] = o;
    });
    const find = (re) => Object.entries(by).find(([n]) => re.test(n))?.[1];
    const body = find(/body$/), eyes = find(/low-poly/), brows = find(/eyebrow/), lashes = find(/eyelash/);
    const hair = find(/afro|short|long0|ponytail|bob0/), beard = find(/beard|moustache/);
    const jacket = find(/casualsuit05/), tee = find(/casualsuit06/);

    if (lashes) lashes.visible = false;                       // sin pestañas: evita la cara afeminada
    if (body && s.skin) C.skinTone(body, s.skin.tone, s.skin);
    if (eyes && s.eyes) C.irisColor(eyes, s.eyes);
    if (head && d.hairCap) {
      if (hair) hair.visible = false;
      const cap = hairCap(d.hairCap); cap.name = 'Pelo'; head.add(cap);
    } else if (hair && s.hair) C.hairColor(hair, s.hair, { lift: s.hairLift ?? 0.5 });
    if (body && d.mustacheMesh && head) {
      const m = beardFromFace(body, MUSTACHE, d.mustacheMesh);
      m.name = 'Bigote'; head.add(m);
    }
    if (body && d.beardMesh) {
      if (beard) beard.visible = false;
      const b = beardFromFace(body, BEARD_REGIONS[d.beardMesh.region ?? 'full'], d.beardMesh);
      b.name = 'Barba'; head?.add(b);
    } else if (beard && s.beard) C.hairColor(beard, s.beard, { lift: s.beardLift ?? 0.5 });
    if (brows && s.browScale) {
      const g = brows.geometry.clone();
      g.computeBoundingBox();
      const c = g.boundingBox.getCenter(new THREE.Vector3());
      g.translate(-c.x, -c.y, -c.z); g.scale(1, s.browScale, 1.0); g.translate(c.x, c.y, c.z);
      brows.geometry = g;
    }
    if (brows && s.brows) C.hairColor(brows, s.brows, { lift: 0.4 });
    if (jacket && s.jacket) C.darkenCloth(jacket, s.jacket.factor, s.jacket.tint, { jeans: s.jacket.jeans });
    if (tee && s.tee?.factor) C.darkenCloth(tee, s.tee.factor, [1, 1, 1.03]);
    if (tee && s.tee === 'reggae') {
      C.cutTriangles(tee, (x, y) => y < 0.98);                // solo la camiseta, sin el jean repetido
      C.paintByGeometry(tee, (x, y, z) => {
        if (z < -0.02) return [14, 14, 16];
        if (y > 1.335 && y < 1.385) return [214, 38, 32];     // rojo
        if (y > 1.285 && y <= 1.335) return [248, 200, 28];   // amarillo
        if (y > 1.235 && y <= 1.285) return [40, 150, 60];    // verde
        return [14, 14, 16];
      });
    }
    if (d.build) char.group.scale.multiply(new THREE.Vector3(d.build.x ?? 1, d.build.y ?? 1, d.build.z ?? 1));
    if (head) for (const name of d.accessories ?? []) head.add(ACCESSORIES[name](d));
  }
}

// Peso suave (0..1) de cada punto de la cara; las medidas son del modelo (nariz y≈.045, boca y≈.024, mentón y≈0).
const ss = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
const mouthHole = (x, y) => (1 - ss(0.022, 0.03, Math.abs(x))) * ss(0.012, 0.019, y) * (1 - ss(0.029, 0.035, y));
const BEARD_REGIONS = {
  // barba corta: mandíbula, mejillas, mentón y bigote; deja libre la boca
  full: (x, y, z) => {
    const ax = Math.abs(x);
    const top = lerpW(ss(0.03, 0.045, ax), 0.047, 0.062);         // mejillas llegan más arriba que el bigote
    const wy = (1 - ss(top - 0.012, top, y)) * ss(-0.034, -0.014, y);
    const wz = ss(0.02, 0.042, z) * (ax > 0.07 ? ss(0.04, 0.05, z) : 1);
    return Math.max(0, wy * wz * (1 - mouthHole(x, y)));
  },
  // candado: mentón y bigote
  goatee: (x, y, z) => {
    const ax = Math.abs(x);
    return Math.max(0, (1 - ss(0.032, 0.046, ax)) * (1 - ss(0.035, 0.047, y)) * ss(-0.034, -0.014, y) * ss(0.05, 0.07, z) * (1 - mouthHole(x, y)));
  }
};
// bigote: franja sobre el labio superior (la barba del modelo no la trae)
const MUSTACHE = (x, y, z) => {
  const ax = Math.abs(x);
  return Math.max(0, (1 - ss(0.032, 0.046, ax)) * ss(0.027, 0.034, y) * (1 - ss(0.043, 0.05, y)) * ss(0.05, 0.07, z));
};
function lerpW(t, a, b) { return a + (b - a) * t; }

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...extra });
// Todo se mide en metros dentro del hueso de la cabeza (Y arriba, Z hacia adelante).
const ACCESSORIES = {
  // lentes rectangulares de marco negro con patillas
  lentes() {
    const g = new THREE.Group(), m = mat(0x0c0c0c, { roughness: 0.35 });
    const bar = (w, h, x, y, z = 0, d = 0.006) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); g.add(b); };
    for (const cx of [-0.036, 0.036]) {
      const w = 0.054, h = 0.036, t = 0.0045;
      bar(w, t, cx, h / 2); bar(w, t, cx, -h / 2); bar(t, h, cx - w / 2, 0); bar(t, h, cx + w / 2, 0);
      const lens = new THREE.Mesh(new THREE.PlaneGeometry(w - t, h - t), new THREE.MeshStandardMaterial({ color: 0xbfd6e6, transparent: true, opacity: 0.18, roughness: 0.1 }));
      lens.position.set(cx, 0, 0.001); g.add(lens);
    }
    bar(0.02, 0.005, 0, 0.008);
    for (const sx of [-1, 1]) { const arm = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.005, 0.11), m); arm.position.set(sx * 0.0735, 0.008, -0.052); g.add(arm); }
    g.position.set(0, 0.078, 0.127); g.name = 'Lentes';
    return g;
  },
  // rizos blancos apretados sobre la cabeza
  rizos(d) {
    const rnd = (() => { let a = 12345; return () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; }; })();
    const n = d.curls?.count ?? 320;
    const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 7, 6), mat(d.curls?.color ?? 0xf3f1ec, { roughness: 0.95 }), n);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    let i = 0;
    while (i < n) {
      const u = rnd(), w = rnd();
      const theta = Math.acos(1 - u * 1.28), phi = w * Math.PI * 2;      // casquete superior
      const dir = new THREE.Vector3(Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi));
      if (dir.z > 0.3 && dir.y < 0.32) continue;                        // deja libre la frente
      const r = (d.curls?.radius ?? 0.108) + rnd() * 0.01;
      v.set(dir.x * r * 1.02, 0.145 + dir.y * r * 1.05, -0.012 + dir.z * r * 1.05);
      const s = (d.curls?.size ?? 0.0125) + rnd() * 0.006;
      sc.set(s, s, s);
      m4.compose(v, q, sc);
      mesh.setMatrixAt(i++, m4);
    }
    mesh.name = 'Rizos';
    // casquete blanco bajo los rizos para que no se vea el cuero cabelludo entre ellos
    const capMat = mat(d.curls?.color ?? 0xf3f1ec, { roughness: 0.95 });
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.098, 18, 12, 0, Math.PI * 2, 0, 1.3), capMat);
    skull.position.set(0, 0.145, -0.014);
    const g = new THREE.Group();
    g.add(skull, mesh);
    g.name = 'Pelo de rizos';
    return g;
  },
  // aretes de brillante
  aretes() {
    const g = new THREE.Group(), m = mat(0xf4f7ff, { metalness: 0.9, roughness: 0.15, emissive: 0x555a66 });
    for (const x of [-0.079, 0.079]) {
      const stud = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 8), m);
      stud.position.set(x, 0.05, 0.022); g.add(stud);
    }
    g.name = 'Aretes';
    return g;
  },
  // gorra azul puesta al revés: casquete que abraza la cabeza y visera atrás
  'gorra-atras'() {
    const g = new THREE.Group();
    const dome = hairCap({ radii: [0.1, 0.126, 0.102], center: [0, 0.094, 0.008], front: 0.147, side: 0.125, back: 0.083, color: 0x1d3d8f, roughness: 0.75, rows: 50, cols: 90 });
    dome.material.vertexColors = false; dome.material.color.set(0x1d3d8f);
    g.add(dome);
    const visor = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.005, 24, 1, false, Math.PI * 0.62, Math.PI * 0.76), mat(0x16306f, { roughness: 0.75, side: THREE.DoubleSide }));
    visor.scale.z = 1; visor.rotation.set(0.12, Math.PI, 0); visor.position.set(0, 0.09, -0.083);
    g.add(visor);
    g.name = 'Gorra al revés';
    return g;
  },
  sombrero() {
    const g = new THREE.Group();
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.008, 20), mat(0xc9a35a));
    brim.position.y = 0.135; g.add(brim);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.128, 0.138, 0.12, 18), mat(0xb88f45));
    crown.position.set(0, 0.195, 0.0); g.add(crown);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.02, 18), mat(0x3b2a1a));
    band.position.y = 0.155; g.add(band);
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
