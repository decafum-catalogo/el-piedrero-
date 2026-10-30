
// src/data/items.js
// Valores en colones (₡): `value` es lo que pagan por el objeto.

export const ITEMS = {
  // ===== BASURA =====
  lata:     { id: 'lata',     name: 'Lata vacía',    weight: 0.2,  value: 40, rarity: 'common', metal: true },
  botella:  { id: 'botella',  name: 'Botella PET',   weight: 0.3,  value: 25 },
  carton:   { id: 'carton',   name: 'Cartón',        weight: 0.5,  value: 30, rarity: 'common' },
  chatarra: { id: 'chatarra', name: 'Chatarra',      weight: 1.0,  value: 150, metal: true },
  // Cable con el forro puesto: se puede vender así (barato) o pelar para sacar el cobre (₡1.200).
  cable:    { id: 'cable',    name: 'Cable forrado', weight: 0.4,  value: 600, metal: true, usable: true, peelable: true,
              desc: 'Cable con forro. Use "Pelar" para sacarle el cobre y venderlo mejor al Chupacabras.' },
  cobre:    { id: 'cobre',    name: 'Cobre pelado',  weight: 0.3,  value: 1200, metal: true,
              desc: 'Cobre limpio. El Chupacabras Cochón lo paga bien.' },

  // ===== TESOROS =====
  reloj:  { id: 'reloj',  name: 'Reloj oxidado', weight: 0.1,  value: 3000, rare: true },
  moneda: { id: 'moneda', name: 'Moneda vieja',  weight: 0.02, value: 5000, rare: true },
  anillo: { id: 'anillo', name: 'Anillo',        weight: 0.05, value: 15000, rare: true },

  // ===== RADIO Y PILAS =====
  radioTransistor: { id: 'radioTransistor', name: 'Radio transistor AM/FM', weight: 0.6, value: 6000, usable: true },
  pilas: { id: 'pilas', name: 'Pilas AA', weight: 0.1, value: 500, usable: true },

  // ===== OBJETOS ROBADOS (AUTOS) =====
  retrovisor: { id: 'retrovisor', name: 'Retrovisor',   weight: 0.8, value: 5000 },
  radio:      { id: 'radio',      name: 'Radio auto',   weight: 1.5, value: 12000 },

  // ===== CONSUMIBLES =====
  pan: {
    id: 'pan', name: 'Pan duro', weight: 0.3, value: 150,
    consumable: 'hambre', amount: 25, animo: 5
  },
  lataComida: {
    id: 'lataComida', name: 'Lata de atún', weight: 0.4, value: 400,
    consumable: 'hambre', amount: 45, animo: 8
  },
  agua: {
    id: 'agua', name: 'Botella agua', weight: 0.5, value: 300,
    consumable: 'sed', amount: 35
  },
  refresco: {
    id: 'refresco', name: 'Refresco', weight: 0.4, value: 400,
    consumable: 'sed', amount: 50, energia: 10, animo: 10
  },
  cafe: {
    id: 'cafe', name: 'Cafecito caliente', weight: 0.3, value: 500,
    consumable: 'energia', amount: 40, animo: 15
  },
  vendaje: {
    id: 'vendaje', name: 'Vendaje', weight: 0.1, value: 500,
    consumable: 'salud', amount: 30
  },

  // ===== HIGIENE =====
  jabon: {
    id: 'jabon', name: 'Jabón', weight: 0.2, value: 400,
    consumable: 'higiene', amount: 40
  },
  cepillo: {
    id: 'cepillo', name: 'Cepillo', weight: 0.1, value: 300,
    consumable: 'higiene', amount: 20
  },

  // ===== CURAS =====
  vacuna: {
    id: 'vacuna', name: 'Vacuna', weight: 0.1, value: 5000,
    cure: 'tetanos'
  },
  carbon: {
    id: 'carbon', name: 'Carbón activo', weight: 0.1, value: 1000,
    cure: 'intoxicacion'
  },
  jarabe: {
    id: 'jarabe', name: 'Jarabe', weight: 0.2, value: 1500,
    cure: 'gripe'
  },
  pomada: {
    id: 'pomada', name: 'Pomada', weight: 0.15, value: 1200,
    cure: 'sarna'
  },
  antibiotico: {
    id: 'antibiotico', name: 'Antibiótico', weight: 0.1, value: 3000,
    cure: 'infeccion'
  },
  antiparasitario: {
    id: 'antiparasitario', name: 'Antiparasitario', weight: 0.1, value: 1500,
    cure: 'parasitos'
  },

  // ===== SUSTANCIAS =====
  tintico: {
    id: 'tintico', name: 'Tintico', weight: 0.1, value: 300,
    consumable: 'vicio', amount: 20, animo: 15, energia: 20, substance: true
  },
  pegante: {
    id: 'pegante', name: 'Pegante', weight: 0.2, value: 800,
    consumable: 'vicio', amount: 40, animo: 25, salud: -3, substance: true
  },
  pastilla: {
    id: 'pastilla', name: 'Pastilla', weight: 0.05, value: 1500,
    consumable: 'vicio', amount: 60, animo: 40, salud: -5, substance: true
  },
  cigarrillo: {
    id: 'cigarrillo', name: 'Cigarrillo suelto', weight: 0.01, value: 100,
    consumable: 'vicio', amount: 35, salud: -1
  },

  // ===== LA VUELTA DE CELSO =====
  bolsita: {
    id: 'bolsita', name: 'Bolsita', weight: 0.05, value: 0, contraband: true,
    desc: 'La vuelta de Celso. Llévela al parque sin que la vea la Fuerza Pública.'
  },
  purito: {
    id: 'purito', name: 'Purito', weight: 0.02, value: 0, contraband: true, usable: true, smokable: true,
    desc: 'Se fuma. Le da risa y le distorsiona la vista un rato; luego se le pasa.'
  },

  // ===== MATERIALES DEL CAMBUCHE =====
  lona:    { id: 'lona',    name: 'Lona azul',     weight: 2,    value: 1500, build: true, rarity: 'rare' },
  madera:  { id: 'madera',  name: 'Tablas',        weight: 2,    value: 500, build: true, rarity: 'uncommon' },
  colchon: { id: 'colchon', name: 'Colchón viejo', weight: 6,    value: 2000, build: true, rarity: 'veryRare' },
  vela:    { id: 'vela',    name: 'Vela',          weight: 0.05, value: 100,  build: true, rarity: 'rare' },

  // ===== ARMAS / HERRAMIENTAS =====
  popo: {
    id: 'popo',
    name: 'Mojón de popó',
    weight: 0.3,
    value: 0,
    usable: true,
    desc: 'Proyectil biológico artesanal. Presiona [X] para lanzárselo a los peatones.'
  }
};

export const RARITIES = {
  common: 'Común', uncommon: 'Poco común', rare: 'Raro', veryRare: 'Muy raro'
};
export const itemRarityLabel = id => RARITIES[ITEMS[id]?.rarity] ?? '';

const ITEM_EMOJIS = {
  lata: '🥫', botella: '🍶', carton: '📦', chatarra: '🔩', cable: '🔌',
  lona: '⛺', madera: '🪵', colchon: '🛏️', vela: '🕯️', pan: '🍞',
  agua: '💧', refresco: '🥤', cafe: '☕', lataComida: '🐟', vendaje: '🩹',
  reloj: '⌚', moneda: '🪙', anillo: '💍', jabon: '🧼', cepillo: '🪥',
  retrovisor: '🪞', radio: '📻', radioTransistor: '📻', pilas: '🔋', popo: '💩', cigarrillo: '🚬', bolsita: '🛍️', purito: '🚬', cobre: '🟠'
};
for (const item of Object.values(ITEMS)) {
  item.emoji = ITEM_EMOJIS[item.id] ?? (item.cure ? '💊' : item.substance ? '🧪' : '📦');
  item.desc ??= item.build ? 'Material para mejorar el chante.' : item.consumable ? 'Consumible.' : item.cure ? 'Tratamiento.' : 'Se puede vender.';
}
export const isUsable = item => !!(item?.consumable || item?.cure || item?.usable);
export function describeEffects(item) {
  const lines = [];
  if (item.id === 'radioTransistor') lines.push('Usar: abrir el sintonizador. También con R.');
  if (item.id === 'pilas') lines.push('Usar: recargar 50% de batería de la radio.');
  if (item.peelable) lines.push('Pelar: saca el cobre del cable (vale el doble).');
  if (item.smokable) lines.push('Fumar: sube el ánimo, distorsiona la pantalla un rato y se cura solo.');
  if (item.id === 'popo') lines.push('Usar o X en la calle: lanzar a un peatón.');
  if (item.consumable) lines.push(`${item.consumable}: +${item.amount}`);
  for (const key of ['hambre', 'sed', 'energia', 'salud', 'higiene', 'animo', 'vicio']) {
    if (item[key]) lines.push(`${key}: ${item[key] > 0 ? '+' : ''}${item[key]}`);
  }
  if (item.cure) lines.push(`Cura: ${item.cure}`);
  const rarity = itemRarityLabel(item.id);
  if (rarity) lines.push(`Rareza: ${rarity}`);
  return lines;
}

/** La recicladora compra todo lo que no se come, no cura, no es sustancia ni sirve para construir */
export const isRecyclable = (item) =>
  !!item && !item.consumable && !item.cure && !item.substance && !item.contraband && !item.build && !item.metal && item.id !== 'popo' && item.id !== 'radioTransistor' && item.id !== 'pilas';

// Icono (lucide) para mostrar cada objeto en los menús
const ICONS = {
  lata: 'recycle', botella: 'recycle', carton: 'package', chatarra: 'wrench', cable: 'flame',
  reloj: 'watch', moneda: 'coins', anillo: 'sparkles', retrovisor: 'eye', radio: 'phone', radioTransistor: 'radio', pilas: 'flame',
  pan: 'bread', lataComida: 'food', agua: 'water', refresco: 'water', cafe: 'coffee',
  vendaje: 'bandage', jabon: 'bath', cepillo: 'bath', cigarrillo: 'flame', bolsita: 'package', purito: 'flame', cobre: 'coins',
  lona: 'tent', madera: 'layers', colchon: 'bed', vela: 'flame', popo: 'alert-triangle'
};
export const itemIcon = (id) => ICONS[id] ?? (ITEMS[id]?.cure ? 'pill' : 'box');

// ===== LOOT TABLES =====

export const LOOT_COMMON = [
  { item: 'lata',       weight: 33 },
  { item: 'botella',    weight: 24 },
  { item: 'carton',     weight: 17 },
  { item: 'chatarra',   weight: 8 },
  { item: 'cable',      weight: 4 },
  { item: 'pilas',      weight: 3 },
  { item: 'pan',        weight: 4 },
  { item: 'agua',       weight: 3 },
  { item: 'lataComida', weight: 2 },
  { item: 'vendaje',    weight: 1 },
  { item: 'cigarrillo', weight: 2 },
  { item: 'madera',     weight: 3 },
  { item: 'lona',       weight: 0.6 },
  { item: 'colchon',    weight: 0.4 },
  { item: 'vela',       weight: 0.8 }
];

export const LOOT_RARE = [
  { item: 'reloj',  weight: 55 },
  { item: 'moneda', weight: 30 },
  { item: 'anillo', weight: 15 }
];

export const LOOT_SUBSTANCE = [
  { item: 'tintico',  weight: 50 },
  { item: 'pegante',  weight: 30 },
  { item: 'pastilla', weight: 20 }
];

// ===== TIENDA LA ESQUINITA (precios en colones) =====

export const SHOP_ITEMS = [
  { item: 'pan',        price: 500 },
  { item: 'lataComida', price: 1300 },
  { item: 'agua',       price: 800 },
  { item: 'refresco',   price: 1000 },
  { item: 'cafe',       price: 1500, desc: 'Un cafecito caliente: quita el sueño.' },
  { item: 'cigarrillo', price: 300,  desc: 'Calma el vicio. Le quita un poquito a la salud.' },
  { item: 'vendaje',    price: 1500 },
  { item: 'jabon',      price: 900 },
  { item: 'cepillo',    price: 1200 },
  { item: 'jarabe',     price: 4500 },
  { item: 'pomada',     price: 3500 },
  { item: 'carbon',     price: 3000 },
  { item: 'antiparasitario', price: 5000 },
  { item: 'vacuna',     price: 12000 },
  { item: 'antibiotico', price: 8000 },
  { item: 'vela',       price: 400, desc: 'Ilumina el chante: duermes más tranquilo.' },
  { item: 'lona',       price: 8000, desc: 'Para el techo del chante.' },
  { item: 'madera',     price: 6000, qty: 3, label: 'Tablas ×3', desc: 'Para las paredes del chante.' },
  { item: 'pilas',           price: 1500,  desc: 'Pilas AA: recargan la radio transistor.' },
  { item: 'radioTransistor', price: 12000, desc: 'Radio transistor: sintoniza emisoras y calma la mente.' },
  { upgrade: 'costal',  price: 10000, label: 'Costal grande', icon: 'backpack', desc: 'Cargas 20 kg más.' }
];

export const COSTAL_BONUS = 20;

/** Lo que compra El Chupacabras Cochón: latas, chatarra, cable y cobre. */
export const isMetal = (item) => !!item?.metal;
