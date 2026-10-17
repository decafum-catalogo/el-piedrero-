// src/utils/constants.js

// Mundo
export const TILE_SIZE = 2;
export const DISTRICT_SIZE = 32; // 20x20 tiles

// Jugador
export const PLAYER_RADIUS = 0.4;
export const PLAYER_SPEED_WALK = 3;
export const PLAYER_SPEED_RUN = 6;
export const CHARACTER_SCALE = 1.15; // modelo de rebusque (1,6 m) a la escala del mundo

// Interacción
export const INTERACT_RANGE = 1.8;

// Boost
export const BOOST_DURATION = 8;       // segundos
export const BOOST_ENERGY_COST = 10;   // energía inicial
export const BOOST_HEALTH_DRAIN = 3;   // salud por segundo
export const BOOST_MIN_HEALTH = 5;     // no activar/cancelar si salud <= esto

// Inventario
export const INVENTORY_MAX_WEIGHT = 20;

// Pickup
export const PICKUP_COOLDOWN = 20;     // segundos hasta que revive la basura

// === Selección de basura ===
export const SORT_BASE_TIME = 1.5;     // segundos para seleccionar (mejor calidad)
export const SORT_QUALITY_MULT = 1.5;  // mult de valor al seleccionar bien

// === Enfermedades ===
export const DISEASE_BASE_CHANCE = 0.12;   // probabilidad base al recoger basura
export const DISEASE_SORT_MULT = 1.8;      // +probabilidad al seleccionar (más contacto)
export const DISEASE_HEALTH_DRAIN = 1.2;   // salud/seg por enfermedad activa
export const DISEASE_MENTAL_DRAIN = 0.8;   // salud mental/seg por enfermedad
export const DISEASE_DURATION = 45;        // segundos que dura una enfermedad

// === Salud mental ===
export const MENTAL_DECAY = 0.15;          // por segundo
export const MENTAL_DECAY_NIGHT = 0.35;    // por segundo de noche
export const MENTAL_DECAY_SICK = 0.25;     // extra por enfermedad
export const MENTAL_DECAY_HUNGER = 0.2;    // extra si hambre < 20
export const MENTAL_RESTORE_SLEEP = 40;    // al dormir
export const MENTAL_RESTORE_SELL = 2;      // por venta
export const MENTAL_RESTORE_RARE = 8;      // al encontrar tesoro
export const MENTAL_LOW_THRESHOLD = 25;    // debajo de esto: debuffs
export const MENTAL_CRITICAL_THRESHOLD = 10; // debajo de esto: alucinaciones

// === Nivel / XP ===
export const XP_PER_LEVEL = 100;
export const XP_PICKUP = 3;
export const XP_SELL = 2;
export const XP_STEAL = 8;
export const XP_CRAFT = 10;
export const XP_BEG = 4;

// === Robo de retrovisores ===
export const STEAL_CAUGHT_CHANCE = 0.25;   // probabilidad de ser atrapado
export const STEAL_CAUGHT_PENALTY = 25;    // salud perdida al ser atrapado
export const STEAL_CAUGHT_MONEY = 5000;    // pesos perdidos al ser atrapado
export const CAR_COOLDOWN = 40;            // segundos hasta que revive el auto

// === Venta de sustancias ===
export const SUBSTANCE_PRICE_MULT = 1.8;   // las sustancias se venden más caras de noche
export const SUBSTANCE_RISK_CHANCE = 0.15; // probabilidad de problema con la ley
// Removed duplicate SORT_BASE_TIME declaration to fix redeclaration error
// Colores del juego (estética Noir)
export const COLORS = {
  BG: 0x1a1a1d,
  FOG: 0x1a1a1d,
  ACCENT_AMBER: 0xc9a227,
  ACCENT_CYAN: 0x2ab7ca,
  ACCENT_GOLD: 0xffd166,
  ACCENT_RED: 0xc0392b,
  ACCENT_GREEN: 0x27ae60,
  ACCENT_PURPLE: 0x8e44ad,
  TRASH: 0x3a3a2a,
  BUILDING: 0x3a3a40,
  FLOOR: 0x2b2b30,
  CAR: 0x2c3e50,
  DEALER: 0x6c3483
};


// ===== Decay de necesidades (unidades por segundo) =====
export const DECAY = {
  hambre:  0.35,
  sed:     0.50,
  energia: 0.20,
  higiene: 0.10,   // ~10 min reales para vaciarse
  animo:   0.08,   // ~20 min reales para vaciarse
  vicio:   0.12    // ~14 min reales para vaciarse
};

// ===== Umbrales de efectos =====
export const STAT_THRESHOLDS = {
  higieneEnfermedad: 30,    // higiene < 30 → +50% prob. de enfermedad
  higieneRechazo:    20,    // higiene < 20 → NPCs rechazan (futuro)
  animoVelocidad:    30,    // ánimo < 30 → velocidad -20%
  animoVision:       50,    // ánimo < 50 → desaturación
  animoCritico:      10,    // ánimo < 10 → alucinaciones (futuro)
  vicioAbstinencia:  20     // vicio < 20 → abstinencia: más lento y pierde salud
};

// ===== Abstinencia =====
export const WITHDRAWAL = {
  saludPorSeg:  0.4,        // salud perdida por segundo
  velocidad:    0.85,       // multiplicador de velocidad
  animoMult:    1.5,        // el ánimo baja más rápido
  vicioDormir:  10          // dormir no calma el vicio: baja esto
};

// ===== Recuperación de stats =====
export const RECOVERY = {
  higienePorJabon:  40,     // jabón sube 40 de higiene
  animoPorDormir:   20,     // dormir bien sube 20 de ánimo
  animoPorCafe:     15,
  animoPorComida:   5
};