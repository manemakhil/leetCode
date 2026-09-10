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
            const startIndex = 0 + iter, endIndex = startIndex + windowLength - 1;
            let startTraveller = startIndex, endTraveller = endIndex;

            while(endTraveller > startTraveller) 
                if (s[startTraveller++] !== s[endTraveller--]) continue windowIterator;

            return s.substring(startIndex, endIndex + 1);
        }

        windowLength--;
    }

    return s[0];
};
