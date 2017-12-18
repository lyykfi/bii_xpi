/**
*
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} Canberra distance
*/
export default function canberra( x, y) {
    let d, i, v, num, denom;

    d = 0;
    for ( i = 0; i < x.length; i++ ) {
        v = x[ i ] - y[ i ];
        num = ( v < 0 ) ? -v : v;
        denom = ( ( x[ i ] < 0 ) ? -x[ i ] : x[ i ] ) + ( ( y[ i ] < 0 ) ? -y[ i ] : y[ i ] );
        d += num / denom;
    }
    return d;
}
