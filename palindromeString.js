const checkPalindrome = (str = 'NAMAND') => {
  const strArr = str.split('')
  const n = strArr.length - 1
  let i = 0; let j = n
  while (i <= j) {
    if (strArr[i] !== strArr[j]) {
      console.log(false)
      return
    }
    i++
    j--
  }
  console.log(true)
}
checkPalindrome()
