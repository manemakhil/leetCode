// Problem: https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longPal = s[0];

    /* Checks if the sustring (inclusive of given indexes) is a palindrome and returns true if so.
    needCheck = false incase we already know it is a palindrome. */
    function checkPal(left, right, needCheck = true) {
        let subStrLen = right - left + 1

        if (needCheck) {
            // Stores how much to move to get to mid-point from left and right of sub-string
            let growToMidPoint = subStrLen % 2 === 0 ? subStrLen / 2 - 1 : subStrLen / 2;

            for (let i = 0; i <= growToMidPoint; i++) {
                if (s[left + i] !== s[right - i]) {
                    return false;
                }
            }
        }

        longPal = subStrLen > longPal.length ? s.substring(left, right + 1) : longPal;
        return true;
    }

    /* 1. Loop through the characters (a) of the string. 
       2. Find another same character (b) after this character (a).
       3. Check if this sub-string is a palindrome (subString: a->b).
       4. If this palindrome's last character is at the end of string, this is the largest, or the one found before is.
       5. Else keep doing the above and keep comparining lengths to find the longest palindrom. */
    for (let startIndex = 0; startIndex < s.length - 1; startIndex++) {
        let startChar = s[startIndex], endIndexForPal = false;

        for (let endIndex = startIndex + 1; endIndex < s.length; endIndex++) {
            if (startChar === s[endIndex]) {
                // In-case we have the same character repeated
                if (endIndex - startIndex === 1) {
                    while (s[endIndex + 1] === s[startIndex]) endIndex++;
                    checkPal(startIndex, endIndex, false);
                    continue;
                }
               
                if (checkPal(startIndex, endIndex))
                    endIndexForPal = endIndex;
            }
        }

        if (endIndexForPal && endIndexForPal === s.length - 1) {
            return longPal;
        }
    }

    return longPal;
};

console.log(longestPalindrome('aabbaa'));