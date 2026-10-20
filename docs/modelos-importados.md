# Modelos incorporados en pruebas-integracion

Se incorporan únicamente estos cuatro archivos del fork [mreyeswilson/bazuko](https://github.com/mreyeswilson/bazuko), commit `dd3656fb3c6ccf68d7760987e4d9263ff72cd566`:

| Archivo | Uso | SHA del blob de origen |
| --- | --- | --- |
| `car1.opt.glb` | Carros particulares y estacionados | `467e3027904088ea991ccb86044d41b74d731225` |
| `car2.opt.glb` | Taxis | `4780b2a8ea6e2f08beb981bee824cb87c8863d62` |
| `tm.opt.glb` | Bus de la troncal Caracas | `d476d59db1e384937c266aecdc7a9ff7070ebc01` |
| `cambuche.opt.glb` | Refugio del jugador | `5c7b4f63d94a46e3d84d59c3bee5ac2d12f130af` |

Los GLB conservan sus bytes y texturas originales. Se adaptan escala y orientación en tiempo de carga. Los carros siguen apuntando a +X local y el bus a −Z local; sus dimensiones se ajustan a las rutas existentes. El cargador comparte geometrías y texturas entre instancias. El bus tiene materiales independientes para que su desvanecimiento no cambie otras instancias.

Los modelos de vehículos contienen las ruedas y carrocería en una misma malla; las ruedas de estos GLB no giran por separado. La circulación, las paradas y el frenado siguen a cargo de los sistemas de esta versión.

El cambuche también es una sola malla con mobiliario integrado. Se muestra al construir base y techo; antes solo se ven las piezas ya construidas y el anillo que señala el lugar. Los beneficios de las mejoras siguen dependiendo de lo construido, aunque el GLB incluya esos detalles visualmente. El fogón y la vela se muestran según lo construido. El refugio se ubica en X=112.98, Z=94.64. El inicio y la reaparición quedan delante, en X=112.98, Z=97.84, para evitar aparecer dentro del modelo. Los refugios decorativos de los NPC conservan su aspecto.

Los modelos se cargan durante la pantalla de carga, antes de calcular los límites usados para el descarte de objetos fuera de cámara y preparar los shaders.

Cada entrada al juego comienza delante del cambuche, también al cargar una partida guardada. El inventario, las construcciones y los demás datos se restauran. Antes de construir la base, unos cartones dentro del anillo señalan el lugar de construcción; al armar la base, esos cartones se sustituyen por ella.
