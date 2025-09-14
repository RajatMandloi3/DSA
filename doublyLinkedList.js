class Node {
  data
  prev
  next

  constructor (data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class DLL {
  #head
  #tail

  constructor () {
    this.#head = null
    this.#tail = null
  }

  len = () => {
    let temp = this.#head
    let length = 0
    while (temp != null) {
      length += 1
      temp = temp.next
    }
    console.log('length', length)
    return length
  }

  insertAtHead (data) {
    const newNode = new Node(data)
    if (this.#head === null) {
      this.#head = newNode
      this.#tail = newNode
    } else {
      this.#head.prev = newNode
      newNode.next = this.#head
      this.#head = newNode
    }
  }

  insertAtTail (data) {
    const newNode = new Node(data)
    if (this.#tail === null) {
      this.#head = newNode
      this.#tail = newNode
    } else {
      this.#tail.next = newNode
      newNode.prev = this.#tail
      this.#tail = newNode
    }
  }

  insertAtSpecificPos = (pos, data) => {
    const newNode = new Node(data)
    const len = this.len()
    if (this.#head === null) {
      this.#head = newNode
      this.#tail = newNode
    } else if (pos === 1) {
      this.insertAtHead(data)
    } else if (pos === len) {
      this.insertAtTail(data)
    } else {
      let curr = this.#head
      let prev = null
      while (pos !== 1) {
        pos--
        prev = curr
        curr = curr.next
      }
      prev.next = newNode
      newNode.prev = prev
      newNode.next = curr
      curr.prev = newNode
    }
  }

  print = () => {
    let temp = this.#head
    while (temp != null) {
    //   console.log(temp)
    //   console.dir(temp.data, { depth: 1 })
      process.stdout.write(`${String(temp.data)}->`)
      temp = temp.next
    }
    process.stdout.write('\n')
  }
}

const DL = new DLL()
DL.insertAtHead(30)
DL.insertAtHead(20)
DL.insertAtHead(10)
DL.insertAtTail(40)
DL.insertAtTail(50)
DL.insertAtTail(60)
DL.insertAtSpecificPos(1, 5)
DL.insertAtSpecificPos(7, 70)
DL.insertAtSpecificPos(5, 35)
DL.print()
