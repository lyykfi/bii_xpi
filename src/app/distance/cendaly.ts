/**
*
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
* @returns {Number|Null} cendaly distance
*/
export default function cendaly(x, y) {
    const n = x.length;
    let delta = 0;

    const x1 = x.slice(0).sort();
    const y1 = y.slice(0).sort();

    x1.forEach((item, key) => {
        let nextDelta;

        if (x1[key] === y1[key]) {
            nextDelta = 0;
        }

        if (x1[key] > y1[key]) {
            nextDelta = 1;
        }

        if (x1[key] < y1[key]) {
            nextDelta = -1;
        }

        delta += (nextDelta * 2);
    });

    console.log(delta);
    console.log(1 - (2 / (n * (n - 1))));
    console.log('-----');

    return 1 - (2 / (n * (n - 1))) * delta;
}
