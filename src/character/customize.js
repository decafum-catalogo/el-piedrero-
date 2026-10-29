// src/character/customize.js
// Retoques de apariencia para personajes con nombre: recolorea texturas (piel, pelo, ropa, ojos)
// y pinta dibujos sobre la ropa usando la geometría, sin tocar los archivos originales.
import * as THREE from 'three';

const canvasOf = (img) => {
  const w = img.width || img.naturalWidth, h = img.height || img.naturalHeight;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d', { willReadFrequently: true });
  x.drawImage(img, 0, 0, w, h);
  return { c, x, w, h };
};

function setMap(material, canvas, old) {
  const t = new THREE.CanvasTexture(canvas);
  t.flipY = old.flipY;
  t.colorSpace = old.colorSpace;
  t.wrapS = old.wrapS; t.wrapT = old.wrapT;
  t.anisotropy = old.anisotropy || 4;
  material.map = t;
  material.needsUpdate = true;
}

/** Recolorea la textura difusa de un material: fn(r,g,b,a) → [r,g,b] (valores 0..255). */
export function recolor(mesh, fn) {
  const m = mesh.material, old = m.map;
  if (!old?.image) return;
  const { c, x, w, h } = canvasOf(old.image);
  const d = x.getImageData(0, 0, w, h), px = d.data;
  for (let i = 0; i < px.length; i += 4) {
    const o = fn(px[i], px[i + 1], px[i + 2], px[i + 3]);
    px[i] = o[0]; px[i + 1] = o[1]; px[i + 2] = o[2];
  }
  x.putImageData(d, 0, 0);
  setMap(m, c, old);
}

const lum = (r, g, b) => (0.299 * r + 0.587 * g + 0.114 * b) / 255;
const mix = (a, b, t) => a + (b - a) * t;

/** Piel: mezcla hacia un tono objetivo conservando el relieve (luminancia) de la textura original. */
export function skinTone(mesh, [tr, tg, tb], { strength = 0.85, ref = 0.8, gamma = 1 } = {}) {
  recolor(mesh, (r, g, b) => {
    const k = Math.pow(Math.min(1.35, lum(r, g, b) / ref), gamma);
    return [mix(r, Math.min(255, tr * k), strength), mix(g, Math.min(255, tg * k), strength), mix(b, Math.min(255, tb * k), strength)];
  });
}

/** Pelo, barba, cejas: color uniforme que conserva el detalle de las hebras. */
export function hairColor(mesh, [tr, tg, tb], { lift = 0.5 } = {}) {
  recolor(mesh, (r, g, b) => {
    const k = lift + (1 - lift) * Math.min(1, lum(r, g, b) * 3.2);
    return [tr * k, tg * k, tb * k];
  });
}

/** Ojos: cambia el iris (zona con color) a otro tono y deja el blanco del ojo. */
export function irisColor(mesh, [tr, tg, tb]) {
  recolor(mesh, (r, g, b) => {
    const sat = Math.max(r, g, b) - Math.min(r, g, b);
    if (sat < 28) return [r, g, b];
    const k = 0.45 + lum(r, g, b) * 1.4;
    return [Math.min(255, tr * k), Math.min(255, tg * k), Math.min(255, tb * k)];
  });
}

/** Chaqueta: oscurece todo lo que no sea jean (el jean es azul: b > r). */
export function darkenCloth(mesh, factor, tint = [1, 1, 1], { jeans = false } = {}) {
  recolor(mesh, (r, g, b) => {
    if (!jeans && b > r + 14) return [r, g, b];
    const l = lum(r, g, b) * 255 * factor;
    return [l * tint[0], l * tint[1], l * tint[2]];
  });
}

/**
 * Pinta sobre la textura de una prenda según la posición 3D de cada punto (posición de reposo).
 * paint(x, y, z, prev) → [r,g,b] o null para dejar el píxel como está.
 */
export function paintByGeometry(mesh, paint) {
  const m = mesh.material, old = m.map;
  if (!old?.image) return;
  const { c, x, w, h } = canvasOf(old.image);
  const d = x.getImageData(0, 0, w, h), px = d.data;
  const g = mesh.geometry, pos = g.attributes.position, uv = g.attributes.uv, idx = g.index;
  const n = idx ? idx.count : pos.count;
  const P = [0, 0, 0].map(() => new THREE.Vector3());
  const T = [[0, 0], [0, 0], [0, 0]];
  for (let i = 0; i < n; i += 3) {
    for (let k = 0; k < 3; k++) {
      const v = idx ? idx.getX(i + k) : i + k;
      P[k].fromBufferAttribute(pos, v);
      T[k][0] = uv.getX(v) * w;
      // glTF: flipY = false → v crece hacia abajo
      T[k][1] = (old.flipY ? 1 - uv.getY(v) : uv.getY(v)) * h;
    }
    const minX = Math.max(0, Math.floor(Math.min(T[0][0], T[1][0], T[2][0])));
    const maxX = Math.min(w - 1, Math.ceil(Math.max(T[0][0], T[1][0], T[2][0])));
    const minY = Math.max(0, Math.floor(Math.min(T[0][1], T[1][1], T[2][1])));
    const maxY = Math.min(h - 1, Math.ceil(Math.max(T[0][1], T[1][1], T[2][1])));
    const den = (T[1][1] - T[2][1]) * (T[0][0] - T[2][0]) + (T[2][0] - T[1][0]) * (T[0][1] - T[2][1]);
    if (Math.abs(den) < 1e-9) continue;
    for (let yy = minY; yy <= maxY; yy++) {
      for (let xx = minX; xx <= maxX; xx++) {
        const a = ((T[1][1] - T[2][1]) * (xx + 0.5 - T[2][0]) + (T[2][0] - T[1][0]) * (yy + 0.5 - T[2][1])) / den;
        const b = ((T[2][1] - T[0][1]) * (xx + 0.5 - T[2][0]) + (T[0][0] - T[2][0]) * (yy + 0.5 - T[2][1])) / den;
        const cc = 1 - a - b;
        if (a < -0.02 || b < -0.02 || cc < -0.02) continue;
        const X = a * P[0].x + b * P[1].x + cc * P[2].x;
        const Y = a * P[0].y + b * P[1].y + cc * P[2].y;
        const Z = a * P[0].z + b * P[1].z + cc * P[2].z;
        const o = (yy * w + xx) * 4;
        const col = paint(X, Y, Z, [px[o], px[o + 1], px[o + 2]]);
        if (col) { px[o] = col[0]; px[o + 1] = col[1]; px[o + 2] = col[2]; }
      }
    }
  }
  x.putImageData(d, 0, 0);
  setMap(m, c, old);
}

/** Quita de una malla los triángulos cuyo centro cumpla pred(x,y,z) (por ejemplo, el jean de una camiseta). */
export function cutTriangles(mesh, pred) {
  const g = mesh.geometry, pos = g.attributes.position, idx = g.index;
  if (!idx) return;
  const out = [];
  for (let i = 0; i < idx.count; i += 3) {
    const a = idx.getX(i), b = idx.getX(i + 1), c = idx.getX(i + 2);
    const x = (pos.getX(a) + pos.getX(b) + pos.getX(c)) / 3;
    const y = (pos.getY(a) + pos.getY(b) + pos.getY(c)) / 3;
    const z = (pos.getZ(a) + pos.getZ(b) + pos.getZ(c)) / 3;
    if (!pred(x, y, z)) out.push(a, b, c);
  }
  const ng = g.clone();
  ng.setIndex(out);
  mesh.geometry = ng;
}
