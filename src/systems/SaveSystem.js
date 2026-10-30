const KEY = 'habitante-de-calle-save-v1';
const VERSION = 3; // v3: dinero en colones (v2 era en pesos colombianos)

// Cuántos pesos vale un "dólar" de las partidas v1
const V1_TO_COP = 250;

export class SaveSystem {
  save(state) { localStorage.setItem(KEY, JSON.stringify({ ...state, v: VERSION })); }
  load() {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data.v && data.stats?.dinero !== undefined) {
      data.stats.dinero = Math.round(data.stats.dinero * V1_TO_COP);
    }
    if (data.v === 2 && data.stats?.dinero !== undefined) data.stats.dinero = Math.round(data.stats.dinero / 6);
    return data;
  }
  clear() { localStorage.removeItem(KEY); }
}