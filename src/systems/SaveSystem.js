const KEY = 'habitante-de-calle-save-v1';

export class SaveSystem {
  save(state) { localStorage.setItem(KEY, JSON.stringify(state)); }
  load() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  }
  clear() { localStorage.removeItem(KEY); }
}