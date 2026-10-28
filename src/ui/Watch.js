// Reloj digital retro (genérico, sin marcas) para el HUD.
// LCD de 7 segmentos: día de la semana, número de día, hora 12h con AM/PM y segundos.
const SEG = {
  0: 'abcdef', 1: 'bc', 2: 'abdeg', 3: 'abcdg', 4: 'bcfg',
  5: 'acdfg', 6: 'acdefg', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg',
};
const SEG_PATHS = {
  a: 'M2 1 H8 L9 2 L8 3 H2 L1 2 Z',
  b: 'M9 2.5 L10 3.5 V8.5 L9 9.5 L8 8.5 V3.5 Z',
  c: 'M9 10.5 L10 11.5 V16.5 L9 17.5 L8 16.5 V11.5 Z',
  d: 'M2 18 H8 L9 19 L8 20 H2 L1 19 Z',
  e: 'M1 10.5 L2 11.5 V16.5 L1 17.5 L0 16.5 V11.5 Z',
  f: 'M1 2.5 L2 3.5 V8.5 L1 9.5 L0 8.5 V3.5 Z',
  g: 'M2 9.5 H8 L9 10 L8 10.5 H2 L1 10 Z',
};
const DAYS = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'];

function digit(ch, x, scale = 1) {
  const on = SEG[ch] ?? '';
  let s = `<g transform="translate(${x} 0) scale(${scale})">`;
  for (const k of 'abcdefg') {
    s += `<path d="${SEG_PATHS[k]}" class="${on.includes(k) ? 'on' : 'off'}"/>`;
  }
  return s + '</g>';
}

export class Watch {
  constructor() {
    this.enabled = typeof document !== 'undefined' && !!document.body?.appendChild && !!document.createElement;
    if (!this.enabled) return;
    this.el = document.createElement('div');
    this.el.id = 'watch';
    this.el.setAttribute('aria-label', 'Reloj de pulsera digital');
    this.el.innerHTML = `
      <div class="w-case"><i class="w-push l1"></i><i class="w-push l2"></i><i class="w-push r1"></i>
        <div class="w-bezel">
          <div class="w-labels"><span>LIGHT</span><b>ALARM CHRONOGRAPH</b></div>
          <div class="w-lcdbox">
            <div class="w-top"><span class="w-ampm">AM</span><span class="w-day">--</span><span class="w-date">1</span></div>
            <svg class="w-lcd" viewBox="0 0 92 22" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>
          <div class="w-labels w-bottom"><span>WATER</span><em>WR</em><span>RESIST</span></div>
        </div>
      </div>`;
    document.body.appendChild(this.el);
    this.svg = this.el.querySelector('.w-lcd');
    this.dayEl = this.el.querySelector('.w-day');
    this.dateEl = this.el.querySelector('.w-date');
    this.ampmEl = this.el.querySelector('.w-ampm');
    this._last = '';
  }

  update(clock) {
    if (!this.enabled) return;
    const totalMin = Math.floor(clock.hour * 60);
    const sec = Math.floor(((clock.hour * 3600) % 60));
    const key = `${clock.day}|${totalMin}|${sec}`;
    if (key === this._last) return;
    this._last = key;
    const h24 = Math.floor(clock.hour) % 24;
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    const m = Math.floor((clock.hour % 1) * 60);
    const hh = String(h12).padStart(2, ' ');
    const mm = String(m).padStart(2, '0');
    const ss = String(sec).padStart(2, '0');
    let s = '';
    if (hh[0] !== ' ') s += digit(hh[0], 0, 0.95);
    s += digit(hh[1], 11, 0.95);
    s += `<rect x="22.5" y="6" width="1.8" height="1.8" class="on"/><rect x="22.5" y="13" width="1.8" height="1.8" class="on"/>`;
    s += digit(mm[0], 26, 0.95) + digit(mm[1], 37, 0.95);
    s += digit(ss[0], 58, 0.78).replace('<g ', '<g ') + digit(ss[1], 67, 0.78);
    this.svg.innerHTML = s;
    this.dayEl.textContent = DAYS[(clock.day - 1) % 7];
    this.dateEl.textContent = String(clock.day);
    this.ampmEl.textContent = h24 >= 12 ? 'PM' : 'AM';
  }
}
