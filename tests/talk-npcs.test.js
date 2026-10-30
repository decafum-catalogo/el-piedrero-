import test from 'node:test';
import assert from 'node:assert/strict';
import { TALK_NPCS } from '../src/data/npcs.js';
import { PALETTES, COLOR_NAMES } from '../src/character/look.js';

test('los cinco personajes con nombre tienen frases y posición', () => {
  assert.deepEqual(TALK_NPCS.map(n => n.id), ['ruben', 'licho', 'celso', 'cliente', 'chupacabras']);
  for (const n of TALK_NPCS) {
    assert.ok(n.lines.length >= 3, n.id);
    assert.equal(n.pos.length, 2);
  }
});

test('Rubén es albino: piel albina, pelo blanco y lentes', () => {
  const r = TALK_NPCS.find(n => n.id === 'ruben');
  assert.equal(COLOR_NAMES.piel[r.look.piel], 'Albina');
  assert.equal(COLOR_NAMES.pelo[r.look.peloColor], 'Blanco');
  assert.ok(r.accessories.includes('lentes'));
  assert.equal(PALETTES.piel.length, COLOR_NAMES.piel.length);
});
