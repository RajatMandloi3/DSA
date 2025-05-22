const searchOddOne = (arr) => {
  let s = 0; let e = arr.length - 1; let mid = Math.floor((s + e) / 2)

  while (s <= e) {
    if (s === e) {
      return s
    }
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        s = mid + 2
      } else {
        e = mid
      }
    } else {
      if (arr[mid] === arr[mid - 1]) {
        s = mid + 1
      } else {
        e = mid - 1
      }
    }
    mid = Math.floor((s + e) / 2)
  }
  return -1
}
console.log(searchOddOne([1, 1, 2, 2]))
