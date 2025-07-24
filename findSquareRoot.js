const n = 10

const findSqrtUsingBinarySearch = (num, precision = 0.001) => {
  let s = 1; let e = num; let mid = ((s + e) / 2)
  while ((e - s) > precision) {
    const m = mid * mid
    if (Math.abs(m - n) <= precision) {
      return mid
    } else if (m > num) {
      e = mid
    } else {
      s = mid
    }
    mid = ((s + e) / 2)
  }

  return ((s + e) / 2)
}

console.log(findSqrtUsingBinarySearch(n))
