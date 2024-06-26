// Problem: https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    /* commonLetters hold the present common letters, while nextCommonLetters
    is computed on every iteration with another word, and assigned to commonLetters at the end */
    let commonLetters = words[0], nextCommonLetters = '';

    for (
        let wordInd = 1, word = words[wordInd];
        wordInd < words.length;
        word = words[++wordInd]
    ) {
        // Looping through other words in words array.
        for (let letter of commonLetters) {
            let foundIndex = word.indexOf(letter);
            /* If the letter is found, add into nextCommonLetters
            and delete from present word to prevent it from being searched in the next iterations. */
            if (foundIndex !== -1) {
                nextCommonLetters += word[foundIndex];
                word = word.replace(letter, '');
            }
        }

        // If there are no nextCommonLetters, we can end it here with []
        if (nextCommonLetters === '') {
            return [];
        } else {
            commonLetters = nextCommonLetters;
            nextCommonLetters = '';
        }
    }

    return commonLetters.split('');
};