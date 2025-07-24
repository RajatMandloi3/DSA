const checkPalindrome = (start, end, str, res) => {
  let s = start; let e = end
  while (s >= 0 && e <= str.length - 1) {
    if (str[s] === str[e]) {
      res.push(str.slice(s, e + 1))
    }
    s--
    e++
  }
  return true
}

const longestPalindrome = function (s) {
  let start = 0; const len = s.length
  const res = []
  while (start <= len - 1) {
    const isOddPalindrome = checkPalindrome(start, start, s, res)
    const isEvenPalindrome = checkPalindrome(start, start + 1, s, res)
    start++
  }
  const ans = res.map(el => ({ len: el.length, str: el })).sort((a, b) => b.len - a.len)

  return ans[0].str
}

console.log(longestPalindrome('aacabdkacaa'))
