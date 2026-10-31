// src/ui/PauseMenu.js
// Menú de pausa por pestañas: Estado, Ajustes y Controles.
import { el, button } from './dom.js';
import { cop } from '../utils/money.js';
import { XP_PER_LEVEL } from '../utils/constants.js';
import { NEED_META, needLevel } from './needsMeta.js';
import { describeWeather } from '../world/Climate.js';

export const PAUSE_TABS = [
  { id: 'estado', label: 'Estado', icon: '📊' },
  { id: 'ajustes', label: 'Ajustes', icon: '⚙️' },
  { id: 'controles', label: 'Controles', icon: '⌨️' },
];

const CONTROL_GROUPS = [
  ['Movimiento', [['WASD', 'Caminar'], ['Shift', 'Correr'], ['Espacio', 'Saltar'], ['V', 'Vista tercera persona / isométrica']]],
  ['Acciones', [['E', 'Interactuar: basura, pulperías, el chante, carros, hablar'], ['Q', 'Mantener para clasificar basura'], ['B / L', 'Pedir limosna'], ['H', 'Esconderse en un basurero'], ['X', 'Lanzar / recoger'], ['Z', 'Defecar']]],
  ['Paneles', [['I / Tab', 'Inventario ∙ 1-5 acceso rápido'], ['T', 'Talentos'], ['C', 'Fabricar'], ['P', 'Mascota'], ['R', 'Radio transistor'], ['N', 'Radar'], ['M', 'Modelo liviano'], ['Esc', 'Pausa']]],
];

export function openPauseMenu(game, tab = 'estado') {
  if (!game || game._loading || game._deathPending || game.creator?.isOpen || game.isSleeping || game.player?.isStunned) return;
  if (game.menu?.isOpen || game.inventoryUI?.isOpen || game.hud?._talentOpen || game.hud?._craftOpen || game.hud?._dealerOpen) return;
  game.cameraRig?.releaseControls?.();
  if (game.input) { game.input.keys = {}; game.input.endFrame(); }
  if (typeof document !== 'undefined' && document.pointerLockElement) {
    try { document.exitPointerLock(); } catch { /* sin pointer lock */ }
  }

  game._pauseTab = PAUSE_TABS.some(t => t.id === tab) ? tab : 'estado';
  const select = (id) => {
    if (id === game._pauseTab) return;
    game._pauseTab = id;
    game.menu.refresh?.();
  };
  const cycle = (dir) => {
    const i = PAUSE_TABS.findIndex(t => t.id === game._pauseTab);
    select(PAUSE_TABS[(i + dir + PAUSE_TABS.length) % PAUSE_TABS.length].id);
  };

  const onKey = (e) => {
    // Si otro menú (p. ej. la radio) reemplazó a la pausa, el listener se retira.
    if (game.menu?._render && game.menu._render !== render) { window.removeEventListener('keydown', onKey); return; }
    if (e._pauseOpened || e.repeat || !game.menu?.isOpen) return;
    if (e.target?.closest?.('input[type="text"], textarea, [contenteditable="true"]')) return;
    if (e.code === 'KeyQ' || e.code === 'BracketLeft') cycle(-1);
    else if (e.code === 'KeyE' || e.code === 'BracketRight') cycle(1);
    else return;
    e.preventDefault?.();
  };
  window.addEventListener('keydown', onKey);

  const render = () => {
    const current = game._pauseTab;
    const tabs = el('nav', { class: 'pause-tabs', role: 'tablist', 'aria-label': 'Secciones de la pausa' },
      el('kbd', { class: 'pause-tabs__key', text: 'Q' }),
      PAUSE_TABS.map(t => el('button', {
        type: 'button', role: 'tab', class: `pause-tab${t.id === current ? ' is-active' : ''}`,
        'aria-selected': t.id === current ? 'true' : 'false',
        onclick: () => select(t.id),
      }, el('span', { class: 'pause-tab__icon', text: t.icon }), t.label)),
      el('kbd', { class: 'pause-tabs__key', text: 'E' }));

    const panels = { estado: statePanel, ajustes: settingsPanel, controles: controlsPanel };
    const body = el('div', { class: `pause-menu-body pause-menu-body--${current}` }, tabs,
      el('section', { class: 'pause-panel', role: 'tabpanel' }, panels[current](game)));

    const foot = [button('Continuar jugando', { primary: true, onClick: () => game.menu.close() })];
    return { body, foot };
  };

  game.menu.open({
    title: 'Partida en Pausa',
    sub: 'Persona en situación de calle · La Carpio',
    ic: 'pause',
    wide: true,
    render,
    onClose: () => window.removeEventListener('keydown', onKey),
  });
}

function statePanel(game) {
  const { stats = {}, clock = {} } = game;
  const hour = clock.hour ?? 0;
  const h = Math.floor(hour).toString().padStart(2, '0');
  const m = Math.floor((hour % 1) * 60).toString().padStart(2, '0');
  const level = stats.level ?? 1;
  const xpNeeded = XP_PER_LEVEL * level;
  const xpPct = Math.max(0, Math.min(100, (stats.xp ?? 0) / xpNeeded * 100));
  const sky = game.weather?.type && describeWeather(game.weather.type, clock.isNight ?? (hour < 6 || hour >= 20));
  const card = (label, value) => el('div', { class: 'pause-card' },
    el('span', { class: 'pause-card__label', text: label }), el('strong', { class: 'pause-card__value', text: value }));

  return el('div', { class: 'pause-state' },
    el('div', { class: 'pause-cards' },
      card('Personaje', game.look?.nombre ?? 'Gabo Mora'),
      card('Dinero', cop(stats.dinero ?? 0)),
      card('Tiempo', `Día ${clock.day ?? 1} ∙ ${h}:${m}`),
      ...(sky && game.weather.season ? [card('Clima', `${sky.icon} ${sky.label}`),
        card('Temporada', `${game.weather.season.icon} ${game.weather.season.label} (${game.weather.season.months})`)] : []),
      card('El Chato', game.dog?.isFriend ? '🐕 Te acompaña' : 'Sin adoptar'),
    ),
    el('div', { class: 'pause-level' },
      el('span', { class: 'pause-level__badge', text: `Nv ${level}` }),
      el('div', { class: 'pause-meter' }, el('div', { class: 'pause-meter__fill', style: `width:${xpPct}%;--c:#19c463` })),
      el('span', { class: 'pause-level__xp', text: `${stats.xp ?? 0} / ${xpNeeded} XP` })),
    el('h3', { class: 'pause-section-title', text: 'Necesidades' }),
    el('ul', { class: 'pause-needs' }, NEED_META.map(({ id, icon, label, color }) => {
      const value = Math.round(stats[id] ?? 0);
      return el('li', { class: `pause-need is-${needLevel(value)}` },
        el('span', { class: 'pause-need__label', text: `${icon} ${label}` }),
        el('div', { class: 'pause-meter' }, el('div', { class: 'pause-meter__fill', style: `width:${value}%;--c:${color}` })),
        el('span', { class: 'pause-need__value', text: `${value}%` }));
    })),
    el('div', { class: 'pause-row pause-row--split' },
      el('span', { class: 'pause-gps-summary', text: '📍 La Carpio, San José' }),
      button('💾 Guardar partida', {
        onClick: () => {
          game._save?.();
          window.dispatchEvent(new CustomEvent('toast', { detail: { text: '💾 ¡Partida guardada con éxito!', type: 'info' } }));
        }
      })));
}

function settingsPanel(game) {
  const audio = game.audio;
  const row = (label, ...controls) => el('div', { class: 'pause-row' }, el('label', { class: 'pause-row__label', text: label }), ...controls);
  const section = (title, ...rows) => el('div', { class: 'pause-section' }, el('h3', { class: 'pause-section-title', text: title }), ...rows);
  const volPct = Math.round((audio?.volume ?? 0.7) * 100);
  const volumeLabel = el('span', { class: 'pause-value', text: `${volPct}%` });
  const volumeInput = el('input', {
    type: 'range', min: '0', max: '100', value: String(volPct), class: 'pause-slider', 'aria-label': 'Volumen maestro',
    oninput: (e) => {
      const val = parseInt(e.target.value, 10) / 100;
      audio?.setVolume(val);
      volumeLabel.textContent = `${Math.round(val * 100)}%`;
    }
  });
  const muteBtn = button(audio?.isMuted() ? '🔇 Activar sonido' : '🔊 Silenciar', {
    onClick: () => {
      const next = audio?.toggleMute();
      muteBtn.textContent = next ? '🔇 Activar sonido' : '🔊 Silenciar';
    }
  });
  const curQuality = game.renderer?.quality || 'alta';
  const quality = (id, label) => button(label, {
    primary: curQuality === id, class: 'pause-choice',
    onClick: () => { game.setGraphicsQuality?.(id); game.menu?.refresh(); }
  });
  const minimap = game.minimap;

  return el('div', { class: 'pause-settings' },
    el('div', { class: 'pause-section pause-section--compact' }, el('h3', { class: 'pause-section-title', text: '🔊 Sonido' }),
      row('Volumen', volumeInput, volumeLabel), row('Silencio', muteBtn)),
    section('⚡ Calidad gráfica',
      el('div', { class: 'pause-segmented' }, quality('baja', '⚡ Baja'), quality('media', '⚖️ Media'), quality('alta', '✨ Alta')),
      el('p', { class: 'pause-hint', text: 'Baja da más FPS. Bajo carga la calidad puede bajar sola sin cambiar tu elección.' }),
      row('Rendimiento', button(game.performanceHUD?.visible ? 'Visible (F3)' : 'Oculto (F3)', {
        primary: !!game.performanceHUD?.visible, class: 'pause-choice',
        onClick: () => { game.performanceHUD?.toggle(); game.menu.refresh(); }
      }))),
    section('🧭 Radar',
      row('Radar', button(minimap?.visible ? 'Visible (N)' : 'Oculto (N)', {
        primary: !!minimap?.visible, class: 'pause-choice',
        onClick: () => { minimap?.toggle(); game.menu.refresh(); }
      }))),
    section('🧍 Personaje y radio',
      el('div', { class: 'pause-actions' },
        button(game.player?.modelKind === 'realista' ? '🧸 Usar modelo liviano (M)' : '🧍 Usar modelo realista (M)', {
          onClick: () => { game._toggleModel?.(); game.menu.refresh(); }
        }),
        button('📻 Radio transistor (R)', { onClick: () => window.dispatchEvent(new CustomEvent('open-radio-modal')) }))));
}

function controlsPanel() {
  return el('div', { class: 'pause-controls' }, CONTROL_GROUPS.map(([title, items]) =>
    el('div', { class: 'pause-section' },
      el('h3', { class: 'pause-section-title', text: title }),
      el('ul', { class: 'pause-controls-list' }, items.map(([key, text]) =>
        el('li', {}, el('kbd', { text: key }), el('span', { text })))))));
}
