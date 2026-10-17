// src/ui/HUD.js
import { TALENTS, BRANCHES } from '../data/talents.js';
import { XP_PER_LEVEL } from '../utils/constants.js';

export class HUD {
  constructor() {
    this.bars = {};
    document.querySelectorAll('.stat-bar').forEach((el) => {
      this.bars[el.dataset.stat] = el.querySelector('.fill');
    });

    this.clockEl = document.getElementById('clock');
    this.moneyEl = document.getElementById('money');
    this.statusEl = document.getElementById('status');
    this.boostEl = document.getElementById('boost-indicator');
    this.invEl = document.getElementById('inventory-panel');
    this.diseaseEl = document.getElementById('disease-panel');
    this.xpBarEl = document.getElementById('xp-bar');
    this.xpFillEl = document.getElementById('xp-fill');
    this.levelEl = document.getElementById('level-display');
    this.talentPointsEl = document.getElementById('talent-points');

    // Paneles
    this.talentPanel = document.getElementById('talent-panel');
    this.craftPanel = document.getElementById('craft-panel');

    // Estado de paneles
    this._talentOpen = false;
    this._craftOpen = false;

    // Toasts
    this._bindEvents();

    // Controles de paneles
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyT') this.toggleTalentPanel();
      if (e.code === 'KeyC') this.toggleCraftPanel();
      if (e.code === 'Escape') {
        this.talentPanel?.classList.remove('open');
        this.craftPanel?.classList.remove('open');
      }
    });
  }

  _bindEvents() {
    window.addEventListener('pickup', (e) => this._onPickup(e.detail));
    window.addEventListener('sell', (e) => this._onSell(e.detail));
    window.addEventListener('disease', (e) => this._toast(`☠️ Enfermedad: ${e.detail.name}`, 'death'));
    window.addEventListener('disease-cured', (e) => this._toast(`✨ Curado: ${e.detail.name}`, 'info'));
    window.addEventListener('levelup', (e) => this._toast(`⭐ ¡Nivel ${e.detail.level}! +1 punto de talento`, 'rare'));
    window.addEventListener('talent-unlock', (e) => this._toast(`🌟 Talento: ${e.detail.name}`, 'rare'));
    window.addEventListener('craft', (e) => this._toast(`🔨 Crafteado: ${e.detail.name} x${e.detail.qty}`, 'info'));
    window.addEventListener('steal', (e) => {
      if (e.detail.caught) this._toast('🚨 ¡Atrapado robando!', 'death');
      else if (e.detail.added?.length) this._toast(`🪞 Robado: ${e.detail.added.join(', ')}`, 'warn');
    });
    window.addEventListener('substance-sell', (e) => this._toast(`💰 Sustancias vendidas: $${e.detail.earned}`, 'sell'));
    window.addEventListener('substance-buy', (e) => this._toast(`📦 Comprado: ${e.detail.name} (-$${e.detail.cost})`, 'info'));
    window.addEventListener('substance-fail', (e) => {
      if (e.detail.reason === 'day') this._toast('☀️ El dealer no atiende de día', 'warn');
    });

    window.addEventListener('sleep-start', () => this._toast('💤 Durmiendo...', 'info'));
    window.addEventListener('sleep-end', () => this._toast('🌅 Nuevo día', 'info'));
    window.addEventListener('sleep-fail', (e) => this._toast(
      e.detail.reason === 'day' ? '☀️ No puedes dormir de día' : 'No puedes dormir aquí',
      'warn'
    ));
  }

  toggleTalentPanel() {
    this._talentOpen = !this._talentOpen;
    this.talentPanel?.classList.toggle('open', this._talentOpen);
    if (this._talentOpen) this.renderTalents();
  }

  toggleCraftPanel() {
    this._craftOpen = !this._craftOpen;
    this.craftPanel?.classList.toggle('open', this._craftOpen);
  }

  update(stats, clock, interaction, inventory, diseaseSystem, talentSystem, craftingSystem) {
    // Barras de stats
    const map = {
      hambre: stats.hambre,
      sed: stats.sed,
      energia: stats.energia,
      salud: stats.salud,
      saludMental: stats.saludMental
    };
    for (const [k, v] of Object.entries(map)) {
      const el = this.bars[k];
      if (el) el.style.width = `${Math.max(0, Math.min(100, v))}%`;
    }

    // Reloj
    const h = Math.floor(clock.hour).toString().padStart(2, '0');
    const m = Math.floor((clock.hour % 1) * 60).toString().padStart(2, '0');
    if (this.clockEl) this.clockEl.textContent = `Día ${clock.day} — ${h}:${m}`;
    if (this.moneyEl) this.moneyEl.textContent = `$${stats.dinero ?? 0}`;

    // Nivel y XP
    if (this.levelEl) this.levelEl.textContent = `Nv ${stats.level}`;
    const xpNeeded = XP_PER_LEVEL * stats.level;
    if (this.xpFillEl) {
      this.xpFillEl.style.width = `${Math.min(100, (stats.xp / xpNeeded) * 100)}%`;
    }
    if (this.talentPointsEl) {
      this.talentPointsEl.textContent = `🌟 ${talentSystem?.points ?? 0}`;
      this.talentPointsEl.style.opacity = (talentSystem?.points ?? 0) > 0 ? 1 : 0.4;
    }

    // Boost
    if (this.boostEl) {
      this.boostEl.classList.toggle('active', interaction?.boostActive ?? false);
    }

    // Inventario mini
    if (this.invEl && inventory) {
      this._renderInventory(inventory);
    }

    // Enfermedades
    if (this.diseaseEl && diseaseSystem) {
      this._renderDiseases(diseaseSystem);
    }

    // Actualizar paneles si están abiertos
    if (this._talentOpen) this.renderTalents(talentSystem);
    if (this._craftOpen && craftingSystem && inventory) {
      this.renderCrafting(craftingSystem, inventory, talentSystem);
    }
  }

  _renderInventory(inv) {
    const rows = inv.items.map(
      (i) => `<div class="inv-row">${i.name} <span>x${i.qty}</span></div>`
    ).join('');
    const weight = `<div class="inv-weight">Peso: ${inv.totalWeight.toFixed(1)}/${inv.maxWeight}</div>`;
    this.invEl.innerHTML = rows + weight;
  }

  _renderDiseases(diseaseSystem) {
    if (!diseaseSystem.hasAny) {
      this.diseaseEl.innerHTML = '';
      return;
    }
    this.diseaseEl.innerHTML = diseaseSystem.list.map((d) =>
      `<div class="disease-item">${d.emoji} ${d.name} <span>${Math.ceil(d.timeLeft)}s</span></div>`
    ).join('');
  }

  renderTalents(talentSystem) {
    if (!this.talentPanel) return;
    const ts = talentSystem || window.__game?.talents;
    if (!ts) return;

    const branchesHtml = BRANCHES.map((branch) => {
      const talents = Object.values(TALENTS).filter((t) => t.branch === branch.id);
      const nodes = talents.map((t) => {
        const unlocked = ts.has(t.id);
        const canUnlock = ts.canUnlock(t.id);
        const cls = unlocked ? 'unlocked' : (canUnlock ? 'available' : 'locked');
        const reqs = t.requires.length
          ? `<div class="reqs">Requiere: ${t.requires.map((r) => TALENTS[r].name).join(', ')}</div>`
          : '';
        return `
          <div class="talent-node ${cls}" data-id="${t.id}">
            <div class="talent-name">${t.name}</div>
            <div class="talent-desc">${t.desc}</div>
            ${reqs}
            <div class="talent-cost">Costo: ${t.cost} 🌟</div>
          </div>
        `;
      }).join('');

      return `
        <div class="talent-branch">
          <h3>${branch.emoji} ${branch.name}</h3>
          ${nodes}
        </div>
      `;
    }).join('');

    this.talentPanel.innerHTML = `
      <div class="talent-header">
        <h2>🌳 Árbol de Talentos</h2>
        <span class="talent-points-display">Puntos: ${ts.points}</span>
      </div>
      <div class="talent-branches">${branchesHtml}</div>
      <div class="talent-hint">Haz clic en un talento disponible para desbloquearlo. Pulsa T o ESC para cerrar.</div>
    `;

    // Bind clicks
    this.talentPanel.querySelectorAll('.talent-node.available').forEach((node) => {
      node.addEventListener('click', () => {
        const id = node.dataset.id;
        if (ts.unlock(id)) {
          this.renderTalents(ts);
          window.dispatchEvent(new CustomEvent('talent-unlock', {
            detail: { name: TALENTS[id].name }
          }));
        }
      });
    });
  }

  renderCrafting(craftingSystem, inventory, talentSystem) {
    if (!this.craftPanel) return;
    const recipes = craftingSystem.getAvailable(inventory);

    const recipesHtml = recipes.map((r) => {
      const ingredients = Object.entries(r.ingredients).map(([id, qty]) => {
        const have = inventory.count(id);
        const ok = have >= qty;
        return `<span class="${ok ? 'ing-ok' : 'ing-missing'}">${id} (${have}/${qty})</span>`;
      }).join(', ');

      return `
        <div class="craft-recipe ${r.craftable ? 'craftable' : ''}" data-id="${r.id}">
          <div class="recipe-name">${r.emoji} ${r.name} x${r.qty}</div>
          <div class="recipe-ingredients">${ingredients}</div>
          <button class="craft-btn" ${r.craftable ? '' : 'disabled'}>Craftear</button>
        </div>
      `;
    }).join('');

    this.craftPanel.innerHTML = `
      <div class="craft-header">
        <h2>🔨 Mesa de Crafteo</h2>
      </div>
      <div class="craft-recipes">${recipesHtml}</div>
      <div class="craft-hint">Pulsa C o ESC para cerrar.</div>
    `;

    this.craftPanel.querySelectorAll('.craft-recipe.craftable .craft-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const recipeEl = btn.closest('.craft-recipe');
        const id = recipeEl.dataset.id;
        const recipe = craftingSystem.recipes.find((r) => r.id === id);
        if (recipe) {
          const result = craftingSystem.craft(recipe, inventory);
          if (result && window.__game) {
            window.__game.stats.addXP(XP_CRAFT, window.__game.talents);
          }
          this.renderCrafting(craftingSystem, inventory, talentSystem);
        }
      });
    });
  }

  _toast(text, type = 'info') {
    const el = document.createElement('div');
    el.className = `loot-toast ${type}`;
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }

  _onPickup({ added, rare, sorted }) {
    if (!added || added.length === 0) return;
    const text = added.join(', ');
    const prefix = sorted ? '🔍 ' : '';
    const cls = rare ? 'loot-toast rare' : 'loot-toast';
    const el = document.createElement('div');
    el.className = cls;
    el.textContent = `${prefix}+ ${text}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }

  _onSell({ earned }) {
    const el = document.createElement('div');
    el.className = 'loot-toast sell';
    el.textContent = `💰 Vendido por $${earned}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
}
