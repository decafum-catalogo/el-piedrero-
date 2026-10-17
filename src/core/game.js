// src/core/Game.js
import * as THREE from 'three';
import { Renderer } from './Renderer.js';
import { SceneManager } from './Scene.js';
import { CameraRig } from './Camera.js';
import { Clock } from './Clock.js';
import { Input } from './Input.js';

import { World } from '../world/World.js';
import { Player } from '../entities/Player.js';
import { Pickup } from '../entities/Pickup.js';
import { SellPoint } from '../entities/SellPoint.js';
import { Bed } from '../entities/Bed.js';
import { Car } from '../entities/Car.js';
import { DrugDealer } from '../entities/DrugDealer.js';
import { CraftingStation } from '../entities/CraftingStation.js';

import { StatsSystem } from '../systems/StatsSystem.js';
import { TimeSystem } from '../systems/TimeSystem.js';
import { SaveSystem } from '../systems/SaveSystem.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';
import { InventorySystem } from '../systems/InventorySystem.js';
import { AudioSystem } from '../systems/AudioSystem.js';
import { InteractionSystem } from '../systems/InteractionSystem.js';
import { DiseaseSystem } from '../systems/DiseaseSystem.js';
import { TalentSystem } from '../systems/TalentSystem.js';
import { CraftingSystem } from '../systems/CraftingSystem.js';

import { HUD } from '../ui/HUD.js';

import {
  MENTAL_DECAY, MENTAL_DECAY_NIGHT, MENTAL_DECAY_SICK,
  MENTAL_DECAY_HUNGER, MENTAL_RESTORE_SLEEP, MENTAL_LOW_THRESHOLD,
  INVENTORY_MAX_WEIGHT
} from '../utils/constants.js';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new Renderer(canvas);
    this.sceneMgr = new SceneManager();
    this.cameraRig = new CameraRig(this.sceneMgr.scene, canvas);
    this.clock = new Clock();
    this.input = new Input();

    // Sistemas
    this.collisions = new CollisionSystem();
    this.inventory = new InventorySystem();
    this.audio = new AudioSystem();
    this.stats = new StatsSystem();
    this.time = new TimeSystem();
    this.save = new SaveSystem();
    this.diseases = new DiseaseSystem();
    this.talents = new TalentSystem();
    this.crafting = new CraftingSystem();

    // Mundo + jugador
    this.world = new World(this.sceneMgr.scene);
this.player = new Player(this.sceneMgr.scene, this.input, this.stats);
    // Interacción
    this.interaction = new InteractionSystem(
      this.player, this.inventory, this.stats, this.audio,
      this.diseases, this.talents, this.crafting
    );

    // HUD
    this.hud = new HUD();

    // Entidades
    this.pickups = [];
    this.sellPoint = null;
    this.bed = null;
    this.cars = [];
    this.dealer = null;
    this.craftingStation = null;

    // Estado
    this.isSleeping = false;
    this.deathCount = 0;
    this._wasNight = null;

    this._lastTime = performance.now();
    this._running = false;

    window.__game = this;
  }

  start() {
    this._running = true;
    this.world.loadDistrict('ZonaCero', this.collisions);
    this._spawnEntities();

    const district = this.world.active;
    if (district?.reserved) {
      this.player.position.set(
        district.reserved.spawn.x, 0, district.reserved.spawn.z
      );
      this.player.root.position.copy(this.player.position);
    }

    this._loadIfSave();
    this.audio.startAmbient();
    this._loop();
  }

  _spawnEntities() {
    this.pickups.forEach((p) => p.dispose());
    this.pickups = [];
    this.cars.forEach((c) => c.dispose());
    this.cars = [];
    this.interaction.targets = [];

    const district = this.world.active;
    if (!district || !district.isWalkableAt) {
      console.warn('[Game] Distrito sin isWalkableAt');
      return;
    }

    const findValidSpawn = (exclude = null, minDist = 4) => {
      const TILE_SIZE = 2;
      const mapSize = 32;
      for (let attempt = 0; attempt < 200; attempt++) {
        const tx = 3 + Math.floor(Math.random() * (mapSize - 6));
        const tz = 3 + Math.floor(Math.random() * (mapSize - 6));
        const x = tx * TILE_SIZE;
        const z = tz * TILE_SIZE;
        if (!district.isWalkableAt(x, z)) continue;
        if (district.reserved) {
          const r = district.reserved;
          const nearReserved =
            Math.hypot(x - r.sell.x, z - r.sell.z) < 6 ||
            Math.hypot(x - r.bed.x, z - r.bed.z) < 6 ||
            Math.hypot(x - r.spawn.x, z - r.spawn.z) < 6 ||
            Math.hypot(x - r.dealer.x, z - r.dealer.z) < 6 ||
            Math.hypot(x - r.craft.x, z - r.craft.z) < 6;
          if (nearReserved) continue;
        }
        let tooClose = false;
        for (const other of [...this.pickups, ...this.cars]) {
          if (other === exclude) continue;
          if (other.position.distanceTo(new THREE.Vector3(x, 0, z)) < minDist) {
            tooClose = true; break;
          }
        }
        if (tooClose) continue;
        return new THREE.Vector3(x, 0, z);
      }
      return new THREE.Vector3(32, 0, 32);
    };

    // ===== Basura =====
    const grid = district.getSpawnGrid ? district.getSpawnGrid() : [];
    for (let i = grid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [grid[i], grid[j]] = [grid[j], grid[i]];
    }
    const desired = 14;
    const usedPositions = [];
    for (let i = 0; i < desired; i++) {
      let pos;
      if (usedPositions.length < grid.length) {
        pos = grid[usedPositions.length];
        usedPositions.push(pos);
      } else {
        pos = findValidSpawn();
      }
      const p = new Pickup(this.sceneMgr.scene, pos);
      p.onRespawn = (pickup) => pickup.relocate(findValidSpawn(pickup));
      this.pickups.push(p);
      this.interaction.register(p);
    }

    // ===== Autos (robar retrovisores) =====
    const carCount = 5;
    for (let i = 0; i < carCount; i++) {
      const pos = findValidSpawn(null, 6);
      const rot = Math.random() * Math.PI * 2;
      const car = new Car(this.sceneMgr.scene, pos, rot);
      this.cars.push(car);
      this.interaction.register(car);
    }

    // ===== Puesto de venta =====
    this.sellPoint = new SellPoint(
      this.sceneMgr.scene,
      new THREE.Vector3(
        district.reserved?.sell.x ?? 44, 0,
        district.reserved?.sell.z ?? 16
      )
    );
    this.interaction.register(this.sellPoint);

    // ===== Dealer de sustancias =====
    this.dealer = new DrugDealer(
      this.sceneMgr.scene,
      new THREE.Vector3(
        district.reserved?.dealer?.x ?? 56, 0,
        district.reserved?.dealer?.z ?? 56
      )
    );
    this.interaction.register(this.dealer);

    // ===== Mesa de crafteo =====
    this.craftingStation = new CraftingStation(
      this.sceneMgr.scene,
      new THREE.Vector3(
        district.reserved?.craft?.x ?? 8, 0,
        district.reserved?.craft?.z ?? 8
      )
    );
    this.interaction.register(this.craftingStation);

    // ===== Cama / refugio =====
    this.bed = new Bed(
      this.sceneMgr.scene,
      new THREE.Vector3(
        district.reserved?.bed.x ?? 16, 0,
        district.reserved?.bed.z ?? 44
      )
    );
    this.interaction.register(this.bed);

    this.collisions.add(
      this.bed.group,
      new THREE.Vector3(1.2, 0.5, 2),
      new THREE.Vector3(0, 0.25, 0)
    );
  }

  _loadIfSave() {
    const data = this.save.load();
    if (data) {
      this.stats.deserialize(data.stats);
      this.clock.deserialize(data.clock);
      this.inventory.deserialize(data.inventory ?? {});
      this.talents.deserialize(data.talents ?? {});
      this.diseases.deserialize(data.diseases ?? {});
      if (data.player) this.player.position.set(...data.player.pos);
    }
  }

  _save() {
    this.save.save({
      stats: this.stats.serialize(),
      clock: this.clock.serialize(),
      inventory: this.inventory.serialize(),
      talents: this.talents.serialize(),
      diseases: this.diseases.serialize(),
      player: { pos: this.player.position.toArray() }
    });
  }

  _sleep() {
    if (this.isSleeping) return;
    if (!this.clock.isNight) {
      window.dispatchEvent(new CustomEvent('sleep-fail', {
        detail: { reason: 'day' }
      }));
      return;
    }

    this.isSleeping = true;
    window.dispatchEvent(new CustomEvent('sleep-start'));

    this.clock.hour = 6;
    this.clock.day += 1;

    this.stats.energia = Math.min(100, this.stats.energia + 60);
    this.stats.salud = Math.min(100, this.stats.salud + 20);
    this.stats.saludMental = Math.min(100, this.stats.saludMental + MENTAL_RESTORE_SLEEP);

    this._save();

    setTimeout(() => {
      this.isSleeping = false;
      window.dispatchEvent(new CustomEvent('sleep-end'));
    }, 1200);
  }

  _updateMentalHealth(dt) {
    const mentalDecayMult = this.talents.getEffect('mentalDecayMult', 1);
    let decay = MENTAL_DECAY;

    if (this.clock.isNight) decay += MENTAL_DECAY_NIGHT;
    if (this.diseases.hasAny) decay += MENTAL_DECAY_SICK;
    if (this.stats.hambre < 20) decay += MENTAL_DECAY_HUNGER;

    decay *= mentalDecayMult;
    this.stats.saludMental = Math.max(0, this.stats.saludMental - decay * dt);
  }

  _handleDeath() {
    if (this.stats.salud > 0) return;

    this.deathCount++;
    window.dispatchEvent(new CustomEvent('death'));

    const half = Math.floor(this.inventory.items.length / 2);
    for (let i = 0; i < half; i++) {
      const it = this.inventory.items[0];
      if (it) this.inventory.remove(it.id, it.qty);
    }

    this.stats.salud = 30;
    this.stats.hambre = Math.max(20, this.stats.hambre);
    this.stats.sed = Math.max(20, this.stats.sed);
    this.diseases.cureAll();

    const district = this.world.active;
    if (district?.reserved) {
      this.player.position.set(district.reserved.bed.x, 0, district.reserved.bed.z);
    }
  }

  _loop = () => {
    if (!this._running) return;
    requestAnimationFrame(this._loop);

    const now = performance.now();
    const dt = Math.min((now - this._lastTime) / 1000, 0.1);
    this._lastTime = now;

    if (this.isSleeping) {
      this.renderer.render(this.sceneMgr.scene, this.cameraRig.camera);
      this.input.endFrame();
      return;
    }

    // 1. Tiempo
    this.clock.update(dt);
    this.time.update(dt, this.clock);

    // 2. Día/noche
    const isNight = this.clock.isNight;
    if (this._wasNight !== isNight) {
      this._wasNight = isNight;
      this.world.active?.setNightMode?.(isNight);
      this.dealer?.setNight(isNight);
    }

    // 3. Jugador
    this.player.update(dt, this.cameraRig.camera, this.collisions);

    // 4. Stats
    this.stats.update(dt, this.player, this.diseases, this.clock, this.talents);

    // 4b. Aplicar bono de peso por talentos
    const maxWeightBonus = this.talents.getEffect('maxWeightBonus', 0);
    this.inventory.maxWeight = INVENTORY_MAX_WEIGHT + maxWeightBonus;

    // 5. Salud mental
    this._updateMentalHealth(dt);

    // 5b. Debuff por salud mental baja
    if (this.stats.saludMental < MENTAL_LOW_THRESHOLD) {
      this.player.speedMult = 0.6;
    } else {
      this.player.speedMult = 1;
    }

    // 6. Enfermedades
    this.diseases.update(dt);

    // 7. Dormir (cerca de la cama)
    const nearBed = this.bed && this.bed.position.distanceTo(this.player.position) < 2.5;
    if (nearBed && this.input.consumePress('KeyE')) {
      this._sleep();
    } else {
      this.interaction.update(dt, this.input, this.clock);
    }

    // 8. Mundo
    this.world.update(dt, this.player.position);

    // 9. Entidades
    for (const p of this.pickups) p.update(dt);
    for (const c of this.cars) c.update(dt);
    this.bed?.update(dt);
    this.dealer?.update(dt);

    // 10. Audio
    const moving = this.input.axis.x !== 0 || this.input.axis.z !== 0;
    this.audio.updateSteps(moving, this.input.isRunning);
    this.audio.updateBoost(this.interaction.boostActive);

    // 11. Cámara
    this.cameraRig.follow(this.player.position);

    // 12. Render
    this.renderer.render(this.sceneMgr.scene, this.cameraRig.camera);

    // 13. UI
    this.hud.update(
      this.stats, this.clock, this.interaction, this.inventory,
      this.diseases, this.talents, this.crafting
    );

    // 14. Muerte
    this._handleDeath();

    // 15. Fin de frame
    this.input.endFrame();
  };

  stop() { this._running = false; }
}
