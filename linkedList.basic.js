class Node {
  data
  next
  constructor (data) {
    // console.log('inside constructor')
    this.data = data
    this.next = null
  }
}

const f = new Node(10)
const s = new Node(20)
const t = new Node(30)
const fr = new Node(40)

f.next = s
s.next = t
t.next = fr

let head = f
// console.log(f)
// console.log(s)
// console.log(t)
// console.log(fr)
const printLL = (head) => {
  let temp = head
  while (temp !== null) {
    console.dir(temp.data, { depth: 1 })
    // console.dir(temp.next, { depth: 1 })

    temp = temp.next
  }
}
// printLL(head)

const getLength = (head) => {
  let temp = head
  let length = 0
  while (temp !== null) {
    length++
    temp = temp.next
  }
  console.log('length', length)
}

const insertAtBegin = (data) => {
  const newNode = new Node()
  if (head === null) {
    newNode.data = data
    newNode.next = null
    head = newNode
  } else {
    newNode.data = data
    newNode.next = head
    head = newNode
  }
}

getLength(head)
insertAtBegin(1)
printLL(head)
getLength(head)
