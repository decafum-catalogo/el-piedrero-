// Mobiliario y detalles propios de La Carpio. Cada función devuelve un THREE.Group
// con origen en el suelo. Todo es geometría simple y barata para poder agruparla.
import * as THREE from 'three';
import { registerNightGlowExtra } from '../bogota/SunField.js';

const mats = new Map();
const std = (color, extra = {}) => {
  const key = color + JSON.stringify(extra);
  if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...extra }));
  return mats.get(key);
};
const box = (g, w, h, d, x, y, z, material) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; g.add(m); return m;
};
const cyl = (g, r, h, x, y, z, material, seg = 8) => {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), material);
  m.position.set(x, y, z); m.castShadow = true; g.add(m); return m;
};

/** Poste de concreto con luminaria y panel solar inclinado (escena 1). */
export function solarPole() {
  const g = new THREE.Group();
  cyl(g, 0.11, 6.2, 0, 3.1, 0, std('#9a968b'), 8);
  box(g, 1.3, 0.07, 0.07, 0.6, 6.05, 0, std('#4a4a4a'));
  box(g, 0.5, 0.12, 0.22, 1.2, 6.0, 0, std('#d8d8cc', { emissive: '#ffe9a8', emissiveIntensity: 0.15 }));
  const panel = box(g, 0.95, 0.05, 0.7, -0.25, 6.55, 0, std('#1d2f55', { metalness: 0.4, roughness: 0.35 }));
  panel.rotation.z = -0.5;
  box(g, 0.3, 0.4, 0.2, 0.15, 5.2, 0.15, std('#2b2b2b'));
  return g;
}

/** Cerca de malla ciclón a lo largo de +x (longitud en metros). */
export function chainLink(length, height = 2.2) {
  const g = new THREE.Group();
  const post = std('#8c9094', { metalness: 0.4 });
  const n = Math.max(2, Math.round(length / 2.5) + 1);
  for (let i = 0; i < n; i++) cyl(g, 0.04, height, -length / 2 + (length / (n - 1)) * i, height / 2, 0, post, 6);
  const wire = new THREE.Mesh(new THREE.PlaneGeometry(length, height - 0.2),
    new THREE.MeshStandardMaterial({ color: '#a9aeb2', transparent: true, opacity: 0.28, side: THREE.DoubleSide, roughness: 0.6 }));
  wire.position.y = height / 2; g.add(wire);
  box(g, length, 0.05, 0.05, 0, height - 0.05, 0, post);
  return g;
}

/** Cerca de láminas de zinc oxidadas (escena 4). */
export function zincFence(length, height = 2.3, rust = '#8a4a2f') {
  const g = new THREE.Group();
  const n = Math.max(1, Math.round(length / 0.8));
  for (let i = 0; i < n; i++) {
    const color = ['#8a4a2f', '#9a9fa2', '#7a3f2a', '#a0603c', '#868b8e'][(i * 7 + Math.floor(length)) % 5];
    box(g, length / n + 0.02, height - (i % 3) * 0.12, 0.05, -length / 2 + (i + 0.5) * (length / n), (height - (i % 3) * 0.12) / 2, 0, std(i % 4 === 0 ? rust : color, { metalness: 0.3, roughness: 0.6 }));
  }
  box(g, length, 0.08, 0.08, 0, height, 0, std('#5a4630'));
  return g;
}

/** Malla plástica naranja de obra alrededor de unas matas (escena 1). */
export function orangeFence(length) {
  const g = new THREE.Group();
  const n = Math.max(2, Math.round(length / 1.5) + 1);
  for (let i = 0; i < n; i++) cyl(g, 0.02, 1.1, -length / 2 + (length / (n - 1)) * i, 0.55, 0, std('#6a6a6a'), 5);
  const net = new THREE.Mesh(new THREE.PlaneGeometry(length, 0.95),
    new THREE.MeshStandardMaterial({ color: '#ff7a1a', transparent: true, opacity: 0.78, side: THREE.DoubleSide, roughness: 0.9 }));
  net.position.y = 0.58; g.add(net);
  return g;
}

/** Matas de zacate alto: planos cruzados. */
export function tallGrass(w, d, density = 0.9) {
  const g = new THREE.Group();
  const greens = ['#4f7f2e', '#5f8f34', '#3f6b24', '#6f9a3a', '#86a84a', '#a8a65a'];
  const count = Math.round(w * d * density);
  const hoja = new THREE.BufferGeometry(); // hoja afilada: base ancha y punta fina, no un cono
  hoja.setAttribute('position', new THREE.Float32BufferAttribute([-0.035, 0, 0, 0.035, 0, 0, 0, 1, 0], 3));
  hoja.computeVertexNormals();
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * w, z = (Math.random() - 0.5) * d;
    const h = 0.45 + Math.random() * 0.75, mat = std(greens[i % greens.length], { roughness: 1, side: THREE.DoubleSide });
    for (let k = 0; k < 5; k++) {
      const hh = h * (0.6 + Math.random() * 0.5), a = Math.random() * Math.PI * 2, abre = 0.1 + Math.random() * 0.5;
      const blade = new THREE.Mesh(hoja, mat);
      blade.scale.set(1, hh, 1);
      blade.position.set(x + Math.cos(a) * 0.07, 0, z + Math.sin(a) * 0.07);
      blade.rotation.set(Math.sin(a) * abre, Math.random() * Math.PI, -Math.cos(a) * abre, 'YXZ');
      g.add(blade);
    }
  }
  return g;
}

/** Juego infantil azul y naranja con resbaladero (escena 2). */
export function playground() {
  const g = new THREE.Group();
  const blue = std('#2a6fc9'), orange = std('#f08a24'), yellow = std('#f2c230');
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, 0.14, 2.4, 0.14, x, 1.2, z, blue);
  box(g, 2.3, 0.12, 2.3, 0, 1.3, 0, orange);
  box(g, 2.5, 0.12, 2.5, 0, 2.45, 0, orange);
  box(g, 2.3, 0.7, 0.08, 0, 1.7, 1.1, yellow);
  const slide = box(g, 0.9, 0.08, 2.9, 1.9, 0.75, 0, blue);
  slide.rotation.x = 0; slide.rotation.z = 0;
  slide.rotation.x = Math.atan2(1.3, 2.7) * 0; // se mantiene recto; la rampa va en z
  const ramp = box(g, 0.9, 0.08, 2.9, 1.9, 0.7, 0, blue); ramp.rotation.x = -0.45;
  g.remove(slide);
  return g;
}

/** Máquina de ejercicio al aire libre (azul). */
export function exerciseMachine() {
  const g = new THREE.Group();
  const blue = std('#2477c9', { metalness: 0.3 });
  box(g, 0.12, 1.7, 0.12, -0.5, 0.85, 0, blue);
  box(g, 0.12, 1.7, 0.12, 0.5, 0.85, 0, blue);
  box(g, 1.2, 0.1, 0.1, 0, 1.6, 0, blue);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 6, 14), blue);
  wheel.position.set(0, 1.05, 0.1); g.add(wheel);
  box(g, 0.6, 0.1, 0.35, 0, 0.45, 0.4, std('#1b1b1b'));
  return g;
}

/** Aro de baloncesto con tablero. */
export function hoop() {
  const g = new THREE.Group();
  cyl(g, 0.07, 3.6, 0, 1.8, 0, std('#556'), 6);
  box(g, 1.2, 0.8, 0.05, 0, 3.4, 0.3, std('#e8e8e8'));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.02, 6, 14), std('#e24a1a'));
  ring.rotation.x = Math.PI / 2; ring.position.set(0, 3.1, 0.55); g.add(ring);
  return g;
}

/** Montón de chatarra: latas, láminas, cobre pelado y tubos (escena 4). */
export function junkPile() {
  const g = new THREE.Group();
  const metals = ['#8f9396', '#6f7274', '#a8552e', '#b87333', '#4d5154'];
  for (let i = 0; i < 26; i++) {
    const m = new THREE.Mesh(
      i % 3 === 0 ? new THREE.CylinderGeometry(0.08, 0.08, 0.14, 8) : new THREE.BoxGeometry(0.3 + Math.random() * 0.8, 0.04 + Math.random() * 0.12, 0.3 + Math.random() * 0.6),
      std(metals[i % metals.length], { metalness: 0.5, roughness: 0.55 }));
    m.position.set((Math.random() - 0.5) * 2.2, 0.1 + Math.random() * 0.7, (Math.random() - 0.5) * 1.8);
    m.rotation.set(Math.random() * 1.2, Math.random() * 3, Math.random() * 1.2);
    m.castShadow = true; g.add(m);
  }
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.07, 6, 16), std('#c27a3a', { metalness: 0.7, roughness: 0.4 }));
  coil.position.set(0.5, 0.2, 0.6); coil.rotation.x = Math.PI / 2; g.add(coil);
  return g;
}

/** Portón corredizo de barrotes negros. */
export function blackGate(w = 3.2, h = 2.1) {
  const g = new THREE.Group();
  const iron = std('#161616', { metalness: 0.5, roughness: 0.5 });
  box(g, w, 0.08, 0.08, 0, 0.05, 0, iron); box(g, w, 0.08, 0.08, 0, h, 0, iron); box(g, w, 0.06, 0.06, 0, h / 2, 0, iron);
  for (let x = -w / 2 + 0.06; x <= w / 2; x += 0.14) box(g, 0.04, h, 0.04, x, h / 2, 0, iron);
  return g;
}

/** Moto de enduro blanca y roja (escena 3). */
export function dirtBike() {
  const g = new THREE.Group();
  const white = std('#f0f0ea'), red = std('#c8261b'), black = std('#161616');
  for (const z of [-0.62, 0.62]) {
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.07, 8, 16), black);
    w.rotation.y = Math.PI / 2; w.position.set(0, 0.33, z); g.add(w);
  }
  box(g, 0.16, 0.3, 0.9, 0, 0.62, 0, white);
  box(g, 0.2, 0.12, 0.5, 0, 0.88, -0.1, black);
  box(g, 0.22, 0.25, 0.3, 0, 0.78, 0.38, red);
  box(g, 0.5, 0.05, 0.05, 0, 1.0, 0.55, black);
  const fork = box(g, 0.05, 0.7, 0.05, 0, 0.62, 0.6, black); fork.rotation.x = 0.3;
  return g;
}

/** Tronco y copa densa de un árbol grande (escena 1: higuerón / mango). */
export function bigTree(scale = 1) {
  const g = new THREE.Group();
  const trunk = std('#5a4632'), leaf = ['#2f5a24', '#37692a', '#2a4f20', '#3f7430'];
  cyl(g, 0.55 * scale, 4.2 * scale, 0, 2.1 * scale, 0, trunk, 8);
  for (let i = 0; i < 9; i++) {
    const r = (2.1 + Math.random() * 1.6) * scale;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), std(leaf[i % leaf.length], { roughness: 1, flatShading: true }));
    m.position.set((Math.random() - 0.5) * 4.6 * scale, (4.6 + Math.random() * 2.4) * scale, (Math.random() - 0.5) * 4.6 * scale);
    m.castShadow = true; g.add(m);
  }
  return g;
}

/** Farol de calle: poste rojizo con brazo y luminaria, como los del barrio. */
export function parkLamp() {
  const g = new THREE.Group();
  const pole = std('#7a4a38', { metalness: 0.3 });
  cyl(g, 0.08, 6, 0, 3, 0, pole, 8);
  box(g, 1.1, 0.07, 0.07, 0.5, 5.9, 0, pole);
  box(g, 0.5, 0.12, 0.22, 1.0, 5.8, 0, std('#d9d9d4', { emissive: '#ffe9a8', emissiveIntensity: 0.6 }));
  return g;
}

/** Torre de reflectores de la cancha: poste alto de concreto con varios focos. */
export function floodlight() {
  const g = new THREE.Group();
  const pole = std('#c9c9c4'), head = std('#3c3f44');
  cyl(g, 0.16, 9, 0, 4.5, 0, pole, 8);
  box(g, 2.2, 0.12, 0.12, 0, 8.9, 0, head);
  for (const x of [-0.9, -0.3, 0.3, 0.9]) {
    box(g, 0.34, 0.34, 0.3, x, 9.15, 0.1, head);
    box(g, 0.26, 0.26, 0.04, x, 9.15, 0.28, std('#fff3c4', { emissive: '#ffe9a8', emissiveIntensity: 0.7 }));
  }
  return g;
}

/** Cabeza de piedra tallada sobre una losa (como las esculturas del parque). */
export function stoneHead(scale = 1) {
  const g = new THREE.Group();
  const rock = std('#9a9484', { roughness: 1, flatShading: true });
  const dark = std('#3d3a33', { roughness: 1 });
  box(g, 1.7 * scale, 0.2, 1.4 * scale, 0, 0.1, 0, std('#6f6a60'));
  const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.8 * scale, 1), rock);
  head.scale.set(0.95, 1.3, 0.95); head.position.y = 1.35 * scale; head.castShadow = true; g.add(head);
  const f = 0.74 * scale; // cara hacia +z
  box(g, 0.2 * scale, 0.55 * scale, 0.32 * scale, 0, 1.3 * scale, f + 0.12 * scale, rock);          // nariz
  for (const x of [-0.28, 0.28]) {
    box(g, 0.3 * scale, 0.16 * scale, 0.14 * scale, x * scale, 1.62 * scale, f, dark);               // ojos hundidos
    box(g, 0.4 * scale, 0.1 * scale, 0.2 * scale, x * scale, 1.78 * scale, f + 0.04 * scale, rock);  // ceja
  }
  box(g, 0.5 * scale, 0.1 * scale, 0.12 * scale, 0, 0.92 * scale, f, dark);                          // boca
  return g;
}

/** Rótulo informativo negro con letras amarillas sobre dos postes. */
export function infoSign() {
  const g = new THREE.Group();
  const post = std('#2a2a2a');
  box(g, 0.08, 1.7, 0.08, -0.5, 0.85, 0, post); box(g, 0.08, 1.7, 0.08, 0.5, 0.85, 0, post);
  box(g, 1.3, 0.8, 0.06, 0, 1.35, 0, std('#15130f'));
  for (let i = 0; i < 4; i++) box(g, 1.0 - i * 0.1, 0.05, 0.02, 0, 1.6 - i * 0.16, 0.04, std('#e8c94a'));
  return g;
}

/** Parqueo de bicicletas en espiral. */
export function bikeRack() {
  const g = new THREE.Group();
  const steel = std('#c7ccd1', { metalness: 0.6, roughness: 0.4 });
  for (let i = 0; i < 4; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.035, 6, 16), steel);
    r.position.set(i * 0.45 - 0.7, 0.4, 0); g.add(r);
  }
  return g;
}

/** Baranda de tubo amarillo (como la del parqueo del parque). */
export function yellowRail(len = 6) {
  const g = new THREE.Group();
  const y = std('#e3b21c');
  box(g, len, 0.07, 0.07, 0, 0.9, 0, y); box(g, len, 0.07, 0.07, 0, 0.5, 0, y);
  for (let x = -len / 2; x <= len / 2 + 0.01; x += 2) box(g, 0.07, 0.95, 0.07, x, 0.47, 0, y);
  return g;
}

/** Escalera triangular de juego (roja). */
export function climbingFrame() {
  const g = new THREE.Group();
  const red = std('#b5432f');
  for (const s of [-1, 1]) { const b = box(g, 0.1, 2.3, 0.1, 0, 1.0, s * 0.8, red); b.rotation.x = s * 0.5; }
  for (let i = 0; i < 4; i++) box(g, 1.6, 0.06, 0.06, 0, 0.5 + i * 0.35, 0, red);
  return g;
}

/** Mural: pared de ladrillo rojo con grafiti de colores (textura dibujada con canvas). */
export function muralWall(len = 18, h = 2.6) {
  const g = new THREE.Group();
  box(g, len, h, 0.35, 0, h / 2, 0, std('#9b4a3a'));
  if (typeof document === 'undefined') return g; // sin navegador (pruebas) no hay textura
  const c = document.createElement('canvas'); c.width = 1024; c.height = 160;
  const x = c.getContext('2d');
  x.fillStyle = '#9b4a3a'; x.fillRect(0, 0, 1024, 160);
  const cols = ['#f2c230', '#2a6fc9', '#e24a1a', '#f6f2e2', '#3aa86a', '#d6479b', '#1d1d1d'];
  for (let i = 0; i < 38; i++) {
    x.fillStyle = cols[i % cols.length]; x.globalAlpha = 0.85;
    const w = 40 + Math.random() * 120, hh = 24 + Math.random() * 70, px = Math.random() * 1000, py = Math.random() * 110;
    x.beginPath(); x.ellipse(px, py + 30, w / 2, hh / 2, Math.random() - .5, 0, 7); x.fill();
  }
  x.globalAlpha = 1; x.fillStyle = '#f6f2e2'; x.font = 'bold 84px sans-serif'; x.fillText('LA CARPIO', 300, 110);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  for (const side of [1, -1]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(len, h * 0.85), new THREE.MeshBasicMaterial({ map: tex }));
    m.position.set(0, h * 0.5, side * 0.18); if (side < 0) m.rotation.y = Math.PI; g.add(m);
  }
  return g;
}
/** Seto bajo recortado. */
export function hedge(len = 3) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(len, 0.9, 0.7), std('#2f6a2a', { roughness: 1, flatShading: true }));
  m.position.y = 0.45; m.castShadow = true; g.add(m);
  return g;
}

/** Basurero de parque: tonel verde con tapa. */
export function trashCan() {
  const g = new THREE.Group();
  cyl(g, 0.3, 0.8, 0, 0.4, 0, std('#2f7a45'), 10);
  cyl(g, 0.33, 0.07, 0, 0.84, 0, std('#1f4f2e'), 10);
  return g;
}


const MAT_LINE = () => std('#f4f1e6', { roughness: 0.6 });

/** Líneas de la cancha pintadas en el piso (se ponen a ras, centradas en la cancha). */
export function courtLines(w, d) {
  const g = new THREE.Group();
  const m = new THREE.MeshBasicMaterial({ color: '#f4f1e6' });
  const line = (lw, ld, x, z) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(lw, ld), m); p.rotation.x = -Math.PI / 2; p.position.set(x, 0, z); g.add(p); };
  const t = 0.1;
  line(w, t, 0, -d / 2); line(w, t, 0, d / 2); line(t, d, -w / 2, 0); line(t, d, w / 2, 0); line(t, d, 0, 0);
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.1, 2.2, 40), m); ring.rotation.x = -Math.PI / 2; g.add(ring);
  for (const s of [-1, 1]) { // zonas pintadas bajo cada aro
    const zx = s * (w / 2 - 2.4);
    line(4.8, t, zx, -2.4); line(4.8, t, zx, 2.4); line(t, 4.8, s * (w / 2 - 4.8), 0);
    const arc = new THREE.Mesh(new THREE.RingGeometry(2.3, 2.4, 28, 1, -Math.PI / 2, Math.PI), m);
    arc.rotation.x = -Math.PI / 2; arc.rotation.z = s > 0 ? Math.PI : 0; arc.position.set(s * (w / 2 - 4.8), 0, 0); g.add(arc);
  }
  return g;
}

/** Malla baja de cancha: marco verde con paneles naranja (como la de la foto). */
export function courtFence(len = 8, h = 1.3) {
  const g = new THREE.Group();
  const green = std('#4f7d3a'), orange = std('#e0772a');
  box(g, len, 0.08, 0.08, 0, h, 0, green); box(g, len, 0.08, 0.08, 0, 0.1, 0, green);
  const n = Math.max(1, Math.round(len / 1.6)), step = len / n;
  for (let i = 0; i <= n; i++) box(g, 0.08, h, 0.08, -len / 2 + i * step, h / 2, 0, green);
  for (let i = 0; i < n; i++) box(g, step - 0.1, h - 0.3, 0.04, -len / 2 + (i + 0.5) * step, h / 2 + 0.05, 0, i % 2 ? orange : std('#6aa0c8'));
  return g;
}

/** Columpios: marco en A con dos asientos. */
export function swingSet() {
  const g = new THREE.Group();
  const blue = std('#2a6fc9'), seat = std('#1b1b1b'), chain = std('#9aa0a6', { metalness: 0.6 });
  for (const s of [-1, 1]) for (const z of [-0.7, 0.7]) { const b = box(g, 0.1, 2.7, 0.1, s * 1.4, 1.3, z * 0.9, blue); b.rotation.z = -s * 0.12; }
  box(g, 3.2, 0.12, 0.12, 0, 2.6, 0, blue);
  for (const x of [-0.6, 0.6]) {
    for (const dz of [-0.18, 0.18]) box(g, 0.03, 1.9, 0.03, x, 1.65, dz, chain);
    box(g, 0.5, 0.06, 0.4, x, 0.7, 0, seat);
  }
  return g;
}

/** Sube y baja. */
export function seesaw() {
  const g = new THREE.Group();
  box(g, 0.3, 0.55, 0.3, 0, 0.28, 0, std('#2a6fc9'));
  const plank = box(g, 3, 0.1, 0.35, 0, 0.62, 0, std('#f2c230')); plank.rotation.z = 0.14;
  for (const s of [-1, 1]) box(g, 0.1, 0.35, 0.1, s * 1.2, 0.78 + s * 0.17 * -1, 0, std('#e24a1a'));
  return g;
}

/** Arbusto con flores (el zacate solo se ve pobre). */
export function shrub(scale = 1, flor = '#e0364a') {
  const g = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const r = (0.45 + Math.random() * 0.25) * scale;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), std(['#2f6a2a', '#3a7a32', '#27591f'][i % 3], { roughness: 1, flatShading: true }));
    m.position.set((Math.random() - 0.5) * 0.9 * scale, r * 0.85, (Math.random() - 0.5) * 0.9 * scale); m.castShadow = true; g.add(m);
  }
  for (let i = 0; i < 14; i++) {
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.09 * scale, 5, 4), std(flor, { roughness: 0.7 }));
    const a = Math.random() * Math.PI * 2, rr = Math.random() * 0.7 * scale;
    f.position.set(Math.cos(a) * rr, (0.6 + Math.random() * 0.5) * scale, Math.sin(a) * rr); g.add(f);
  }
  return g;
}

/** Palma de adorno (las de la entrada). */
export function palm(scale = 1) {
  const g = new THREE.Group();
  const trunk = std('#8a6f4e'), leaf = std('#3d7a2c', { roughness: 1 });
  cyl(g, 0.16 * scale, 4.4 * scale, 0, 2.2 * scale, 0, trunk, 7);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const f = box(g, 0.28 * scale, 0.05, 2.1 * scale, Math.cos(a) * 0.9 * scale, 4.35 * scale, Math.sin(a) * 0.9 * scale, leaf);
    f.rotation.y = -a + Math.PI / 2; f.rotation.x = 0.42;
  }
  return g;
}

/** Árbol mediano de sombra, más bajo que el grande. */
export function shadeTree(scale = 1) {
  const g = new THREE.Group();
  const tronco = std('#5a4632', { roughness: 1 });
  cyl(g, 0.3 * scale, 2.6 * scale, 0, 1.3 * scale, 0, tronco, 8);
  for (const [ax, az] of [[0.5, 0.2], [-0.45, -0.3], [0.1, -0.55]]) { // ramas gruesas que abren la copa
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.07 * scale, 0.12 * scale, 1.4 * scale, 6), tronco);
    r.position.set(ax * scale, 2.9 * scale, az * scale); r.rotation.set(az * 1.1, 0, -ax * 1.1); r.castShadow = true; g.add(r);
  }
  const hoja = ['#2c5a22', '#376a2a', '#44782f', '#58883a', '#2f6030'];
  for (let i = 0; i < 9; i++) {
    const ang = i / 9 * Math.PI * 2 + Math.random() * 0.5, rad = (0.6 + Math.random() * 1.1) * scale;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry((0.9 + Math.random() * 0.7) * scale, 1), std(hoja[i % 5], { roughness: 1 }));
    m.scale.set(1, 0.72 + Math.random() * 0.2, 1);
    m.position.set(Math.cos(ang) * rad, (3.3 + Math.random() * 1.3) * scale, Math.sin(ang) * rad);
    m.castShadow = true; g.add(m);
  }
  const arriba = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1 * scale, 1), std('#5f9040', { roughness: 1 }));
  arriba.scale.set(1, 0.7, 1); arriba.position.set(0, 4.5 * scale, 0); arriba.castShadow = true; g.add(arriba);
  return g;
}

/** Mesa de picnic de concreto con bancas. */
export function picnicTable() {
  const g = new THREE.Group();
  const c = std('#b9b4a6');
  box(g, 1.9, 0.12, 0.8, 0, 0.8, 0, c);
  for (const s of [-1, 1]) { box(g, 1.9, 0.1, 0.35, 0, 0.45, s * 0.7, c); box(g, 0.12, 0.8, 0.5, s * 0.7, 0.4, 0, c); }
  return g;
}

/** Bebedero de pedestal. */
export function drinkingFountain() {
  const g = new THREE.Group();
  box(g, 0.35, 0.95, 0.35, 0, 0.48, 0, std('#8b8f94', { metalness: 0.3 }));
  box(g, 0.5, 0.1, 0.5, 0, 1.0, 0, std('#c7ccd1', { metalness: 0.5 }));
  box(g, 0.06, 0.2, 0.06, 0, 1.12, 0.12, std('#3a3d42'));
  return g;
}

/** Poste de concreto con dos crucetas y luminaria (como el de la entrada). */
export function concretePole() {
  const g = new THREE.Group();
  const c = std('#a8a59d');
  cyl(g, 0.13, 9, 0, 4.5, 0, c, 8);
  box(g, 2.0, 0.1, 0.1, 0, 8.6, 0, std('#4a3b2c')); box(g, 1.6, 0.1, 0.1, 0, 8.0, 0, std('#4a3b2c'));
  for (const x of [-0.9, -0.3, 0.3, 0.9]) cyl(g, 0.04, 0.14, x, 8.72, 0, std('#d9d9d4'), 6);
  box(g, 0.9, 0.06, 0.06, 0.6, 7.3, 0, c);
  box(g, 0.5, 0.1, 0.2, 1.05, 7.25, 0, std('#d9d9d4', { emissive: '#ffe9a8', emissiveIntensity: 0.5 }));
  return g;
}

/** Hilera de piedras de río como bordillo del zacate (como en la foto de las esculturas). */
export function stoneBorder(len = 6) {
  const g = new THREE.Group();
  const tones = ['#7d786d', '#8f897b', '#6c685e', '#a09a8a'];
  for (let i = 0; i < len * 5; i++) {
    const r = 0.1 + Math.random() * 0.1;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 0), std(tones[i % 4], { roughness: 1, flatShading: true }));
    m.position.set((Math.random() - 0.5) * len, r * 0.6, (Math.random() - 0.5) * 0.5); g.add(m);
  }
  return g;
}

/** Bolardo amarillo bajo. */
export function bollard() {
  const g = new THREE.Group();
  cyl(g, 0.09, 0.8, 0, 0.4, 0, std('#e3b21c'), 8);
  return g;
}

/** Pilares de entrada con rótulo plano (la textura la pasa quien lo llama). */
export function gatePillars(width, signMap) {
  const g = new THREE.Group();
  const col = std('#c9c0a8'), cap = std('#8a8478');
  for (const s of [-1, 1]) { box(g, 0.55, 2.6, 0.55, s * width / 2, 1.3, 0, col); box(g, 0.75, 0.14, 0.75, s * width / 2, 2.67, 0, cap); }
  if (signMap) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.6, (width - 0.6) / 4), new THREE.MeshBasicMaterial({ map: signMap, side: THREE.DoubleSide }));
    m.position.set(0, 3.3, 0); g.add(m);
    for (const s of [-1, 1]) box(g, 0.08, 0.7, 0.08, s * (width / 2 - 0.15), 2.95, 0, std('#2a2a2a'));
  }
  return g;
}

// ---------- Costa Rica en la calle: banderas, propaganda, rótulos de obra, rejas y ropa tendida ----------
const lienzo = (w, h, pintar) => {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  pintar(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
};
let banderaMap = null;
/** Bandera de Costa Rica: azul, blanco, rojo (doble de ancho), blanco, azul; franjas 1-1-2-1-1. */
export function banderaTex() {
  return banderaMap ??= lienzo(256, 128, (x, w, h) => {
    const u = h / 6;
    [['#00247d', 0, 1], ['#ffffff', 1, 1], ['#ce1126', 2, 2], ['#ffffff', 4, 1], ['#00247d', 5, 1]].forEach(([c, a, n]) => { x.fillStyle = c; x.fillRect(0, a * u, w, n * u); });
  });
}
/** Asta con bandera tica que sale de una pared o de un poste (origen en la base del asta). */
export function banderaTica(escala = 1) {
  const g = new THREE.Group();
  box(g, 0.04, 1.6 * escala, 0.04, 0, 0.8 * escala, 0, std('#4a4a4a'));
  const map = banderaTex();
  const f = new THREE.Mesh(new THREE.PlaneGeometry(0.9 * escala, 0.45 * escala),
    map ? new THREE.MeshStandardMaterial({ map, side: THREE.DoubleSide, roughness: 0.9 }) : std('#ce1126', { side: THREE.DoubleSide }));
  f.position.set(0.46 * escala, 1.35 * escala, 0); f.rotation.y = 0.12; f.castShadow = true; g.add(f);
  return g;
}
/** Hilera de banderitas de papel en un cordel (fiestas patrias y feria del barrio). */
export function cordelBanderitas(largo = 6) {
  const g = new THREE.Group();
  const cuerda = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, largo, 4), std('#3a3a3a'));
  cuerda.rotation.z = Math.PI / 2; cuerda.position.y = 3.2; g.add(cuerda);
  const colores = ['#00247d', '#ffffff', '#ce1126'];
  const n = Math.floor(largo / 0.35);
  for (let i = 0; i < n; i++) {
    const t = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.3), std(colores[i % 3], { side: THREE.DoubleSide }));
    t.position.set(-largo / 2 + 0.25 + i * (largo - 0.5) / n, 3.02 - Math.sin(i / n * Math.PI) * 0.0 - Math.sin(i / n * Math.PI) * 0.12 * 0, 0);
    g.add(t);
  }
  return g;
}
const PARTIDOS = [
  { nombre: 'NUEVO AMANECER', lema: '¡MÁS EMPLEO PARA EL BARRIO!', fondo: '#1f7a3a', letra: '#ffffff' },
  { nombre: 'ALIANZA POPULAR', lema: 'CALLES SIN HUECOS, AGUA PARA TODOS', fondo: '#c0392b', letra: '#ffffff' },
  { nombre: 'FRENTE CIUDADANO', lema: 'SEGURIDAD Y OPORTUNIDADES', fondo: '#1b4a8c', letra: '#ffe27a' },
  { nombre: 'RENOVACIÓN TICA', lema: 'CON EL PUEBLO, PURA VIDA', fondo: '#f2c600', letra: '#15130f' },
];
/** Valla de propaganda electoral inventada: partidos y lemas ficticios. */
export function vallaPropaganda(i = 0) {
  const p = PARTIDOS[i % PARTIDOS.length];
  const g = new THREE.Group();
  const poste = std('#2a2a2a');
  box(g, 0.1, 2.6, 0.1, -1.0, 1.3, 0, poste); box(g, 0.1, 2.6, 0.1, 1.0, 1.3, 0, poste);
  const map = lienzo(512, 256, (x, w, h) => {
    x.fillStyle = p.fondo; x.fillRect(0, 0, w, h);
    x.fillStyle = p.letra; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 52px system-ui, sans-serif'; x.fillText(p.nombre, w / 2, 70, w * 0.9);
    x.font = '800 30px system-ui, sans-serif'; x.fillText(p.lema, w / 2, 140, w * 0.92);
    x.fillStyle = p.letra; x.globalAlpha = 0.25; x.beginPath(); x.arc(w / 2, 215, 28, 0, Math.PI * 2); x.fill(); x.globalAlpha = 1;
    x.font = '700 22px system-ui, sans-serif'; x.fillText('VOTE AQUÍ · PROPAGANDA PAGADA', w / 2, 232, w * 0.8);
  });
  const cara = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.1),
    map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std(p.fondo, { side: THREE.DoubleSide }));
  cara.position.set(0, 1.9, 0); g.add(cara);
  return g;
}
/** Rótulo de obra municipal sobre dos varillas. */
export function rotuloObra() {
  const g = new THREE.Group();
  box(g, 0.06, 1.5, 0.06, -0.55, 0.75, 0, std('#555')); box(g, 0.06, 1.5, 0.06, 0.55, 0.75, 0, std('#555'));
  const map = lienzo(512, 256, (x, w, h) => {
    x.fillStyle = '#f26a1b'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#15130f'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 46px system-ui, sans-serif'; x.fillText('OBRA EN EJECUCIÓN', w / 2, 60, w * 0.92);
    x.font = '800 28px system-ui, sans-serif'; x.fillText('Mejoramiento de aceras y alcantarillado', w / 2, 125, w * 0.94);
    x.font = '700 24px system-ui, sans-serif'; x.fillText('Municipalidad de San José', w / 2, 175, w * 0.9);
    x.fillText('Disculpe las molestias', w / 2, 215, w * 0.9);
  });
  const t = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.7), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#f26a1b', { side: THREE.DoubleSide }));
  t.position.set(0, 1.2, 0); g.add(t);
  return g;
}
/** Cartel de lotería y chances pegado a una tabla: se ve en cada esquina de San José. */
export function cartelLoteria() {
  const g = new THREE.Group();
  box(g, 0.06, 1.8, 0.06, 0, 0.9, 0, std('#555'));
  const map = lienzo(256, 256, (x, w, h) => {
    x.fillStyle = '#ffd21f'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#ce1126'; x.fillRect(0, 0, w, 54);
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 38px system-ui, sans-serif'; x.fillText('CHANCES', w / 2, 28);
    x.fillStyle = '#15130f'; x.font = '900 44px system-ui, sans-serif'; x.fillText('¡HOY SÍ!', w / 2, 110);
    x.font = '800 28px system-ui, sans-serif'; x.fillText('Lotería Nacional', w / 2, 165); x.fillText('Tiempos · 3 Monazos', w / 2, 205);
  });
  const t = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.8), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#ffd21f', { side: THREE.DoubleSide }));
  t.position.set(0, 1.5, 0.05); g.add(t);
  return g;
}
/** Reja de hierro de ventana/portón (todas las casas ticas tienen una). Origen al centro-abajo, mira a +z. */
export function rejaCasa(w = 1.6, h = 1.3, color = '#1a1a1a') {
  const g = new THREE.Group();
  const m = std(color);
  box(g, w, 0.05, 0.05, 0, 0.02, 0, m); box(g, w, 0.05, 0.05, 0, h, 0, m);
  box(g, 0.05, h, 0.05, -w / 2, h / 2, 0, m); box(g, 0.05, h, 0.05, w / 2, h / 2, 0, m);
  for (let x = -w / 2 + 0.2; x < w / 2 - 0.05; x += 0.2) box(g, 0.025, h, 0.025, x, h / 2, 0, m);
  box(g, w, 0.025, 0.025, 0, h / 2, 0, m);
  return g;
}
/** Tendedero con ropa de colores entre dos postes. */
export function tendedero(largo = 3.2) {
  const g = new THREE.Group();
  for (const s of [-1, 1]) box(g, 0.05, 2.2, 0.05, s * largo / 2, 1.1, 0, std('#6a5a48'));
  const cuerda = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, largo, 4), std('#999'));
  cuerda.rotation.z = Math.PI / 2; cuerda.position.y = 2.1; g.add(cuerda);
  const col = ['#ce1126', '#ffffff', '#1b4a8c', '#f2c600', '#2e8b57', '#e89aa8'];
  const n = Math.floor(largo / 0.45);
  for (let i = 0; i < n; i++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.5 + (i % 3) * 0.12), std(col[i % col.length], { side: THREE.DoubleSide }));
    p.position.set(-largo / 2 + 0.3 + i * (largo - 0.6) / n, 1.82 - (i % 3) * 0.04, 0); p.rotation.y = (i % 2 ? 0.15 : -0.1); g.add(p);
  }
  return g;
}
/** Venta de frutas sobre una mesita con toldo (fresco de pipa, mangos). */
export function ventaFruta() {
  const g = new THREE.Group();
  box(g, 1.6, 0.06, 0.8, 0, 0.8, 0, std('#8a5a2e'));
  for (const sx of [-0.7, 0.7]) for (const sz of [-0.35, 0.35]) box(g, 0.05, 0.8, 0.05, sx, 0.4, sz, std('#6a4a2a'));
  const toldo = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.04, 1.2), std('#f2c600'));
  toldo.position.set(0, 2.1, 0); toldo.rotation.x = 0.12; g.add(toldo);
  for (const sx of [-0.9, 0.9]) box(g, 0.04, 2.1, 0.04, sx, 1.05, -0.5, std('#555'));
  const f = ['#f2a900', '#d33a2c', '#6fb43a', '#f2c600'];
  for (let i = 0; i < 12; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), std(f[i % 4]));
    s.position.set(-0.6 + (i % 6) * 0.24, 0.9, -0.15 + Math.floor(i / 6) * 0.3); g.add(s);
  }
  return g;
}

// ---------- Tensión política inventada: un "Jefe" ficticio, un barrio dividido (solo ambiente, no cambia el juego) ----------
const BANDO_JEFE = ['EL JEFE SÍ CUMPLE', 'CON EL JEFE HASTA EL FINAL', 'LOS DEL JEFE MANDAMOS', 'ORDEN Y MANO DURA'];
const BANDO_CONTRA = ['ABAJO EL JEFE', 'NO MÁS MANDONES', 'EL PUEBLO NO CALLA', 'LIBERTAD YA', 'FUERA EL DICTADOR'];
/** Grafiti sobre pared: spray apurado, a veces tachado por el otro bando. */
export function grafitiPolitico(i = 0) {
  const g = new THREE.Group();
  const contra = i % 2 === 1, lista = contra ? BANDO_CONTRA : BANDO_JEFE;
  const texto = lista[Math.floor(i / 2) % lista.length];
  const map = lienzo(512, 128, (x, w, h) => {
    x.clearRect(0, 0, w, h);
    x.fillStyle = contra ? '#e8e2d0' : '#c9232b'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 54px "Arial Black", sans-serif'; x.save(); x.translate(w / 2, h / 2); x.rotate(contra ? -0.04 : 0.03);
    x.fillText(texto, 0, 0, w * 0.94);
    if (i % 3 === 0) { x.strokeStyle = contra ? '#c9232b' : '#15130f'; x.lineWidth = 9; x.beginPath(); x.moveTo(-w * 0.45, -22); x.lineTo(w * 0.45, 24); x.stroke(); } // lo tachó el otro bando
    x.restore();
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.55), map ? new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false }) : std('#c9232b', { transparent: true }));
  m.position.set(0, 1.5, 0.03); g.add(m);
  return g;
}
/** Pasquín pegado y rasgado: un rostro tachado sin nombre y un aviso. */
export function pasquinRasgado(i = 0) {
  const g = new THREE.Group();
  const map = lienzo(256, 320, (x, w, h) => {
    x.fillStyle = i % 2 ? '#e8dfc4' : '#d9d3c0'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#2a2a2a'; x.beginPath(); x.arc(w / 2, 110, 56, 0, Math.PI * 2); x.fill(); // silueta sin rostro
    x.fillRect(w / 2 - 70, 165, 140, 60);
    x.fillStyle = '#ce1126'; x.font = '900 34px system-ui, sans-serif'; x.textAlign = 'center';
    x.fillText(i % 2 ? 'SE BUSCA' : 'EL JEFE', w / 2, 262); x.fillStyle = '#15130f'; x.font = '800 22px system-ui, sans-serif';
    x.fillText(i % 2 ? 'por hablar de más' : 'manda y protege', w / 2, 298);
    x.strokeStyle = '#ce1126'; x.lineWidth = 12; x.beginPath(); x.moveTo(20, 40); x.lineTo(w - 20, 200); x.stroke();
    x.fillStyle = 'rgba(0,0,0,.35)'; x.beginPath(); x.moveTo(w, 0); x.lineTo(w - 60, 0); x.lineTo(w, 70); x.fill(); // esquina arrancada
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.75), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#d9d3c0'));
  m.position.set(0, 1.5, 0.03); m.rotation.z = (i % 3 - 1) * 0.05; g.add(m);
  return g;
}
/** Aviso de toque de queda en un poste: lo que uno lee y se le seca la boca. */
export function avisoToqueDeQueda() {
  const g = new THREE.Group();
  box(g, 0.06, 2.0, 0.06, 0, 1.0, 0, std('#444'));
  const map = lienzo(256, 320, (x, w, h) => {
    x.fillStyle = '#15130f'; x.fillRect(0, 0, w, h); x.fillStyle = '#ce1126'; x.fillRect(0, 0, w, 60);
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = '900 34px system-ui, sans-serif'; x.fillText('AVISO', w / 2, 32);
    x.fillStyle = '#f2f2e8'; x.font = '900 40px system-ui, sans-serif'; x.fillText('TOQUE DE', w / 2, 120); x.fillText('QUEDA', w / 2, 168);
    x.font = '800 26px system-ui, sans-serif'; x.fillText('10 PM – 4 AM', w / 2, 220); x.fillStyle = '#ce1126'; x.fillText('POR ORDEN DEL JEFE', w / 2, 270, w * 0.92);
  });
  const t = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.69), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#15130f'));
  t.position.set(0, 1.55, 0.05); g.add(t);
  return g;
}
/** Valla grande del Jefe inventado, con spray encima y una esquina caída. */
export function vallaDelJefe() {
  const g = new THREE.Group();
  const poste = std('#2a2a2a');
  box(g, 0.14, 3.6, 0.14, -1.7, 1.8, 0, poste); box(g, 0.14, 3.6, 0.14, 1.7, 1.8, 0, poste);
  const map = lienzo(512, 256, (x, w, h) => {
    x.fillStyle = '#1b3a6b'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#0f2142'; x.beginPath(); x.arc(110, 140, 64, 0, Math.PI * 2); x.fill(); x.fillRect(50, 190, 120, 70); // silueta del Jefe, sin rostro
    x.fillStyle = '#ffffff'; x.textAlign = 'left'; x.font = '900 54px system-ui, sans-serif'; x.fillText('EL JEFE', 220, 90);
    x.font = '800 30px system-ui, sans-serif'; x.fillText('Un solo mando,', 220, 150); x.fillText('un solo país.', 220, 190);
    x.strokeStyle = '#e63a2e'; x.lineWidth = 18; x.lineCap = 'round'; x.beginPath(); x.moveTo(40, 60); x.lineTo(470, 230); x.moveTo(470, 40); x.lineTo(60, 220); x.stroke(); // rayada
    x.fillStyle = '#e8e2d0'; x.font = '900 40px "Arial Black", sans-serif'; x.fillText('MENTIRA', 230, 240);
  });
  const c = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.7), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#1b3a6b', { side: THREE.DoubleSide }));
  c.position.set(0, 3.0, 0); c.rotation.z = 0.0; g.add(c);
  return g;
}

/** Parada de bus tica: techito de lámina sobre dos tubos, banca de tubo, rótulo de ruta y cartel pegado. Mira a +z. */
export function paradaBus(ruta = '400') {
  const g = new THREE.Group();
  const tubo = std('#3a3f44'), lamina = std('#9aa3a8', { metalness: 0.3, roughness: 0.55 });
  for (const sx of [-1.3, 1.3]) { box(g, 0.08, 2.5, 0.08, sx, 1.25, -0.5, tubo); box(g, 0.08, 2.3, 0.08, sx, 1.15, 0.5, tubo); }
  const techo = box(g, 3.0, 0.07, 1.4, 0, 2.5, 0, lamina); techo.rotation.x = 0.08;
  box(g, 2.6, 0.05, 0.4, 0, 0.5, -0.4, std('#8a6a3c')); box(g, 0.06, 0.5, 0.06, -1.1, 0.25, -0.4, tubo); box(g, 0.06, 0.5, 0.06, 1.1, 0.25, -0.4, tubo);
  box(g, 2.6, 0.5, 0.05, 0, 0.9, -0.62, std('#8a6a3c'));
  const map = lienzo(256, 128, (x, w, h) => {
    x.fillStyle = '#1b4a8c'; x.fillRect(0, 0, w, h); x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 34px system-ui, sans-serif'; x.fillText('PARADA', w / 2, 36); x.fillStyle = '#ffd21f';
    x.font = '900 40px system-ui, sans-serif'; x.fillText('RUTA ' + ruta, w / 2, 88);
  });
  const rot = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.45), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#1b4a8c'));
  rot.position.set(1.0, 1.95, 0.55); g.add(rot);
  box(g, 0.05, 1.6, 0.05, 1.0, 1.15, 0.55, tubo);
  return g;
}
/** Teléfono público de moneda y tarjeta, de los de antes: caseta de lámina azul con auricular y techito. */
export function telefonoPublico() {
  const g = new THREE.Group();
  const azul = std('#1b4a8c'), gris = std('#c8ccd0');
  box(g, 0.08, 2.3, 0.08, -0.5, 1.15, -0.3, azul); box(g, 0.08, 2.3, 0.08, 0.5, 1.15, -0.3, azul);
  box(g, 1.1, 0.06, 0.7, 0, 2.3, -0.05, azul);
  box(g, 1.0, 1.8, 0.04, 0, 1.3, -0.32, gris);
  box(g, 0.5, 0.7, 0.18, 0, 1.25, -0.2, std('#2a2e33'));
  box(g, 0.34, 0.06, 0.1, 0, 1.55, -0.08, std('#15130f'));
  box(g, 0.08, 0.3, 0.06, -0.18, 1.35, -0.08, std('#15130f'));
  const map = lienzo(128, 64, (x, w, h) => { x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, h); x.fillStyle = '#1b4a8c'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = '900 30px system-ui, sans-serif'; x.fillText('TELÉFONO', w / 2, 24); x.fillStyle = '#ce1126'; x.fillText('PÚBLICO', w / 2, 50); });
  const r = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.4), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#fff'));
  r.position.set(0, 2.0, -0.31); g.add(r);
  return g;
}

// ---------- Marcas ticas reales de la vida diaria (solo el nombre en letras sencillas, sin imitar logos) ----------
const MARCAS = [
  { nombre: 'Musmanni', lema: 'Pan fresco todo el día', fondo: '#f4e9c8', letra: '#7a1f1f' },
  { nombre: 'Pops', lema: 'El helado de todos', fondo: '#d6202b', letra: '#ffffff' },
  { nombre: 'Dos Pinos', lema: 'Leche y más', fondo: '#1f5fa8', letra: '#ffffff' },
  { nombre: 'Imperial', lema: 'La cerveza de Costa Rica', fondo: '#1f6b3a', letra: '#f2d26b' },
  { nombre: 'Salsa Lizano', lema: 'El sabor de la casa', fondo: '#2f9d4a', letra: '#ffffff' },
  { nombre: 'Pipasa', lema: 'Pollo fresco', fondo: '#f2b01e', letra: '#7a1f1f' },
  { nombre: 'Más x Menos', lema: 'Siempre precios bajos', fondo: '#c8102e', letra: '#ffffff' },
  { nombre: 'Coca-Cola', lema: 'Bien fría', fondo: '#d6202b', letra: '#ffffff' },
  { nombre: 'Banco Nacional', lema: 'Cajero automático', fondo: '#1b4a8c', letra: '#ffffff' },
  { nombre: 'Correos de Costa Rica', lema: 'Envíos y encomiendas', fondo: '#f2c600', letra: '#15130f' },
];
export const CANTIDAD_MARCAS = MARCAS.length;
/** Cartel de marca sobre dos postes, de los que hay en cada cuadra. Mira a +z. */
export function cartelMarca(i = 0) {
  const m = MARCAS[i % MARCAS.length];
  const g = new THREE.Group();
  box(g, 0.07, 2.4, 0.07, -0.8, 1.2, 0, std('#444')); box(g, 0.07, 2.4, 0.07, 0.8, 1.2, 0, std('#444'));
  const map = lienzo(512, 192, (x, w, h) => {
    x.fillStyle = m.fondo; x.fillRect(0, 0, w, h);
    x.strokeStyle = m.letra; x.lineWidth = 8; x.strokeRect(10, 10, w - 20, h - 20);
    x.fillStyle = m.letra; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 62px system-ui, sans-serif'; x.fillText(m.nombre, w / 2, 76, w * 0.88);
    x.font = '700 30px system-ui, sans-serif'; x.fillText(m.lema, w / 2, 140, w * 0.86);
  });
  const c = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.72), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std(m.fondo, { side: THREE.DoubleSide }));
  c.position.set(0, 1.9, 0); g.add(c);
  return g;
}

// ---------- Detalles que solo se ven en Costa Rica ----------
/** Gruta de la Virgen de los Ángeles (la Negrita): nicho de piedra con flores y velas, en cualquier esquina de barrio. */
export function grutaVirgen() {
  const g = new THREE.Group();
  const piedra = std('#8d8a84');
  box(g, 1.6, 0.4, 1.0, 0, 0.2, 0, piedra); box(g, 1.2, 1.6, 0.8, 0, 1.2, -0.05, piedra); box(g, 1.4, 0.15, 0.95, 0, 2.05, -0.05, std('#6f6c66'));
  box(g, 0.7, 1.2, 0.2, 0, 1.3, 0.34, std('#1c2b4a')); // nicho azul
  const manto = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.8, 8), std('#2f5fa8')); manto.position.set(0, 1.25, 0.4); g.add(manto);
  const cara = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), std('#2a1d16')); cara.position.set(0, 1.72, 0.4); g.add(cara);
  const corona = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.08, 8), std('#f2c600')); corona.position.set(0, 1.84, 0.4); g.add(corona);
  for (const sx of [-0.55, 0.55]) { box(g, 0.09, 0.22, 0.09, sx, 0.5, 0.45, std('#f4efe0')); const l = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), std('#ffb347', { emissive: '#ff8a1f', emissiveIntensity: 0.9 })); l.position.set(sx, 0.66, 0.45); g.add(l); }
  const flores = ['#ce1126', '#f2c600', '#ffffff', '#e89aa8'];
  for (let i = 0; i < 8; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), std(flores[i % 4])); f.position.set(-0.4 + i * 0.115, 0.46, 0.5); g.add(f); }
  return g;
}
/** Carreta típica pintada (la de las ruedas de colores), como adorno de portón o esquina. */
export function carretaTipica() {
  const g = new THREE.Group();
  const madera = std('#9a5a2a'), colores = ['#ce1126', '#f2c600', '#1b4a8c', '#2e8b57'];
  box(g, 1.7, 0.1, 0.9, 0, 0.75, 0, madera);
  for (const sz of [-0.45, 0.45]) { box(g, 1.7, 0.45, 0.06, 0, 1.0, sz, std('#d8662f')); }
  box(g, 0.06, 0.45, 0.9, -0.85, 1.0, 0, std('#d8662f'));
  for (const sz of [-0.5, 0.5]) {
    const r = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.07, 20), std('#8a4a1f')); r.rotation.x = Math.PI / 2; r.position.set(0.1, 0.62, sz); g.add(r);
    for (let k = 0; k < 6; k++) {
      const a = k / 6 * Math.PI * 2, rad = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.05), std(colores[k % 4]));
      rad.position.set(0.1 + Math.cos(a) * 0.3, 0.62 + Math.sin(a) * 0.3, sz + (sz > 0 ? 0.05 : -0.05)); rad.rotation.z = a; g.add(rad);
    }
  }
  box(g, 1.4, 0.06, 0.08, 1.4, 0.8, 0, madera); // lanza
  return g;
}
const EQUIPOS = [
  { n: 'SAPRISSA', c: ['#5b2a86', '#ffffff'] }, { n: 'LA LIGA', c: ['#d6202b', '#15130f'] },
  { n: 'HEREDIANO', c: ['#f2c600', '#d6202b'] }, { n: 'CARTAGINÉS', c: ['#1b4a8c', '#ffffff'] },
  { n: 'LA SELE', c: ['#d6202b', '#1b4a8c'] },
];
/** Bandera de equipo de fútbol colgada de un asta: el barrio se pelea por los equipos, y por la Sele se une. */
export function banderaEquipo(i = 0) {
  const e = EQUIPOS[i % EQUIPOS.length], g = new THREE.Group();
  box(g, 0.04, 1.8, 0.04, 0, 0.9, 0, std('#4a4a4a'));
  const map = lienzo(256, 160, (x, w, h) => {
    x.fillStyle = e.c[0]; x.fillRect(0, 0, w, h); x.fillStyle = e.c[1]; x.fillRect(0, h * 0.62, w, h * 0.12);
    x.fillStyle = e.c[1]; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = '900 40px system-ui, sans-serif'; x.fillText(e.n, w / 2, h * 0.34, w * 0.9);
  });
  const f = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.62), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std(e.c[0], { side: THREE.DoubleSide }));
  f.position.set(0.52, 1.45, 0); g.add(f); return g;
}
const PLATOS = ['Casado ₡3.500', 'Gallo pinto ₡2.000', 'Chifrijo ₡3.800', 'Arroz con pollo ₡3.200', 'Olla de carne ₡4.000', 'Fresco natural ₡900'];
/** Pizarra de soda con el menú del día (casado, gallo pinto, chifrijo, olla de carne y fresco). */
export function pizarraSoda() {
  const g = new THREE.Group();
  box(g, 0.06, 1.5, 0.06, -0.45, 0.75, 0, std('#6a4a2a')); box(g, 0.06, 1.5, 0.06, 0.45, 0.75, 0, std('#6a4a2a'));
  const map = lienzo(256, 320, (x, w, h) => {
    x.fillStyle = '#1f2b22'; x.fillRect(0, 0, w, h); x.strokeStyle = '#b08850'; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8);
    x.fillStyle = '#f4efe0'; x.textAlign = 'center'; x.font = '900 36px system-ui, sans-serif'; x.fillText('SODA', w / 2, 52);
    x.font = '800 22px system-ui, sans-serif'; x.fillText('Comida casera', w / 2, 82);
    x.textAlign = 'left'; x.font = '700 20px system-ui, sans-serif';
    PLATOS.forEach((p, k) => x.fillText(p, 18, 125 + k * 32, w - 28));
  });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 1.06), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std('#1f2b22'));
  p.position.set(0, 1.05, 0.04); g.add(p); return g;
}
/** Lotero: caballete con cuadrito de lotería y chances "para hoy" y una sombrilla. */
export function loteroPuesto() {
  const g = new THREE.Group();
  box(g, 0.9, 0.05, 0.6, 0, 0.9, 0, std('#d9d3c0')); for (const sx of [-0.4, 0.4]) box(g, 0.05, 0.9, 0.05, sx, 0.45, 0, std('#555'));
  const sombr = new THREE.Mesh(new THREE.ConeGeometry(1.0, 0.35, 12), std('#ce1126')); sombr.position.set(0, 2.3, 0); g.add(sombr);
  box(g, 0.04, 1.5, 0.04, 0, 1.55, -0.28, std('#555'));
  for (let i = 0; i < 8; i++) box(g, 0.1, 0.14, 0.01, -0.35 + i * 0.1, 1.0, 0.05, std(['#f2c600', '#ffffff', '#2e8b57', '#ce1126'][i % 4]));
  return g;
}

/** Tanque de agua negro sobre el techo, con su base: en La Carpio el agua no siempre llega, así que casi toda casa tiene uno. */
export function tanqueAgua() {
  const g = new THREE.Group();
  box(g, 0.9, 0.12, 0.9, 0, 0.06, 0, std('#6a6a6a'));
  const c = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.42, 0.95, 14), std('#1d2024', { roughness: 0.75 })); c.position.y = 0.6; g.add(c);
  const t = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.38, 0.14, 14), std('#1d2024')); t.position.y = 1.14; g.add(t);
  const tapa = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.05, 10), std('#2d6fb5')); tapa.position.y = 1.23; g.add(tapa);
  return g;
}
/** Antena parabólica de la tele por cable. */
export function parabolica() {
  const g = new THREE.Group();
  box(g, 0.05, 0.5, 0.05, 0, 0.25, 0, std('#8a8f93'));
  const d = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2.6), std('#d9dcdc', { side: THREE.DoubleSide }));
  d.position.set(0, 0.62, 0); d.rotation.x = Math.PI / 2.4; g.add(d);
  box(g, 0.03, 0.03, 0.34, 0, 0.7, 0.22, std('#555'));
  return g;
}

// ---------- Navidad tica (lo que más se vive ahorita): luces, portales, tamales y festivales ----------
/** Cordón de luces de colores entre dos puntos; las bombillas brillan solas. */
let haloMat = null, haloMap = null;
const haloMaterial = () => {
  if (haloMat) return haloMat;
  if (typeof document !== 'undefined') {
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.3, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64); haloMap = new THREE.CanvasTexture(c);
  }
  haloMat = new THREE.PointsMaterial({ size: 0.9, map: haloMap, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  registerNightGlowExtra(haloMat, 0.85); // de día no se ven; de noche cada bombilla tiene su resplandor
  return haloMat;
};
export function lucesNavidad(largo = 5) {
  const g = new THREE.Group();
  const cuerda = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, largo, 4), std('#1f1f1f'));
  cuerda.rotation.z = Math.PI / 2; g.add(cuerda);
  const col = ['#ff3b30', '#ffd60a', '#34c759', '#0a84ff', '#ff9f0a', '#ffffff'];
  const n = Math.floor(largo / 0.3);
  for (let i = 0; i < n; i++) {
    const c = col[i % col.length];
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), std(c, { emissive: c, emissiveIntensity: 1.1, roughness: 0.4 }));
    b.position.set(-largo / 2 + 0.15 + i * (largo - 0.3) / n, -Math.sin(i / n * Math.PI) * 0.14 - 0.04, 0); g.add(b);
  }
  const pos = [], cols = [], tmp = new THREE.Color();
  g.children.forEach((b) => { if (b.geometry?.type === 'SphereGeometry') { pos.push(b.position.x, b.position.y, b.position.z); tmp.set(b.material.color); cols.push(tmp.r, tmp.g, tmp.b); } });
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  const halos = new THREE.Points(geo, haloMaterial()); halos.frustumCulled = true; g.add(halos);
  g.position.y = 3.0;
  return g;
}
/** Portal (nacimiento): casita de tablas con techo de paja, pesebre, José, María, el Niño y pastorcitos, con luz tibia. */
export function portalNacimiento() {
  const g = new THREE.Group();
  const madera = std('#8a5a2e'), paja = std('#c9a54a');
  for (const sx of [-0.9, 0.9]) for (const sz of [-0.5, 0.5]) box(g, 0.08, 1.4, 0.08, sx, 0.7, sz, madera);
  box(g, 2.0, 1.2, 0.05, 0, 0.8, -0.52, std('#6a4a2a'));
  const techo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 1.4), paja); techo.position.set(0, 1.55, 0); techo.rotation.z = 0.0; g.add(techo);
  const cumbre = new THREE.Mesh(new THREE.ConeGeometry(0.9, 0.5, 4), paja); cumbre.rotation.y = Math.PI / 4; cumbre.position.set(0, 1.85, 0); cumbre.scale.set(1.4, 1, 0.8); g.add(cumbre);
  box(g, 2.2, 0.12, 1.1, 0, 0.06, 0, std('#4f7f2e'));
  const fig = (x, z, h, c, cabeza = '#e0b48a') => {
    const cuerpo = new THREE.Mesh(new THREE.ConeGeometry(0.13, h, 8), std(c)); cuerpo.position.set(x, 0.12 + h / 2, z); g.add(cuerpo);
    const cab = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), std(cabeza)); cab.position.set(x, 0.12 + h + 0.05, z); g.add(cab);
  };
  fig(-0.35, 0.1, 0.55, '#2f5fa8'); fig(0.35, 0.1, 0.6, '#8a5a2e'); // María y José
  box(g, 0.28, 0.14, 0.16, 0, 0.19, 0.2, std('#d9c28a'));
  const nino = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), std('#f1d3b0')); nino.position.set(0, 0.3, 0.2); g.add(nino);
  fig(-0.8, 0.3, 0.35, '#b53a2a'); fig(0.8, 0.3, 0.38, '#2e8b57');
  const luz = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), std('#ffd27a', { emissive: '#ffb347', emissiveIntensity: 1.4 })); luz.position.set(0, 1.35, 0.3); g.add(luz);
  const estrella = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), std('#ffe066', { emissive: '#ffd60a', emissiveIntensity: 1.5 })); estrella.position.set(0, 2.25, 0); g.add(estrella);
  return g;
}
/** Arbolito de Navidad con luces y regalos, de los que se ponen en el portón. */
export function arbolNavidad(escala = 1) {
  const g = new THREE.Group();
  box(g, 0.12 * escala, 0.3 * escala, 0.12 * escala, 0, 0.15 * escala, 0, std('#5a4632'));
  for (let i = 0; i < 4; i++) {
    const c = new THREE.Mesh(new THREE.ConeGeometry((0.85 - i * 0.17) * escala, 0.75 * escala, 10), std(i % 2 ? '#1f6b34' : '#2b7d3c', { roughness: 1 }));
    c.position.y = (0.55 + i * 0.5) * escala; g.add(c);
  }
  const bolas = ['#ff3b30', '#ffd60a', '#0a84ff', '#ff9f0a'];
  for (let i = 0; i < 14; i++) {
    const a = i * 2.4, y = 0.45 + (i % 7) * 0.26, r = (0.7 - y * 0.28) * escala;
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.05 * escala, 6, 5), std(bolas[i % 4], { emissive: bolas[i % 4], emissiveIntensity: 0.9 }));
    b.position.set(Math.cos(a) * r, y * escala, Math.sin(a) * r); g.add(b);
  }
  const est = new THREE.Mesh(new THREE.OctahedronGeometry(0.1 * escala, 0), std('#ffe066', { emissive: '#ffd60a', emissiveIntensity: 1.4 })); est.position.y = 2.5 * escala; g.add(est);
  box(g, 0.28 * escala, 0.22 * escala, 0.28 * escala, 0.55 * escala, 0.11 * escala, 0.3 * escala, std('#ce1126')); box(g, 0.22 * escala, 0.18 * escala, 0.22 * escala, -0.5 * escala, 0.09 * escala, 0.4 * escala, std('#f2c600'));
  return g;
}
const CARTELES_NAVIDAD = [
  { t: 'TAMALES', s: 'Se venden. ¡Encargue los suyos!', fondo: '#d8662f', letra: '#ffffff' },
  { t: 'FESTIVAL DE LA LUZ', s: 'Desfile y conciertos. ¡Todos a San José!', fondo: '#1b3a6b', letra: '#ffd60a' },
  { t: 'PONCHE Y ROSQUILLAS', s: 'Sabor de diciembre', fondo: '#7a1f1f', letra: '#ffe9a8' },
  { t: 'AGUINALDO', s: 'Rifas y ofertas navideñas', fondo: '#1f6b3a', letra: '#ffffff' },
  { t: 'VIERNES NEGRO', s: 'Hasta 50% de descuento', fondo: '#15130f', letra: '#ffd60a' },
  { t: 'CUMBIA Y MERENGUE', s: 'Baile en el salón comunal, sábado 8 pm', fondo: '#8a2be2', letra: '#ffffff' },
];
/** Cartel de temporada, de los que van en postes y paredes del barrio. */
export function cartelNavidad(i = 0) {
  const c = CARTELES_NAVIDAD[i % CARTELES_NAVIDAD.length], g = new THREE.Group();
  box(g, 0.06, 2.0, 0.06, 0, 1.0, 0, std('#444'));
  const map = lienzo(256, 320, (x, w, h) => {
    x.fillStyle = c.fondo; x.fillRect(0, 0, w, h); x.strokeStyle = c.letra; x.lineWidth = 6; x.strokeRect(10, 10, w - 20, h - 20);
    x.fillStyle = c.letra; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = '900 44px system-ui, sans-serif'; const pal = c.t.split(' '); const mitad = pal.length > 1 ? Math.ceil(pal.length / 2) : 1;
    x.fillText(pal.slice(0, mitad).join(' '), w / 2, 100, w * 0.86); if (pal.length > 1) x.fillText(pal.slice(mitad).join(' '), w / 2, 150, w * 0.86);
    x.font = '700 24px system-ui, sans-serif'; x.fillText(c.s, w / 2, 235, w * 0.84);
    x.fillStyle = c.letra; x.font = '900 36px system-ui, sans-serif'; x.fillText('★', w / 2, 280);
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.78), map ? new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }) : std(c.fondo, { side: THREE.DoubleSide }));
  m.position.set(0, 1.5, 0.05); g.add(m); return g;
}
const JERGA = ['PURA VIDA', 'TUANIS', 'QUÉ CHIVA', 'DIAY MAE', 'MAE, QUÉ MAE', 'UPE', 'MAE, QUÉ SALADO', 'DE CHIVA', 'A LA PAR', 'MAE, NO SEA JUPA'];
/** Grafiti con jerga tica de todos los días: nada de política, solo barrio. */
export function grafitiTico(i = 0) {
  const g = new THREE.Group();
  const col = ['#ffd60a', '#ff5a4d', '#7fe0ff', '#b6ff6a', '#ffffff'][i % 5];
  const map = lienzo(512, 128, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.textAlign = 'center'; x.textBaseline = 'middle'; x.save(); x.translate(w / 2, h / 2); x.rotate((i % 3 - 1) * 0.04);
    x.font = '900 60px "Arial Black", sans-serif'; x.lineWidth = 10; x.strokeStyle = '#15130f'; x.strokeText(JERGA[i % JERGA.length], 0, 0, w * 0.94);
    x.fillStyle = col; x.fillText(JERGA[i % JERGA.length], 0, 0, w * 0.94); x.restore();
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.55), map ? new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false }) : std(col, { transparent: true }));
  m.position.set(0, 1.4, 0.03); g.add(m); return g;
}
