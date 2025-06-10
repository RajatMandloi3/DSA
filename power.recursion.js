const calculatePowOfTwo = (n) => {
  if (n === 1) {
    return 2
  } else {
    return 2 * calculatePowOfTwo(n - 1)
  }
}
console.log(calculatePowOfTwo(10))
