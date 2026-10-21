// src/ui/Minimap.js
// Radar y minimapa urbano para Bogotá (240x222m)

export class Minimap {
  constructor() {
    this.visible = true;
    try {
      const v = typeof localStorage !== 'undefined' ? localStorage.getItem('bazuko.minimap_visible') : null;
      if (v !== null) this.visible = v === 'true';
    } catch { /* sin almacenamiento */ }

    this.container = document.getElementById('minimap-container');
    if (!this.container && typeof document !== 'undefined') {
      this._createDOM();
    }

    this.canvas = document.getElementById('minimap-canvas');
    this.ctx = this.canvas?.getContext('2d');
    this.infoEl = document.getElementById('minimap-info');

    this.radarRadius = 54; // radio del radar en píxeles
    this.radarRange = 85;  // metros representados en el radio

    this._lastUpdate = 0;
    this._cachedNearest = '';

    // game.js maneja la tecla KeyN de forma centralizada
  }

  _createDOM() {
    const div = document.createElement('div');
    div.id = 'minimap-container';
    div.className = this.visible ? '' : 'hidden';
    div.innerHTML = `
      <div class="minimap-header">
        <span class="minimap-title">🧭 Radar Bogotá</span>
        <button type="button" class="minimap-toggle-btn" id="minimap-toggle-btn" title="Alternar minimapa (N)">N</button>
      </div>
      <canvas id="minimap-canvas" width="130" height="130" aria-label="Minimapa y radar"></canvas>
      <div id="minimap-info" class="minimap-info">Cargando puntos…</div>
    `;
    document.body.appendChild(div);
    this.container = div;

    document.getElementById('minimap-toggle-btn')?.addEventListener('click', () => {
      this.toggle();
    });
  }

  toggle() {
    this.visible = !this.visible;
    const el = this.container || document.getElementById('minimap-container');
    if (el) {
      el.classList.toggle('hidden', !this.visible);
    }
    try {
      localStorage?.setItem('bazuko.minimap_visible', String(this.visible));
    } catch { /* sin almacenamiento */ }
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { text: this.visible ? '🧭 Radar visible (N)' : '🧭 Radar oculto (N)', type: 'info' }
    }));
    return this.visible;
  }

  /**
   * Actualiza el radar
   * @param {Object} playerPos Vector { x, z }
   * @param {number} playerYaw Ángulo de rotación del personaje o cámara
   * @param {Array} pois Lista de { name, icon, x, z, color }
   * @param {number} now Timestamp de performance.now()
   */
  update(playerPos, playerYaw = 0, pois = [], now = performance.now()) {
    if (!this.visible || !this.ctx || !this.canvas || !playerPos) return;

    // Actualizar a ~20 FPS para eficiencia
    if (now - this._lastUpdate < 50) return;
    this._lastUpdate = now;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = this.radarRadius;

    ctx.clearRect(0, 0, w, h);

    // Fondo del radar
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 15, 20, 0.88)';
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#3d564d';
    ctx.stroke();

    // Círculos concéntricos de distancia (25m y 50m)
    ctx.strokeStyle = 'rgba(65, 95, 80, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2);
    ctx.stroke();

    // Ejes cardinales
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.lineTo(cx, cy + r);
    ctx.moveTo(cx - r, cy);
    ctx.lineTo(cx + r, cy);
    ctx.strokeStyle = 'rgba(65, 95, 80, 0.25)';
    ctx.stroke();

    // Letra N al norte (Z negativo en Three.js es Norte)
    ctx.fillStyle = '#eed688';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', cx, cy - r + 8);
    ctx.fillStyle = '#7a9688';
    ctx.fillText('S', cx, cy + r - 7);
    ctx.fillText('E', cx + r - 7, cy);
    ctx.fillText('O', cx - r + 7, cy);

    // Puntos de interés (POIs)
    let nearestDist = Infinity;
    let nearestName = '';

    for (const poi of pois) {
      const dx = poi.x - playerPos.x;
      const dz = poi.z - playerPos.z;
      const dist = Math.hypot(dx, dz);

      if (dist < nearestDist) {
        nearestDist = dist;
        nearestName = `${poi.icon} ${poi.name}: ${Math.round(dist)}m`;
      }

      // Proyección a coordenadas del radar
      // 1 metro en el mundo = (r / radarRange) píxeles en el radar
      const scale = r / this.radarRange;
      let px = cx + dx * scale;
      let py = cy + dz * scale;

      const offsetDist = Math.hypot(px - cx, py - cy);
      const isClamped = offsetDist > r - 6;

      if (isClamped) {
        const angle = Math.atan2(py - cy, px - cx);
        px = cx + Math.cos(angle) * (r - 7);
        py = cy + Math.sin(angle) * (r - 7);
      }

      // Dibujar punto de interés
      ctx.beginPath();
      ctx.arc(px, py, isClamped ? 3 : 4, 0, Math.PI * 2);
      ctx.fillStyle = poi.color || '#ffd166';
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Icono / Emoji pequeño si está dentro del radar
      if (!isClamped) {
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(poi.icon, px, py - 8);
      }
    }

    // Jugador (flecha en el centro orientada según playerYaw)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(playerYaw);

    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4, 5);
    ctx.lineTo(0, 3);
    ctx.lineTo(-4, 5);
    ctx.closePath();
    ctx.fillStyle = '#2ecc71';
    ctx.fill();
    ctx.strokeStyle = '#0e3a1f';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    ctx.restore();

    // Actualizar texto de información más cercano
    if (this.infoEl && nearestName && nearestName !== this._cachedNearest) {
      this._cachedNearest = nearestName;
      this.infoEl.textContent = nearestName;
    }
  }
}
