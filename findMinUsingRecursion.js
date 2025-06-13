const findMin = (arr, length, index, min) => {
  if (index >= length) {
    return min
  }
  if (min > arr[index]) {
    return findMin(arr, length, index + 1, arr[index])
  } else {
    return findMin(arr, length, index + 1, min)
  }
}
console.log(findMin([5, 10, 20, 30, 4, 50], 6, 0, Number.MAX_VALUE))
