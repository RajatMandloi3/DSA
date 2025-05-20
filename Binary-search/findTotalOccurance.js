const { findFirstOccuranceOfNumber } = require('./findFirstOccuranceOfNumber')
const { findLastOccuranceOfNumber } = require('./findLastOccurance')

const findTotalOccu = (arr, target) => {
  const firstOccurance = findFirstOccuranceOfNumber(arr, target)
  const lastOccurance = findLastOccuranceOfNumber(arr, target)
  return lastOccurance - firstOccurance + 1
}
console.log('total', findTotalOccu([1, 2, 3, 4, 6, 6, 6, 6, 6, 7], 6))
