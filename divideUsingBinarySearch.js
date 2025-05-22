const divideUsingBinarySearch = (divisor, dividend) => {
  // the search space will be from o to dividor
  let s = 0; let e = dividend
  let mid = Math.floor((s + e) / 2)
  let ans = -1
  while (s <= e) {
    if (mid * divisor === dividend) {
      return mid
    } else if (mid * divisor > dividend) {
      e = mid - 1
    } else {
      ans = mid
      s = mid + 1
    }
    mid = Math.floor((s + e) / 2)
  }
  return ans
}
console.log('divideUsingBinarySearch(29, 7): ', divideUsingBinarySearch(1, 35))
