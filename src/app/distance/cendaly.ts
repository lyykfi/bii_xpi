/**
*
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
* @returns {Number|Null} cendaly distance
*/
export default function cendaly(x, y) {
    const n = x.length;
    let delta = 0;

    const x1 = x;
    const y1 = y;

    x1.forEach((item, key) => {
        let nextDelta;
        let nextDelta2;

        if (x1[key] === y1[key]) {
            nextDelta = 0;
        }

        if (x1[key] > y1[key]) {
            nextDelta = 1;
        }

        if (x1[key] < y1[key]) {
            nextDelta = -1;
        }

        if (y1[key] === x1[key]) {
            nextDelta2 = 0;
        }

        if (y1[key] > x1[key]) {
            nextDelta2 = 1;
        }

        if (y1[key] < x1[key]) {
            nextDelta2 = -1;
        }

        delta += (nextDelta * nextDelta2);
    });



    return 1 - (2 / (n * (n - 1))) * delta;
}
