import {ALIVE, DEAD} from "../data/constant.js";
import {getSize} from "../util/size.js";
import {updateCell} from "../game/game.js";

const container = document.getElementsByClassName("container")[0];

/**
 * Draw the board in the canvas
 *
 * @param arr Based on which the canvas will be drawn
 */
function drawBoard(arr) {
    const size = getSize(arr);
    const table = document.createElement("table");

    for (let i = 0; i < arr.length; ++i) {
        const tr = document.createElement("tr");

        for (let j = 0; j < arr[i].length; ++j) {
            const td = document.createElement("td");
            td.id = `${i}_${j}`;

            // Set cell height and width
            td.style.height = `${size.height}px`;
            td.style.width = `${size.width}px`;

            td.onclick = cellClick;

            // Set background color based on cell status
            if (arr[i][j] === 0) {
                td.style.backgroundColor = DEAD;
            } else if (arr[i][j] === 1) {
                td.style.backgroundColor = ALIVE;
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Add table as the only child of the container
    container.firstChild?.remove();
    container.appendChild(table);
}

function cellClick(event) {
    const id = event.target.id;
    const values = id.split("_");
    const i = parseInt(values[0]);
    const j = parseInt(values[1]);

    changeCellColor(id);
    updateCell(i, j);
}

function changeCellColor(id) {
    const element = document.getElementById(id);
    let backgroundColor = element.style.backgroundColor;

    if (backgroundColor === ALIVE) {
        element.style.backgroundColor = DEAD;
    } else if (backgroundColor === DEAD) {
        element.style.backgroundColor = ALIVE;
    }
}

export {drawBoard};