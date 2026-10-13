// Problem: https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let maxArea = 0, i = 0, j = height.length - 1, thisArea, a, b;

    while (j > i) {
        a = height[i];
        b = height[j];

        if (a < b) {
            thisArea = a * (j - i);

            while (a > height[++i]) ;
        } else {
            thisArea = b * (j - i);

            while (b > height[--j]) ;
        }
        if (thisArea > maxArea) maxArea = thisArea;
    }

    return maxArea;
};