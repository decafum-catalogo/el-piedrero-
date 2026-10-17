export class Clock {
  constructor() {
    this.day = 1;
    this.hour = 6;          // empieza de madrugada
    this.minutesPerSecond = 1; // 1 min juego = 1 s real → día = 24 min
  }

  update(dt) {
    this.hour += (dt * this.minutesPerSecond) / 60;
    if (this.hour >= 24) {
      this.hour -= 24;
      this.day++;
    }
  }

  get hourFloat() { return this.hour; }
  get isNight()   { return this.hour < 6 || this.hour >= 20; }

  serialize()   { return { day: this.day, hour: this.hour }; }
  deserialize(d){ this.day = d.day; this.hour = d.hour; }
}