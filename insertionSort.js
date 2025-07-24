const arr = [3, 4, 3, 4, 1, 0, -2, -2, 6, -3]
const len = arr.length

for (let i = 1; i < len; i++) {
  const key = arr[i]
  let j = i - 1
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = key
}

console.log(arr)
