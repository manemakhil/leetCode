// Problem: https://leetcode.com/problems/most-profit-assigning-work/

var maxProfitAssignment = function (difficulty, profit, worker) {
    /* Optimised lists that have distinct difficulties for maxprofit possible
    ith element in optDiff and optPft refers to maxProfit possible difficulty. */
    let optDiff = [], optPft = [];
    // Sort the difficuly and profit in asc order of difficulty
    for (let i = 0; i < difficulty.length - 1; i++) {
        for (let j = i + 1; j < difficulty.length; j++) {
            if (difficulty[j] < difficulty[i]) {
                let temp = difficulty[i];
                difficulty[i] = difficulty[j];
                difficulty[j] = temp;

                temp = profit[i];
                profit[i] = profit[j];
                profit[j] = temp;
            }
        }

        // i has the minimum diff for it. Find the maximum possible profit for difficulty[i]
        if (i > 0 && profit[i] <= profit[i - 1]) {
            profit[i] = profit[i - 1];
            continue;
        }

        optDiff.push(difficulty[i]);
        optPft.push(profit[i]);
    }

    // Set maximum profit for last index
    let lastInd = profit.length - 1;
    if (profit[lastInd] > profit[lastInd - 1]) {
        optDiff.push(difficulty[lastInd]);
        optPft.push(profit[lastInd]);
    }

    let totalProfit = 0, optLastInd = optDiff.length - 1;
    /* Loop through each worker difficulty
    Find the index where difficulty exceeds worker effort = the index before is the max difficulty. */
    for (let w of worker) {
        // If workers ability is less than min diff, we skip
        if (w < optDiff[0]) continue;

        // If worker difficulty greater than max, we add last maxprofit
        if (w >= optDiff[optLastInd]) {
            totalProfit += optPft[optLastInd];
            continue;
        }

        totalProfit += optPft[optDiff.findIndex(d => d > w) - 1];
    }

    return totalProfit;
};