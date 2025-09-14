import { LinkedList } from './singlyLinkedList.js'

const list = new LinkedList()
for (let i = 10; i < 100; i = i + 10) {
  list.insertAtTail(i)
}
const head = list.getHead()
const tail = list.getTail()
tail.next = head.next.next
// list.print()

const findLoop = (fast, slow) => {
  while (fast !== null) {
    fast = fast.next
    if (fast !== null) {
      fast = fast.next
      slow = slow.next
    }
    if (fast === slow) {
      return fast
    }
  }

  return false
}

const findStartingPointOfLoop = () => {
  let fast = head
  let slow = head
  fast = findLoop(fast, slow)
  if (!fast) {
    // since loop is not present hence there is no chance of starting point in the loop
    return false
  } else {
    slow = head
    while (slow !== fast) {
      fast = fast.next
      slow = slow.next
    }
    return slow // return slow or fast both will gave the same ans
  }
}

console.log(findStartingPointOfLoop(head).data)
