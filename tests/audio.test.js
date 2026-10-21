import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mock, test } from 'node:test';
import * as THREE from 'three';
import { AudioSystem } from '../src/systems/AudioSystem.js';
import { VehicleAudio } from '../src/systems/VehicleAudio.js';
import * as textures from '../src/world/bogota/textures.js';
import { TrafficRoute } from '../src/world/bogota/TrafficRoute.js';
import { BusService } from '../src/world/bogota/BusService.js';
mock.module('../src/world/bogota/textures.js', { namedExports: { ...textures, radialSprite: () => new THREE.Texture() } });
const { TrafficSystem } = await import('../src/systems/TrafficSystem.js');

let nextId = 0;
class FakeHowl {
  constructor(options) { this.options = options; this.voices = new Map(); this.starts = 0; this.loaded = true; }
  state() { return this.loaded ? 'loaded' : 'loading'; }
  play(sprite) {
    if (typeof sprite === 'number') { this.voices.get(sprite).playing = true; return sprite; }
    const id = ++nextId;
    this.voices.set(id, { playing: true, sprite }); this.starts++; return id;
  }
  playing(id) { return id === undefined ? [...this.voices.values()].some(voice => voice.playing) : this.voices.get(id)?.playing; }
  pause(id) { this.voices.get(id).playing = false; }
  stop(id) { for (const [key, voice] of this.voices) if (id === undefined || key === id) voice.playing = false; }
  pos(x, y, z, id) { this.voices.get(id).position = [x, y, z]; }
  volume(value, id) { if (id !== undefined) this.voices.get(id).volume = value; }
  rate(value, id) { if (id !== undefined) this.voices.get(id).rate = value; else this.currentRate = value; }
  seek(value, id) { this.voices.get(id).seek = value; }
  duration() { return 7.8; }
  unload() { this.unloaded = true; }
}
function fixture() {
  const howler = { volume() {}, pos(...value) { this.position = value; }, orientation(...value) { this.direction = value; } };
  const audio = new AudioSystem({ HowlClass: FakeHowl, howler });
  audio.vehicles.random = () => .5;
  return { audio, howler, bank: audio.vehicleSounds };
}
const car = (x, z = 0) => ({ car: { position: new THREE.Vector3(x, 0, z), group: new THREE.Group() }, speed: 0 });
const origin = new THREE.Vector3();

test('los nueve audios nuevos existen y las rutas de claxon coinciden con los nombres actuales', async () => {
  const { audio, bank } = fixture(); await audio.ready;
  for (const sound of [...Object.values(bank), audio.sounds.steps, audio.sounds.ambient]) {
    const file = decodeURIComponent(sound.options.src[0].replace('/audio/', ''));
    const bytes = readFileSync(new URL(`../public/audio/${encodeURIComponent(file)}`, import.meta.url));
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
    assert.equal(bytes.toString('ascii', 8, 12), 'WAVE');
    assert.ok(bytes.length > 100_000);
  }
  assert.deepEqual([bank.horn1, bank.horn2, bank.horn3].map(sound => sound.options.src[0]),
    ['/audio/car_horn_sound1.wav', '/audio/car_horn_sound.wav', '/audio/car_horn_sound_v3.wav']);
  assert.equal(audio.sounds.steps.options.src[0], '/audio/Sounds_of_a_steps.wav');
  assert.ok(bank.horn1.options.sprite.honk[1] < 1000);
  audio.dispose();
});

test('un archivo de sonido ausente informa su ruta y conserva el error hasta una carga correcta', () => {
  const { audio, bank } = fixture(), errors = [];
  const logger = mock.method(console, 'error', (...args) => errors.push(args));
  try {
    bank.horn2.options.onloaderror(null, '404');
    bank.horn2.options.onloaderror(null, '404');
    assert.equal(audio.loadErrors.get('car_horn_sound.wav'), '404');
    assert.equal(errors.length, 1);
    assert.ok(errors[0][0].includes('/audio/car_horn_sound.wav'));
    bank.horn2.options.onload();
    assert.equal(audio.loadErrors.size, 0);
  } finally { logger.mock.restore(); audio.dispose(); }
});

test('cada carro tiene voces normales independientes que mezclan marcha y ralentí', () => {
  const { audio, bank } = fixture(), first = car(4), second = car(-8);
  const vehicles = audio.vehicles;
  vehicles.update(.1, origin, [first, second]);
  const a = vehicles.instances.get(first.car), b = vehicles.instances.get(second.car);
  assert.notEqual(a.idle.id, b.idle.id);
  assert.notEqual(a.drive.id, b.drive.id);
  assert.equal(bank.carIdle.voices.get(a.idle.id).position, undefined);
  assert.equal(bank.carIdle.voices.get(b.idle.id).position, undefined);
  const oldIdle = a.idleVolume;
  first.speed = 5; first.car.position.x = 6;
  vehicles.update(.1, origin, [first, second]);
  assert.ok(a.idleVolume < oldIdle && a.idleVolume > 0);
  assert.ok(a.driveVolume > 0 && a.driveVolume < .40);
  assert.equal(b.driveVolume, 0);
  assert.equal(bank.carDrive.voices.get(a.drive.id).position, undefined);
  audio.dispose();
});

test('el claxon espera una obstrucción peatonal y mantiene enfriamiento independiente por carro', () => {
  const { audio, bank } = fixture(), first = car(5), second = car(-5);
  first.personBlocked = true;
  for (let i = 0; i < 8; i++) audio.vehicles.update(.1, origin, [first, second]);
  assert.equal(bank.horn2.starts, 0);
  for (let i = 0; i < 8; i++) audio.vehicles.update(.1, origin, [first, second]);
  assert.equal(bank.horn2.starts, 1);
  second.personBlocked = true;
  for (let i = 0; i < 20; i++) audio.vehicles.update(.1, origin, [first, second]);
  assert.equal(bank.horn2.starts, 2);
  const a = audio.vehicles.instances.get(first.car), b = audio.vehicles.instances.get(second.car);
  assert.notEqual(a.horn.id, b.horn.id);
  assert.equal(bank.horn2.voices.get(a.horn.id).volume, .48);
  first.personBlocked = second.personBlocked = false;
  for (let i = 0; i < 100; i++) audio.vehicles.update(.1, origin, [first, second]);
  assert.equal(bank.horn2.starts, 2);
  audio.dispose();
});

test('el presupuesto de ocho vehículos cercanos evita motores lejanos y libera los retirados', () => {
  const { audio, bank } = fixture();
  const cars = Array.from({ length: 20 }, (_, index) => car(index * 4));
  audio.vehicles.update(.1, origin, cars);
  assert.equal(bank.carIdle.starts, 8); assert.equal(bank.carDrive.starts, 8);
  assert.equal(audio.vehicles.instances.get(cars[19].car).idle, null);
  const removed = audio.vehicles.instances.get(cars[0].car).idle.id;
  audio.vehicles.update(.1, origin, cars.slice(1));
  assert.equal(audio.vehicles.instances.has(cars[0].car), false);
  assert.equal(bank.carIdle.playing(removed), false);
  cars[1].car.position.x = 200;
  audio.vehicles.update(.1, origin, cars.slice(1));
  assert.equal(audio.vehicles.instances.get(cars[1].car).idle, null);
  audio.dispose();
});

test('los vehículos cercanos mantienen motor y claxon aunque no se dibujen en la cámara', () => {
  const { audio, bank } = fixture(), vehicle = car(3);
  vehicle.car.group.visible = false; vehicle.personBlocked = true;
  for (let frame = 0; frame < 20; frame++) audio.vehicles.update(.1, origin, [vehicle]);
  assert.equal(bank.carIdle.starts, 1);
  assert.equal(bank.horn2.starts, 1);
  const voice = audio.vehicles.instances.get(vehicle.car).idle;
  assert.ok(bank.carIdle.voices.get(voice.id).volume > .2);
  audio.dispose();
});

test('menús pausan motores y ambiente sin duplicar voces al volver; eliminar audio libera todo', () => {
  const { audio, bank } = fixture(), vehicle = car(3);
  audio.startAmbient(); audio.updateSteps(true, false);
  audio.vehicles.update(.1, origin, [vehicle]);
  const id = audio.vehicles.instances.get(vehicle.car).idle.id;
  audio.setPaused(true);
  assert.equal(bank.carIdle.playing(id), false);
  assert.equal(audio.sounds.ambient.playing(), false);
  assert.equal(audio.sounds.steps.playing(), false);
  audio.setPaused(false); audio.setPaused(false);
  assert.equal(bank.carIdle.playing(id), true);
  assert.equal(bank.carIdle.starts, 1);
  assert.equal(audio.sounds.ambient.starts, 1);
  audio.dispose();
  assert.ok(Object.values(bank).every(sound => sound.unloaded));
  assert.equal(audio.vehicles.instances.size, 0);
});

test('el audio normal ignora la orientación de cámara y correr cambia los pasos sin reiniciarlos', () => {
  const { audio, howler } = fixture();
  const camera = new THREE.PerspectiveCamera(); camera.position.set(100, 50, 100); camera.lookAt(101, 50, 100);
  audio.updateWorld(.1, new THREE.Vector3(10, 0, 20), camera, []);
  assert.equal(howler.position, undefined);
  assert.equal(howler.direction, undefined);
  audio.updateSteps(true, false); audio.updateSteps(true, true);
  assert.equal(audio.sounds.steps.starts, 1);
  assert.equal(audio.sounds.steps.currentRate, 1.4);
  camera.lookAt(99, 50, 100);
  audio.updateWorld(.1, origin, camera, []);
  assert.equal(howler.direction, undefined);
  audio.dispose();
});

test('un audio todavía sin cargar no acumula reproducciones pendientes por cuadro', () => {
  const { audio, bank } = fixture();
  for (const sound of Object.values(bank)) sound.loaded = false;
  const sounds = new VehicleAudio(bank, () => .5), vehicle = car(1); vehicle.personBlocked = true;
  for (let i = 0; i < 100; i++) sounds.update(.1, origin, [vehicle]);
  assert.ok(Object.values(bank).every(sound => sound.starts === 0));
  for (const sound of Object.values(bank)) sound.loaded = true;
  sounds.update(.1, origin, [vehicle]);
  assert.equal(bank.carIdle.starts, 1); assert.equal(bank.horn2.starts, 1);
  sounds.clear(); audio.dispose();
});

test('carro y bus distinguen a un peatón atravesado de un semáforo o una cola de vehículos', () => {
  const route = new TrafficRoute(0, 60, 0, 60, 3.2);
  const traffic = new TrafficSystem(new THREE.Scene(), [route], { carsPerRoute: 1, random: () => .5 });
  const vehicle = traffic.vehicles[0]; vehicle.distance = 5; vehicle.speed = 4;
  route.sample(vehicle.distance, vehicle.car.position, traffic._direction);
  const person = vehicle.car.position.clone().add(new THREE.Vector3(6, 0, 0));
  traffic._clearance(vehicle, person, []); assert.equal(vehicle.personBlocked, true);
  traffic._clearance(vehicle, null, [{ position: person }]); assert.equal(vehicle.personBlocked, true);
  traffic._clearance(vehicle, null, []); assert.equal(vehicle.personBlocked, false);
  traffic.signals = { blocks: () => true };
  traffic._clearance(vehicle, person, []); assert.equal(vehicle.personBlocked, false);
  traffic.dispose();
  const bus = new BusService({ x: 10, startZ: 100, endZ: 0, stationZ: 20 });
  bus.position.z = 80;
  bus.update(.05, { player: new THREE.Vector3(10, 0, 65) });
  assert.equal(bus.personBlocked, true);
  bus.update(.05); assert.equal(bus.personBlocked, false);
  bus.signals = { busClearance: () => 0 };
  bus.update(.05, { player: new THREE.Vector3(10, 0, 65) });
  assert.equal(bus.personBlocked, false);
  bus.update(.05, { player: new THREE.Vector3(10, 0, bus.position.z - bus.length / 2 - .9) });
  assert.equal(bus.personBlocked, true, 'El bus también detecta al jugador junto al frente aunque tenga rojo');
});

test('quedarse ante el parachoques activa el claxon aunque el semáforo ya haya detenido al carro', () => {
  for (const distance of [10, 70, 130, 190]) {
    const { audio, bank } = fixture();
    const traffic = new TrafficSystem(new THREE.Scene(), [new TrafficRoute(0, 60, 0, 60, 3.2)], { carsPerRoute: 1, random: () => .5 });
    const vehicle = traffic.vehicles[0]; vehicle.distance = distance; vehicle.routeTimer = 1000;
    vehicle.route.sample(distance, vehicle.car.position, traffic._direction);
    vehicle.car.group.rotation.y = Math.atan2(-traffic._direction.z, traffic._direction.x);
    const front = vehicle.car.position.clone().addScaledVector(traffic._direction, vehicle.car.length / 2 + .8);
    traffic.signals = { blocks: () => true };
    for (let frame = 0; frame < 35; frame++) {
      traffic.update(.05);
      audio.vehicles.update(.05, front, traffic.vehicles);
    }
    assert.equal(bank.horn2.starts, 0, 'El rojo por sí solo no provoca una pitada');
    for (let frame = 0; frame < 35; frame++) {
      traffic.update(.05, { player: front });
      audio.vehicles.update(.05, front, traffic.vehicles);
    }
    assert.equal(bank.horn2.starts, 1, 'El jugador junto al frente debe provocar el claxon en cualquier rumbo');
    assert.equal(vehicle.speed, 0);
    const back = vehicle.car.position.clone().addScaledVector(traffic._direction, -vehicle.car.length / 2 - .8);
    for (let frame = 0; frame < 240; frame++) {
      traffic.update(.05, { player: back });
      audio.vehicles.update(.05, back, traffic.vehicles);
    }
    assert.equal(bank.horn2.starts, 1, 'Quedarse detrás no provoca claxon');
    traffic.dispose(); audio.dispose();
  }
});
