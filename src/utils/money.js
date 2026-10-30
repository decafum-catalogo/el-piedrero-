// src/utils/money.js
// Formato de colones costarricenses: 12500 → "₡12.500"

const fmt = new Intl.NumberFormat('es-CR', { maximumFractionDigits: 0, useGrouping: true });
const group = (n) => fmt.format(Math.round(n ?? 0)).replace(/[\u00a0\u202f\s,]/g, '.');

export const crc = (n) => `₡${group(n)}`;
/** Alias histórico: el resto del juego importa `cop`, ahora formatea colones. */
export const cop = crc;
