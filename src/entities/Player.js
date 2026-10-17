// src/entities/Player.js
import * as THREE from 'three';
import {
  PLAYER_RADIUS,
  PLAYER_SPEED_WALK,
  PLAYER_SPEED_RUN
} from '../utils/constants.js';

export class Player {
  constructor(scene, input, stats=null) {
    this.input = input;
    this.scene = scene;
    this.stats = stats;
    this.position = new THREE.Vector3(16, 0, 16); // zona reservada spawn
    this.radius = PLAYER_RADIUS;
    this.baseWalk = PLAYER_SPEED_WALK;
    this.baseRun = PLAYER_SPEED_RUN;
    this.speedWalk = PLAYER_SPEED_WALK;
    this.speedRun = PLAYER_SPEED_RUN;
    this.speedMult = 1; // debuff por salud mental baja

    // Contenedor raíz
    this.root = new THREE.Group();
    this.root.position.copy(this.position);
    scene.add(this.root);

    this._buildBody();

    this.animTime = 0;
    this.state = 'idle';
    this._boostActive = false;
    this._boostPulse = 0;
    this.beggingTimer = 0;
  }

  _buildBody() {
    const mat = new THREE.MeshLambertMaterial({
      color: 0x9a9a9a,
      flatShading: true
    });

    this._originalColors = new Map();
this.root.traverse((o) => {
  if (o.isMesh && o.material?.color) {
    this._originalColors.set(o, o.material.color.clone());
  }
});

    const box = (w, h, d, x, y, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      m.receiveShadow = true;
      return m;
    };

    this.parts = {
      hips:  box(0.35, 0.25, 0.25,  0,    0.95, 0),
      torso: box(0.40, 0.55, 0.25,  0,    1.35, 0),
      head:  box(0.25, 0.28, 0.25,  0,    1.75, 0),
      armL:  box(0.14, 0.55, 0.14, -0.28, 1.30, 0),
      armR:  box(0.14, 0.55, 0.14,  0.28, 1.30, 0),
      legL:  box(0.16, 0.75, 0.16, -0.10, 0.40, 0),
      legR:  box(0.16, 0.75, 0.16,  0.10, 0.40, 0)
    };

    Object.values(this.parts).forEach((p) => this.root.add(p));

    // Pivotes: mover origen del mesh al extremo superior
    [this.parts.armL, this.parts.armR].forEach((arm) => {
      arm.geometry.translate(0, -0.275, 0);
      arm.position.y += 0.275;
    });
    [this.parts.legL, this.parts.legR].forEach((leg) => {
      leg.geometry.translate(0, -0.375, 0);
      leg.position.y += 0.375;
    });
  }

  playBeg() {
    this.beggingTimer = 1.0;
  }

  update(dt, camera, collisions) {
    if (this.beggingTimer > 0) {
      this.beggingTimer -= dt;
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

    if (collisions) {
      this.position.copy(
        collisions.resolveMove(this.position, delta, this.radius)
      );
    } else {
      this.position.add(delta);
    }

    this.root.position.copy(this.position);

    // Rotación suave
    if (moving) {
      const targetAngle = Math.atan2(dir.x, dir.z);
      let diff = targetAngle - this.root.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.root.rotation.y += diff * Math.min(1, 12 * dt);
    }

    // Animación procedural
    this.state = !moving ? 'idle' : (running ? 'run' : 'walk');
    this.animTime += dt * (
      this.state === 'run' ? 10 : this.state === 'walk' ? 6 : 1.5
    );
    this._animateProcedural();
  }

  _animateProcedural() {
    const t = this.animTime;
    const { armL, armR, legL, legR, torso, head } = this.parts;

    if (this.beggingTimer > 0) {
      torso.position.y = 1.25;
      head.position.y = 1.65;
      armL.rotation.x = -1.1;
      armR.rotation.x = -1.1;
      armL.rotation.z = -0.15;
      armR.rotation.z = 0.15;
      legL.rotation.x = 0;
      legR.rotation.x = 0;
      return;
    }

    armL.rotation.z = 0;
    armR.rotation.z = 0;

    if (this.state === 'idle') {
      const breathe = Math.sin(t) * 0.03;
      torso.position.y = 1.35 + breathe;
      head.position.y = 1.75 + breathe;
      armL.rotation.x = Math.sin(t) * 0.05;
      armR.rotation.x = Math.sin(t) * 0.05;
      legL.rotation.x = 0;
      legR.rotation.x = 0;
    } else {
      const amp = this.state === 'run' ? 0.9 : 0.5;
      const swing = Math.sin(t);
      legL.rotation.x = swing * amp;
      legR.rotation.x = -swing * amp;
      armL.rotation.x = -swing * amp * 0.8;
      armR.rotation.x = swing * amp * 0.8;
      torso.position.y = 1.35 + Math.abs(Math.sin(t)) * 0.04;
      head.position.y = 1.75 + Math.abs(Math.sin(t)) * 0.04;
    }
  }

  dispose() {
    this.root.traverse((o) => {
      o.geometry?.dispose?.();
      o.material?.dispose?.();
    });
    this.scene.remove(this.root);
  }
}