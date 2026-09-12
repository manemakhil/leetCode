// Problem: https://leetcode.com/problems/zigzag-conversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let str = '';

    // No need to compute anything if numRows is 1
    if(numRows === 1) return s;

    let numRows2 = numRows * 2;

    for (
        let colTraveller = 0;
        colTraveller < numRows && s[colTraveller];
        colTraveller++
    ) {
        str += s[colTraveller];

        // Travel up and down string to get the next character in pattern
        const travelDirection = {
            'b': numRows2 - (2 + 2 * colTraveller),
            't': numRows2 - 2 * (numRows - colTraveller)
        };

        let traveller, direction, nextDirection;
        if (travelDirection['b']) {
            direction = 'b';
            nextDirection = travelDirection['t'] ? 't' : 'b';
        } else if (travelDirection['t']) {
            direction = 't'
            nextDirection = travelDirection['b'] ? 'b' : 't';
        } else continue;

        traveller = colTraveller + travelDirection[direction];

        while (s[traveller]) {
            str += s[traveller];

            traveller += travelDirection[nextDirection];
            if (direction !== nextDirection) {
                direction = nextDirection;
                nextDirection = direction === 't' ? 'b' : 't';
            }
        }

    }

    return str;
};