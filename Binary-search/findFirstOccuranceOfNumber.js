const findFirstOccuranceOfNumber = (arr, target) => {
  let end = arr.length - 1
  let start = 0
  let mid = Math.floor((start + end) / 2)
  let answerIndex = -1
  while (start <= end) {
    if (arr[mid] === target) {
      answerIndex = mid
      end = mid - 1
      mid = Math.floor((start + end) / 2)
    } else if (arr[mid] > target) {
      end = mid - 1
      mid = Math.floor((start + end) / 2)
    } else {
      start = mid + 1
      mid = Math.floor((start + end) / 2)
    }
  }
  return answerIndex
}

console.log(findFirstOccuranceOfNumber([0, 1, 1, 5, 5, 5], 5))
module.exports = { findFirstOccuranceOfNumber }
