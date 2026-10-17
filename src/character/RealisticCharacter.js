// src/character/RealisticCharacter.js
// Personaje realista (prueba): malla de MakeHuman/MPFB2 con esqueleto Mixamo + animaciones Mixamo.
// Expone la misma interfaz que createCharacter(): { group, setLook, update }.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_URL = '/models/habitante.glb';
const ANIM_URL = '/models/animaciones-prueba.glb'; // solo para comparar; las finales se bajan de Mixamo

// Altura del modelo (m) → misma escala que el personaje procedural
export const REALISTIC_SCALE = 1.08;

// Piezas con transparencia (pelo, barba, cejas, pestañas)
const ALPHA_PARTS = ['hair', 'beard', 'eyebrow', 'eyelash'];

const _q = new THREE.Quaternion();

/**
 * Retarget por rotaciones en espacio mundo:
 *   mundoDestino(t) = mundoOrigen(t) · reposoOrigen⁻¹ · reposoDestino
 *   localDestino(t) = mundoPadreDestino(t)⁻¹ · mundoDestino(t)
 * Funciona aunque los huesos tengan otros ejes (roll), siempre que ambas poses de reposo
 * sean parecidas (T/A). Devuelve un clip solo con rotaciones (animación en el sitio).
 */
function retargetClip(srcRoot, srcClip, tgtRoot, fps = 30) {
  const bonesOf = (root) => {
    const map = new Map();
    root.traverse((o) => { if (o.isBone) map.set(o.name, o); });
    return map;
  };
  const src = bonesOf(srcRoot);
  const tgt = bonesOf(tgtRoot);

  // Poses de reposo (las de la escena tal como se cargó); el origen se restaura al final
  const srcLocalRest = new Map([...src].map(([n, b]) => [n, [b.position.clone(), b.quaternion.clone(), b.scale.clone()]]));
  srcRoot.updateMatrixWorld(true);
  tgtRoot.updateMatrixWorld(true);

  // El esqueleto de Mixamo mira hacia −Z y el de MakeHuman hacia +Z: giro de 180° en Y
  const C = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
  const Cinv = C.clone().invert();

  // Pone el destino en la misma pose de reposo que el origen (T-pose): alinea cada hueso
  // con su primer hijo para que apunten igual que en el origen (MakeHuman viene en A-pose)
  toTPose(src, tgt, tgtRoot, C);
  const restSrc = new Map([...src].map(([n, b]) => [n, b.getWorldQuaternion(new THREE.Quaternion())]));
  const restTgt = new Map([...tgt].map(([n, b]) => [n, b.getWorldQuaternion(new THREE.Quaternion())]));
  const restLocal = new Map([...tgt].map(([n, b]) => [n, b.quaternion.clone()]));
  // Rotación mundo del padre del hueso raíz del destino (fija)
  const rootParentWorld = new Map();
  for (const [n, b] of tgt) {
    if (!b.parent?.isBone) rootParentWorld.set(n, b.parent.getWorldQuaternion(new THREE.Quaternion()));
  }

  const mixer = new THREE.AnimationMixer(srcRoot);
  mixer.clipAction(srcClip).play();

  const frames = Math.max(2, Math.round(srcClip.duration * fps) + 1);
  const times = new Float32Array(frames);
  const values = new Map([...tgt.keys()].map((n) => [n, new Float32Array(frames * 4)]));
  const world = new Map();

  for (let f = 0; f < frames; f++) {
    const t = Math.min(srcClip.duration, f / fps);
    times[f] = t;
    mixer.setTime(t);
    srcRoot.updateMatrixWorld(true);
    world.clear();
    // Recorre el destino de padres a hijos
    tgtRoot.traverse((b) => {
      if (!b.isBone) return;
      const parentW = b.parent?.isBone ? world.get(b.parent.name) : rootParentWorld.get(b.name);
      let w;
      const s = src.get(b.name);
      if (s) {
        // delta del origen, llevado al marco del destino (C·delta·C⁻¹), sobre el reposo del destino
        const delta = s.getWorldQuaternion(new THREE.Quaternion())
          .multiply(_q.copy(restSrc.get(b.name)).invert());
        w = C.clone().multiply(delta).multiply(Cinv).multiply(restTgt.get(b.name));
      } else {
        w = parentW.clone().multiply(restLocal.get(b.name));
      }
      world.set(b.name, w);
      const local = parentW.clone().invert().multiply(w);
      local.toArray(values.get(b.name), f * 4);
    });
  }
  mixer.stopAllAction();
  mixer.uncacheRoot(srcRoot);
  for (const [n, [p, q, s]] of srcLocalRest) {
    const b = src.get(n);
    b.position.copy(p); b.quaternion.copy(q); b.scale.copy(s);
  }
  srcRoot.updateMatrixWorld(true);

  const tracks = [...values].map(([n, v]) => new THREE.QuaternionKeyframeTrack(`${n}.quaternion`, times, v));
  return new THREE.AnimationClip(srcClip.name, srcClip.duration, tracks);
}

/** Rota los huesos del destino para que cada uno apunte a su hijo igual que en el origen. */
function toTPose(src, tgt, tgtRoot, C) {
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  const r = new THREE.Quaternion(), w = new THREE.Quaternion(), pw = new THREE.Quaternion();
  const order = [];
  tgtRoot.traverse((o) => { if (o.isBone) order.push(o); });
  for (const bone of order) {
    const s = src.get(bone.name);
    const child = bone.children.find((c) => c.isBone && src.has(c.name));
    if (!s || !child) continue;
    tgtRoot.updateMatrixWorld(true);
    const sc = src.get(child.name);
    // dirección actual del destino y dirección deseada (la del origen, girada al marco del destino)
    a.copy(child.getWorldPosition(new THREE.Vector3())).sub(bone.getWorldPosition(new THREE.Vector3())).normalize();
    b.copy(sc.getWorldPosition(new THREE.Vector3())).sub(s.getWorldPosition(new THREE.Vector3())).applyQuaternion(C).normalize();
    if (a.lengthSq() < 1e-8 || b.lengthSq() < 1e-8) continue;
    r.setFromUnitVectors(a, b);
    bone.getWorldQuaternion(w);
    bone.parent.getWorldQuaternion(pw);
    bone.quaternion.copy(pw.invert().multiply(r.multiply(w)));
  }
  tgtRoot.updateMatrixWorld(true);
}

export async function createRealisticCharacter() {
  const loader = new GLTFLoader();
  const [model, anims] = await Promise.all([
    loader.loadAsync(MODEL_URL),
    loader.loadAsync(ANIM_URL)
  ]);

  const group = new THREE.Group();
  const root = model.scene;
  root.scale.setScalar(REALISTIC_SCALE);
  group.add(root);

  root.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true;
    o.receiveShadow = true;
    o.frustumCulled = false; // las mallas con skin se recortan mal al animar
    const name = o.name.toLowerCase();
    const m = o.material;
    if (name.includes('hair')) {
      // pelo: recorte nítido, escribe profundidad (se ordena bien consigo mismo)
      m.transparent = false;
      m.alphaTest = 0.08;
      m.side = THREE.DoubleSide;
    } else if (ALPHA_PARTS.some((p) => name.includes(p))) {
      // barba, cejas, pestañas: textura suave → mezcla, sin escribir profundidad
      m.transparent = true;
      m.depthWrite = false;
      m.alphaTest = 0.02;
      m.side = THREE.DoubleSide;
      o.renderOrder = 2;
    } else {
      m.transparent = false;
      m.alphaTest = 0;
      m.depthWrite = true;
    }
  });

  // Los esqueletos tienen los mismos nombres de hueso pero distinta pose de reposo y ejes,
  // así que cada clip se "retargetea" en espacio mundo y se hornea para nuestro esqueleto.
  const clip = (name) => retargetClip(anims.scene, anims.animations.find((c) => c.name === name), root);

  const mixer = new THREE.AnimationMixer(root);
  const actions = {
    idle: mixer.clipAction(clip('Idle')),
    walk: mixer.clipAction(clip('Walk')),
    run: mixer.clipAction(clip('Run'))
  };
  for (const a of Object.values(actions)) {
    a.play();
    a.setEffectiveWeight(0);
  }
  actions.idle.setEffectiveWeight(1);

  const weights = { idle: 1, walk: 0, run: 0 };

  return {
    group,
    look: null,
    setLook() { /* la apariencia de prueba es fija */ },
    update(dt, { speed = 0, running = false } = {}) {
      // Mezcla suave idle / caminar / correr según la velocidad
      const target = speed < 0.15
        ? { idle: 1, walk: 0, run: 0 }
        : running ? { idle: 0, walk: 0, run: 1 } : { idle: 0, walk: 1, run: 0 };
      const k = Math.min(1, dt * 8);
      for (const key of Object.keys(weights)) {
        weights[key] += (target[key] - weights[key]) * k;
        actions[key].setEffectiveWeight(weights[key]);
      }
      // El paso de las animaciones sigue la velocidad real (sin patinar)
      actions.walk.timeScale = THREE.MathUtils.clamp(speed / 1.4, 0.6, 1.6);
      actions.run.timeScale = THREE.MathUtils.clamp(speed / 3.5, 0.7, 1.4);
      mixer.update(dt);
    }
  };
}
