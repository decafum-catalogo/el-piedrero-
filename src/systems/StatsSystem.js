// src/systems/StatsSystem.js
import { XP_PER_LEVEL } from '../utils/constants.js';

const DECAY = {
  hambre:  0.35,  // por segundo
  sed:     0.5,
  energia: 0.2,
  salud:   0
};

export class StatsSystem {
  constructor() {
    this.hambre  = 100;
    this.sed     = 100;
    this.energia = 100;
    this.salud   = 100;
    this.saludMental = 100;
    this.dinero = 0;
    this.xp = 0;
    this.level = 1;
  }

  update(dt, player, diseaseSystem = null, clock = null, talentSystem = null) {
    const decayMult = talentSystem?.getEffect('decayMult', 1) ?? 1;

    this.hambre  = Math.max(0, this.hambre  - DECAY.hambre  * dt * decayMult);
    this.sed     = Math.max(0, this.sed     - DECAY.sed     * dt * decayMult);
    this.energia = Math.max(0, this.energia - DECAY.energia * dt);

    // Daño si stats críticos
    if (this.hambre === 0 || this.sed === 0) this.salud -= 2 * dt;
    if (this.energia === 0) this.salud -= 1 * dt;

    // Drenaje por enfermedades
    if (diseaseSystem) {
      this.salud = Math.max(0, this.salud - diseaseSystem.healthDrain * dt);
    }

    this.salud = Math.max(0, this.salud);

    // Subir de nivel
    while (this.xp >= XP_PER_LEVEL * this.level) {
      this.xp -= XP_PER_LEVEL * this.level;
      this.level++;
      if (talentSystem) talentSystem.addPoints(1);
      window.dispatchEvent(new CustomEvent('levelup', {
        detail: { level: this.level }
      }));
    }
  }

  addXP(amount, talentSystem = null) {
    const mult = talentSystem?.getEffect('xpMult', 1) ?? 1;
    this.xp += amount * mult;
  }

  serialize() {
    return {
      hambre: this.hambre, sed: this.sed, energia: this.energia,
      salud: this.salud, saludMental: this.saludMental, dinero: this.dinero,
      xp: this.xp, level: this.level
    };
  }

  deserialize(d) {
    Object.assign(this, {
      hambre: 100, sed: 100, energia: 100, salud: 100, saludMental: 100,
      dinero: 0, xp: 0, level: 1, ...d
    });
  }
}
