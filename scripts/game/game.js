let arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let flag = false;
let timer;

function updateCell(i, j) {
    if (arr[i][j] === 0) {
        arr[i][j] = 1;
    } else if (arr[i][j] === 1) {
        arr[i][j] = 0;
    }
}

/**
 * Count how many neighbour cells are alive
 *
 * @param cells All cells current status
 * @param m Number of rows
 * @param n Number of columns
 * @param i Row index
 * @param j Column index
 * @returns {number} Number of live neighbours
 */
function liveNeighboursCount(cells, m, n, i, j) {
    let count = 0;

    if (i > 0 && j > 0 && cells[i - 1][j - 1] === 1) ++count;
    if (i > 0 && cells[i - 1][j] === 1) ++count;
    if (i > 0 && j < n && cells[i - 1][j + 1] === 1) ++count;
    if (j > 0 && cells[i][j - 1] === 1) ++count;
    if (j < n && cells[i][j + 1] === 1) ++count;
    if (i < m && j > 0 && cells[i + 1][j - 1] === 1) ++count;
    if (i < m && cells[i + 1][j] === 1) ++count;
    if (i < m && j < n && cells[i + 1][j + 1] === 1) ++count;

    return count;
}

/**
 * Build a new matrix if there is a possibility
 * to have new cells to born
 * outside the given matrix
 *
 * @param matrix Given matrix
 */
function buildWorld(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // Up side
    let up = false;

    for (let i = 2; i < n; ++i) {
        if (matrix[0][i - 2] === 1 && matrix[0][i - 1] === 1 && matrix[0][i] === 1) {
            up = true;
            break;
        }
    }

    // Right side
    let right = false;

    for (let i = 2; i < m; ++i) {
        if (matrix[i - 2][n - 1] === 1 && matrix[i - 1][n - 1] === 1 && matrix[i][n - 1] === 1) {
            right = true;
            break;
        }
    }

    // Bottom side
    let bottom = false;

    for (let i = 2; i < n; ++i) {
        if (matrix[m - 1][i - 2] === 1 && matrix[m - 1][i - 1] === 1 && matrix[m - 1][i] === 1) {
            bottom = true;
            break;
        }
    }

    // Left side
    let left = false;

    for (let i = 2; i < m; ++i) {
        if (matrix[i - 2][0] === 1 && matrix[i - 1][0] === 1 && matrix[i][0] === 1) {
            left = true;
            break;
        }
    }

    if (up) {
        let tempMatrix = [];
        let tempArr = [];

        for (let i = 0; i < matrix[0].length; ++i) {
            tempArr.push(0);
        }

        tempMatrix.push(tempArr);

        for (let i = 0; i < matrix.length; ++i) {
            tempMatrix.push(matrix[i]);
        }

        matrix = tempMatrix;
    }

    if (right) {
        for (let i = 0; i < matrix.length; ++i) {
            matrix[i].push(0);
        }
    }

    if (bottom) {
        let tempArray = [];

        for (let i = 0; i < matrix[0].length; ++i) {
            tempArray.push(0);
        }

        matrix.push(tempArray);
    }

    if (left) {
        for (let i = 0; i < matrix.length; ++i) {
            matrix[i] = [0].concat(matrix[i]);
        }
    }

    return matrix;
}

function logic() {
    while (flag) {
        arr = buildWorld(arr);
        const m = arr.length - 1;
        const matrix = [];

        for (let i = 0; i <= m; ++i) {
            const n = arr[i].length - 1;
            const arr = [];

            for (let j = 0; j <= n; ++j) {
                const nc = liveNeighboursCount(arr, m, n, i, j);

                if (nc === 3) arr.push(1);
                else if (nc < 2 || nc > 3) arr.push(0);
                else arr.push(arr[i][j]);
            }

            matrix.push(arr);
        }

        arr = matrix;
        console.log(arr);
    }
}

function play() {
    flag = true;
    timer = setInterval(() => {
        logic();
    }, 1000);
}

function pause() {
    flag = false;
    clearInterval(timer);
}

function reset() {
    flag = false;
    clearInterval(timer);
}

export {arr, updateCell, play, pause, reset};