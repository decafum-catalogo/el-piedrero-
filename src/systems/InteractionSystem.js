// src/systems/InteractionSystem.js
import { ITEMS } from '../data/items.js';
import {
  INTERACT_RANGE,
  BOOST_DURATION,
  BOOST_ENERGY_COST,
  BOOST_HEALTH_DRAIN,
  BOOST_MIN_HEALTH,
  MENTAL_RESTORE_RARE,
  XP_PICKUP,
  XP_SELL,
  XP_STEAL,
  XP_CRAFT
} from '../utils/constants.js';

export class InteractionSystem {
  constructor(player, inventory, stats, audio, diseaseSystem, talentSystem, craftingSystem) {
    this.player = player;
    this.inventory = inventory;
    this.stats = stats;
    this.audio = audio;
    this.disease = diseaseSystem;
    this.talents = talentSystem;
    this.crafting = craftingSystem;

    this.targets = [];
    this.currentTarget = null;
    this.currentTargetType = null;

    this.boostActive = false;
    this.boostTimer = 0;

    // Estado de selección de basura
    this.sortingPickup = null;
    this.isHoldingQ = false;
  }

  register(target) { this.targets.push(target); }
  unregister(target) {
    const i = this.targets.indexOf(target);
    if (i >= 0) this.targets.splice(i, 1);
  }

  toggleBoost() {
    if (this.boostActive) { this._endBoost(); return true; }
    if (this.stats.energia < 15) return false;
    if (this.stats.salud <= BOOST_MIN_HEALTH) return false;
    this.boostActive = true;
    this.boostTimer = BOOST_DURATION;
    this.stats.energia -= BOOST_ENERGY_COST;
    this._notifyBoostToTargets(true);
    return true;
  }

  _endBoost() {
    this.boostActive = false;
    this.boostTimer = 0;
    this._notifyBoostToTargets(false);
  }

  _notifyBoostToTargets(active) {
    for (const t of this.targets) {
      if (typeof t.setBoost === 'function') t.setBoost(active);
    }
  }

  update(dt, input, clock) {
    // Encontrar target más cercano
    let nearest = null;
    let nearestType = null;
    let nearestDist = INTERACT_RANGE;

    for (const t of this.targets) {
      const d = t.position.distanceTo(this.player.position);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = t;
        // Determinar tipo por métodos disponibles
        if (typeof t.harvest === 'function') nearestType = 'pickup';
        else if (typeof t.steal === 'function') nearestType = 'car';
        else if (typeof t.sellSubstances === 'function') nearestType = 'dealer';
        else if (t instanceof Object && typeof t.sell === 'function') nearestType = 'sell';
      }
    }
    this.currentTarget = nearest;
    this.currentTargetType = nearestType;

    // Boost
    if (this.boostActive) {
      this.boostTimer -= dt;
      this.stats.salud = Math.max(0, this.stats.salud - BOOST_HEALTH_DRAIN * dt);
      if (this.boostTimer <= 0 || this.stats.salud <= BOOST_MIN_HEALTH) {
        this._endBoost();
      }
    }

    // === Selección de basura (mantener Q) ===
    if (nearestType === 'pickup' && input.isDown('KeyQ')) {
      if (!this.isHoldingQ) {
        this.isHoldingQ = true;
        if (nearest.startSorting) {
          this.sortingPickup = nearest;
          nearest.startSorting();
        }
      }
    } else {
      if (this.isHoldingQ) {
        this.isHoldingQ = false;
        if (this.sortingPickup) {
          const sorted = this.sortingPickup.sortComplete;
          this._harvestTrash(this.sortingPickup, sorted);
          this.sortingPickup.stopSorting();
          this.sortingPickup = null;
        }
      }
    }

    // === Interacción principal (E) ===
    if (input.consumePress('KeyE') && nearest) {
      switch (nearestType) {
        case 'pickup':
          this._harvestTrash(nearest, false);
          break;
        case 'sell':
          this._sellItems(nearest);
          break;
        case 'car':
          this._stealCar(nearest);
          break;
        case 'dealer':
          this._sellSubstances(nearest, clock);
          break;
      }
    }

    // === Comprar sustancia (Q en dealer, sin pickup cerca) ===
    if (nearestType === 'dealer' && input.consumePress('KeyQ')) {
      this._buySubstance(nearest);
    }

    // === Boost (F) ===
    if (input.consumePress('KeyF')) {
      const ok = this.toggleBoost();
      if (!ok) this.audio?.play('empty');
    }
  }

  _harvestTrash(target, sorted) {
    if (typeof target.harvest !== 'function') return;

    const talentEffects = {
      rareChanceMult: this.talents.getEffect('rareChanceMult', 1),
      sortValueMult: this.talents.getEffect('sortValueMult', 1)
    };

    const result = target.harvest(this.boostActive, sorted, talentEffects);
    if (!result) return;

    const added = [];
    for (const itemId of result.items) {
      const item = ITEMS[itemId];
      if (item && this.inventory.add(item)) added.push(item.name);
    }

    this.audio?.play('pickup');
    if (result.rare) {
      this.audio?.play('treasure');
      this.stats.saludMental = Math.min(100, this.stats.saludMental + MENTAL_RESTORE_RARE);
    }
    if (added.length === 0) this.audio?.play('full');

    // Riesgo de enfermedad
    const diseaseResist = this.talents.getEffect('diseaseResist', 1);
    const sortDiseaseMult = this.talents.getEffect('sortDiseaseMult', 1);
    this.disease.tryInfect(result.sorted, diseaseResist * (result.sorted ? sortDiseaseMult : 1));

    this.stats.addXP(XP_PICKUP, this.talents);

    window.dispatchEvent(new CustomEvent('pickup', {
      detail: { added, rare: result.rare, sorted: result.sorted }
    }));
  }

  _sellItems(target) {
    if (typeof target.sell !== 'function') return;
    const earned = target.sell(this.inventory, this.boostActive ? 1.2 : 1);
    if (earned > 0) {
      this.stats.dinero += earned;
      this.stats.addXP(XP_SELL, this.talents);
      window.dispatchEvent(new CustomEvent('sell', { detail: { earned } }));
      this.audio?.play('sell');
    } else {
      this.audio?.play('empty');
    }
  }

  _stealCar(target) {
    if (typeof target.steal !== 'function') return;
    const caughtMult = this.talents.getEffect('stealCaughtMult', 1);
    const result = target.steal(caughtMult);
    if (!result) return;

    const added = [];
    for (const itemId of result.items) {
      const item = ITEMS[itemId];
      if (item && this.inventory.add(item)) added.push(item.name);
    }

    if (result.caught) {
      this.stats.salud = Math.max(0, this.stats.salud - 25);
      this.stats.dinero = Math.max(0, this.stats.dinero - 10);
      window.dispatchEvent(new CustomEvent('steal-caught', {}));
    } else {
      this.audio?.play('pickup');
      this.stats.addXP(XP_STEAL, this.talents);
    }

    window.dispatchEvent(new CustomEvent('steal', {
      detail: { added, caught: result.caught }
    }));
  }

  _sellSubstances(target, clock) {
    const priceMult = this.talents.getEffect('substancePriceMult', 1);
    const result = target.sellSubstances(this.inventory, clock.isNight, priceMult);
    if (result.reason === 'day') {
      window.dispatchEvent(new CustomEvent('substance-fail', {
        detail: { reason: 'day' }
      }));
      this.audio?.play('empty');
      return;
    }
    if (result.earned > 0) {
      this.stats.dinero += result.earned;
      this.stats.addXP(XP_SELL * 2, this.talents);
      window.dispatchEvent(new CustomEvent('substance-sell', {
        detail: { earned: result.earned }
      }));
      this.audio?.play('sell');
    } else {
      this.audio?.play('empty');
    }
  }

  _buySubstance(target) {
    const result = target.buySubstance(this.inventory, this.stats);
    if (result.bought) {
      this.audio?.play('pickup');
      window.dispatchEvent(new CustomEvent('substance-buy', {
        detail: { name: result.bought.name, cost: result.cost }
      }));
    } else {
      this.audio?.play('empty');
      window.dispatchEvent(new CustomEvent('substance-buy-fail', {}));
    }
  }
}
