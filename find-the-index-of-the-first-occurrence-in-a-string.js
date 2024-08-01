// Problem: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // hEnd helps us determine if haystack is smaller than needle
    let hEnd = haystack.length - needle.length;
    if (hEnd < 0) return -1;

    // If haystack and needle are of same size
    if (hEnd === 0) {
        if (haystack === needle) return 0;
        else return -1;
    }


    hayStack: for (let h = 0; h <= hEnd;) {
        /* If the first letters match, we check for:
        1. Next letter in haystack that matches first needle letter.
        2. If all letter match.
        3. If all letters do not match, next haystack letter is either 
            a. Next haystack occurance of needle's first letter
            b. Next haystack letter if (a) is false. */
        if (haystack[h] === needle[0]) {
            let hNext = false, n;
            for (n = 1, hSub = h + n; n < needle.length; n++, hSub++) {
                if (!hNext && haystack[hSub] === needle[0]) {
                    hNext = hSub;
                }

                if (haystack[hSub] !== needle[n]) {
                    h = hNext ? hNext : hSub + 1;
                    continue hayStack;
                }
            }

            if (n === needle.length) return h;
        } else h++;
    }

    return -1;
};