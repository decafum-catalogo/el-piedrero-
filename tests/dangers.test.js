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
