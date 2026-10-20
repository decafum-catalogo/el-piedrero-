import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const cache = new Map();
const loader = new GLTFLoader();

export const IMPORTED_MODELS = Object.freeze({
  car1: { file: 'car1.opt.glb', yaw: Math.PI, size: [4.3, 1.75, 1.76] },
  car2: { file: 'car2.opt.glb', yaw: Math.PI, size: [4.3, 1.45, 1.76] },
  transmilenio: { file: 'tm.opt.glb', yaw: -Math.PI / 2, size: [2.52, 3.5, 18.2] },
  cambuche: { file: 'cambuche.opt.glb', yaw: 0, size: [3.91, 2.1, 2.875] }
});

/** Centra X/Z, apoya en Y=0 y conserva las dimensiones de circulación existentes. */
export function fitImportedModel(source, spec) {
  const oriented = new THREE.Group();
  oriented.add(source);
  source.rotation.y += spec.yaw;
  oriented.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(oriented);
  const size = bounds.getSize(new THREE.Vector3());
  if (Math.min(size.x, size.y, size.z) <= 0) throw new Error('Modelo sin volumen válido.');
  const center = bounds.getCenter(new THREE.Vector3());
  const root = new THREE.Group();
  oriented.position.set(-center.x, -bounds.min.y, -center.z);
  root.add(oriented);
  root.scale.set(spec.size[0] / size.x, spec.size[1] / size.y, spec.size[2] / size.z);
  root.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = true;
    object.receiveShadow = true;
    object.userData.sharedImportedModel = true;
  });
  return root;
}

/** Un GLB por tipo; cada instancia comparte geometría, texturas y material. */
export async function createImportedModel(kind, { ownMaterials = false } = {}) {
  const spec = IMPORTED_MODELS[kind];
  if (!spec) throw new Error(`Modelo desconocido: ${kind}`);
  if (!cache.has(kind)) {
    cache.set(kind, loader.loadAsync(`${import.meta.env?.BASE_URL ?? '/'}models/${spec.file}`)
      .then(gltf => fitImportedModel(gltf.scene, spec)));
  }
  const instance = (await cache.get(kind)).clone(true);
  if (ownMaterials) {
    const materials = new Map();
    instance.traverse(object => {
      if (!object.isMesh) return;
      const clone = material => {
        if (!materials.has(material)) materials.set(material, material.clone());
        return materials.get(material);
      };
      object.material = Array.isArray(object.material) ? object.material.map(clone) : clone(object.material);
    });
    instance.userData.ownedMaterials = [...materials.values()];
  }
  return instance;
}

export function disposeImportedInstance(instance) {
  instance.removeFromParent();
  for (const material of instance.userData.ownedMaterials ?? []) material.dispose();
}
