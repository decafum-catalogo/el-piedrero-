// Mobiliario y detalles propios de La Carpio. Cada función devuelve un THREE.Group
// con origen en el suelo. Todo es geometría simple y barata para poder agruparla.
import * as THREE from 'three';

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
  const greens = ['#4f8a2e', '#5f9a34', '#3f7524', '#6aa63a', '#7bb446'];
  const count = Math.round(w * d * density);
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * w, z = (Math.random() - 0.5) * d;
    const h = 1.1 + Math.random() * 1.1;
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.28 + Math.random() * 0.2, h, 5), std(greens[i % greens.length], { roughness: 1 }));
    blade.position.set(x, h / 2, z);
    blade.rotation.set((Math.random() - 0.5) * 0.25, Math.random() * 3, (Math.random() - 0.5) * 0.25);
    g.add(blade);
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
  cyl(g, 0.28 * scale, 2.8 * scale, 0, 1.4 * scale, 0, std('#5a4632'), 7);
  const leaf = ['#2f5a24', '#3a6b2c', '#44782f'];
  for (let i = 0; i < 6; i++) {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry((1.2 + Math.random() * 0.6) * scale, 1), std(leaf[i % 3], { roughness: 1, flatShading: true }));
    m.position.set((Math.random() - 0.5) * 2.4 * scale, (3.2 + Math.random() * 1.2) * scale, (Math.random() - 0.5) * 2.4 * scale); m.castShadow = true; g.add(m);
  }
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
