/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // Looping thorugh the nums array
    for (let i = 0; i < nums.length - 1;) {
        let j = i + 1, duplicates = 0;
        while(nums[j++] === nums[i]) {
            duplicates++;
        }
        nums.splice(++i, duplicates);
    }
       
    return nums.length;
};