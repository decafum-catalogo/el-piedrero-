// Trazado de La Carpio (San José, Costa Rica), sector Garabito / Av. 49.
// Mapa de tiles de 2 m. Calles angostas de 6 m, andenes de un tile, callejones de lastre,
// parque, lote baldío, gasolinera y el río al este. Todo se pinta aquí y Carpio.js lo construye.

export const CARPIO_W = 180;
export const CARPIO_H = 220;

// width = tiles de calzada; la banda va de c-floor((w-1)/2) a c+floor(w/2)
export const H_ROADS = [
  { z: 41, w: 3, name: 'Avenida 61' },
  { z: 61, w: 3, name: 'Avenida 55' },
  { z: 104, w: 4, name: 'Avenida Sarmiento' },
  { z: 135, w: 3, name: 'Avenida 43' },
  { z: 170, w: 3, name: 'Avenida 39' },
  { z: 200, w: 3, name: 'Avenida 33' }
];
export const V_ROADS = [
  { x: 22, w: 3, name: 'Calle 38' },
  { x: 52, w: 3, name: 'Calle 38A' },
  { x: 88, w: 3, name: 'Calle 42' },
  { x: 122, w: 3, name: 'Calle 54' },
  { x: 152, w: 3, name: 'Calle 156' }
];

export const band = ({ w }, c) => [c - Math.floor((w - 1) / 2), c + Math.floor(w / 2)];
export const hBand = (r) => band(r, r.z);
export const vBand = (r) => band(r, r.x);

// Callejones de lastre: { x|z, a, b, w } (a..b a lo largo del callejón)
export const ALLEYS = [
  { axis: 'v', c: 70, a: 107, b: 133, w: 2, name: 'Callejón de lastre' }, // escena 3
  { axis: 'v', c: 36, a: 63, b: 100, w: 2 },
  { axis: 'v', c: 105, a: 137, b: 168, w: 2 },
  { axis: 'v', c: 138, a: 63, b: 100, w: 2 },
  { axis: 'v', c: 38, a: 137, b: 168, w: 2 },
  { axis: 'h', c: 80, a: 2, b: 20, w: 2 },
  { axis: 'h', c: 118, a: 125, b: 150, w: 2 },
  { axis: 'v', c: 70, a: 172, b: 198, w: 2 }
];

// Zonas especiales (tiles inclusivos)
export const AREAS = {
  park: { x0: 93, x1: 117, z0: 80, z1: 100 },        // escena 2: parque de la Av. 49
  lot: { x0: 94, x1: 116, z0: 107, z1: 131 },        // lote baldío con zacate alto
  court: { x0: 96, x1: 114, z0: 80, z1: 88 },        // cancha dentro del parque
  gas: { x0: 73, x1: 81, z0: 44, z1: 59 },           // gasolinera tica (entra por Av. 61 y sale por Av. 55)
  treeCorner: { x0: 54, x1: 62, z0: 107, z1: 114 },  // escena 1
  mana: { x0: 125, x1: 130, z0: 107, z1: 112 },      // pulpería El Maná
  river: { x0: 170, x1: 178 }                        // río Virilla (borde este)
};

const inside = (a, x, z) => x >= a.x0 && x <= a.x1 && z >= a.z0 && z <= a.z1;
export const inArea = inside;

export function buildCarpioMap() {
  const m = Array.from({ length: CARPIO_H }, () => Array(CARPIO_W).fill('building'));
  const set = (x, z, v) => { if (x > 0 && z > 0 && x < CARPIO_W - 1 && z < CARPIO_H - 1) m[z][x] = v; };

  // calles
  for (const r of H_ROADS) { const [a, b] = hBand(r); for (let z = a; z <= b; z++) for (let x = 1; x < CARPIO_W - 1; x++) set(x, z, 'road'); }
  for (const r of V_ROADS) { const [a, b] = vBand(r); for (let x = a; x <= b; x++) for (let z = 1; z < CARPIO_H - 1; z++) set(x, z, 'road'); }

  // callejones (lastre)
  for (const al of ALLEYS) {
    const half = Math.floor((al.w - 1) / 2);
    for (let t = al.a; t <= al.b; t++) for (let k = -half; k <= al.w - 1 - half; k++) {
      const x = al.axis === 'v' ? al.c + k : t, z = al.axis === 'v' ? t : al.c + k;
      if (m[z]?.[x] === 'building') set(x, z, 'dirt');
    }
  }

  // andén de un tile junto a cada calzada
  const isRoad = (v) => v === 'road';
  for (let z = 1; z < CARPIO_H - 1; z++) for (let x = 1; x < CARPIO_W - 1; x++) {
    if (m[z][x] !== 'building') continue;
    let near = false;
    for (let dz = -1; dz <= 1 && !near; dz++) for (let dx = -1; dx <= 1; dx++) if (isRoad(m[z + dz]?.[x + dx])) { near = true; break; }
    if (near) m[z][x] = 'sidewalk';
  }

  // río Virilla al este, con orilla de zacate
  for (let z = 1; z < CARPIO_H - 1; z++) for (let x = AREAS.river.x0 - 3; x <= AREAS.river.x1; x++) {
    if (m[z][x] === 'road' || m[z][x] === 'sidewalk') continue;
    m[z][x] = x >= AREAS.river.x0 ? 'water' : 'grass';
  }

  // parque (escena 2): zacate, sendero central, cancha
  const p = AREAS.park;
  for (let z = p.z0; z <= p.z1; z++) for (let x = p.x0; x <= p.x1; x++) {
    if (m[z][x] !== 'building') continue;
    m[z][x] = inside(AREAS.court, x, z) ? 'floor' : (x === 105 || x === 106) ? 'plaza' : 'grass';
  }
  // lote baldío: zacate alto
  const l = AREAS.lot;
  for (let z = l.z0; z <= l.z1; z++) for (let x = l.x0; x <= l.x1; x++) if (m[z][x] === 'building') m[z][x] = 'grass';

  // gasolinera: piso de concreto
  const g = AREAS.gas;
  for (let z = g.z0; z <= g.z1; z++) for (let x = g.x0; x <= g.x1; x++) if (m[z][x] === 'building') m[z][x] = 'floor';

  // escenas con casa propia: tiles sólidos que no generan casas genéricas
  for (const a of [AREAS.treeCorner, AREAS.mana]) {
    const kind = a === AREAS.mana ? 'mana' : 'cornerHouse';
    const cx0 = a === AREAS.mana ? a.x0 : a.x0 + 3, cx1 = a === AREAS.mana ? a.x1 : a.x0 + 8;
    const cz0 = a === AREAS.mana ? a.z0 : a.z0 + 2, cz1 = a === AREAS.mana ? a.z1 : a.z1;
    for (let z = cz0; z <= cz1; z++) for (let x = cx0; x <= cx1; x++) if (m[z][x] === 'building') m[z][x] = kind;
  }

  // esquina del árbol: el resto del lote queda baldío con zacate (el árbol y la malla van encima)
  { const t = AREAS.treeCorner; for (let z = t.z0 + 1; z <= t.z1; z++) for (let x = t.x0; x <= t.x0 + 2; x++) if (m[z][x] === 'building') m[z][x] = 'grass'; }

  // el interior de las manzanas queda como mar de techos de zinc (casas pegadas unas a otras)

  // perímetro
  for (let x = 0; x < CARPIO_W; x++) m[0][x] = m[CARPIO_H - 1][x] = 'wall';
  for (let z = 0; z < CARPIO_H; z++) m[z][0] = m[z][CARPIO_W - 1] = 'wall';
  return m;
}
