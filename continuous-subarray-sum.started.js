//Problem: https://leetcode.com/problems/continuous-subarray-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // If the Array has less that 2 elements, it is false
    if (nums.length < 2) return false;

    /* We will process the array by sliding a fixed subarray across the array.
    This subarray will bounce across the end of the array, 
    and will increase in length with every bounce */
    const STAGE_CONST = {
        justChangedToLtoR: 'justChangedToLtoR',
        justChangedToRtoL: 'justChangedToRtoL',
        LtoR: 'LtoR',
        RtoL: 'RtoL'
    };
    let i = 0, j = 1, subArraySum = nums[i], stage = STAGE_CONST.justChangedToLtoR;

    // If ther are only two elements, we can directly check and return
    if (nums.length === 2) {
        if (checkSubArray(nums[j])) return true;
        else return false;
    }

    do {
        switch (stage) {
            case STAGE_CONST.justChangedToLtoR: {
                if (checkSubArray(nums[j])) return true;
                ++i, ++j;
                stage = STAGE_CONST.LtoR;
            }
                break;

            case STAGE_CONST.justChangedToRtoL: {
                if (checkSubArray(nums[i])) return true;
                --i, --j;
                stage = STAGE_CONST.RtoL;
            }
                break;

            case STAGE_CONST.LtoR: {
                if (checkSubArray(nums[j], nums[i - 1])) return true;
                if (j === nums.length - 1) {
                    stage = STAGE_CONST.justChangedToRtoL;
                    --i;
                } else {
                    ++j, ++i;
                }
            }
                break;

            case STAGE_CONST.RtoL: {
                if (checkSubArray(nums[i], nums[j + 1])) return true;
                if (i === 0) {
                    stage = STAGE_CONST.justChangedToLtoR;
                    j++;
                } else {
                    --j, --i;
                }
            }
                break;
        }
    } while (i >= 0 && j <= nums.length - 1);

    return false;

    // Adds and remove from sub-array sum, and check for divisibility
    function checkSubArray(add = 0, remove = 0) {
        subArraySum += add - remove;
        return subArraySum % k === 0 ? true : false;
    }
};