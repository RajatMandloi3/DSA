const decimalToBinary = (num) => {
  let binaryNumber = ''
  if (num === 0) {
    console.log(0)
    return
  }
  while (num > 0) {
    binaryNumber = num % 2 + binaryNumber
    num = Math.floor(num / 2)
  }
  console.log(binaryNumber)
}

const decimalToBinaryUsingBitwise = (num) => {
  let binaryNumber = 0
  if (num === 0) {
    console.log(0)
    return
  }
  let iterator = 0
  while (num > 0) {
    bit = num & 1
    binaryNumber = (bit * Math.pow(10, iterator)) + binaryNumber
    num = num >> 1
    iterator++
  }
  console.log(binaryNumber)
}
// decimalToBinaryUsingBitwise(0)
