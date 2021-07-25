let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let timer;

function updateCell(i, j) {
    if (arr[i][j] === 0) {
        arr[i][j] = 1;
    } else if (arr[i][j] === 1) {
        arr[i][j] = 0;
    }
}

function play() {
    timer = setInterval(() => {
        console.log('hi');
    }, 1000);
}

function pause() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
}

export {arr, updateCell, play, pause, reset};