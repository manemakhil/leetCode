// Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /* We need two list pointers: One progressing normally (traveller)
    and the other just before the node to be deleted (nBeforePointer) */
    let traveller = head, 
    nBeforePointer = head,
    nodeIndex = 1,
    gapForTravellerBeforePointer = n + 1;

    while(traveller.next !== null) {
        nodeIndex++;
        traveller = traveller.next;

        if(nodeIndex > gapForTravellerBeforePointer) {
            nBeforePointer = nBeforePointer.next;
        }
    }
    
    /* Scenarios:
    1. If length of LL and n is same, it means we need to remove the first node
    2. If length of LL is greater than n, we can use nBeforePointer to do operations
    */
    if(nodeIndex === n) {
        head = head.next;
    } else {
        nBeforePointer.next = nBeforePointer.next.next;
    }

    return head;
};