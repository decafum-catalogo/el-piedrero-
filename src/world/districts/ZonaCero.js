// src/world/districts/ZonaCero.js
import * as THREE from 'three';
import { TileFactory } from '../tiles/TileFactory.js';
import { generateDistrict, getPropSpawnPoints } from '../tiles/RoadGenerator.js';
import { createRandomProp } from '../props/index.js';
import { TILE_SIZE, DISTRICT_SIZE, COLORS } from '../../utils/constants.js';
import { isSolid } from '../tiles/tileTypes.js';

export class ZonaCero {
  constructor() {
    this.group = new THREE.Group();
    this.tiles = [];
    this.props = [];
    this.propUpdatables = [];
    this.map = null;
  }

  build(scene, collisions) {
    const size = DISTRICT_SIZE;
    const map = generateDistrict(size);

    // ===== Tiles =====
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const type = map[y][x];
        const tile = TileFactory.create(type);
        tile.position.set(x * TILE_SIZE, 0, y * TILE_SIZE);
        this.group.add(tile);
        this.tiles.push(tile);

        // Colisiones
        if (collisions && isSolid(type)) {
          if (type === 'building') {
            collisions.add(
              tile,
              new THREE.Vector3(TILE_SIZE, 8, TILE_SIZE),
              new THREE.Vector3(0, 4, 0)
            );
          } else if (type === 'buildingBrick') {
            collisions.add(
              tile,
              new THREE.Vector3(TILE_SIZE, 6, TILE_SIZE),
              new THREE.Vector3(0, 3, 0)
            );
          } else if (type === 'buildingLit') {
            collisions.add(
              tile,
              new THREE.Vector3(TILE_SIZE, 10, TILE_SIZE),
              new THREE.Vector3(0, 5, 0)
            );
          } else if (type === 'barrel') {
            collisions.add(tile, new THREE.Vector3(1, 1.2, 1));
          }
        }
      }
    }

    // ===== Props =====
    const spawnPoints = getPropSpawnPoints(map, size);
    for (const pt of spawnPoints) {
      const worldPos = new THREE.Vector3(pt.x * TILE_SIZE, 0, pt.z * TILE_SIZE);
      const result = createRandomProp(worldPos, pt.type);
      if (!result) continue;

      this.group.add(result.group);
      this.props.push(result);

      if (result.updatable) this.propUpdatables.push(result.instance);
    }

    scene.add(this.group);

    // ===== Helpers expuestos =====

    this.map = map;

    // ¿Es una posición transitable?
    this.isWalkableAt = (worldX, worldZ) => {
      const tx = Math.round(worldX / TILE_SIZE);
      const tz = Math.round(worldZ / TILE_SIZE);
      if (tx < 0 || tz < 0 || tx >= size || tz >= size) return false;
      const t = map[tz][tx];
      return (
        t === 'sidewalk' ||
        t === 'dirt' ||
        t === 'floor' ||
        t === 'road' ||
        t === 'roadV'
      );
    };

    // Zonas reservadas (spawn, venta, cama, dealer, crafteo)
    this.reserved = {
      spawn:  { x: 8 * TILE_SIZE,  z: 8 * TILE_SIZE },
      sell:   { x: 22 * TILE_SIZE, z: 8 * TILE_SIZE },
      bed:    { x: 8 * TILE_SIZE,  z: 22 * TILE_SIZE },
      dealer: { x: 26 * TILE_SIZE, z: 26 * TILE_SIZE },
      craft:  { x: 16 * TILE_SIZE, z: 6 * TILE_SIZE }
    };

    // Grid de spawn para basura (garantiza distribución)
    this.getSpawnGrid = () => {
      const grid = [];
      const step = 4;
      for (let tz = 4; tz < size - 4; tz += step) {
        for (let tx = 4; tx < size - 4; tx += step) {
          const x = tx * TILE_SIZE;
          const z = tz * TILE_SIZE;
          if (!this.isWalkableAt(x, z)) continue;

          // Evitar zonas reservadas
          const r = this.reserved;
          const tooCloseSell  = Math.hypot(x - r.sell.x,  z - r.sell.z)  < 6;
          const tooCloseBed   = Math.hypot(x - r.bed.x,   z - r.bed.z)   < 6;
          const tooCloseSpawn = Math.hypot(x - r.spawn.x, z - r.spawn.z) < 6;
          const tooCloseDealer = Math.hypot(x - r.dealer.x, z - r.dealer.z) < 6;
          const tooCloseCraft = Math.hypot(x - r.craft.x, z - r.craft.z) < 6;
          if (tooCloseSell || tooCloseBed || tooCloseSpawn || tooCloseDealer || tooCloseCraft) continue;

          grid.push(new THREE.Vector3(x, 0, z));
        }
      }
      return grid;
    };
  }

  update(dt, playerPos) {
    for (const p of this.propUpdatables) p.update(dt);
  }

  setNightMode(isNight) {
    for (const p of this.props) {
      if (p.instance.setNight) p.instance.setNight(isNight);
    }
  }

  dispose(scene) {
    scene.remove(this.group);
    this.group.traverse((o) => {
      o.geometry?.dispose?.();
      o.material?.dispose?.();
    });
    this.tiles = [];
    this.props = [];
    this.propUpdatables = [];
  }
}