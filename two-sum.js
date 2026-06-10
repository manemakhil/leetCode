// Problem: https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const otherNumHash = {}

    for (let thisIndex = 0; thisIndex < nums.length; thisIndex++) {
        const thisNum = nums[thisIndex];

        const otherNum = target - thisNum;
        const matchingFirstIndex = otherNumHash[otherNum];

        if (matchingFirstIndex !== undefined) return [matchingFirstIndex, thisIndex];
        otherNumHash[thisNum] = thisIndex;
    }
};