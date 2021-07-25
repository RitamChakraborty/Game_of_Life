import {drawBoard} from "./view/board.js";
import {arr, pause, play, reset} from "./game/game.js";

const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

btnPlay.onclick = play;
btnPause.onclick = pause;
btnReset.onclick = reset;

drawBoard(arr);