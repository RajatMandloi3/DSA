// Node class
class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

// Singly Linked List class
class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  // Insert at tail
  insertAtTail (data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
    } else {
      let temp = this.head
      while (temp.next !== null) {
        temp = temp.next
      }
      temp.next = newNode
    }

    this.length++
  }

  // Print the linked list
  print () {
    let temp = this.head
    let output = ''
    while (temp !== null) {
      output += temp.data + ' -> '
      temp = temp.next
    }
    output += 'null'
    console.log(output)
  }

  getHead () {
    return this.head
  }

  getTail () {
    if (!this.head) return null // empty list
    let temp = this.head
    while (temp.next !== null) {
      temp = temp.next
    }
    return temp
  }
}

export { LinkedList }
// list.insertAtTail(30);
// list.print();  // 10 -> 20 -> 30 -> null
// console.log("Length:", list.length); // 3
