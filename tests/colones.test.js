import test from 'node:test';
import assert from 'node:assert/strict';
import { crc, cop } from '../src/utils/money.js';
import { ITEMS, SHOP_ITEMS, isRecyclable, isMetal } from '../src/data/items.js';

test('formato de colones', () => {
  assert.equal(crc(1500), '₡1.500');
  assert.equal(cop(12000), '₡12.000');
  assert.equal(crc(40), '₡40');
});
test('precios del Excel aplicados', () => {
  assert.equal(ITEMS.lata.value, 40);
  assert.equal(ITEMS.cobre.value, 1200);
  assert.equal(ITEMS.cobre.value, ITEMS.cable.value * 2);
  assert.equal(SHOP_ITEMS.find(s => s.item === 'radioTransistor').price, 12000);
  assert.equal(SHOP_ITEMS.find(s => s.upgrade === 'costal').price, 10000);
});
test('el Chupacabras compra metales y la recicladora el resto', () => {
  for (const id of ['lata', 'chatarra', 'cable', 'cobre']) { assert.ok(isMetal(ITEMS[id]), id); assert.ok(!isRecyclable(ITEMS[id]), id); }
  assert.ok(isRecyclable(ITEMS.botella) && isRecyclable(ITEMS.carton));
  assert.ok(ITEMS.cable.peelable);
});
