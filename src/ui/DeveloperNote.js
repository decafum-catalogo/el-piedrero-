import { el, button } from './dom.js';

export function openDeveloperNote(game) {
  // Ocultar temporalmente esta sección mientras se reorganizan los créditos.
  const showCredits = false;
  const credits = [
    ['juanagogo', 'Autor del proyecto original y base del juego.', 'https://github.com/juanagogo'],
    ['GrandaCoder', 'Integración, mejoras y desarrollo de una versión anterior.', 'https://github.com/GrandaCoder'],
    ['Cristianlv11', 'Radar, pausa, clima, cámara y El Chato.', 'https://github.com/Cristianlv11'],
    ['Jonme-Mopri', 'Pruebas de navegador y corrección de fabricación.', 'https://github.com/Jonme-Mopri'],
    ['mreyeswilson', 'Modelos, mobiliario urbano e ideas de inventario y chante.', 'https://github.com/mreyeswilson']
  ];
  game.menu.open({
    title: 'Nota del desarrollador',
    sub: 'Colaboración abierta',
    ic: 'info',
    render: () => ({
      body: el('div', { class: 'developer-note' },
        ...(showCredits ? [el('p', { text: 'Esta versión incluye código y aportes de las siguientes personas y repositorios. Gracias por compartir su trabajo:' }),
        el('ul', { class: 'developer-note__credits' }, credits.map(([name, contribution, url]) =>
          el('li', {}, el('a', { href: url, target: '_blank', rel: 'noopener noreferrer', text: name }), el('span', { text: contribution }))))] : []),
        el('div', { class: 'developer-note__request' },
          el('h3', { text: 'Hagamos visibles las tareas pendientes' }),
          el('p', { text: 'A quienes mantienen y colaboran en el proyecto: por favor, publiquen las funcionalidades que se deben desarrollar como issues abiertos al público, indicando qué se necesita y su estado. Así cualquiera podrá conocer las tareas, proponer ideas y colaborar sin duplicar esfuerzos.' }),
          el('a', { href: 'https://github.com/juanagogo', target: '_blank', rel: 'noopener noreferrer', text: 'Ver al autor original ↗' }))
      ),
      foot: [button('Continuar jugando', { primary: true, onClick: () => game.menu.close() })]
    })
  });
}
