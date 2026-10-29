// Zonas peligrosas de La Carpio (coordenadas de casilla, 2 m por casilla).
// `night`: solo es peligrosa de noche. Rubén avisa según la hora.
export const DANGER_ZONES = [
  { id: 'lote', name: 'el lote de atrás', x0: 92, z0: 105, x1: 118, z1: 133, night: true,
    warn: 'Cuidado: el lote de atrás de noche es zona de asaltos.' },
  { id: 'calle54', name: 'la Calle 54', x0: 50, z0: 80, x1: 58, z1: 140, night: true,
    warn: 'Por la Calle 54 de noche andan los chapulines. Ojo.' },
  { id: 'rio', name: 'la quebrada', x0: 165, z0: 0, x1: 182, z1: 200, night: false,
    warn: 'Por la quebrada hay perros bravos. No se meta.' }
];

export function zoneAt(x, z, zones = DANGER_ZONES) {
  const tx = x / 2, tz = z / 2;
  return zones.find(q => tx >= q.x0 && tx <= q.x1 && tz >= q.z0 && tz <= q.z1) ?? null;
}

/** Aviso de Rubén según la hora. */
export const RUBEN_WARNINGS = {
  day: ['De día aquí se anda tranquilo, pero cuando oscurezca no se meta al lote de atrás.',
        'Ahorita hay sol, aproveche. Ya de noche la Calle 54 se pone fea.'],
  night: ['¿Y usted qué hace en la calle a esta hora? Por el lote y la Calle 54 andan asaltando.',
          'De noche no ande con plata encima. Los chapulines no perdonan.']
};
