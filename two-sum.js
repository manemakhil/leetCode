// Problem: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(
        let i = 0; 
        i < nums.length - 1; 
        i++
    ) {
        let otherHalfIndex = nums.indexOf(target - nums[i], i + 1);

        if(otherHalfIndex !== -1) return [i, otherHalfIndex];
    }
};