var findMaximizedCapital = function (k, w, profits, capital) {
    /* Create a hash of captial: [profits],
    implying for each captial, the profits in descinding order */
    let capitalProfitHash = {}, thisCaptialProfitHash, append;

    for (
        let ind = 0, c = capital[ind], p = profits[ind];
        ind < capital.length;
        c = capital[++ind], p = profits[ind]
    ) {
        // If profit is 0, we do not need it
        if (p === 0) continue;

        // For all captial <= w, we can have the same has reference (w)
        if (c <= w) c = w;

        thisCaptialProfitHash = capitalProfitHash[c];

        if (thisCaptialProfitHash === undefined) {
            capitalProfitHash[c] = [p];
        } else {
            append = true;
            for (let pInd in thisCaptialProfitHash) {
                if (p > thisCaptialProfitHash[pInd]) {
                    thisCaptialProfitHash.splice(pInd, 0, p);
                    append = false;
                    break;
                }
            };
            append && thisCaptialProfitHash.push(p);
        }
    }

    // If there are no items within budget w, we are done
    if (capitalProfitHash[w] === undefined) return w;

    while (k--) {
        // Find captial with max profit
        let maxCKey, maxProfit = 0, done = true;
        for (let cKey in capitalProfitHash) {
            if (parseInt(cKey) > w) continue;

            done = false;
            let thisProfit = capitalProfitHash[cKey][0];

            if (thisProfit > maxProfit) {
                maxProfit = thisProfit;
                maxCKey = cKey;
            }
        }

        // If none are within budget, we are done
        if (done) return w;

        // Remove the max profit (always first array element) from captialProfitHash reference and add it to w
        w += capitalProfitHash[maxCKey].splice(0, 1)[0];
        // Delete the used hash in-case there are no more profits
        if (capitalProfitHash[maxCKey].length === 0) delete capitalProfitHash[maxCKey];
    }

    return w;
};