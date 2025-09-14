import { LinkedList } from './singlyLinkedList.js'

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
  const list = new LinkedList()
  for (let i = 10; i < 100; i = i + 10) {
    list.insertAtTail(i)
  }
  const head = list.getHead()
  const tail = list.getTail()
  tail.next = head.next.next

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
    const startingPint = slow // slow or fast both will gave the same ans
    let temp = startingPint
    while (temp.next !== startingPint) {
      temp = temp.next
    }
    temp.next = null
  }
  list.print()
}

findStartingPointOfLoop()
