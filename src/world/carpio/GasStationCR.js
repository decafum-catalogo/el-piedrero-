// Gasolinera de barrio costarricense (genérica, sin marcas): marquesina verde, dos islas de
// surtidores, tiendita "Mini Súper" y tótem de precios. Coordenadas en metros.
import * as THREE from 'three';
import { signTexture } from '../../utils/signs.js';

export const GAS_CR = Object.freeze({ cx: 154, cz: 99, name: 'Servicentro La Carpio' });

export function gasObstaclesCR({ cx, cz } = GAS_CR) {
  return [
    ...[-6, 6].flatMap(dx => [-4, 4].map(dz => ({ x: cx + dx, z: cz + dz, w: .45, d: .45, h: 4.8 }))),
    ...[-3.5, 3.5].flatMap(dx => [-1.6, 1.6].map(dz => ({ x: cx + dx, z: cz + dz, w: .9, d: 1.1, h: 2 }))),
    { x: cx, z: cz + 15.5, w: 12, d: 4, h: 3.4 },
    { x: cx - 8.6, z: cz - 6.5, w: .6, d: .6, h: 8 }
  ];
}

export function buildGasStationCR({ createSign = signTexture, cx = GAS_CR.cx, cz = GAS_CR.cz } = {}) {
  const group = new THREE.Group(); group.name = GAS_CR.name;
  const m = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: .6, ...o });
  const green = m('#1c6b3c'), white = m('#e7e5df', { roughness: .7 }), dark = m('#252c32', { roughness: .7 });
  const yellow = m('#e9b82a', { roughness: .8 }), glass = m('#467783', { roughness: .3, metalness: .2 });
  const box = (w, h, d, x, y, z, material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z); mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh); return mesh;
  };
  const label = (text, sub, w, h, x, y, z, bg = '#1c6b3c', rotY = Math.PI) => {
    const map = createSign({ title: text, sub, bg, fg: '#ffffff', border: false, w: 512, h: 128 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide }));
    mesh.position.set(x, y, z); mesh.rotation.y = rotY; group.add(mesh); return mesh;
  };
  // marquesina
  box(15, .5, 11, cx, 5.05, cz, green);
  box(15.1, .12, 11.1, cx, 4.75, cz, yellow);
  box(14.6, .06, 10.6, cx, 4.78, cz, white);
  for (const dx of [-6, 6]) for (const dz of [-4, 4]) box(.38, 4.65, .38, cx + dx, 2.44, cz + dz, white);
  label('SERVICENTRO', 'LA CARPIO', 7, .45, cx, 5.07, cz - 5.58);
  label('SERVICENTRO', 'LA CARPIO', 7, .45, cx, 5.07, cz + 5.58, '#1c6b3c', 0);
  // islas y surtidores
  for (const dx of [-3.5, 3.5]) {
    box(2.1, .16, 6.6, cx + dx, .2, cz, yellow);
    for (const dz of [-1.6, 1.6]) {
      box(.85, 1.25, 1.1, cx + dx, .94, cz + dz, white);
      box(.9, .55, 1.12, cx + dx, 1.83, cz + dz, green);
      box(.58, .28, .04, cx + dx, 1.75, cz + dz - .58, dark);
    }
  }
  // tiendita
  const sz = cz + 15.5;
  box(12, 3.4, 4, cx, 1.82, sz, white);
  box(12.3, .3, 4.3, cx, 3.65, sz, green);
  for (const x of [cx - 3.5, cx, cx + 3.5]) box(2.9, 1.9, .06, x, 1.72, sz - 2.03, glass);
  label('MINI SÚPER', 'ABIERTO 24 HORAS', 7, .6, cx, 3.12, sz - 2.08);
  // tótem de precios (con las rejas y el cableado del barrio alrededor)
  box(.36, 8, .36, cx - 8.6, 4.2, cz - 6.5, dark);
  box(2.2, 3.4, .3, cx - 8.6, 7.2, cz - 6.5, green);
  label('REGULAR', '₡ 695', 1.9, .8, cx - 8.6, 8.0, cz - 6.65, '#1c6b3c');
  label('DIÉSEL', '₡ 640', 1.9, .8, cx - 8.6, 6.7, cz - 6.65, '#252c32');
  return group;
}
