/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const trimmedString = s.trim()
  let symbol = null
  let number = ''
  if (trimmedString[0] === '+' || trimmedString[0] === '-') {
    symbol = trimmedString[0]
    for (let i = 1; i < trimmedString.length; i++) {
      if (trimmedString[i] !== ' ' && +trimmedString[i] >= 0 && +trimmedString[i] <= 9) {
        number = number + trimmedString[i]
      } else {
        break
      }
    }
  } else {
    for (let i = 0; i < trimmedString.length; i++) {
      if (trimmedString[0] === '+' && +trimmedString[i] >= 0 && +trimmedString[i] <= 9) {
        number = number + trimmedString[i]
      } else {
        break
      }
    }
  }
  if (number === '0') {
    return 0
  }
  if (symbol === '-') {
    const ans = Number(number)
    return ans > Math.pow(2, 31) ? ((-1) * Math.pow(2, 31)) : ((-1) * ans)
  } else {
    const ans = Number(number)
    return ans > (Math.pow(2, 31) - 1) ? (Math.pow(2, 31) - 1) : ans
  }
}

console.log(myAtoi('   +0 123'))
