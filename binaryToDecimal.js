const binaryToDecimal = (binaryNumber) => {
  let decimalNumber = 0
  let iterator = 0
  while (binaryNumber > 0) {
    const singleBit = binaryNumber % 10
    decimalNumber = decimalNumber + singleBit * Math.pow(2, iterator)
    binaryNumber = Math.floor(binaryNumber / 10)
    iterator++
  }
  return decimalNumber
}

// console.log(binaryToDecimal(10111))

const binaryToDecimalUsingBitwise = (binaryNumber) => {
  let decimalNumber = 0
  let iterator = 0
  binaryNumber = parseInt(binaryNumber, 2)

  while (binaryNumber > 0) {
    const singleBit = binaryNumber & 1
    decimalNumber = decimalNumber + singleBit * Math.pow(2, iterator)
    binaryNumber = binaryNumber >> 1
    iterator++
  }
  return decimalNumber
}
console.log(binaryToDecimalUsingBitwise(10111))
