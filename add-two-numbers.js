// Problem: https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ln = { next: null }, lnTraveller = ln;
    let l1traveller = l1, l2traveller = l2, carryOver = 0;

    while (
        l1traveller?.next !== undefined
        || l2traveller?.next !== undefined
    ) {
        let thisDigitSum = (l1traveller?.val === undefined ? 0 : l1traveller?.val)
            + (l2traveller?.val === undefined ? 0 : l2traveller?.val)
            + carryOver;

        carryOver = Math.floor(thisDigitSum / 10);
        lnVal = carryOver === 0 ? thisDigitSum : thisDigitSum % 10;

        lnTraveller.next = { val: lnVal, next: null };

        lnTraveller = lnTraveller.next;

        l1traveller = l1traveller?.next;
        l2traveller = l2traveller?.next;
    }

    while (carryOver > 0) {
        lnTraveller.next = { val: carryOver % 10, next: null };

        carryOver = Math.floor(carryOver / 10);
    }

    return ln.next;
};