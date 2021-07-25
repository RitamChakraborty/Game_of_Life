const container = document.getElementsByClassName("container")[0];

function drawBoard(arr) {
    const table = document.createElement("table");

    for (let i = 0; i < arr.length; ++i) {
        const tr = document.createElement("tr");

        for (let j = 0; j < arr[i].length; ++j) {
            const td = document.createElement("td");

            if (arr[i][j] ===  0) {
                td.style.backgroundColor = "white";
            } else if (arr[i][j] === 1) {
                td.style.backgroundColor = "darkslategrey";
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }


    container.firstChild?.remove();
    container.appendChild(table);
}

export {drawBoard};