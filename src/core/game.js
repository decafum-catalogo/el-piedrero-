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
import { Cambuche } from '../entities/Cambuche.js';
import { Shop } from '../entities/Shop.js';
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
import { Menu } from '../ui/Menu.js';
import { createCreator } from '../ui/Creator.js';
import { openRecycler, openShop, openCambuche } from '../ui/placeMenus.js';
import { DEFAULT_LOOK, normalizeLook } from '../character/look.js';
import { ITEMS, COSTAL_BONUS, isRecyclable } from '../data/items.js';
import { SLEEP } from '../data/cambuche.js';
import { cop } from '../utils/money.js';

import {
  MENTAL_DECAY, MENTAL_DECAY_NIGHT, MENTAL_DECAY_SICK,
  MENTAL_DECAY_HUNGER, MENTAL_RESTORE_SLEEP, MENTAL_LOW_THRESHOLD,
  INVENTORY_MAX_WEIGHT, WITHDRAWAL
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

    // HUD, menús y creador de personaje
    this.hud = new HUD();
    this.menu = new Menu();
    this.creator = createCreator({ audio: null });
    window.addEventListener('open-recycler', () => openRecycler(this));
    window.addEventListener('open-shop', () => openShop(this));
    window.addEventListener('open-cambuche', () => openCambuche(this));
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyP' && !this.menu.isOpen && !this.creator.isOpen && this.look) this.editLook();
    });

    // Entidades
    this.pickups = [];
    this.sellPoint = null;
    this.cambuche = null;
    this.shop = null;
    this.cars = [];
    this.dealer = null;
    this.craftingStation = null;

    // Estado
    this.look = null;       // apariencia + nombre + origen (creador)
    this.built = {};        // piezas del cambuche
    this.costal = false;    // costal grande comprado
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
    if (!this.look) this._createCharacter();
  }

  /** Primera vez: abre el creador antes de jugar */
  async _createCharacter() {
    const look = await this.creator.open(DEFAULT_LOOK, { doneLabel: 'Empezar' });
    this._applyLook(look ?? { ...DEFAULT_LOOK, nombre: 'Parcero' });
    this._save();
  }

  /** Tecla P: cambiar apariencia en cualquier momento */
  async editLook() {
    const look = await this.creator.open(this.look, { doneLabel: 'Guardar' });
    if (look) {
      this._applyLook(look);
      this._save();
    }
  }

  _applyLook(look) {
    this.look = normalizeLook({ ...look, v: 2 });
    this.player.setLook(this.look);
    this.interaction.originId = this.look.origen;
  }

  /** El mundo se congela mientras hay un menú o el creador abierto */
  get paused() {
    return this.menu.isOpen || this.creator.isOpen;
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
        if (district.isNearReserved?.(x, z)) continue;
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

    // ===== Cambuche (refugio por piezas) =====
    this.cambuche = new Cambuche(
      this.sceneMgr.scene,
      new THREE.Vector3(
        district.reserved?.bed.x ?? 16, 0,
        district.reserved?.bed.z ?? 44
      )
    );
    this.cambuche.setBuilt(this.built);
    this.interaction.register(this.cambuche);

    // ===== Tienda La Esquinita =====
    this.shop = new Shop(
      this.sceneMgr.scene,
      new THREE.Vector3(
        district.reserved?.shop?.x ?? 24, 0,
        district.reserved?.shop?.z ?? 28
      )
    );
    this.interaction.register(this.shop);
    this.collisions.add(
      this.shop.group,
      new THREE.Vector3(2.4, 2, 1.5),
      new THREE.Vector3(0, 1, -0.7)
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
      this.built = data.built ?? {};
      this.costal = !!data.costal;
      this.cambuche?.setBuilt(this.built);
      if (data.look) this._applyLook(data.look);
    }
  }

  _save() {
    this.save.save({
      stats: this.stats.serialize(),
      clock: this.clock.serialize(),
      inventory: this.inventory.serialize(),
      talents: this.talents.serialize(),
      diseases: this.diseases.serialize(),
      player: { pos: this.player.position.toArray() },
      look: this.look,
      built: this.built,
      costal: this.costal
    });
  }

  /** Dormir en el cambuche (requiere la base). De noche hasta las 6:00; de día, siesta de 3 h. */
  sleep() {
    if (this.isSleeping) return;
    if (!this.built.base) {
      window.dispatchEvent(new CustomEvent('sleep-fail', { detail: { reason: 'nobase' } }));
      return;
    }

    this.isSleeping = true;
    window.dispatchEvent(new CustomEvent('sleep-start'));
    this.player.playAction('dormir', 1.6);

    const night = this.clock.isNight;
    const hours = night
      ? (this.clock.hour >= 6 ? 24 - this.clock.hour + 6 : 6 - this.clock.hour)
      : 3;
    const factor = Math.min(1, hours / 8); // una siesta rinde menos
    this.clock.hour += hours;
    while (this.clock.hour >= 24) { this.clock.hour -= 24; this.clock.day += 1; }

    const b = this.built;
    const st = this.stats;
    st.energia = Math.min(100, st.energia + (SLEEP.energia + (b.cama ? SLEEP.energiaCama : 0)) * factor);
    st.salud = Math.min(100, st.salud + (SLEEP.salud + (b.techo ? SLEEP.saludTecho : 0)) * factor);
    st.saludMental = Math.min(100, st.saludMental + (MENTAL_RESTORE_SLEEP + (b.fogon ? SLEEP.animoFogon : 0)) * factor);
    st.vicio = b.vela
      ? Math.min(100, st.vicio + SLEEP.vicioVela)
      : Math.max(0, st.vicio - WITHDRAWAL.vicioDormir * factor);
    if (!b.fogon) st.hambre = Math.max(0, st.hambre - SLEEP.hambreFogon * factor);

    // Sin paredes te pueden robar si duermes de noche
    let robbed = null;
    if (night && !b.paredes && Math.random() < SLEEP.roboProb) {
      const lost = Math.floor(st.dinero * SLEEP.roboDinero);
      st.dinero -= lost;
      for (const it of [...this.inventory.items]) {
        if (isRecyclable(ITEMS[it.id] ?? it)) this.inventory.remove(it.id, Math.ceil(it.qty * SLEEP.roboMaterial));
      }
      robbed = lost;
    }

    this._save();

    setTimeout(() => {
      this.isSleeping = false;
      window.dispatchEvent(new CustomEvent('sleep-end', { detail: { hours: Math.round(hours) } }));
      if (robbed !== null) {
        window.dispatchEvent(new CustomEvent('toast', {
          detail: { text: `🚨 Te robaron mientras dormías (${cop(robbed)} y material). Unas paredes ayudarían.`, type: 'death' }
        }));
      }
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
    this.stats.vicio = Math.max(30, this.stats.vicio);
    this.diseases.cureAll();

    const district = this.world.active;
    if (district?.reserved) {
      this.player.position.set(district.reserved.bed.x, 0, district.reserved.bed.z + 2);
    }
  }

  _loop = () => {
    if (!this._running) return;
    requestAnimationFrame(this._loop);

    const now = performance.now();
    const dt = Math.min((now - this._lastTime) / 1000, 0.1);
    this._lastTime = now;

    if (this.isSleeping || this.paused) {
      this.audio.updateSteps(false, false);
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
    this.inventory.maxWeight = INVENTORY_MAX_WEIGHT + maxWeightBonus + (this.costal ? COSTAL_BONUS : 0);
    this.player.load = this.inventory.totalWeight / this.inventory.maxWeight;

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

    // 7. Interacción (basura, autos, recicladora, tienda, cambuche, dealer)
    this.interaction.update(dt, this.input, this.clock);

    // 8. Mundo
    this.world.update(dt, this.player.position);

    // 9. Entidades
    for (const p of this.pickups) p.update(dt);
    for (const c of this.cars) c.update(dt);
    this.cambuche?.update(dt);
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
