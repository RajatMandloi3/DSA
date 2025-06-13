const allDigitsOfANumber = (n, arr) => {
  if (n === 0) {
    return arr
  }
  const num = allDigitsOfANumber(Math.floor(n / 10), arr)
  const lastDigit = n % 10
  arr.push(lastDigit)
  return num
}
console.log(allDigitsOfANumber(4215, []))
// Head recursion
