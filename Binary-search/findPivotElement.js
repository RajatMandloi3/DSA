const findIndexOfPivotElement = (arr) => {
  let start = 0; let end = arr.length - 1; let mid = Math.floor((start + end) / 2)

  while (start <= end) {
    if (start === end) {
      return start
    }
    if ((mid + 1) < (arr.length) && arr[mid] > arr[mid + 1]) {
      return mid
    } else if ((mid - 1) > 0 && arr[mid] < arr[mid - 1]) {
      return mid - 1
    } else if (arr[start] > arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return -1
}
// console.log(findIndexOfPivotElement([5, 6, 7, 8, 0, 1, 2, 3, 4]))
const { binarySearch } = require('./binary-search')
const searchNumberIndexInRotatedSortedArray = (arr, target) => {
  const pivotIndex = findIndexOfPivotElement(arr)
  if (target > arr[pivotIndex]) {
    binarySearch()
  }
}

searchNumberIndexInRotatedSortedArray([1, 2, 3, 4, 5, 6, 7], 4)
