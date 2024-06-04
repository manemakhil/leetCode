// Problem: https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    /* nextSwapIndex points to the right-most element in nums that
    is equal to val. Starts with nums.length - 1. */
    let nextSwapIndex = nums.length - 1, tempNum;

    /* Loop through nums; from R->L; and find val.
    On finding, swap with nextSwapIndex and decrement nextSwapIndex */
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === val) {
            tempNum = nums[nextSwapIndex];
            nums[nextSwapIndex--] = nums[i];
            nums[i] = tempNum;
        }
    }

    return nextSwapIndex + 1;
};