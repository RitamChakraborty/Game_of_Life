let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function updateCell(i, j) {
    if (arr[i][j] === 0) {
        arr[i][j] = 1;
    } else if (arr[i][j] === 1) {
        arr[i][j] = 0;
    }
}

function play() {
    console.log('play');
}

function pause() {
    console.log('pause');
}

function reset() {
    console.log('reset');
}

export {arr, updateCell, play, pause, reset};