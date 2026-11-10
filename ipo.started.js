// Problem: https://leetcode.com/problems/ipo

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    const captialProfitHash = {}, captialProfitHashArr = {};
    let thisCaptialProfitHash;

    for (
        let i = 0, c = capital[i], p = profits[i];
        i < capital.length;
        ++i, c = capital[i], p = profits[i]
    ) {
        thisCaptialProfitHash = captialProfitHash[c];

        if (thisCaptialProfitHash === undefined) {
            captialProfitHash[c] = {
                [p]: 1
            };
        } else if (thisCaptialProfitHash[p] === undefined) {
            thisCaptialProfitHash[p] = 1;
        } else {
            thisCaptialProfitHash[p]++;
        }
    }

    let workN = k, budget = w, c, maxCInd, maxCaptial, maxProfit, highestProfitInCaptial, profitsArr, maxCaptialProfitHash;
    const captials = Object.keys(captialProfitHash);
    let cLen = captials.length;

    while (workN--) {
        maxCaptial = undefined;
        maxProfit = 0;
        for (const cInd in captials) {
            c = captials[cInd];
            if (parseInt(c) <= budget) {
                if (captialProfitHashArr[c] === undefined) {
                    captialProfitHashArr[c] = Object.keys(captialProfitHash[c]);
                }

                profitsArr = captialProfitHashArr[c];
                highestProfitInCaptial = parseInt(profitsArr[profitsArr.length - 1]);

                if (highestProfitInCaptial > maxProfit) {
                    maxCaptial = c;
                    [maxCInd] = cInd;
                    maxProfit = highestProfitInCaptial;
                }
            } else break;
        }

        // If there are no usable profits found for the budget, we are done
        if (maxCaptial === undefined) break;

        budget += maxProfit;

        maxCaptialProfitHash = captialProfitHash[maxCaptial];
        profitsArr = captialProfitHashArr[maxCaptial];

        if (--maxCaptialProfitHash[maxProfit] === 0) {
            profitsArr.pop();

            if (profitsArr.length === 0) {
                delete captialProfitHash[maxCaptial];
                delete captialProfitHashArr[maxCaptial];
                delete captials[maxCInd];

                // If there are no more entries, break
                if (--cLen === 0) break;
            } else {
                delete maxCaptialProfitHash[maxProfit];
            }
        }
    }

    return budget;
};

findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]);