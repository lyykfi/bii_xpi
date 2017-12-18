/**
*
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
* @returns {Number|Null} Minkowski distance or null
*/
export default function minkowski( x, y ) {
    const p = 2;
    let d = 0, v, i;

    for ( i = 0; i < x.length; i++ ) {
        v = x[ i ] - y[ i ];
        if ( v < 0 ) {
            v = -v;
        }
        d += Math.pow( v, p );

        console.log(d);
    }

    return Math.pow( d, 1 / p );
}
