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

nums = [-3,-3,-2,-1,-1,0,0,0,0,0];
console.log(removeDuplicates(nums));

console.log(nums);