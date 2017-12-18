/**
*
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
*/
export function dot( x, y ) {
    let d = 0, i;

    for ( i = 0; i < x.length; i++ ) {
        d += x[ i ] * y[ i ];
    }

    return d;
}

export default function scalar(x, y) {
    const dotResult = dot(x, y) || 1;

    let x1 = 0, y1 = 0;

    x.forEach((item) => {
        x1 += Math.pow(item, 2);
    });

    y.forEach((item) => {
        y1 += Math.pow(item, 2);
    });

    x1 = Math.sqrt(x1);
    y1 = Math.sqrt(y1);

    const c = x1 * y1 || 1;

    return Math.acos(dotResult / c) || 1;
}
