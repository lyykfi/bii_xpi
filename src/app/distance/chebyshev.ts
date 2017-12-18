/**
* @param {Number[]|Array} x - input array
* @param {Number[]|Array} y - input array
* @returns {Number|Null} Chebyshev distance or null
*/
export default  function chebyshev( x, y) {
    let len, d, v, i;

    len = x.length;

    v = x[ 0 ] - y[ 0 ];
    d = ( v < 0 ) ? -v : v;
    for ( i = 1; i < len; i++ ) {
        v = x[ i ] - y[ i ];
        if ( v < 0 ) {
            v = -v;
        }
        if ( v > d ) {
            d = v;
        }
    }

    return d;
}
