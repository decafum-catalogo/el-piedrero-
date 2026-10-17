import '@fontsource/overpass/600.css';
import '@fontsource/overpass/800.css';
import '@fontsource/overpass/900.css';
import { Game } from './core/game.js';

const canvas = document.getElementById('game-canvas');
const game = new Game(canvas);
game.start();
