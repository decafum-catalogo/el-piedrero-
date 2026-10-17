import { Game } from './core/game.js';

const canvas = document.getElementById('game-canvas');
const game = new Game(canvas);
game.start();