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
