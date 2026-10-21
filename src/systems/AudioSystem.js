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
    this.eventTarget = eventTarget;
    this._masterVolume = .7; this.muted = false;
    try {
      const saved = globalThis.localStorage?.getItem('bazuko.audio_volume');
      if (saved !== null && saved !== undefined && Number.isFinite(Number(saved))) this._masterVolume = Math.max(0, Math.min(1, Number(saved)));
      this.muted = globalThis.localStorage?.getItem('bazuko.audio_muted') === 'true';
    } catch { /* sin almacenamiento */ }
    howler.volume(this.muted ? 0 : this._masterVolume);

    // Definir sonidos. Si el archivo no existe, Howl queda en silencio
    // pero NO crashea (maneja el error internamente).
    this.sounds = {
      pickup: sound('pickup.wav', { volume: .6 }),
      treasure: sound('treasure.wav', { volume: .9 }),
      sell: sound('sell.wav', { volume: .8 }),
      full: sound('full.wav', { volume: .5 }),
      empty: sound('empty.wav', { volume: .4 }),
      carAlarm: sound('Sonido De Alarma De Auto.opus', { volume: .6, loop: false, pool: 6 }),
      steps: sound('Sounds_of_a_steps.opus', { volume: .65, loop: true }),
      ambient: sound('city_atmosphere_soun.opus', { volume: .18, loop: true })
    };
    // Reproducción normal: sin posiciones, panners ni atenuación 3D.
    const vehicleOptions = { volume: 0, loop: true, pool: 10 };
    this.vehicleSounds = {
      carIdle: sound('car_idling_at_a_traf.opus', vehicleOptions),
      carDrive: sound('small_vehicle_drivin.opus', vehicleOptions),
      busIdle: sound('car_idling_at_a_traf_bus.opus', vehicleOptions),
      busDrive: sound('bus_vehicle_drivin.opus', vehicleOptions),
      // Tomar una sola pitada de cada grabación evita reproducir secuencias de casi 8 s.
      horn1: sound('car_horn_sound1.opus', { ...vehicleOptions, loop: false, sprite: { honk: [900, 550] } }),
      horn2: sound('car_horn_sound.opus', { ...vehicleOptions, loop: false, sprite: { honk: [1000, 600] } }),
      horn3: sound('car_horn_sound_v3.opus', { ...vehicleOptions, loop: false, sprite: { honk: [200, 650] } })
    };
    this.vehicles = new VehicleAudio(this.vehicleSounds);
    this._carAlarms = new Map();

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
    this._dogBark = () => this.barkDog();
    eventTarget?.addEventListener('dog-bark', this._dogBark);
  }

  get volume() { return this._masterVolume; }
  setVolume(value) {
    this._masterVolume = Math.max(0, Math.min(1, Number(value) || 0));
    this._applySettings(); return this.volume;
  }
  setMuted(value) { this.muted = !!value; this._applySettings(); return this.muted; }
  toggleMute() { return this.setMuted(!this.muted); }
  isMuted() { return this.muted; }
  _applySettings() {
    this.howler.volume(this.muted ? 0 : this.volume);
    try {
      globalThis.localStorage?.setItem('bazuko.audio_volume', String(this.volume));
      globalThis.localStorage?.setItem('bazuko.audio_muted', String(this.muted));
    } catch { /* sin almacenamiento */ }
    this.eventTarget?.dispatchEvent(new CustomEvent('audio-settings-change', { detail: { volume: this.volume, muted: this.muted } }));
  }

  play(name) {
    const s = this.sounds[name];
    if (!s || s.playing()) return;
    s.play();
  }

  /** Ladrido breve sintetizado; usa el mismo volumen maestro y silencio que los vehículos. */
  barkDog() {
    const ctx = this.howler.ctx;
    if (this._paused || !ctx || ctx.state !== 'running' || !ctx.createBuffer || !this.howler.masterGain) return;
    if (!this._barkBuffer) {
      this._barkBuffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * .18), ctx.sampleRate);
      const data = this._barkBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / ctx.sampleRate;
        data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 24) * Math.min(1, t * 250)
          * (.5 + .5 * Math.sin(t * 2 * Math.PI * 140));
      }
    }
    const source = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), gain = ctx.createGain();
    source.buffer = this._barkBuffer; filter.type = 'bandpass'; filter.frequency.value = 700; filter.Q.value = .7;
    gain.gain.value = .5;
    source.connect(filter); filter.connect(gain); gain.connect(this.howler.masterGain);
    source.onended = () => { source.disconnect(); filter.disconnect(); gain.disconnect(); };
    source.start();
  }

  stop(name) {
    this.sounds[name]?.stop();
  }

  playCarAlarm(car) {
    const sound = this.sounds.carAlarm;
    if (!car || car.traffic || this._paused || sound.state() !== 'loaded') return false;
    const current = this._carAlarms.get(car);
    if (current && (current.paused || sound.playing(current.id))) return false;
    this._carAlarms.set(car, { id: sound.play(), paused: false });
    return true;
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
    for (const [car, alarm] of this._carAlarms) {
      const sound = this.sounds.carAlarm;
      if (paused && sound.playing(alarm.id)) {
        sound.pause(alarm.id); alarm.paused = true;
      } else if (!paused && alarm.paused) {
        sound.play(alarm.id); alarm.paused = false;
      } else if (!alarm.paused && !sound.playing(alarm.id)) this._carAlarms.delete(car);
    }
    if (paused) {
      this.updateSteps(false, false); this.updateBoost(false);
      if (this._ambientId !== undefined) this.sounds.ambient.pause(this._ambientId);
    } else if (this._ambientStarted) this.sounds.ambient.play(this._ambientId);
  }

  updateWorld(dt, position, _camera, vehicles, bus) {
    this.setPaused(false);
    this.vehicles.update(dt, position, vehicles, bus);
    for (const [car, alarm] of this._carAlarms) {
      if (!alarm.paused && !this.sounds.carAlarm.playing(alarm.id)) this._carAlarms.delete(car);
    }
  }

  dispose() {
    this._carAlarms.clear();
    this.eventTarget?.removeEventListener('dog-bark', this._dogBark);
    this.vehicles.clear();
    this._removeUnlock();
    globalThis.document?.removeEventListener('visibilitychange', this._visibilityChanged);
    for (const sound of [...Object.values(this.sounds), ...Object.values(this.vehicleSounds)]) sound.unload();
  }
}
