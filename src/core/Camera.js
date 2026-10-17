import * as THREE from 'three';

export class CameraRig {
  constructor(scene, canvas) {
    this.camera = new THREE.PerspectiveCamera(
      55, window.innerWidth / window.innerHeight, 0.1, 500
    );

    // Offset isométrico
    this.offset = new THREE.Vector3(12, 16, 12);
    this.lookOffset = new THREE.Vector3(0, 1.5, 0);
    this.lerpSpeed = 6;

    this.camera.position.copy(this.offset);
    this.camera.lookAt(0, 0, 0);

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }

  follow(targetPos) {
    const desired = targetPos.clone().add(this.offset);
    this.camera.position.lerp(desired, 1 - Math.exp(-this.lerpSpeed * 0.016));
    const look = targetPos.clone().add(this.lookOffset);
    this.camera.lookAt(look);
  }
}