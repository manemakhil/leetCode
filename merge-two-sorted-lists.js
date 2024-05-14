// Problem: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let mergedList = {}, mergedListHead = mergedList;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }

    if (list1 === null) {
        mergedList.next = list2;
    } else {
        mergedList.next = list1;
    }

    return mergedListHead.next;
};