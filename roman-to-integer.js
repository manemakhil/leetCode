// Problem: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'IV': 4,
        'IX': 9,
        'L': 50,
        'C': 100,
        'XL': 40,
        'XC': 90,
        'D': 500,
        'M': 1000,
        'CD': 400,
        'CM': 900
    };

    const letterArray = s.split('');
    let val = 0, i = 0;

    while (i < letterArray.length) {
        let romanCombo = letterArray[i] + letterArray[i + 1];
        if (
            ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
                .includes(romanCombo)
        ) {
            val += roman[romanCombo];
            i += 2;
        } else {
            val += roman[letterArray[i++]];
        }
    }

    return val;
};