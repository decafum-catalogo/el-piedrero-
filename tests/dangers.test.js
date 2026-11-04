import test from 'node:test';
import assert from 'node:assert/strict';
import { zoneAt, DANGER_ZONES, RUBEN_WARNINGS } from '../src/data/zones.js';
import { STRAY } from '../src/entities/StrayDog.js';
import { MUGGER } from '../src/entities/Mugger.js';

test('zoneAt encuentra el lote de atrás', () => {
  assert.equal(zoneAt(200, 230)?.id, 'lote');
  assert.equal(zoneAt(10, 10), null);
});
test('las zonas tienen aviso', () => {
  for (const z of DANGER_ZONES) assert.ok(z.warn.length > 5);
  assert.ok(RUBEN_WARNINGS.day.length && RUBEN_WARNINGS.night.length);
});
test('parámetros razonables', () => {
  assert.ok(STRAY.speed > STRAY.wander && STRAY.giveUp > STRAY.sight);
  assert.ok(MUGGER.min < MUGGER.max && MUGGER.max < 1);
});

import * as THREE from 'three';
const { StrayDog: Dog } = await import('../src/entities/StrayDog.js');
const { DangerSystem } = await import('../src/systems/DangerSystem.js');

const fakeDistrict = () => ({ scene: new THREE.Scene(), getGroundHeight: () => 0, isWalkableAt: () => true, npcs: [] });

test('el perro gruñe antes de atacar y se asusta si le pegan', () => {
  const d = new Dog(new THREE.Scene(), new THREE.Vector3(0, 0, 0), {});
  const player = { x: 3, z: 0 };
  let growled = false;
  for (let i = 0; i < 10; i++) { d.update(0.1, player); growled ||= d.justGrowled; }
  assert.ok(growled, 'debe gruñir primero');
  assert.notEqual(d.state, 'chase', 'no ataca de inmediato');
  for (let i = 0; i < 40; i++) d.update(0.1, player);
  assert.equal(d.state, 'chase');
  d.scare();
  for (let i = 0; i < 20; i++) d.update(0.1, player);
  assert.notEqual(d.state, 'chase');
});

test('defenderse: asusta al perro y recupera la plata del chapulín', () => {
  const toasts = []; let refund = 0;
  const ds = new DangerSystem(fakeDistrict(), { isNight: () => true, hurt() {}, robFraction: () => 500, toast: (t) => toasts.push(t), refund: (n) => { refund += n; } },
    { dogs: [[0, 0]], muggers: [[0, 0]] });
  const player = { x: 0.2, z: 0.2 };
  const m = ds.muggers[0];
  m.setActive(true);
  assert.ok(m.timer > 0, 'el chapulín tarda en actuar al caer la noche');
  m.timer = 0; m.state = 'approach';
  assert.equal(ds.defend(player), true); // se asusta y huye
  assert.equal(m.state, 'flee');
  m.stolen = 500;
  assert.equal(ds.defend(player), true);
  assert.equal(refund, 500);
  assert.equal(ds.defend(player), true); // ahora le pega al perro
  assert.equal(ds.dogs[0].state, 'return');
  assert.equal(ds.defend({ x: 50, z: 50 }), false);
});
