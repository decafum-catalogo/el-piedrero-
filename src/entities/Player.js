// src/entities/Player.js
import * as THREE from 'three';
import {
  PLAYER_RADIUS,
  PLAYER_SPEED_WALK,
  PLAYER_SPEED_RUN,
  CHARACTER_SCALE
} from '../utils/constants.js';
import { createCharacter } from '../character/character.js';

export class Player {
  constructor(scene, input, stats=null) {
    this.input = input;
    this.scene = scene;
    this.stats = stats;
    this.position = new THREE.Vector3(16, 0, 16); // zona reservada spawn
    this.radius = PLAYER_RADIUS;
    this.speedWalk = PLAYER_SPEED_WALK;
    this.speedRun = PLAYER_SPEED_RUN;
    this.speedMult = 1; // debuff por salud mental baja

    // Contenedor raíz (posición + rumbo); el personaje va escalado adentro
    this.root = new THREE.Group();
    this.root.position.copy(this.position);
    scene.add(this.root);

    this.character = createCharacter();
    this.character.group.scale.setScalar(CHARACTER_SCALE);
    this.character.group.traverse((o) => {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });
    this.root.add(this.character.group);

    this.time = 0;
    this.speed = 0;
    this.state = 'idle';
    this.load = 0;            // 0..1: llenado del costal (tamaño del saco)
    this.action = null;       // 'pedir' | 'buscar' | 'comer' | 'dormir' | 'saludo'
    this.actionTimer = 0;
    this.sorting = false;     // seleccionando basura (mantener Q)
  }

  setLook(look) {
    this.character.setLook(look);
    this.character.group.traverse((o) => {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });
  }

  /** Anima una acción breve (segundos) */
  playAction(action, duration = 1) {
    this.action = action;
    this.actionTimer = duration;
  }

  playBeg() {
    this.playAction('pedir', 1.2);
  }

  update(dt, camera, collisions) {
    this.time += dt;
    if (this.actionTimer > 0) {
      this.actionTimer -= dt;
      if (this.actionTimer <= 0) this.action = null;
    }

    const { x, z } = this.input.axis;
    const moving = (x !== 0 || z !== 0);
    const running = this.input.isRunning && moving;
    let speed = running ? this.speedRun : this.speedWalk;
    if (this.stats?.getSpeedMultiplier) {
      speed *= this.stats.getSpeedMultiplier();
    }
    // Movimiento
    const dir = new THREE.Vector3(x, 0, z);
    if (moving) dir.normalize();
    const delta = dir.clone().multiplyScalar(moving ? speed * dt : 0);

    const before = this.position.clone();
    if (collisions) {
      this.position.copy(
        collisions.resolveMove(this.position, delta, this.radius)
      );
    } else {
      this.position.add(delta);
    }
    this.speed = dt > 0 ? before.distanceTo(this.position) / dt : 0;

    this.root.position.copy(this.position);

    // Rotación suave
    if (moving) {
      const targetAngle = Math.atan2(dir.x, dir.z);
      let diff = targetAngle - this.root.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.root.rotation.y += diff * Math.min(1, 12 * dt);
    }

    this.state = !moving ? 'idle' : (running ? 'run' : 'walk');

    // Animación del personaje (velocidad en metros del modelo, no del mundo)
    this.character.update(dt, {
      speed: this.speed / CHARACTER_SCALE,
      running,
      action: this.sorting ? 'buscar' : this.action,
      t: this.time,
      load: this.load,
      dirt: this.stats ? Math.max(0, (40 - this.stats.higiene) / 40) : 0
    });
  }

  dispose() {
    this.root.traverse((o) => {
      o.geometry?.dispose?.();
      o.material?.dispose?.();
    });
    this.scene.remove(this.root);
  }
}
