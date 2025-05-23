const selectionSort = (arr) => {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i; j < n - 1; j++) {
      if (arr[minIndex] > arr[j + 1]) {
        minIndex = j + 1
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
console.log(selectionSort([599, 80, 3, 90, 1, 875, 6]))
