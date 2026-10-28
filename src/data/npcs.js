// Personajes con los que se puede hablar (pulsar E). Los textos los aprobó el usuario en el Excel.
// pos = tile del mapa de La Carpio. Las posiciones son propuestas y se pueden mover.
export const TALK_NPCS = [
  {
    id: 'ruben',
    name: 'Rubén',
    role: 'Advierte de peligros',
    pos: [97, 101.5],
    look: {
      piel: 6, pelo: 'crespo', peloColor: 6, barba: 'completa', arriba: 'rayas',
      real: { sexo: 'hombre', edad: 'adulto', pelo: 'crespo', barba: 'larga', ropa: 'rayas', calzado: 'tenis' }
    },
    albino: true,
    accessories: ['lentes'],
    build: { x: 0.95, z: 0.95 },
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
    build: { x: 0.88, z: 0.88 },
    accessories: ['gorra-atras', 'cigarro'],
    skinMul: [0.85, 0.8, 0.76],
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
    // Joven moreno y delgado, cejas finas, pelo corto con arriba más largo, aretes de brillante
    look: {
      piel: 4, pelo: 'corto', cejas: 'delgadas', barba: 'ninguna', contextura: 'delgado', arriba: 'chaqueta',
      real: { sexo: 'hombre', edad: 'joven', pelo: 'corto', barba: 'ninguna', ropa: 'chaqueta', calzado: 'tenis' }
    },
    build: { x: 0.9, z: 0.9 },
    accessories: ['aretes'],
    skinMul: [0.66, 0.6, 0.56],
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
    // Panzón, viejo, sombrero de paja y overol sucio; tiene un saco de latas al lado
    look: {
      piel: 1, pelo: 'calvo', barba: 'descuidada', contextura: 'robusto',
      real: { sexo: 'hombre', edad: 'mayor', pelo: 'calvo', barba: 'descuidada', ropa: 'overol', calzado: 'botas' }
    },
    build: { x: 1.22, z: 1.3, y: 0.97 },
    accessories: ['sombrero'],
    hairEmissive: [0.35, 0.35, 0.33],
    lines: [
      'Traiga esas latas y ese cobre, yo se lo pago usted decide me da el  culillo o platica',
      'pele esos cables como si fuera la pinga de Ruben, deme ese cobre',
      'Espero que me pague hijueputa no como licho'
    ]
  }
];
