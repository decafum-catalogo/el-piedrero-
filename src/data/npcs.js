// Personajes con los que se puede hablar (pulsar E). Los textos los aprobó el usuario en el Excel.
// pos = tile del mapa de La Carpio. Las posiciones son propuestas y se pueden mover.
export const TALK_NPCS = [
  {
    id: 'ruben',
    name: 'Rubén',
    role: 'Advierte de peligros',
    pos: [97, 101.5],
    // Albino (foto de referencia): rizos blancos cortos, barba blanca corta, lentes rectangulares negros,
    // chaqueta negra abierta y camiseta negra con franjas roja, amarilla y verde.
    look: {
      piel: 6, pelo: 'crespo', peloColor: 6, barba: 'completa', arriba: 'chaqueta',
      real: { sexo: 'hombre', edad: 'adulto', pelo: 'crespo', barba: 'descuidada', ropa: 'chaqueta', capa: 'camiseta', calzado: 'tenis' }
    },
    style: {
      skin: { tone: [255, 230, 222], strength: 0.92, ref: 0.78 },
      eyes: [150, 186, 214],
      hair: [250, 249, 246], hairLift: 1,
      beard: [250, 249, 246], beardLift: 0.88,
      brows: [236, 232, 224],
      jacket: { factor: 0.24, tint: [1, 1, 1.04], jeans: true },
      tee: 'reggae'
    },
    curls: { count: 1500, color: 0xf7f6f2, radius: 0.104, size: 0.0125 },
    hairCap: { radii: [0.097, 0.124, 0.113], center: [0, 0.098, 0.03], front: 0.148, side: 0.092, back: 0.05, bump: { amp: 0.0075, freq: 80 }, color: 0xf7f6f2, rows: 90, cols: 150, seed: 2 },
    mustacheMesh: { offset: 0.008, amp: 0.003, freq: 200, color: 0xf6f4f0, skinColor: 0xeec6b8 },
    accessories: ['lentes'],
    lines: [
      'Mae, de noche no ande por la Calle 54 solo. Ahí es muy pesado',
      'Ojo con el perro del portón verde: yo le pegue el sida',
      'Si ve a la Fuerza Pública, abrase mejor porque está caliente la vara',
      'Evite el lote de atrás cuando oscurece. Ahí se lo culean y nadie se da cuenta',
      'Ande con poca plata encima de noche, mae. si no se lo fuman perrito',
      "Del parque pa'llá es más tranquilo. Pa'l otro lado, mejor con cuidado."
    ]
  },
  {
    id: 'licho',
    name: 'Licho',
    role: 'Tonteras',
    pos: [124, 110.5],
    // Flaco, ropa rota, gorra al revés y un cigarro pegado a la boca
    look: {
      piel: 3, pelo: 'corto', barba: 'ninguna', contextura: 'delgado',
      real: { sexo: 'hombre', edad: 'adulto', pelo: 'corto', barba: 'ninguna', ropa: 'rota', calzado: 'tenis-rotos' }
    },
    style: { skin: { tone: [196, 140, 100], strength: 0.8, ref: 0.78 }, eyes: [60, 38, 24], hair: [30, 24, 20], hairLift: 0.4 },
    hairCap: { radii: [0.0905, 0.1135, 0.112], center: [0, 0.098, 0.034], front: 0.15, side: 0.1, back: 0.062, bump: { amp: 0.0012, freq: 130 }, color: 0x16110f, lowColor: 0x3a2a23, fade: 0.2, seed: 7 },
    build: { x: 0.88, z: 0.88 },
    accessories: ['cigarro'],
    lines: [
      'Me encontré ₡500 en la calle y me pasé una hora pensando qué comprar. Al final se me hizo de noche, voy a buscar otros ₡500',
      'digale a Ruben que me pase los 3 rojos  que no se haga el ruso',
      'que cansado estoy de volar espalda perrito',
      'deme algo para una pachita',
      'buen culillo se trae ese mae de Ruben esperese  que lo agarre',
      'dejese querer papi',
      'que papi no tiene un rojito por ahí'
    ]
  },
  {
    id: 'celso',
    name: 'Celso',
    role: 'Misión: la vuelta',
    pos: [54, 112.5],
    // Foto de referencia: joven moreno y delgado, cejas marcadas, pelo corto con arriba más alto,
    // aretes de brillante y chaqueta verde oliva.
    look: {
      piel: 4, pelo: 'corto', cejas: 'gruesas', barba: 'ninguna', contextura: 'delgado', arriba: 'camiseta',
      real: { sexo: 'hombre', edad: 'joven', pelo: 'corto', barba: 'ninguna', ropa: 'camiseta', calzado: 'tenis' }
    },
    style: {
      skin: { tone: [168, 114, 80], strength: 0.88, ref: 0.78 },
      eyes: [70, 44, 28],
      hair: [24, 20, 18], hairLift: 0.35,
      brows: [18, 14, 12], browScale: 1.9,
      tee: { factor: 0.12 }
    },
    // buzz cut: pelo corto pegado al cráneo, más claro hacia los lados
    hairCap: { radii: [0.0905, 0.1135, 0.112], center: [0, 0.098, 0.034], front: 0.15, side: 0.1, back: 0.068, bump: { amp: 0.0006, freq: 160 }, color: 0x17120f, lowColor: 0x40302a, fade: 0.2, seed: 5 },
    build: { x: 0.9, z: 0.9 },
    accessories: ['aretes'],
    lines: [
      'Mae, ¿listo pa? usted ya sabe que hacer hagale',
      'Tome, y que no lo vea ningún mae. Esto lo lleva al parque para la vuelta',
      'eso papi, mae. Tráigame la plata y yo le doy ₡2.000 y un purito.',
      '¿lo vio la Fuerza Pública?  ¿perdió la bolsita?'
    ]
  },
  {
    id: 'chupacabras',
    name: 'El Chupacabras Cochón',
    role: 'Compra latas, cobre y chatarra',
    pos: [100, 109],
    // Panzón, viejo, sombrero de paja y overol sucio
    look: {
      piel: 1, pelo: 'calvo', barba: 'descuidada', contextura: 'robusto',
      real: { sexo: 'hombre', edad: 'mayor', pelo: 'calvo', barba: 'descuidada', ropa: 'overol', calzado: 'botas' }
    },
    style: { skin: { tone: [208, 150, 112], strength: 0.7, ref: 0.78 }, eyes: [78, 54, 38], beard: [214, 212, 206], beardLift: 0.8, brows: [200, 198, 192] },
    build: { x: 1.22, z: 1.3, y: 0.97 },
    accessories: ['sombrero'],
    lines: [
      'Traiga esas latas y ese cobre, yo se lo pago usted decide me da el  culillo o platica',
      'pele esos cables como si fuera la pinga de Ruben, deme ese cobre',
      'Espero que me pague hijueputa no como licho'
    ]
  }
];
