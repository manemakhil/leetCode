// Problem URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let duplicates = 0;

    // Loops through nums to tag duplicates
    for (let i = 0; i < nums.length;) {
        let j = i + 1;

        if (j === nums.length) break;

        while (nums[i] === nums[j]) {
            nums[j] = 101;
            j++;
            duplicates++;
        }
        i = j;
    }

    /* Loops through nums to find 101 and swaps it with the next non-101 element.
    compEnd indicates the number of 101s in-between swaps. */
    let compEnd = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 101) {
            while (nums[i + compEnd] === 101) {
                compEnd++;
            }
            let end = i + compEnd;

            if (end === nums.length) break;

            nums[i] += nums[end];
            nums[end] = nums[i] - nums[end];
            nums[i] -= nums[end];
        }
    }

    return nums.length - duplicates;
};