import test from 'node:test';
import assert from 'node:assert/strict';
import { MissionSystem, MISSION, inMissionWindow } from '../src/systems/MissionSystem.js';
import { InventorySystem } from '../src/systems/InventorySystem.js';
import { smokeIntensity, smokeTotal } from '../src/systems/SmokingSystem.js';
import { ITEMS, isRecyclable, isUsable } from '../src/data/items.js';

const celso = { id: 'celso', name: 'Celso', lines: ['a', 'b', 'c', 'd'] };
const cliente = { id: 'cliente', name: 'El Cliente' };
function setup() {
  const toasts = [];
  const game = { inventory: new InventorySystem(), stats: { dinero: 500 } };
  const m = new MissionSystem(game, { toast: (t) => toasts.push(t) }, { spawnPolice: false });
  return { m, game, toasts };
}

test('de día Celso no da la vuelta', () => {
  const { m, game } = setup();
  assert.ok(m.handleTalk(celso, false));
  assert.equal(game.inventory.count('bolsita'), 0);
});

test('flujo completo: bolsita → cliente → Celso paga ₡2.000 y purito', () => {
  const { m, game } = setup();
  m.handleTalk(celso, true);
  assert.equal(m.state, 'active');
  assert.equal(game.inventory.count('bolsita'), 1);
  m.handleTalk(cliente, true);
  assert.equal(m.state, 'delivered');
  assert.equal(game.stats.dinero, 500 + MISSION.price);
  m.handleTalk(celso, true);
  assert.equal(game.stats.dinero, 500 + MISSION.pay);
  assert.equal(game.inventory.count('purito'), 1);
  assert.equal(m.state, 'idle');
  m.dispose();
});

test('si tira la bolsita la misión falla; si la Fuerza Pública agarra, multa', () => {
  const { m, game } = setup();
  m.handleTalk(celso, true);
  game.inventory.remove('bolsita', 1);
  m.update(0.1, { x: 0, z: 0 }, true);
  assert.equal(m.state, 'failed');
  m.handleTalk(celso, true);
  assert.equal(m.state, 'idle');
  m.handleTalk(celso, true);
  m._caught();
  assert.equal(m.state, 'failed');
  assert.equal(game.inventory.count('bolsita'), 0);
  assert.equal(game.stats.dinero, 0); // la multa no pasa de lo que lleva
  m.dispose();
});

test('el efecto de fumar sube, se sostiene y se cura', () => {
  assert.equal(smokeIntensity(0), 0);
  assert.equal(smokeIntensity(5), 1);
  assert.ok(smokeIntensity(smokeTotal() - 1) < 0.2);
  assert.equal(smokeIntensity(smokeTotal() + 1), 0);
});

test('purito es fumable y no reciclable; bolsita no se usa', () => {
  assert.ok(isUsable(ITEMS.purito) && ITEMS.purito.smokable);
  assert.ok(!isRecyclable(ITEMS.purito) && !isRecyclable(ITEMS.bolsita));
  assert.ok(!isUsable(ITEMS.bolsita));
});

test('la misión está disponible de 10 pm a 5 am', () => {
  assert.ok(inMissionWindow(22) && inMissionWindow(23) && inMissionWindow(0) && inMissionWindow(4.9));
  assert.ok(!inMissionWindow(5) && !inMissionWindow(12) && !inMissionWindow(21.9));
});

test('un vecino avisa: la policía busca al jugador y se le pasa el aviso', () => {
  const { m, toasts } = setup();
  m.alertPolice(10);
  assert.ok(m.wanted >= 10 && toasts.some(t => t.includes('vecino')));
  m.update(11, { x: 0, z: 0 }, false);
  assert.equal(m.wanted, 0);
});

test('esconderse en un basurero hace invisible al jugador y no funciona lejos', () => {
  const { m, game } = setup();
  game.player = { root: { visible: true } };
  const player = { x: 0, z: 0 };
  assert.equal(m.toggleHide(player, [{ kind: 'trash', position: { x: 10, z: 0 } }]), false);
  assert.equal(m.toggleHide(player, [{ kind: 'trash', position: { x: 1, z: 0 } }]), true);
  assert.equal(game.player.root.visible, false);
  m.alertPolice(10);
  assert.equal(m.wanted, 0, 'escondido nadie lo ve');
  m.update(13, player, false);
  assert.equal(m.hidden, false);
  assert.equal(game.player.root.visible, true);
});

test('un policía sospecha de quien corre de noche', () => {
  const { m } = setup();
  const fake = { active: false, state: 'patrol', setActive(v) { this.active = v; }, think(dt, p, c, f) { this.flags = f; return null; } };
  m.police.push(fake);
  m.update(0.1, { x: 0, z: 0 }, false, { running: true, night: true });
  assert.equal(fake.flags.suspicious, true);
  m.update(0.1, { x: 0, z: 0 }, false, { running: true, night: false });
  assert.equal(fake.flags.suspicious, false);
});
