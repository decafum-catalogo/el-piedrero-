import * as THREE from 'three';

export const LAKE_PARK = Object.freeze({ name: 'Parque del Lago', z0: 222, z1: 318,
  lakeX: 75, lakeZ: 262, radiusX: 50, radiusZ: 26 });
export const LAKE_BRIDGE = Object.freeze({ x0: 67, x1: 83, z0: 220, z1: 306,
  crestStart: 246, crestEnd: 280, rise: 4.8 });

export function onLakeBridge(x, z) {
  return x >= LAKE_BRIDGE.x0 && x <= LAKE_BRIDGE.x1 && z >= LAKE_BRIDGE.z0 && z <= LAKE_BRIDGE.z1;
}

export function bridgeHeight(z) {
  const b = LAKE_BRIDGE;
  if (z <= b.z0 || z >= b.z1) return .02;
  const t = z < b.crestStart ? (z - b.z0) / (b.crestStart - b.z0)
    : z > b.crestEnd ? (b.z1 - z) / (b.z1 - b.crestEnd) : 1;
  return .02 + b.rise * (.5 - .5 * Math.cos(Math.PI * t));
}

export function buildLakeWater(material) {
  const water = new THREE.Mesh(new THREE.CircleGeometry(1, 96), material);
  water.name = 'Agua continua bajo el puente';
  water.rotation.x = -Math.PI / 2;
  water.scale.set(LAKE_PARK.radiusX, LAKE_PARK.radiusZ, 1);
  water.position.set(LAKE_PARK.lakeX, -.18, LAKE_PARK.lakeZ);
  water.receiveShadow = true;
  return water;
}

/** Solo la ampliación; se conserva la posición de todas las calles del centro. */
export function paintLakePark(map) {
  const p = LAKE_PARK, b = LAKE_BRIDGE;
  for (let z = 111; z < map.length - 1; z++) for (let x = 1; x < map[0].length - 1; x++) {
    const wx = x * 2, wz = z * 2;
    const radius = Math.hypot((wx - p.lakeX) / p.radiusX, (wz - p.lakeZ) / p.radiusZ);
    const promenade = Math.abs(radius - 1.14) < .045 || z === 113 || z === 155 || x === 10 || x === 112 ||
      (x === 86 && (wz < 234 || wz > 290));
    map[z][x] = radius < 1 ? 'water' : promenade ? 'plaza' : 'grass';
    if (wx >= b.x0 && wx <= b.x1) {
      map[z][x] = wx >= 70 && wx <= 80 ? 'busway' : 'plaza';
    }
  }
}

/** Estructura estática: tablero elevado, barandas y pilas. El agua usa el material del terreno. */
export function buildLakeBridge() {
  const group = new THREE.Group();
  group.name = 'Puente elevado del Parque del Lago';
  const b = LAKE_BRIDGE;
  const concrete = new THREE.MeshStandardMaterial({ color: '#b1b4ae', roughness: .88 });
  const rail = new THREE.MeshStandardMaterial({ color: '#345960', roughness: .55, metalness: .45 });
  const add = (geometry, material, x, y, z) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z); mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh); return mesh;
  };
  for (let z = b.z0; z < b.z1; z += 2) {
    const y0 = bridgeHeight(z), y1 = bridgeHeight(z + 2);
    const pitch = Math.atan2(y1 - y0, 2);
    const deck = add(new THREE.BoxGeometry(b.x1 - b.x0, .45, Math.hypot(2, y1 - y0)), concrete,
      (b.x0 + b.x1) / 2, (y0 + y1) / 2 - .25, z + 1);
    deck.rotation.x = -pitch;
    for (const x of [b.x0 + .2, b.x1 - .2]) {
      const top = add(new THREE.BoxGeometry(.12, .12, Math.hypot(2, y1 - y0)), rail, x, (y0 + y1) / 2 + 1.1, z + 1);
      top.rotation.x = -pitch;
      add(new THREE.BoxGeometry(.09, 1.12, .09), rail, x, y0 + .56, z);
      if (z % 4 === 0) {
        const mid = add(new THREE.BoxGeometry(.08, .08, Math.hypot(4, bridgeHeight(z + 4) - y0)), rail,
          x, (y0 + bridgeHeight(z + 4)) / 2 + .5, z + 2);
        mid.rotation.x = -Math.atan2(bridgeHeight(z + 4) - y0, 4);
      }
    }
  }
  for (const z of [242, 258, 274, 290]) for (const x of [70, 80]) {
    const top = bridgeHeight(z) - .45;
    add(new THREE.CylinderGeometry(.5, .7, top + .5, 8), concrete, x, (top - .5) / 2, z);
  }
  return group;
}
