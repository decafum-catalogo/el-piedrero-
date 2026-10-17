// src/world/bogota/cutaway.js
// "Corte" de edificios: lo que queda entre la cámara y el jugador (y por encima de su cintura)
// se descarta en un cilindro alrededor de la línea de visión, para que nunca quede tapado.
// Se aplica parcheando el shader de cualquier material (también de mallas ya unidas).
import * as THREE from 'three';

export const cutaway = {
  uPlayer: { value: new THREE.Vector3() },
  uCam: { value: new THREE.Vector3() },
  uRadius: { value: 2.8 }
};

const HEAD = /* glsl */`
uniform vec3 uPlayer;
uniform vec3 uCam;
uniform float uRadius;
varying vec3 vCutWorld;
`;

function onBeforeCompile(shader) {
  shader.uniforms.uPlayer = cutaway.uPlayer;
  shader.uniforms.uCam = cutaway.uCam;
  shader.uniforms.uRadius = cutaway.uRadius;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vCutWorld;')
    .replace('#include <project_vertex>', '#include <project_vertex>\nvCutWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;');
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\n' + HEAD)
    .replace('void main() {', `void main() {
  {
    vec3 ab = uPlayer - uCam;
    float t = dot(vCutWorld - uCam, ab) / dot(ab, ab);
    if (t > 0.0 && t < 0.96 && vCutWorld.y > uPlayer.y - 0.3) {
      float d = length(vCutWorld - (uCam + ab * t));
      // borde con tramado para que el corte no sea una línea dura
      float edge = uRadius + 0.6 * fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
      if (d < edge) discard;
    }
  }`);
}

/** Parchea todos los materiales de un grupo (una vez por material). */
export function applyCutaway(root) {
  root.traverse((o) => {
    if (!o.material) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (m.userData.cutaway) continue;
      m.userData.cutaway = true;
      m.onBeforeCompile = onBeforeCompile;
      m.customProgramCacheKey = () => 'cutaway';
      m.needsUpdate = true;
    }
  });
}

/** Actualiza la línea de visión (llamar cada cuadro). */
export function updateCutaway(playerPos, camera) {
  cutaway.uPlayer.value.set(playerPos.x, playerPos.y + 1.1, playerPos.z);
  cutaway.uCam.value.setFromMatrixPosition(camera.matrixWorld);
}
