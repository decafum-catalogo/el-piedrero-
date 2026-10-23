# Contexto de desarrollo de Vagabundo

## Alcance de esta guía

Este archivo es una referencia flexible para entender el proyecto, no una camisa de fuerza ni un conjunto de reglas que deban seguirse al pie de la letra. Aplicar criterio según la tarea y adaptar sus recomendaciones cuando exista una solución más adecuada. Las indicaciones explícitas de quien solicita el trabajo tienen prioridad sobre esta guía. Si el código o las necesidades del proyecto cambian, actualizar el contexto en lugar de conservar instrucciones obsoletas.

## Proyecto y documentación

Juego de supervivencia urbana en navegador, ambientado en el centro de Bogotá. Usa JavaScript con módulos ES, Three.js, Vite, Howler y cannon-es. No requiere servidor de aplicación: el guardado reside en el almacenamiento local del navegador.

- `README.md`: funciones, controles, capturas y ejecución.
- `docs/modelos-importados.md`: procedencia y adaptación de los recursos.
- `docs/integracion-cristian.md`: integración de radar, pausa, clima y compañero.
- `docs/testing.md`: pruebas unitarias y de navegador.
- `src/ui/DeveloperNote.js`: créditos y nota de colaboración al iniciar.

Mantener los créditos de las contribuciones y explicar los cambios por su comportamiento dentro del juego. La documentación debe centrarse en el proyecto y sus colaboradores, sin atribuciones a herramientas de escritura ni datos del entorno personal.

## Comandos

Requiere Node.js 22.12 o posterior, npm, Git y Git LFS.

```sh
git lfs pull
npm ci
npm run dev
npm test
npm run build
```

Los cinco efectos WAV pequeños usan Git LFS; motores, ambiente, pasos, alarmas y voces están en Opus o MP3. Respetar los nombres exactos y codificar las rutas con espacios. El código nunca debe cargar punteros LFS como si fueran audio.

Para las pruebas de navegador, instalar Chromium con `npx playwright install chromium` y ejecutar `npm run test:e2e`. Su servidor utiliza el puerto 5188. No presentar el descubrimiento de escenarios como una ejecución completa. Una validación de compilación o de lógica tampoco confirma calidad visual, sonido audible ni FPS del equipo.

## Puntos de entrada

- `src/main.js`: carga inicial y nota del desarrollador.
- `src/core/game.js`: simulación, integración de sistemas, entidades, guardado y recuperación.
- `src/world/districts/Bogota.js`: ciudad, parques, peatones, semáforos y bus.
- `src/world/bogota/CityLayout.js` y `StreetLayout.js`: ampliación, calzadas y migración de posiciones.
- `src/systems/TrafficSystem.js`: rutas, prioridades, frenado y atropellos.
- `src/systems/CollisionSystem.js` y `PlayerRagdoll.js`: cajas de vehículos y caída articulada.
- `src/systems/AudioSystem.js` y `VehicleAudio.js`: bancos compartidos, voces y alcance.
- `src/entities/PigeonFlock.js`: bandadas instanciadas y reacción a personas.
- `src/ui/HUD.js`, `InventoryUI.js`, `placeMenus.js`: paneles y acciones del jugador.
- `src/ui/ShelterPreview.js`: imagen del refugio terminado sin alterar la construcción.

## Decisiones que deben conservarse

- La ciudad mide 240 × 222 metros. Usar sus funciones de altura y navegación; no cambiar coordenadas sin considerar partidas guardadas.
- El cambuche está en X 112.98, Z 94.64. El inicio y la recuperación están en X 112.98, Z 97.84. Conservar la construcción progresiva y la reserva renovable de materiales en la basura.
- El juego y la medición de FPS comienzan después de cargar modelos, materiales y GPU. Menús, inventario, creador y pestaña oculta suspenden la simulación correspondiente.
- La muerte requiere recuperación explícita; no teletransportar automáticamente al jugador. Dejar terminar una caída mortal antes de mostrar su pantalla.
- El frenado de los carros es gradual. Mantener las prioridades de los cruces, rutas aleatorias y carril exclusivo del bus. Los vehículos usan cajas simples de colisión, no sus triángulos.
- Motores y claxones usan reproducción normal con voces por vehículo. Los alcances se calculan con volumen, sin panners: alarma hasta 41 metros, frases de obstrucción hasta 8 metros y frases de robo a carros en circulación hasta 12 metros.
- Los carros en circulación permiten robar espejos con E; los estacionados activan alarma. Mantener el enfriamiento entre robos y evitar duplicar voces por fotograma.
- El Chato conserva su amistad al guardar. Come pan o atún; las caricias tienen enfriamiento. Respetar su navegación y las colisiones existentes.
- Hay diez palomas en cada uno de los tres parques. Huyen del jugador o NPC a menos de 3,5 metros. Conservar instancias compartidas, filtro de personas cercanas y suspensión a distancia.
- La ayuda «!» comienza plegada. El botón de cámara indica el modo de destino. Abrir paneles libera el ratón; Escape cierra primero el panel activo.
- La calidad gráfica elegida limita la resolución automática. Mantener el descarte fuera de cámara, la geometría agrupada y los presupuestos de luces y audio.

## Forma de trabajar

Consultar la rama y los cambios locales antes de editar. Los experimentos se realizan en `pruebas-integracion` cuando se solicite; `main` recibe las integraciones indicadas. No asumir que crear un commit o fusionar implica publicar en el remoto.

Para cambios de lógica, ejecutar las pruebas relacionadas y la compilación cuando corresponda. Para documentación, revisar enlaces y recursos locales. Mantener `dist/`, `node_modules/`, `work/` e informes de pruebas fuera de los commits. Actualizar documentación y capturas cuando cambie lo que describen; las capturas deben corresponder a imágenes reales compartidas o tomadas del juego.

## Integración del original del 21 de octubre de 2026

Ver `docs/integracion-upstream.md`. RadioSystem y RadioModal agregan radio con pilas; PoopSystem y PsychosisSystem coordinan proyectiles y abstinencia. Mantener el volumen y silencio generales también en la radio, evitar actualizaciones duplicadas de El Chato y ejecutar la distorsión de cámara después de seguir al jugador. El radar reutiliza sus puntos estáticos y actualiza al perro dentro del caché. La inercia debe reiniciarse al recuperar al jugador de un atropello.

Las animaciones ActionForge se adaptan en `src/character/actionforge.js`; el banco contiene solo ocho clips y el esqueleto. Conservar las prendas modulares y el respaldo de clips anteriores. Preparar clips sobre copias del cuerpo para no alterar la pose de otros personajes. Mantener el movimiento horizontal en el controlador y permitir la altura animada de cadera para agacharse. Ver `docs/animaciones-actionforge.md`.
