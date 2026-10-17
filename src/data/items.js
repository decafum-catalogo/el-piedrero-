
// src/data/items.js
// Valores en pesos colombianos (COP): `value` es lo que pagan por el objeto.

export const ITEMS = {
  // ===== BASURA =====
  lata:     { id: 'lata',     name: 'Lata vacía',    weight: 0.2,  value: 250 },
  botella:  { id: 'botella',  name: 'Botella PET',   weight: 0.3,  value: 150 },
  carton:   { id: 'carton',   name: 'Cartón',        weight: 0.5,  value: 200 },
  chatarra: { id: 'chatarra', name: 'Chatarra',      weight: 1.0,  value: 900 },
  cable:    { id: 'cable',    name: 'Cable cobre',   weight: 0.4,  value: 2400 },

  // ===== TESOROS =====
  reloj:  { id: 'reloj',  name: 'Reloj oxidado', weight: 0.1,  value: 8000, rare: true },
  moneda: { id: 'moneda', name: 'Moneda vieja',  weight: 0.02, value: 12000, rare: true },
  anillo: { id: 'anillo', name: 'Anillo',        weight: 0.05, value: 20000, rare: true },

  // ===== OBJETOS ROBADOS (AUTOS) =====
  retrovisor: { id: 'retrovisor', name: 'Retrovisor',   weight: 0.8, value: 15000 },
  radio:      { id: 'radio',      name: 'Radio auto',   weight: 1.5, value: 35000 },

  // ===== CONSUMIBLES =====
  pan: {
    id: 'pan', name: 'Pan duro', weight: 0.3, value: 1000,
    consumable: 'hambre', amount: 25, animo: 5
  },
  lataComida: {
    id: 'lataComida', name: 'Lata de atún', weight: 0.4, value: 4500,
    consumable: 'hambre', amount: 45, animo: 8
  },
  agua: {
    id: 'agua', name: 'Botella agua', weight: 0.5, value: 1500,
    consumable: 'sed', amount: 35
  },
  refresco: {
    id: 'refresco', name: 'Refresco', weight: 0.4, value: 2500,
    consumable: 'sed', amount: 50, energia: 10, animo: 10
  },
  cafe: {
    id: 'cafe', name: 'Café caliente', weight: 0.3, value: 1500,
    consumable: 'energia', amount: 40, animo: 15
  },
  vendaje: {
    id: 'vendaje', name: 'Vendaje', weight: 0.1, value: 3000,
    consumable: 'salud', amount: 30
  },

  // ===== HIGIENE =====
  jabon: {
    id: 'jabon', name: 'Jabón', weight: 0.2, value: 2500,
    consumable: 'higiene', amount: 40
  },
  cepillo: {
    id: 'cepillo', name: 'Cepillo', weight: 0.1, value: 2000,
    consumable: 'higiene', amount: 20
  },

  // ===== CURAS =====
  vacuna: {
    id: 'vacuna', name: 'Vacuna', weight: 0.1, value: 15000,
    cure: 'tetanos'
  },
  carbon: {
    id: 'carbon', name: 'Carbón activo', weight: 0.1, value: 6000,
    cure: 'intoxicacion'
  },
  jarabe: {
    id: 'jarabe', name: 'Jarabe', weight: 0.2, value: 8000,
    cure: 'gripe'
  },
  pomada: {
    id: 'pomada', name: 'Pomada', weight: 0.15, value: 7000,
    cure: 'sarna'
  },
  antibiotico: {
    id: 'antibiotico', name: 'Antibiótico', weight: 0.1, value: 18000,
    cure: 'infeccion'
  },
  antiparasitario: {
    id: 'antiparasitario', name: 'Antiparasitario', weight: 0.1, value: 9000,
    cure: 'parasitos'
  },

  // ===== SUSTANCIAS =====
  tintico: {
    id: 'tintico', name: 'Tintico', weight: 0.1, value: 1000,
    consumable: 'vicio', amount: 20, animo: 15, energia: 20, substance: true
  },
  pegante: {
    id: 'pegante', name: 'Pegante', weight: 0.2, value: 3000,
    consumable: 'vicio', amount: 40, animo: 25, salud: -3, substance: true
  },
  pastilla: {
    id: 'pastilla', name: 'Pastilla', weight: 0.05, value: 8000,
    consumable: 'vicio', amount: 60, animo: 40, salud: -5, substance: true
  },
  cigarrillo: {
    id: 'cigarrillo', name: 'Cigarrillo suelto', weight: 0.01, value: 300,
    consumable: 'vicio', amount: 35, salud: -1
  }
};

// ===== LOOT TABLES =====

export const LOOT_COMMON = [
  { item: 'lata',       weight: 33 },
  { item: 'botella',    weight: 24 },
  { item: 'carton',     weight: 17 },
  { item: 'chatarra',   weight: 8 },
  { item: 'cable',      weight: 4 },
  { item: 'pan',        weight: 4 },
  { item: 'agua',       weight: 3 },
  { item: 'lataComida', weight: 2 },
  { item: 'vendaje',    weight: 1 },
  { item: 'cigarrillo', weight: 2 }
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

// ===== TIENDA =====

export const SHOP_ITEMS = [
  // Consumibles
  { item: 'pan',        buyPrice: 1500 },
  { item: 'agua',       buyPrice: 2000 },
  { item: 'lataComida', buyPrice: 6000 },
  { item: 'refresco',   buyPrice: 3500 },
  { item: 'cafe',       buyPrice: 2000 },
  { item: 'vendaje',    buyPrice: 4500 },

  // Higiene
  { item: 'jabon',   buyPrice: 3500 },
  { item: 'cepillo', buyPrice: 3000 },

  // Curas
  { item: 'vacuna',          buyPrice: 20000 },
  { item: 'carbon',          buyPrice: 9000 },
  { item: 'jarabe',          buyPrice: 11000 },
  { item: 'pomada',          buyPrice: 9500 },
  { item: 'antibiotico',     buyPrice: 25000 },
  { item: 'antiparasitario', buyPrice: 13000 },

  // Sustancias
  { item: 'tintico',  buyPrice: 1000 },
  { item: 'pegante',  buyPrice: 3000 },
  { item: 'pastilla', buyPrice: 8000 },
  { item: 'cigarrillo', buyPrice: 500 }
];
