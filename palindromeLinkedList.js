/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const mid = (head) => {
  // finding mid using slow fast method
  let slow = head
  let fast = head
  while (fast.next !== null) {
    fast = fast.next
    if (fast.next !== null) {
      fast = fast.next
      slow = slow.next
    }
  }
  return slow
}

const reverse = (head) => {
  let prev = null
  let curr = head
  while (curr !== null) {
    const temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  head = prev
  return head
}

const compare = (head, head2) => {
  while (head !== null && head2 !== null) {
    if (head.val !== head2.val) {
      return false
    } else {
      head = head.next
      head2 = head2.next
    }
  }
  return true
}

const isPalindrome = function (head) {
  // break into two halves
  const midNode = mid(head)
  console.log(midNode)

  let head2 = midNode.next
  midNode.next = null

  // reverse the second half
  const reversedList = reverse(head2)
  head2 = reversedList
  console.log(reversedList)

  // compare lists
  const ans = compare(head, head2)

  return ans
}
isPalindrome('Linked list') // provide linked list in parameter
