// Problem: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;

    let startP = ['(', '{', '['], openSet = [];

    for (let p of s) {
        if (startP.includes(p)) {
            openSet.push(p);
        } else {
            let comp;

            switch (p) {
                case ')': {
                    comp = '(';
                }
                    break;
                case ']': {
                    comp = '[';
                }
                    break;
                case '}': {
                    comp = '{';
                }
                    break;
            }

            if (comp === openSet[openSet.length - 1]) {
                openSet.pop();
            } else {
                return false;
            }
        }
    }

    return openSet.length === 0 ? true : false;
};