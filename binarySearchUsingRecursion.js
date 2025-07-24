const binarySearch = (arr, start, end, target) => {
  const s = start; const e = end; const mid = Math.floor((s + e) / 2)
  if (s > e) {
    return -1
  }
  if (arr[mid] === target) {
    return mid
  }
  if (arr[mid] > target) {
    return binarySearch(arr, start, mid - 1, target)
  } else {
    return binarySearch(arr, mid + 1, end, target)
  }
}
const arr = [10, 20, 30, 40, 50, 60]
console.log(binarySearch(arr, 0, arr.length, 10))
