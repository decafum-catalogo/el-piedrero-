// src/world/props/PatrolCar.js
// Patrulla de la Fuerza Pública de Costa Rica: carro blanco con franja azul, rótulo en las puertas y
// barra de luces roja y azul que parpadea.
import * as THREE from 'three';
import { makeVehicle } from '../bogota/vehicles.js';

function labelTexture(text) {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = 512; c.height = 96;
  const x = c.getContext('2d');
  if (!x) return null;
  x.fillStyle = 'rgba(0,0,0,0)'; x.clearRect(0, 0, c.width, c.height);
  x.fillStyle = '#12306b'; x.font = 'bold 58px Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, c.width / 2, c.height / 2 + 3);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildPatrolCar() {
  const v = makeVehicle('carro', 0, { beams: false });       // pintura blanca
  const g = v.group;
  const W = v.width, blue = new THREE.MeshStandardMaterial({ color: 0x12306b, roughness: 0.55 });
  // franja azul en la parte baja de ambos lados
  for (const side of [-1, 1]) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.2, 0.02), blue);
    stripe.position.set(0, 0.52, side * (W / 2 + 0.002));
    g.add(stripe);
    const tex = labelTexture('FUERZA PÚBLICA');
    if (tex) {
      const label = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.28), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
      label.position.set(-0.15, 0.86, side * (W / 2 + 0.012));
      label.rotation.y = side > 0 ? 0 : Math.PI;
      g.add(label);
    }
  }
  // barra de luces
  const bar = new THREE.Group();
  const mk = (color, x) => {
    const m = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: color, emissiveIntensity: 0.2 });
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.1, 0.4), m);
    lamp.position.set(0, 0, x); bar.add(lamp); return m;
  };
  const red = mk(0xff1a1a, -0.3), blueLamp = mk(0x1a4dff, 0.3);
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.04, 0.95), new THREE.MeshStandardMaterial({ color: 0x111111 }));
  base.position.y = -0.06; bar.add(base);
  bar.position.set(-0.3, 1.68, 0);
  g.add(bar);
  g.userData.update = (dt, t) => {
    const on = Math.floor(t * 4) % 2 === 0;
    red.emissiveIntensity = on ? 2.2 : 0.15;
    blueLamp.emissiveIntensity = on ? 0.15 : 2.2;
  };
  g.name = 'Patrulla Fuerza Pública';
  return g;
}
