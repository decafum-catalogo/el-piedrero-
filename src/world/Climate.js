// src/world/Climate.js
// Clima de Costa Rica (San José) sin dependencias de Three.js: temporadas, estados del tiempo
// y posición astronómica de sol y luna. Lo comparten WeatherSystem, el cielo y la UI.

/** Días de juego que dura cada temporada; el año completo dura cuatro temporadas. */
export const DAYS_PER_SEASON = 4;
const SAN_JOSE_LATITUDE = 9.93 * Math.PI / 180;
const LUNAR_DAYS = 29.53;

/**
 * Estados del tiempo ordenados por intensidad (`level`). Los valores son los
 * objetivos hacia los que se mezclan las transiciones:
 * cloud: cobertura de nubes 0–1 · rain: intensidad de lluvia 0–1 · wind: viento 0–1
 * fog: multiplicador de bruma (1 normal) · lightning: probabilidad de rayos.
 */
export const WEATHER_TYPES = Object.freeze({
  soleado:  { level: 0, icon: '☀️', nightIcon: '🌙', label: 'Soleado', nightLabel: 'Despejado', cloud: .1, rain: 0, wind: .2, fog: .75, lightning: 0,
    toast: '☀️ Se despeja el cielo: sale el sol sobre La Carpio.' },
  parcial:  { level: 1, icon: '⛅', nightIcon: '☁️', label: 'Parcialmente nublado', cloud: .42, rain: 0, wind: .35, fog: .9, lightning: 0,
    toast: '⛅ Las nubes se abren a ratos sobre el centro.' },
  nublado:  { level: 2, icon: '☁️', label: 'Nublado', cloud: .85, rain: 0, wind: .3, fog: 1, lightning: 0,
    toast: '☁️ El cielo se cierra: se viene el chaparrón de la tarde.' },
  niebla:   { level: 2, icon: '🌫️', label: 'Neblina', cloud: .75, rain: 0, wind: .05, fog: 2.4, lightning: 0,
    toast: '🌫️ Baja la neblina de las montañas.' },
  llovizna: { level: 3, icon: '🌦️', label: 'Llovizna', cloud: .92, rain: .3, wind: .3, fog: 1.25, lightning: 0,
    toast: '🌦️ Comienza a lloviznar en La Carpio…' },
  aguacero: { level: 4, icon: '🌧️', label: 'Aguacero', cloud: .97, rain: .72, wind: .55, fog: 1.5, lightning: .15,
    toast: '🌧️ ¡Se largó el aguacero! Busca dónde escampar.' },
  tormenta: { level: 5, icon: '⛈️', label: 'Tormenta eléctrica', cloud: 1, rain: 1, wind: .9, fog: 1.7, lightning: 1,
    toast: '⛈️ Tormenta eléctrica sobre San José. Truenos en las montañas.' }
});

/** Icono y nombre visibles: de noche el cielo despejado muestra la luna. */
export function describeWeather(type, isNight = false) {
  return {
    icon: (isNight && type.nightIcon) || type.icon,
    label: (isNight && type.nightLabel) || type.label
  };
}

/** Lluvia mínima (ya mezclada) para considerar que está lloviendo. */
export const RAIN_THRESHOLD = .12;

/**
 * Régimen de Costa Rica (Valle Central): verano seco de diciembre a abril, invierno lluvioso de mayo a noviembre con el veranillo de San Juan.
 * weights: probabilidad relativa de cada estado · windMul: viento extra
 * cold: frío adicional de madrugadas y noches (los ventarrones de diciembre y enero).
 */
export const SEASONS = Object.freeze([
  { id: 'seca', icon: '🌞', label: 'Verano (época seca)', months: 'dic – feb', windMul: 1.5, cold: .15,
    weights: { soleado: 6, parcial: 3, nublado: 1, niebla: .5, llovizna: .3, aguacero: .1, tormenta: .03 } },
  { id: 'lluvias1', icon: '🌧️', label: 'Inicio del invierno', months: 'mar – may', windMul: 1, cold: 0,
    weights: { soleado: 3, parcial: 3, nublado: 2, niebla: .5, llovizna: 1.5, aguacero: 1.2, tormenta: .6 } },
  { id: 'veranillo', icon: '🪁', label: 'Veranillo de San Juan', months: 'jun – ago', windMul: 1.2, cold: 0,
    weights: { soleado: 3, parcial: 3, nublado: 2, niebla: .4, llovizna: 1.5, aguacero: 1, tormenta: .5 } },
  { id: 'lluvias2', icon: '⛈️', label: 'Invierno (aguaceros)', months: 'sep – nov', windMul: 1, cold: .05,
    weights: { soleado: 1, parcial: 2, nublado: 3, niebla: .8, llovizna: 3, aguacero: 3.2, tormenta: 1.8 } }
]);

/** Temporada vigente según el día de juego (el día 1 abre la temporada seca). */
export function seasonForDay(day = 1) {
  const index = Math.floor(Math.max(0, day - 1) / DAYS_PER_SEASON) % SEASONS.length;
  return SEASONS[index];
}

/** Fracción del año de juego 0–1; 0 equivale a comienzos de diciembre. */
export function yearFraction(day = 1, hour = 0) {
  const length = DAYS_PER_SEASON * SEASONS.length;
  return (((day - 1 + hour / 24) % length) + length) % length / length;
}

/**
 * Elige el siguiente estado con los pesos de la temporada. Solo permite saltos
 * de hasta dos niveles para que el sol no pase directo a la tormenta; la neblina
 * es matinal (4:00–9:30).
 */
export function pickNextWeather(current, season, hour = 12, random = Math.random) {
  const from = WEATHER_TYPES[current]?.level ?? 2;
  const candidates = [];
  let total = 0;
  for (const [id, type] of Object.entries(WEATHER_TYPES)) {
    if (id === current) continue;
    if (Math.abs(type.level - from) > 2) continue;
    if (id === 'niebla' && (hour < 4 || hour > 9.5)) continue;
    const weight = season.weights[id] ?? 0;
    if (weight <= 0) continue;
    candidates.push([id, weight]);
    total += weight;
  }
  if (!candidates.length) return 'nublado';
  let roll = random() * total;
  for (const [id, weight] of candidates) {
    roll -= weight;
    if (roll <= 0) return id;
  }
  return candidates[candidates.length - 1][0];
}

function writeDirection(out, hourAngle, declination) {
  const cosD = Math.cos(declination), sinD = Math.sin(declination);
  const cosL = Math.cos(SAN_JOSE_LATITUDE), sinL = Math.sin(SAN_JOSE_LATITUDE);
  const east = -cosD * Math.sin(hourAngle);
  const north = cosL * sinD - sinL * cosD * Math.cos(hourAngle);
  const up = sinL * sinD + cosL * cosD * Math.cos(hourAngle);
  // Mundo: las montañas del este están en −X; el norte está en −Z.
  out.x = -east; out.y = up; out.z = -north;
  return out;
}

/** Declinación solar de la fracción del año (mínima a finales de diciembre). */
export function solarDeclination(day = 1, hour = 0) {
  return -23.44 * Math.PI / 180 * Math.cos(2 * Math.PI * (yearFraction(day, hour) + .055));
}

/** Dirección unitaria hacia el sol: sale por las montañas a las 6:00 y cruza casi por el cenit. */
export function sunDirection(hour, day = 1, out = { x: 0, y: 0, z: 0 }) {
  return writeDirection(out, (hour - 12) / 24 * 2 * Math.PI, solarDeclination(day, hour));
}

/** Fase lunar 0–1: 0 luna nueva, 0,5 luna llena. */
export function moonPhase(day = 1, hour = 0) {
  const value = (day + hour / 24 + 14) / LUNAR_DAYS;
  return value - Math.floor(value);
}

/** Fracción iluminada del disco lunar según la fase. */
export function moonIllumination(phase) {
  return (1 - Math.cos(phase * 2 * Math.PI)) / 2;
}

/** La luna se retrasa respecto al sol según su fase: llena sale al anochecer. */
export function moonDirection(hour, day = 1, out = { x: 0, y: 0, z: 0 }) {
  const phase = moonPhase(day, hour);
  const hourAngle = (hour - 12) / 24 * 2 * Math.PI - phase * 2 * Math.PI;
  return writeDirection(out, hourAngle, -solarDeclination(day, hour) * .8);
}
