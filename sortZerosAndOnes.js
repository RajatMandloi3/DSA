const arr = [0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0]
const size = arr.length - 1
let s = 0; let e = 1

while (s <= size && e <= size) {
  if (arr[s] === 0 && arr[e] === 0) {
    s++
    e++
    continue
  }

  if (arr[s] === 1 && arr[e] === 1) {
    e = e + 1
    continue
  }

  if (arr[s] < arr[e]) {
    s++
    e++
  } else {
    const temp = arr[s]
    arr[s] = arr[e]
    arr[e] = temp
    s++
    e++
  }
//   console.log(arr)
}
console.log(arr)
