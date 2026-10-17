import * as THREE from 'three';

export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a1d); // gris muy oscuro

    // Niebla Noir: oculta el final del mundo
    this.scene.fog = new THREE.Fog(0x1a1a1d, 30, 120);

    // Luz ambiental fría (brutalismo)
    this.ambient = new THREE.HemisphereLight(0x556070, 0x0a0a0a, 0.6);
    this.scene.add(this.ambient);

    // Sol / luna (direccional)
    this.sun = new THREE.DirectionalLight(0xffe4b5, 1.0);
    this.sun.position.set(50, 80, 30);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.far = 200;
    this.sun.shadow.camera.left = -100;
    this.sun.shadow.camera.right = 100;
    this.sun.shadow.camera.top = 100;
    this.sun.shadow.camera.bottom = -100;
    this.scene.add(this.sun);

    this.sun.target.position.set(0, 0, 0);
    this.scene.add(this.sun.target);
  }

  /** Ajusta color/intensidad según hora del día (0–24) */
  setTimeOfDay(hour) {
    const t = hour / 24;
    const dayFactor = Math.max(0, Math.sin(t * Math.PI * 2 - Math.PI / 2));
    this.sun.intensity = 0.15 + dayFactor * 1.1;
    this.ambient.intensity = 0.15 + dayFactor * 0.55;
    this.scene.background.setHSL(0.6, 0.05, 0.05 + dayFactor * 0.15);
    this.scene.fog.color.copy(this.scene.background);
  }

    /** Ajusta el color de fondo/fog según ánimo */
  applyMentalState(desaturation) {
    // desaturation: 0 = normal, 1 = gris total
    if (desaturation <= 0) return;

    // Mezcla el color actual del fondo hacia gris
    const bg = this.scene.background;
    const fog = this.scene.fog?.color;
    if (!bg) return;

    const r = bg.r, g = bg.g, b = bg.b;
    const gray = (r + g + b) / 3;

    bg.setRGB(
      r * (1 - desaturation) + gray * desaturation,
      g * (1 - desaturation) + gray * desaturation,
      b * (1 - desaturation) + gray * desaturation
    );

    if (fog) fog.copy(bg);
  }
}