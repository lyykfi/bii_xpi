/**
 *
 * @param {Number[]|Array} x - input array
 * @param {Number[]|Array} y - input array
 * @returns {Number|Null} Euclidean distance or null
 */
export default function euclidean( x, y ) {
    let len, val, abs, t, s, r, i;

    t = 0;
    s = 1;

    len = x.length;

    for ( i = 0; i < len; i++ ) {
        val = x[ i ] - y[ i ];
        abs = ( val < 0 ) ? -val : val;
        if ( abs > 0 ) {
            if ( abs > t ) {
                r = t / val;
                s = 1 + s * r * r;
                t = abs;
            } else {
                r = val / t;
                s += r * r;
            }
        }
    }

    return t * Math.sqrt( s );
}
