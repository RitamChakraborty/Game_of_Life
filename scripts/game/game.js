let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function updateCell(i, j) {
    if (arr[i][j] === 0) {
        arr[i][j] = 1;
    } else if (arr[i][j] === 1) {
        arr[i][j] = 0;
    }
}

export {arr, updateCell};