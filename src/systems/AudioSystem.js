// src/systems/AudioSystem.js
import { Howl, Howler } from 'howler';
import { VehicleAudio } from './VehicleAudio.js';

export class AudioSystem {
  constructor({ HowlClass = Howl, howler = Howler, eventTarget = globalThis.window } = {}) {
    this.howler = howler;
    this.loadErrors = new Map();
    const sound = (file, options = {}) => new HowlClass({
      src: [`/audio/${encodeURIComponent(file)}`], ...options,
      onload: () => this.loadErrors.delete(file),
      onloaderror: (_id, error) => {
        if (!this.loadErrors.has(file)) console.error(`[Audio] No se pudo cargar /audio/${file}:`, error);
        this.loadErrors.set(file, String(error));
      },
      onplayerror(id) { this.once('unlock', () => this.play(id)); }
    });
    // Volumen maestro (0.0 a 1.0)
    howler.volume(0.7);

    // Definir sonidos. Si el archivo no existe, Howl queda en silencio
    // pero NO crashea (maneja el error internamente).
    this.sounds = {
      pickup: sound('pickup.wav', { volume: .6 }),
      treasure: sound('treasure.wav', { volume: .9 }),
      sell: sound('sell.wav', { volume: .8 }),
      full: sound('full.wav', { volume: .5 }),
      empty: sound('empty.wav', { volume: .4 }),
      steps: sound('Sounds_of_a_steps.wav', { volume: .65, loop: true }),
      ambient: sound('city_atmosphere_soun.wav', { volume: .18, loop: true })
    };
    // Reproducción normal: sin posiciones, panners ni atenuación 3D.
    const vehicleOptions = { volume: 0, loop: true, pool: 10 };
    this.vehicleSounds = {
      carIdle: sound('car_idling_at_a_traf.wav', vehicleOptions),
      carDrive: sound('small_vehicle_drivin.wav', vehicleOptions),
      busIdle: sound('car_idling_at_a_traf_bus.wav', vehicleOptions),
      busDrive: sound('bus_vehicle_drivin.wav', vehicleOptions),
      // Tomar una sola pitada de cada grabación evita reproducir secuencias de casi 8 s.
      horn1: sound('car_horn_sound1.wav', { ...vehicleOptions, loop: false, sprite: { honk: [900, 550] } }),
      horn2: sound('car_horn_sound.wav', { ...vehicleOptions, loop: false, sprite: { honk: [1000, 600] } }),
      horn3: sound('car_horn_sound_v3.wav', { ...vehicleOptions, loop: false, sprite: { honk: [200, 650] } })
    };
    this.vehicles = new VehicleAudio(this.vehicleSounds);

    // El audio es opcional: un archivo ausente o bloqueado no impide jugar.
    this.ready = Promise.all([...Object.values(this.sounds), ...Object.values(this.vehicleSounds)].map(sound => new Promise(resolve => {
      if (sound.state() === 'loaded') { resolve(); return; }
      const done = () => {
        clearTimeout(timer);
        sound.off('load', done);
        sound.off('loaderror', done);
        resolve();
      };
      const timer = setTimeout(done, 5000);
      sound.once('load', done);
      sound.once('loaderror', done);
    })));

    this._stepsPlaying = false;
    this._boostPlaying = false;
    this._ambientStarted = false;

    // Desbloquear audio tras primer click (política de navegadores)
    const unlock = () => {
      if (howler.ctx && howler.ctx.state === 'suspended') {
        howler.ctx.resume();
      }
      eventTarget?.removeEventListener('click', unlock);
      eventTarget?.removeEventListener('keydown', unlock);
    };
    eventTarget?.addEventListener('click', unlock);
    eventTarget?.addEventListener('keydown', unlock);
    this._removeUnlock = () => { eventTarget?.removeEventListener('click', unlock); eventTarget?.removeEventListener('keydown', unlock); };
    this._visibilityChanged = () => {
      if (globalThis.document?.hidden) this.setPaused(true);
    };
    globalThis.document?.addEventListener('visibilitychange', this._visibilityChanged);
  }

  play(name) {
    const s = this.sounds[name];
    if (!s || s.playing()) return;
    s.play();
  }

  stop(name) {
    this.sounds[name]?.stop();
  }

  updateSteps(moving, running) {
    const s = this.sounds.steps;
    if (!s) return;
    const rate = running ? 1.4 : 1;
    if (this._stepsRate !== rate) { s.rate(rate); this._stepsRate = rate; }

    if (moving && !this._stepsPlaying) {
      s.play();
      this._stepsPlaying = true;
    } else if (!moving && this._stepsPlaying) {
      s.stop();
      this._stepsPlaying = false;
    }
  }

  updateBoost(active) {
    const s = this.sounds.boost;
    if (!s) return;

    if (active && !this._boostPlaying) {
      s.play();
      this._boostPlaying = true;
    }
    if (!active && this._boostPlaying) {
      s.stop();
      this._boostPlaying = false;
    }
  }

  startAmbient() {
    if (this._ambientStarted) return;
    this._ambientId = this.sounds.ambient?.play();
    this._ambientStarted = true;
  }

  setPaused(paused) {
    if (this._paused === paused) return;
    this._paused = paused;
    this.vehicles.setPaused(paused);
    if (paused) {
      this.updateSteps(false, false); this.updateBoost(false);
      if (this._ambientId !== undefined) this.sounds.ambient.pause(this._ambientId);
    } else if (this._ambientStarted) this.sounds.ambient.play(this._ambientId);
  }

  updateWorld(dt, position, _camera, vehicles, bus) {
    this.setPaused(false);
    this.vehicles.update(dt, position, vehicles, bus);
  }

  dispose() {
    this.vehicles.clear();
    this._removeUnlock();
    globalThis.document?.removeEventListener('visibilitychange', this._visibilityChanged);
    for (const sound of [...Object.values(this.sounds), ...Object.values(this.vehicleSounds)]) sound.unload();
  }
}
