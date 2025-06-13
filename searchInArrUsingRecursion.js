const findElement = (arr, length, index, target) => {
  if (index >= length) {
    return false
  }
  if (arr[index] === target) {
    return true
  } else {
    return findElement(arr, length, index + 1, target)
  }
}
console.log(findElement([10, 20, 30, 40], 4, 0, 80))
