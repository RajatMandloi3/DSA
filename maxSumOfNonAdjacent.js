const arr = [1, 2, 3, 4, 5, 6]

const maxSumOfNonAdjacent = (i, len, arr) => {
  if (i >= len) {
    return 0
  }

  const oddSum = arr[i] + maxSumOfNonAdjacent(i + 2, len, arr)
  const evenSum = maxSumOfNonAdjacent(i + 1, len, arr)
  return Math.min(oddSum, evenSum)
}

console.log(maxSumOfNonAdjacent(0, arr.length, arr))
