// Problem: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let lcp = strs[0];

    try {
        for (
            let strIn = 1;
            strIn < strs.length;
            strIn++
        ) {
            let comparisionStr = strs[strIn];

            if (lcp.length > comparisionStr.length) {
                lcp = lcp.substring(0, comparisionStr.length);
            }

            lcp.split('').every((s, i) => {
                if (s !== comparisionStr[i]) {
                    if (i === 0) {
                        throw '';
                    }
                    lcp = lcp.substring(0, i);
                    return false;
                }
                return true;
            });
        }
    } catch (e) {
        return e;
    }

    return lcp;
};