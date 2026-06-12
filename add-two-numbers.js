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
const returnVal = lNode => lNode?.val === undefined ? 0 : lNode.val;

const returnDigitAndCarry = (sum) => {
    let carryOver = Math.floor(sum / 10);
    let lnVal = carryOver === 0 ? sum : sum % 10;

    return { lnVal, carryOver }
}

var addTwoNumbers = function (l1, l2) {
    let ln = { next: null }, lnTraveller = ln;
    let carryOver = 0;

    do {
        const val = returnDigitAndCarry(returnVal(l1) + returnVal(l2) + carryOver)

        carryOver = val.carryOver;
        lnTraveller.next = { val: val.lnVal, next: null };

        lnTraveller = lnTraveller.next;

        l1 = l1.next;
        l2 = l2.next;
    } while (
        l1 !== null
        && l2 !== null
    );

    let lFinal = l1 !== null ? l1 : l2;

    while (lFinal !== null) {
        const val = returnDigitAndCarry(returnVal(lFinal) + carryOver);

        lnTraveller.next = { val: val.lnVal, next: null };
        carryOver = val.carryOver;

        lnTraveller = lnTraveller.next;
        lFinal = lFinal.next;
    }

    while (carryOver > 0) {
        lnTraveller.next = { val: carryOver % 10, next: null };

        carryOver = Math.floor(carryOver / 10);

        lnTraveller = lnTraveller.next
    }

    return ln.next;
};