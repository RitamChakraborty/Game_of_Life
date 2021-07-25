let height = window.innerHeight;
let width = window.innerWidth;

window.addEventListener('resize', () => {
    height = window.innerHeight;
    width = window.innerWidth;
});

function getHeight(m) {
    return height / m;
}

function getWidth(n) {
    return width / n;
}

/**
 * Size of the cell
 * Changes the size dynamically
 * when viewport dimensions change
 *
 * @param arr Cells array
 * @returns {{width: *, height: *}} Cell height and width
 */
function getSize(arr) {
    return {
        height: getHeight(arr.length),
        width: getWidth(arr[0].length)
    };
}

export {getSize};