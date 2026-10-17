// src/entities/SellPoint.js
import * as THREE from 'three';
import { COLORS } from '../utils/constants.js';

export class SellPoint {
  constructor(scene, position) {
    this.scene = scene;

    this.group = new THREE.Group();
    this.group.position.copy(position);
    scene.add(this.group);

    // Base
    const baseGeo = new THREE.BoxGeometry(1.5, 1.2, 1);
    const baseMat = new THREE.MeshLambertMaterial({
      color: 0x4a3a2a,
      flatShading: true
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.6;
    base.castShadow = true;
    base.receiveShadow = true;
    this.group.add(base);

    // Techo
    const roofGeo = new THREE.BoxGeometry(2, 0.15, 1.3);
    const roof = new THREE.Mesh(roofGeo, baseMat);
    roof.position.y = 1.6;
    roof.castShadow = true;
    this.group.add(roof);

    // Luz ámbar (nivel 0)
    const lightGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const lightMat = new THREE.MeshBasicMaterial({ color: COLORS.ACCENT_AMBER });
    const light = new THREE.Mesh(lightGeo, lightMat);
    light.position.set(0, 1.4, 0.5);
    this.group.add(light);
  }

  get position() { return this.group.position; }

  sell(inventory, mult = 1) {
    return inventory.sellAll(mult);
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      o.geometry?.dispose?.();
      o.material?.dispose?.();
    });
  }
}