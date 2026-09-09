// Problem: https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let windowLength = s.length;

    while (windowLength > 0) {
        windowIterator: for (
            let iter = 0;
            iter < s.length - windowLength + 1;
            iter++
        ) {
            let startIndex = 0 + iter;
            const midPointIndex = Math.floor(windowLength / 2),
                endIndex = startIndex + windowLength - 1;

            let oneHalf = '', otherHalf = '';
            for (let innerWindowStart = 0; innerWindowStart < midPointIndex; innerWindowStart++) {
                if (s[startIndex + innerWindowStart] !== s[endIndex - innerWindowStart]) continue windowIterator;
            }

            return s.substring(startIndex, endIndex + 1)
        }

        windowLength--;
    }

    return s[0];
};
