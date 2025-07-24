const divide = (dividend, divisor) => {
  const divi = Math.abs(dividend)
  const dsr = Math.abs(divisor)
  if (divi === 0) {
    return 0
  }
  let s = 1; let e = dsr
  let mid = Math.floor((s + e) / 2)
  let result
  while (s <= e) {
    const ans = dsr * mid
    if (ans === divi) {
      if (dividend < 0 && divisor < 0) {
        return mid
      } else if (dividend < 0 || divisor < 0) {
        return mid * (-1)
      }
    } else if (ans > divi) {
      e = mid - 1
    } else {
      s = mid + 1
      result = mid
    }
    mid = Math.floor((s + e) / 2)
  }

  if (dividend < 0 && divisor < 0) {
    return result
  } else if (dividend < 0 || divisor < 0) {
    return result * (-1)
  }
  return result
}
console.log(divide(-1, 1))
