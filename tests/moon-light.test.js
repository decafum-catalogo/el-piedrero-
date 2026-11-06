// La luna baja cae a ras del piso y su luz rebotaba en la calzada como una franja blanca de borde duro.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SceneManager } from '../src/core/Scene.js';

const clear = { cloudCover: .1, rainIntensity: 0, fogDensity: 1, flash: 0 };
const close = (actual, expected, label) => assert.ok(Math.abs(actual - expected) < .002, `${label}: ${actual} en vez de ${expected}`);

test('con la luna baja la luz directa se limita, en cualquier fase y a cualquier hora de la noche', () => {
  const manager = new SceneManager();
  let grazing = 0;
  for (const day of [1, 8, 15, 22]) for (let hour = 0; hour < 24; hour += .05) {
    manager.setTimeOfDay(hour, clear, day);
    if (manager._sunDir.y > -.1 || manager._lightDir.y > .35) continue;
    grazing++;
    assert.ok(manager.sun.intensity < .25, `día ${day}, ${hour.toFixed(2)} h: ${manager.sun.intensity}`);
  }
  assert.ok(grazing > 20, 'el caso existe en varias fases');
});

// (prueba de la ciudad original quitada: ese mundo ya no existe en El Piedrero)
test('el límite entra y sale sin saltos y la luz no oscila', () => {
  const manager = new SceneManager();
  for (const day of [1, 8, 15, 22]) {
    let previous = null, trend = 0, lastFlip = -Infinity, biggest = 0, sample = 0;
    for (let hour = 0; hour < 24; hour += 1 / 150, sample++) { // cada 1 s real, 24 horas en una real
      manager.setTimeOfDay(hour, clear, day);
      const intensity = manager.sun.intensity;
      if (previous !== null) {
        const change = intensity - previous;
        biggest = Math.max(biggest, Math.abs(change));
        const direction = Math.abs(change) < 1e-5 ? trend : Math.sign(change);
        if (trend && direction !== trend) {
          assert.ok(sample - lastFlip > 4, `día ${day}, ${hour.toFixed(2)} h: vuelve a cambiar de sentido en ${sample - lastFlip} s`);
          lastFlip = sample;
        }
        trend = direction;
      }
      previous = intensity;
    }
    assert.ok(biggest < .05, `día ${day}: de un segundo al siguiente cambia ${biggest}`);
  }
});
