// src/world/districts/Carpio.js
// La Carpio (San José, Costa Rica), sector Garabito / Av. 49. Reutiliza el motor de casas, suelo,
// colisiones y peatones de Bogota.js y cambia el trazado, el tamaño de las casas y las escenas.
import * as THREE from 'three';
import { Bogota } from './Bogota.js';
import { TILE_SIZE } from '../../utils/constants.js';
import { signTexture } from '../../utils/signs.js';
import * as TX from '../bogota/textures.js';
import * as BP from '../bogota/props.js';
import * as CP from '../carpio/props.js';
import { Farol } from '../props/Farol.js';
import { Banca } from '../props/Banca.js';
import { PedestrianNavigation } from '../bogota/PedestrianNavigation.js';
import { TrafficRoute } from '../bogota/TrafficRoute.js';
import { makeVehicle } from '../bogota/vehicles.js';
import { Npc } from '../../entities/Npc.js';
import { buildGasStationCR, gasObstaclesCR, GAS_CR } from '../carpio/GasStationCR.js';
import { buildCarpioMap, CARPIO_W, CARPIO_H, H_ROADS, V_ROADS, AREAS, hBand, vBand } from '../carpio/CarpioLayout.js';

const T = TILE_SIZE;
const W = (t) => t * T;
const WALKABLE = new Set(['road', 'sidewalk', 'dirt', 'grass', 'plaza', 'floor']);
const GROUND_HEIGHTS = Object.freeze({ road: 0, sidewalk: 0.12, floor: 0.12, dirt: 0.04, grass: 0.06, plaza: 0.12, water: -0.18 });
// Terreno ondulado y suave (cuestas moderadas, ~4 % de pendiente típica). Las zonas planas
// (gasolinera, parque, casas ancla) se aplanan para que lo construido encima no se hunda.
const smooth = (t) => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };
const rawTerrain = (x, z) => Math.max(0, 1.6 * Math.sin(x / 116) + 1.1 * Math.sin(z / 148 + 1) + 0.35 * Math.sin((x + z) / 52) + 2.2);
const FLATS = [AREAS.gas, AREAS.park, AREAS.mana, AREAS.treeCorner, AREAS.lot].map(a => ({ a, h: rawTerrain(W((a.x0 + a.x1) / 2), W((a.z0 + a.z1) / 2)) }));
export function terrainAt(x, z) {
  let t = rawTerrain(x, z);
  for (const { a, h } of FLATS) {
    const dx = Math.max(W(a.x0) - x, 0, x - W(a.x1)), dz = Math.max(W(a.z0) - z, 0, z - W(a.z1));
    const w = 1 - smooth(Math.hypot(dx, dz) / 16);
    t = t * (1 - w) + h * w;
  }
  return t * (1 - smooth((x - W(AREAS.river.x0 - 22)) / W(14)));
}
export const flatHeight = (area) => FLATS.find(f => f.a === area).h;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const CARPIO_LAYOUT_VERSION = 100;

export class Carpio extends Bogota {
  constructor() {
    super();
    this.width = CARPIO_W;
    this.height = CARPIO_H;
    this.size = Math.max(this.width, this.height);
    this.populationScale = 3;
    this.layoutVersion = CARPIO_LAYOUT_VERSION;
    this.busServices = [];
    this.vendors = [];
    this.lakePark = null;
  }

  // ---------- ganchos ----------
  _onBridge() { return false; }
  _planUrban() { return []; }
  _floors() { return Math.random() < 0.7 ? 1 : 2; }
  _fillHeight(type) { return type === 'wall' ? 9 : 3.3; }
  _shopFront() { return Math.random() < 0.18; }
  _houseStyle(ruin) { return ruin ? 'ruina' : Math.random() < 0.18 ? 'ladrillo' : 'pintada'; }
  _baseRoofTexture() { return TX.zinc(30, '#9fa5a8'); }
  _clayChance() { return 0.08; }
  _obstacles() { return gasObstaclesCR().map(o => ({ ...o, y: flatHeight(AREAS.gas) })); }
  migrateSavedPosition(position) { return [...position]; }

  _buildWater(material) {
    const r = AREAS.river;
    const wTiles = r.x1 - r.x0 + 1;
    const water = new THREE.Mesh(new THREE.PlaneGeometry(W(wTiles), W(CARPIO_H)), material);
    water.rotation.x = -Math.PI / 2;
    water.position.set(W((r.x0 + r.x1) / 2), -0.18, W(CARPIO_H / 2));
    water.receiveShadow = true;
    water.name = 'Río Virilla';
    return water;
  }

  /** Techo de zinc a una agua, con alero hacia la calle, sobre la losa plana de la casa. */
  _afterHouse(shell, { sx, sz, h, dx, dz, alongX, yaw, ruin }) {
    if (ruin) return;
    this._zincMats ??= [['#a3a8ab', 31], ['#9298a0', 32], ['#8a9a9a', 33], ['#a85a42', 34], ['#b9bcbe', 35], ['#7d8a7a', 36]].map(([c, seed]) => new THREE.MeshStandardMaterial({ map: TX.zinc(seed, c).map, roughness: 0.55, metalness: 0.25 }));
    const span = alongX ? sx : sz, depth = alongX ? sz : sx;
    const tilt = 0.13;
    const slab = new THREE.Mesh(new THREE.BoxGeometry(span + 0.4, 0.06, depth + 0.9), pick(this._zincMats));
    const g = new THREE.Group();
    g.rotation.y = yaw;
    g.position.set(0, h + 0.18 + Math.sin(tilt) * depth / 2, 0);
    slab.position.z = 0.3;
    slab.rotation.x = tilt;
    slab.castShadow = slab.receiveShadow = true;
    g.add(slab);
    shell.roof.add(g);
  }

  // ---------- trazado ----------
  _layout() { return buildCarpioMap(); }

  getGroundHeight(x, z) {
    return (GROUND_HEIGHTS[this.map[Math.round(z / T)]?.[Math.round(x / T)]] ?? 0) + terrainAt(x, z);
  }

  /** Eleva cada vértice (en coordenadas de mundo) según el terreno. */
  _warp(g) {
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) + terrainAt(p.getX(i), p.getZ(i)));
    g.computeVertexNormals();
  }

  _baseY(cx, cz, w, d) {
    let low = Infinity;
    for (const [ox, oz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 0]]) low = Math.min(low, terrainAt(cx + ox * w / 2, cz + oz * d / 2));
    return low - 0.12;
  }
  getMovementGroundHeight(x, z) { return this.getGroundHeight(x, z); }

  // ---------- construcción ----------
  build(scene, collisions) {
    this.scene = scene;
    const map = this.map = this._layout();
    this.vendors = [];
    this._buildGround(map);
    const gm = this.groundMaterials;
    gm.grass.map = null; gm.grass.color.set('#6f9f3d'); gm.dirt.color.set('#a08a6a'); gm.road.color.set('#cfcfcf');
    this._buildMarkings();
    this._buildBlocks(map);
    this._buildCollisions(map, collisions);
    this._buildStreetProps(map);
    this._buildScenes();
    this._buildScatter();

    const cer = BP.cerros(520);
    cer.position.set(-130, 0, W(this.height / 2));
    cer.rotation.y = Math.PI / 2;
    this.group.add(cer);

    this._mergeStatic();
    this.group.add(this.buildingVisibility.buildClosedView());
    scene.add(this.group);

    this.isWalkableAt = (wx, wz) => {
      const tx = Math.round(wx / T), tz = Math.round(wz / T);
      if (tx < 0 || tz < 0 || tx >= this.width || tz >= this.height) return false;
      return WALKABLE.has(map[tz][tx]);
    };

    const nw = (tx, tz) => {
      for (let r = 0; r < 8; r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
        const t = map[tz + dz]?.[tx + dx];
        if (t === 'sidewalk' || t === 'grass' || t === 'dirt' || t === 'plaza') return { x: W(tx + dx), z: W(tz + dz) };
      }
      return { x: W(tx), z: W(tz) };
    };
    this.reserved = {
      spawn: nw(55, 107),          // esquina del árbol (escena 1)
      respawn: nw(56, 107),
      sell: nw(105, 140),          // la chatarrera, en el callejón
      bed: nw(96, 110),            // el chante, en el lote baldío
      dealer: nw(56, 111),         // Celso, en la esquina del árbol
      craft: nw(98, 112),
      shop: nw(92, 102)            // Pulpería Donde Tilin, junto al parque
    };
    this.isNearReserved = (x, z, dist = 6) =>
      Object.values(this.reserved).some((r) => Math.hypot(x - r.x, z - r.z) < dist);

    this.getSpawnGrid = () => {
      const grid = [];
      for (let tz = 2; tz < this.height - 2; tz += 3) {
        for (let tx = 2; tx < this.width - 2; tx += 3) {
          if (!['sidewalk', 'dirt', 'grass', 'plaza'].includes(map[tz][tx])) continue;
          const x = W(tx), z = W(tz);
          if (this.isNearReserved(x, z)) continue;
          grid.push(new THREE.Vector3(x, 0, z));
        }
      }
      return grid;
    };

    this._spawnPeople();
  }

  // ---------- calles ----------
  _buildMarkings() {
    const white = [], pits = [], puddles = [];
    const plane = (w, d, x, z, y = 0.016) => {
      const g = new THREE.PlaneGeometry(w, d, Math.max(1, Math.round(w / 1.2)), Math.max(1, Math.round(d / 1.2)));
      g.rotateX(-Math.PI / 2); g.translate(x, y, z); this._warp(g); return g;
    };
    // nombres de las calles pintados en el asfalto, como en Street View
    const label = (title, x, z, rotY) => {
      const map = signTexture({ title, bg: null, fg: '#d9d9d2', border: false, w: 512, h: 160 });
      const mat = new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
      const geo = new THREE.PlaneGeometry(5, 1.5, 8, 3);
      geo.rotateX(-Math.PI / 2); geo.rotateY(rotY); geo.translate(x, 0.02, z); this._warp(geo);
      this.group.add(new THREE.Mesh(geo, mat));
    };
    for (const r of H_ROADS) for (let x = 20; x < CARPIO_W - 20; x += 45) label(r.name.replace('Avenida', 'AV.'), W(x), W(r.z), 0);
    for (const r of V_ROADS) for (let z = 20; z < CARPIO_H - 20; z += 45) label(r.name.replace('Calle', 'C.'), W(r.x), W(z), Math.PI / 2);
    // línea de borde amarilla discontinua en Sarmiento
    const s = H_ROADS.find(r => r.name === 'Avenida Sarmiento');
    const sc = W(s.z + 0.5);
    for (let x = 4; x < W(CARPIO_W) - 4; x += 4) white.push(plane(1.6, 0.14, x, sc));
    // baches: parches oscuros con borde claro y algunos charcos
    for (let z = 2; z < this.height - 2; z++) for (let x = 2; x < this.width - 2; x++) {
      if (this.map[z][x] !== 'road' || Math.random() > 0.035) continue;
      const rx = rand(0.25, 0.75), rz = rand(0.2, 0.55);
      const x0 = W(x) + rand(-0.9, 0.9), z0 = W(z) + rand(-0.9, 0.9);
      const ring = new THREE.CircleGeometry(1, 10); ring.rotateX(-Math.PI / 2); ring.scale(rx * 1.25, 1, rz * 1.25); ring.translate(x0, 0.014, z0); this._warp(ring);
      const pit = new THREE.CircleGeometry(1, 10); pit.rotateX(-Math.PI / 2); pit.scale(rx, 1, rz); pit.translate(x0, 0.02, z0); this._warp(pit);
      pits.push(ring);
      (Math.random() < 0.3 ? puddles : pits).push(pit);
    }
    const merge = (list, mat) => {
      if (!list.length) return;
      const g = new THREE.Group(); // se funde luego con _mergeStatic
      for (const geo of list) { const mesh = new THREE.Mesh(geo, mat); mesh.receiveShadow = true; g.add(mesh); }
      this.group.add(g);
    };
    merge(white, new THREE.MeshStandardMaterial({ color: '#e0a800', roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 }));
    merge(pits, new THREE.MeshStandardMaterial({ color: '#2a2a28', roughness: 1, polygonOffset: true, polygonOffsetFactor: -3 }));
    merge(puddles, new THREE.MeshStandardMaterial({ color: '#2f434a', roughness: 0.15, metalness: 0.3, polygonOffset: true, polygonOffsetFactor: -4 }));
  }

  /** Postes de concreto con luminaria cada ~16 m y cables aéreos enredados entre ellos. */
  _buildStreetProps(map) {
    const poles = [];
    const place = (tx, tz, light) => {
      const farol = new Farol(new THREE.Vector3(W(tx), this.getGroundHeight(W(tx), W(tz)), W(tz)), { addLight: light });
      farol.group.userData.noMerge = true;
      this.group.add(farol.group);
      this.props.push({ instance: farol });
      poles.push(farol.group.position.clone());
    };
    let n = 0;
    for (const r of H_ROADS) {
      const [a, b] = hBand(r);
      for (let x = 6; x < CARPIO_W - 8; x += 8) {
        const tz = (x / 8) % 2 ? a - 1 : b + 1;
        if (map[tz]?.[x] === 'sidewalk') place(x, tz, n++ % 3 === 0);
      }
    }
    for (const r of V_ROADS) {
      const [a, b] = vBand(r);
      for (let z = 6; z < CARPIO_H - 8; z += 8) {
        const tx = (z / 8) % 2 ? a - 1 : b + 1;
        if (map[z]?.[tx] === 'sidewalk') place(tx, z, n++ % 3 === 0);
      }
    }
    this._buildOverheadCables(poles);
    // carretillos
    this._vendor(W(108), W(102), Math.PI, 'chaza', 'Carretillo de la Avenida 49', ['agua', 'pan', 'cafe']);
    this._vendor(W(124.5), W(114), Math.PI / 2, 'fritanga', 'Fritanga de la Calle 54', ['lataComida', 'pan', 'refresco']);
  }

  // ---------- escenas ancla ----------
  _put(obj, tx, tz, rot = 0) { return this._add(obj, W(tx), W(tz), rot); }

  _deco({ x0, x1, z0, z1, h = 3.3, wall = '#e8dcb8', roof = '#c9a227', sign, signFace = 'n', signW = 6 }) {
    const w = (x1 - x0 + 1) * T, d = (z1 - z0 + 1) * T;
    const cx = W((x0 + x1) / 2), cz = W((z0 + z1) / 2);
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: wall, roughness: 0.9 }));
    body.position.y = h / 2; body.castShadow = body.receiveShadow = true; g.add(body);
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.07, d + 0.9), new THREE.MeshStandardMaterial({ color: roof, roughness: 0.5, metalness: 0.3 }));
    slab.position.set(0, h + 0.3, -0.2); slab.rotation.x = -0.12; slab.castShadow = true; g.add(slab);
    if (sign) {
      const map = signTexture({ title: sign.title, sub: sign.sub ?? '', bg: sign.bg ?? '#f4f1e6', fg: sign.fg ?? '#1d3d8f', w: 768, h: 192 });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(signW, signW / 4), new THREE.MeshBasicMaterial({ map }));
      const faces = { n: [0, 2.3, -d / 2 - 0.04, Math.PI], w: [-w / 2 - 0.04, 2.3, 0, -Math.PI / 2] };
      const [px, py, pz, ry] = faces[signFace];
      plane.position.set(px, py, pz); plane.rotation.y = ry; g.add(plane);
      // reja y puerta
      const gate = CP.blackGate(2, 2.1);
      gate.position.set(signFace === 'n' ? -w / 4 : px - 0.05, 0, signFace === 'n' ? pz - 0.05 : -d / 4);
      gate.rotation.y = signFace === 'n' ? Math.PI : -Math.PI / 2;
      g.add(gate);
    }
    g.position.set(cx, this.getGroundHeight(cx, cz), cz);
    this.group.add(g);
    return g;
  }

  _buildScenes() {
    // --- Escena 1: la esquina del árbol ---
    this._put(CP.bigTree(1.35), 55.5, 109.5);
    this._put(CP.solarPole(), 54, 107.3, 0);
    this._put(CP.orangeFence(7), 56.5, 111.8, Math.PI / 2);
    this._put(CP.orangeFence(5), 56.4, 108.4, 0);
    const red = makeVehicle('carro', 3, { beams: false }).group;
    this._put(red, 52.9, 111, Math.PI / 2);
    const t = AREAS.treeCorner;
    this._deco({ x0: t.x0 + 3, x1: t.x0 + 8, z0: t.z0 + 2, z1: t.z1, wall: '#e9dcae', roof: '#e2b92a',
      sign: { title: 'EL SEÑOR ES MI PASTOR', bg: '#f6f2e2', fg: '#1d3d8f' }, signFace: 'n', signW: 5.2 });

    // --- Escena 2: el parque ---
    const p = AREAS.park, c = AREAS.court;
    const fence = (x0, z0, x1, z1) => {
      const len = Math.hypot(x1 - x0, z1 - z0) * T;
      this._put(CP.chainLink(len), (x0 + x1) / 2, (z0 + z1) / 2, z0 === z1 ? 0 : Math.PI / 2);
    };
    fence(p.x0 - 0.5, p.z0 - 0.5, p.x0 - 0.5, p.z1 + 0.5);
    fence(p.x0 - 0.5, p.z1 + 0.5, 104.5, p.z1 + 0.5);
    fence(106.5, p.z1 + 0.5, p.x1 + 0.5, p.z1 + 0.5);
    fence(p.x1 + 0.5, p.z0 - 0.5, p.x1 + 0.5, p.z1 + 0.5);
    this._put(CP.playground(), 99, 93, 0);
    for (let i = 0; i < 4; i++) this._put(CP.exerciseMachine(), 109 + i * 2, 95, Math.PI);
    this._put(CP.hoop(), c.x0 + 1.5, (c.z0 + c.z1) / 2, Math.PI / 2);
    this._put(CP.hoop(), c.x1 - 1.5, (c.z0 + c.z1) / 2, -Math.PI / 2);
    // sendero con guía táctil amarilla
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, (p.z1 - p.z0) * T), new THREE.MeshStandardMaterial({ color: '#e5b822', roughness: 0.8 }));
    strip.position.set(W(105.5), flatHeight(AREAS.park) + 0.14, W((p.z0 + p.z1) / 2)); strip.receiveShadow = true; this.group.add(strip);
    for (let i = 0; i < 10; i++) this._put(BP.tree(rand(0.9, 1.3)), rand(p.x0 + 1, p.x1 - 1), rand(c.z1 + 2, p.z1 - 1));
    for (const [x, z, r] of [[102, 90, 0], [110, 90, Math.PI], [101.5, 97, 0], [112, 98, Math.PI]]) {
      const b = new Banca(new THREE.Vector3(W(x), this.getGroundHeight(W(x), W(z)), W(z)), r); this.group.add(b.group);
    }

    // --- Escena 3: el callejón de lastre ---
    this._put(CP.blackGate(3.2, 2.1), 69.45, 118, Math.PI / 2);
    this._put(CP.dirtBike(), 70.3, 120.5, Math.PI / 2);
    this._put(CP.junkPile(), 71.5, 128, 0.4);

    // --- Lote baldío con zacate alto ---
    const l = AREAS.lot;
    const lw = (l.x1 - l.x0 + 1) * T, ld = (l.z1 - l.z0 + 1) * T;
    for (const [fx, fz] of [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]]) {
      this._put(CP.tallGrass(lw / 2, ld / 2, 0.22), (l.x0 + l.x1) / 2 + fx * (l.x1 - l.x0), (l.z0 + l.z1) / 2 + fz * (l.z1 - l.z0));
    }
    for (const [x, z, r] of [[110, 118, 0.4], [100, 124, 2.1], [113, 112, 1]]) this._put(BP.shack(), x, z, r);
    this._put(BP.fireBarrel(), 98, 111);
    this._put(CP.bigTree(1.1), 95.5, 126);

    // --- Pulpería El Maná ---
    const mn = AREAS.mana;
    this._deco({ x0: mn.x0, x1: mn.x1, z0: mn.z0, z1: mn.z1, wall: '#d9a63c', roof: '#a3503c',
      sign: { title: 'EL MANÁ', sub: 'PULPERÍA · VÍVERES', bg: '#2b5aa8', fg: '#ffffff' }, signFace: 'w', signW: 4.6 });

    // --- Gasolinera tica ---
    const gas = buildGasStationCR({ createSign: signTexture, cx: GAS_CR.cx, cz: GAS_CR.cz });
    gas.position.y = flatHeight(AREAS.gas) + 0.12;
    this.group.add(gas);
  }

  /** Basura, matas, árboles y cambuches regados por el barrio. */
  _buildScatter() {
    const map = this.map;
    const tryPlace = (types, fn, count) => {
      let placed = 0, guard = 0;
      while (placed < count && guard++ < count * 30) {
        const x = 3 + Math.floor(Math.random() * (CARPIO_W - 6)), z = 3 + Math.floor(Math.random() * (CARPIO_H - 6));
        if (!types.includes(map[z][x]) || this.isNearArea(x, z)) continue;
        fn(x + rand(-0.4, 0.4), z + rand(-0.4, 0.4)); placed++;
      }
    };
    tryPlace(['sidewalk'], (x, z) => this._put(BP.trashPile(3 + Math.floor(Math.random() * 4)), x, z, rand(0, 3)), 90);
    tryPlace(['sidewalk'], (x, z) => this._put(BP.tree(rand(0.9, 1.4)), x, z), 45);
    tryPlace(['grass'], (x, z) => this._put(BP.tree(rand(0.9, 1.5)), x, z), 30);
    tryPlace(['grass'], (x, z) => this._put(CP.tallGrass(3, 3, 0.9), x, z), 60);
    tryPlace(['dirt'], (x, z) => this._put(Math.random() < 0.5 ? BP.trashPile(5) : BP.mattress(), x, z, rand(0, 3)), 14);
  }

  isNearArea(x, z) {
    return [AREAS.park, AREAS.treeCorner, AREAS.mana, AREAS.gas].some(a => x >= a.x0 - 1 && x <= a.x1 + 1 && z >= a.z0 - 1 && z <= a.z1 + 1);
  }

  // ---------- tránsito ----------
  getParkingSpots() {
    const m = this.map, spots = [];
    for (let z = 4; z < m.length - 4; z++) for (let x = 4; x < m[0].length - 4; x++) {
      if (m[z][x] !== 'road' || (x * 7 + z * 13) % 14 !== 0) continue;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        if (m[z + dz][x + dx] !== 'sidewalk') continue;
        spots.push({ x: W(x) + dx * 0.4, z: W(z) + dz * 0.4, rot: dx !== 0 ? Math.PI / 2 : 0 });
      }
    }
    return spots;
  }

  getTrafficRoutes() {
    const lane = ({ c, w }, side) => W(c + side * w / 4);
    const H = H_ROADS.map(r => ({ c: r.z + (r.w % 2 ? 0 : 0.5), w: r.w }));
    const V = V_ROADS.map(r => ({ c: r.x, w: r.w }));
    const circuit = (l, r, t, b) => {
      try { return new TrafficRoute(lane(V[l], 1), lane(V[r], -1), lane(H[t], 1), lane(H[b], -1), 3.2); } catch { return null; }
    };
    const routes = [circuit(0, 1, 0, 1), circuit(1, 2, 1, 2), circuit(2, 3, 1, 2), circuit(1, 2, 2, 3), circuit(3, 4, 2, 3), circuit(0, 1, 2, 3)].filter(Boolean);
    routes.alternatives = routes;
    return routes;
  }

  getBusRoute() { return null; }

  // ---------- gente ----------
  _createPedestrianNavigation() {
    const m = this.map;
    const verticalRoad = (x) => V_ROADS.some(r => { const [a, b] = vBand(r); return x >= a && x <= b; });
    return new PedestrianNavigation(m, T, {
      isCrossing: (x, z) => (verticalRoad(x) ? z % 10 < 2 : x % 10 < 2),
      groundHeight: (x, z) => this.getGroundHeight(x, z)
    });
  }

  _spawnPeople() {
    const navigation = this.pedestrianNavigation = this._createPedestrianNavigation();
    const walk = (x, z) => navigation.isWalkableAt(x, z);
    const candidates = navigation.nodes.filter(node => !node.crossing);
    const count = Math.min(candidates.length, 70);
    for (let i = 0; i < count; i++) {
      const node = candidates[Math.floor((i + 0.5) * candidates.length / count)];
      const position = new THREE.Vector3(W(node.x), this.getGroundHeight(W(node.x), W(node.z)), W(node.z));
      this.npcs.push(new Npc(this.scene, position, {
        navigation, groundHeight: navigation.groundHeight, isWalkable: walk, gastada: true
      }));
    }
  }

  async preloadDetails() {
    await Promise.all(this.props.map(prop => prop.instance.preloadModel?.()));
    this.group.updateWorldMatrix(true, true);
  }
}
