const searchInNearlySortedArray = (arr, target) => {
  let s = 0; let e = arr.length; let mid = Math.floor((s + e) / 2)
  while (s <= e) {
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid - 1] === target) {
      return mid - 1
    } else if (arr[mid + 1] === target) {
      return mid + 1
    } else if (arr[mid] < target) {
      s = mid + 2
    } else {
      e = mid - 2
    }
    mid = Math.floor((s + e) / 2)
  }
  return -1
}
console.log('searchInNearlySortedArray ', searchInNearlySortedArray([20, 10, 30, 50, 40, 60, 70], 10))
