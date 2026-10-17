// src/data/items.js

export const ITEMS = {
  // === Basura común ===
  lata:     { id: 'lata',     name: 'Lata vacía',    weight: 0.2,  value: 1  },
  botella:  { id: 'botella',  name: 'Botella PET',   weight: 0.3,  value: 2  },
  carton:   { id: 'carton',   name: 'Cartón',        weight: 0.5,  value: 3  },
  chatarra: { id: 'chatarra', name: 'Chatarra',      weight: 1.0,  value: 5  },
  cable:    { id: 'cable',    name: 'Cable cobre',   weight: 0.4,  value: 8  },

  // === Tesoros ===
  reloj:    { id: 'reloj',    name: 'Reloj oxidado', weight: 0.1,  value: 25, rare: true },
  moneda:   { id: 'moneda',   name: 'Moneda vieja',  weight: 0.02, value: 40, rare: true },
  anillo:   { id: 'anillo',   name: 'Anillo',        weight: 0.05, value: 60, rare: true },

  // === Robos ===
  retrovisor: { id: 'retrovisor', name: 'Retrovisor robado', weight: 0.8, value: 35, stolen: true },
  radio:      { id: 'radio',      name: 'Radio de auto',    weight: 1.5, value: 60, stolen: true },

  // === Sustancias (venta ilegal) ===
  hierba:     { id: 'hierba',     name: 'Hierba seca',   weight: 0.1, value: 15, substance: true },
  pastilla:   { id: 'pastilla',   name: 'Pastilla',      weight: 0.05, value: 30, substance: true },
  polvo:      { id: 'polvo',      name: 'Sobres de polvo', weight: 0.03, value: 50, substance: true },

  // === Medicina ===
  curita:     { id: 'curita',     name: 'Curita',        weight: 0.05, value: 5,  medicine: true, heal: 15 },
  antibiotico:{ id: 'antibiotico',name: 'Antibiótico',   weight: 0.05, value: 20, medicine: true, heal: 40, cure: true },
  agua:       { id: 'agua',       name: 'Botella de agua', weight: 0.4, value: 4, drink: true, thirst: 25 },
  comida:     { id: 'comida',     name: 'Comida de bar', weight: 0.5, value: 6, food: true, hunger: 30 },

  // === Materiales de crafteo ===
  alambre:    { id: 'alambre',    name: 'Alambre',       weight: 0.2, value: 4  },
  tela:       { id: 'tela',       name: 'Tela rota',     weight: 0.3, value: 3  },
  madera:     { id: 'madera',     name: 'Madera',        weight: 0.8, value: 4  },
  plastico:   { id: 'plastico',   name: 'Plástico',      weight: 0.3, value: 3  },

  // === Objetos crafteables ===
  arma:       { id: 'arma',       name: 'Arma casera',   weight: 1.2, value: 80, weapon: true },
  mochila:    { id: 'mochila',    name: 'Mochila',       weight: 0.5, value: 40, bag: true },
  rifa:       { id: 'rifa',       name: 'Cartón de rifa',weight: 0.1, value: 50, usable: true }
};

// Tablas de loot (compartidas)
export const LOOT_COMMON = [
  { item: 'lata',     weight: 30 },
  { item: 'botella',  weight: 22 },
  { item: 'carton',   weight: 18 },
  { item: 'chatarra', weight: 8  },
  { item: 'cable',    weight: 3  },
  { item: 'alambre',  weight: 6  },
  { item: 'tela',     weight: 6  },
  { item: 'madera',   weight: 4  },
  { item: 'plastico', weight: 3  }
];

export const LOOT_RARE = [
  { item: 'reloj',  weight: 50 },
  { item: 'moneda', weight: 30 },
  { item: 'anillo', weight: 20 }
];

// Loot de sustancias (dealer / puntos específicos)
export const LOOT_SUBSTANCE = [
  { item: 'hierba',   weight: 60 },
  { item: 'pastilla', weight: 30 },
  { item: 'polvo',    weight: 10 }
];
