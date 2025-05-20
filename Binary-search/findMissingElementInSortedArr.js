const findMissingElementInSortedArr = (arr, n) => {
  let start = 0
  let end = n - 1
  let mid = Math.floor((start + end) / 2)
  let answerIndex = -1
  while (start <= end) {
    if ((arr[mid] - mid) === 1) {
      start = mid + 1
      if (start === n) { return start + 1 }
    } else {
      answerIndex = mid
      end = mid - 1
    }
    mid = Math.floor((start + end) / 2)
  }
  return answerIndex + 1 //  === 0 ? n + 1 : (answerIndex + 1) // the missing number
}

console.log(findMissingElementInSortedArr([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11))
