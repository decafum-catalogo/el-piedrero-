// src/entities/DrugDealer.js
import * as THREE from 'three';
import { COLORS } from '../utils/constants.js';
import { ITEMS, LOOT_SUBSTANCE } from '../data/items.js';

/**
 * Punto de venta de sustancias.
 * - De noche: vende sustancias a mejor precio.
 * - De día: no atiende (riesgo de policía).
 * - También permite "comprar" sustancias para revender.
 */
export class DrugDealer {
  constructor(scene, position) {
    this.scene = scene;

    this.group = new THREE.Group();
    this.group.position.copy(position);
    scene.add(this.group);

    // Sombra / figura del dealer
    const bodyMat = new THREE.MeshLambertMaterial({
      color: COLORS.DEALER, flatShading: true
    });
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 1.0, 0.4), bodyMat
    );
    body.position.y = 0.9;
    body.castShadow = true;
    this.group.add(body);

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.3, 0.3), bodyMat
    );
    head.position.y = 1.55;
    head.castShadow = true;
    this.group.add(head);

    // Sombrero / capucha
    const hat = new THREE.Mesh(
      new THREE.ConeGeometry(0.3, 0.3, 6),
      new THREE.MeshLambertMaterial({ color: 0x111111, flatShading: true })
    );
    hat.position.y = 1.85;
    this.group.add(hat);

    // Mesa de sustancias
    const table = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.1, 0.8),
      new THREE.MeshLambertMaterial({ color: 0x3a2a1a, flatShading: true })
    );
    table.position.set(0.8, 0.6, 0);
    this.group.add(table);

    // Marcador
    const markerGeo = new THREE.RingGeometry(1.0, 1.3, 24);
    const markerMat = new THREE.MeshBasicMaterial({
      color: COLORS.ACCENT_PURPLE,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    this.marker = new THREE.Mesh(markerGeo, markerMat);
    this.marker.rotation.x = -Math.PI / 2;
    this.marker.position.y = 0.05;
    this.group.add(this.marker);
  }

  get position() { return this.group.position; }

  /**
   * Vende todas las sustancias del inventario.
   * @param {InventorySystem} inventory
   * @param {boolean} isNight
   * @param {number} priceMult - mult de precio por talentos
   * @returns { earned }
   */
  sellSubstances(inventory, isNight, priceMult = 1) {
    if (!isNight) {
      return { earned: 0, reason: 'day' };
    }

    let total = 0;
    const substances = inventory.items.filter((i) => ITEMS[i.id]?.substance);
    for (const s of substances) {
      const item = ITEMS[s.id];
      let price = item.value * s.qty;
      price *= 1.8; // sustancias valen más
      if (isNight) price *= 1.3;
      price *= priceMult;
      total += price;
      inventory.remove(s.id, s.qty);
    }

    return { earned: Math.round(total), reason: null };
  }

  /**
   * Compra sustancias del dealer para revender.
   * @param {InventorySystem} inventory
   * @param {object} stats
   * @returns { bought, cost }
   */
  buySubstance(inventory, stats) {
    // Pick aleatorio
    const total = LOOT_SUBSTANCE.reduce((s, e) => s + e.weight, 0);
    let r = Math.random() * total;
    let itemId = LOOT_SUBSTANCE[0].item;
    for (const e of LOOT_SUBSTANCE) {
      r -= e.weight;
      if (r <= 0) { itemId = e.item; break; }
    }
    const item = ITEMS[itemId];
    const cost = Math.round(item.value * 0.7); // compra barato

    if (stats.dinero < cost) return { bought: null, cost };
    if (inventory.totalWeight + item.weight > inventory.maxWeight) {
      return { bought: null, cost };
    }

    stats.dinero -= cost;
    inventory.add(item, 1);
    return { bought: item, cost };
  }

  update(dt) {
    if (this.marker) this.marker.rotation.z += dt * 0.6;
  }

  setNight(isNight) {
    this.marker.material.opacity = isNight ? 0.9 : 0.3;
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      o.geometry?.dispose?.();
      o.material?.dispose?.();
    });
  }
}
