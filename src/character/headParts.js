// src/character/headParts.js
// Pelo, barba y gorras hechos a la medida de la cabeza del cuerpo realista.
// Todo está en el espacio del hueso de la cabeza (metros, Y arriba, Z hacia adelante).
// Medidas de la cabeza (en ese espacio): ancho ±0.085, nuca z≈-0.073, frente z≈0.10, coronilla y≈0.206,
// ojos y≈0.097, cejas y≈0.105, boca y≈0.04, mentón y≈0.02.
import * as THREE from 'three';

export const HEAD_ORIGIN = new THREE.Vector3(0, 1.48, 0.02); // posición del hueso en el modelo en reposo

// ---- ruido de valor 3D (determinista) ----
const hash = (x, y, z) => {
  let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};
const sm = (t) => t * t * (3 - 2 * t);
export function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const fx = sm(x - xi), fy = sm(y - yi), fz = sm(z - zi);
  const l = (a, b, t) => a + (b - a) * t;
  return l(
    l(l(hash(xi, yi, zi), hash(xi + 1, yi, zi), fx), l(hash(xi, yi + 1, zi), hash(xi + 1, yi + 1, zi), fx), fy),
    l(l(hash(xi, yi, zi + 1), hash(xi + 1, yi, zi + 1), fx), l(hash(xi, yi + 1, zi + 1), hash(xi + 1, yi + 1, zi + 1), fx), fy), fz);
}
const fbm = (x, y, z) => noise3(x, y, z) * 0.65 + noise3(x * 2.1, y * 2.1, z * 2.1) * 0.35;

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };

/**
 * Casquete de pelo (o de gorra) sobre el cráneo con línea de nacimiento limpia.
 * @param {object} o
 *  radii: [rx, ry, rz] del elipsoide; center: [x,y,z]
 *  front/side/back: altura (y) donde termina el pelo al frente, en las sienes y en la nuca
 *  bump: {amp, freq} relieve (rizos); colors: {top, low} color arriba y abajo (degradado)
 */
export function hairCap({
  radii = [0.094, 0.118, 0.094], center = [0, 0.1, 0.012],
  front = 0.165, side = 0.088, back = 0.045,
  bump = { amp: 0.0, freq: 60 }, color = 0x15110f, lowColor = null, fade = 0.0,
  rows = 70, cols = 120, seed = 1, roughness = 0.95, taper = 0, taperTo = 0.88
} = {}) {
  const [rx, ry, rz] = radii, [cx, cy, cz] = center;
  const cutY = (x, z) => {
    const sFront = smooth(-0.005, 0.07, z);                 // 0 atrás … 1 al frente
    let y = lerp(back, front, sFront);
    const sSide = smooth(0.055, 0.082, Math.abs(x)) * (1 - sFront * 0.65); // sienes y patillas
    y = lerp(y, Math.min(y, side), sSide);
    return y;
  };
  const pos = [], col = [], idx = [];
  const cTop = new THREE.Color(color), cLow = new THREE.Color(lowColor ?? color);
  const tmp = new THREE.Color();
  for (let j = 0; j <= cols; j++) {
    const phi = (j / cols) * Math.PI * 2;
    // thetaMax por iteración: ángulo polar donde la superficie llega a la altura de corte
    let tMax = Math.PI / 2;
    for (let it = 0; it < 5; it++) {
      const x = Math.sin(tMax) * Math.cos(phi) * rx, z = cz + Math.sin(tMax) * Math.sin(phi) * rz;
      const y = cutY(x, z);
      const c = (y - cy) / ry;
      tMax = Math.acos(Math.min(1, Math.max(-1, c)));
    }
    for (let i = 0; i <= rows; i++) {
      const th = (i / rows) * tMax;
      let dx = Math.sin(th) * Math.cos(phi), dy = Math.cos(th), dz = Math.sin(th) * Math.sin(phi);
      let x = cx + dx * rx, y = cy + dy * ry, z = cz + dz * rz;
      if (bump.amp) {
        const n = fbm(x * bump.freq + seed * 7, y * bump.freq, z * bump.freq) - 0.5;
        // los rizos se achican hacia el borde para que la línea de pelo quede pareja
        const edge = smooth(0, 0.12, i / rows < 0.999 ? (1 - i / rows) : 0);
        x += dx * n * bump.amp * (0.4 + 0.6 * edge); y += dy * n * bump.amp * (0.4 + 0.6 * edge); z += dz * n * bump.amp * (0.4 + 0.6 * edge);
      }
      if (taper) {
        // el borde se hunde hacia el cráneo para que la línea de pelo no tenga escalón
        const f = lerp(taperTo, 1, smooth(0, taper, 1 - i / rows));
        x = cx + (x - cx) * f; y = cy + (y - cy) * f; z = cz + (z - cz) * f;
      }
      pos.push(x, y, z);
      // color: degradado hacia el borde (pelo rapado a los lados) + variación fina
      const k = fade ? smooth(0, fade, 1 - i / rows) : 1;
      tmp.copy(cLow).lerp(cTop, k);
      const v = 0.9 + 0.1 * noise3(x * 90 + 3, y * 90, z * 90);
      col.push(tmp.r * v, tmp.g * v, tmp.b * v);
    }
  }
  const W = rows + 1;
  for (let j = 0; j < cols; j++) for (let i = 0; i < rows; i++) {
    const a = j * W + i, b = (j + 1) * W + i, c = (j + 1) * W + i + 1, d = j * W + i + 1;
    idx.push(a, b, d, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness, side: THREE.DoubleSide }));
  m.castShadow = true;
  return m;
}

/** Barba hecha con la propia piel de la cara: copia los triángulos de la zona, los separa un poco de la piel,
 *  les da relieve y funde el color hacia el de la piel en los bordes (`weight(x,y,z)` → 0..1). */
export function beardFromFace(bodyMesh, weight, { offset = 0.007, amp = 0.004, freq = 110, color = 0xf2f0ec, skinColor = 0xe8b8a8, seed = 3, drop = 0, curls = 0, curlSize = 0.0075 } = {}) {
  const g = bodyMesh.geometry, p = g.attributes.position, idx = g.index;
  const W = new Float32Array(p.count).fill(-1);
  const w = (v) => {
    if (W[v] < 0) W[v] = weight(p.getX(v) - HEAD_ORIGIN.x, p.getY(v) - HEAD_ORIGIN.y, p.getZ(v) - HEAD_ORIGIN.z);
    return W[v];
  };
  const keep = new Map(), pos = [], wts = [], out = [];
  for (let i = 0; i < idx.count; i += 3) {
    const t = [idx.getX(i), idx.getX(i + 1), idx.getX(i + 2)];
    if (Math.max(w(t[0]), w(t[1]), w(t[2])) < 0.02) continue;
    for (const v of t) {
      if (!keep.has(v)) {
        keep.set(v, pos.length / 3);
        pos.push(p.getX(v) - HEAD_ORIGIN.x, p.getY(v) - HEAD_ORIGIN.y, p.getZ(v) - HEAD_ORIGIN.z);
        wts.push(w(v));
      }
      out.push(keep.get(v));
    }
  }
  const ng = new THREE.BufferGeometry();
  ng.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  ng.setIndex(out);
  ng.computeVertexNormals();
  const n = ng.attributes.normal, q = ng.attributes.position, col = [];
  const cB = new THREE.Color(color), cS = new THREE.Color(skinColor), tmp = new THREE.Color();
  for (let i = 0; i < q.count; i++) {
    const x = q.getX(i), y = q.getY(i), z = q.getZ(i), wt = wts[i];
    const k = (offset + (fbm(x * freq + seed, y * freq, z * freq) - 0.5) * 2 * amp) * wt;
    const dy = drop * wt * smooth(0.035, -0.015, y);               // barba más larga bajo el mentón
    q.setXYZ(i, x + n.getX(i) * k, y + n.getY(i) * k - dy, z + n.getZ(i) * k);
    tmp.copy(cS).lerp(cB, smooth(0.15, 0.85, wt));
    const v = 0.9 + 0.1 * noise3(x * 260, y * 260, z * 260);
    col.push(tmp.r * v, tmp.g * v, tmp.b * v);
  }
  ng.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  ng.computeVertexNormals();
  const m = new THREE.Mesh(ng, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, side: THREE.DoubleSide }));
  m.castShadow = true;
  if (!curls) return m;
  // rizos pequeños repartidos sobre la superficie de la barba (más densos donde la barba es más gruesa)
  const grp = new THREE.Group();
  grp.add(m);
  const ci = ng.index, tris = ci.count / 3;
  const inst = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 6, 5), new THREE.MeshStandardMaterial({ color, roughness: 0.95 }), curls);
  let a = 4242 + seed;
  const rnd = () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; };
  const m4 = new THREE.Matrix4(), v = new THREE.Vector3(), nn = new THREE.Vector3(), sc = new THREE.Vector3(), qq = new THREE.Quaternion();
  let placed = 0, guard = 0;
  while (placed < curls && guard++ < curls * 20) {
    const t = Math.floor(rnd() * tris) * 3;
    const ia = ci.getX(t), ib = ci.getX(t + 1), ic = ci.getX(t + 2);
    const wt = (wts[ia] + wts[ib] + wts[ic]) / 3;
    if (wt < 0.7 || rnd() > wt) continue;
    let u = rnd(), w2 = rnd(); if (u + w2 > 1) { u = 1 - u; w2 = 1 - w2; }
    const ww = 1 - u - w2;
    v.set(0, 0, 0); nn.set(0, 0, 0);
    for (const [id, f] of [[ia, u], [ib, w2], [ic, ww]]) {
      v.x += q.getX(id) * f; v.y += q.getY(id) * f; v.z += q.getZ(id) * f;
      nn.x += ng.attributes.normal.getX(id) * f; nn.y += ng.attributes.normal.getY(id) * f; nn.z += ng.attributes.normal.getZ(id) * f;
    }
    v.addScaledVector(nn.normalize(), curlSize * 0.5);
    const r = curlSize * (0.7 + rnd() * 0.6);
    sc.set(r, r * (0.8 + rnd() * 0.5), r);
    m4.compose(v, qq, sc);
    inst.setMatrixAt(placed++, m4);
  }
  inst.count = placed;
  grp.add(inst);
  return grp;
}
