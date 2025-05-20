const binarySearch = (arr, target) => {
  let end = arr.length - 1
  let start = 0
  let mid = Math.floor((start + end) / 2)
  while (start <= end) {
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      end = mid - 1
      mid = Math.floor((start + end) / 2)
    } else {
      start = mid + 1
      mid = Math.floor((start + end) / 2)
    }
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
module.exports = { binarySearch }
