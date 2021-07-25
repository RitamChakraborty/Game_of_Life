import {ALIVE, DEAD} from "../data/constant.js";
import {getSize} from "../util/size.js";

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

            // Set background color based on cell status
            if (arr[i][j] ===  0) {
                td.style.backgroundColor = DEAD;
            } else if (arr[i][j] === 1) {
                td.style.backgroundColor = ALIVE;
            }

            // Set cell height and width
            td.style.height = `${size.height}px`;
            td.style.width = `${size.width}px`;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Add table as the only child of the container
    container.firstChild?.remove();
    container.appendChild(table);
}

export {drawBoard};