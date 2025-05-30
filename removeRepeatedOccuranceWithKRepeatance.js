const removeDuplicates = (s, k) => {
  const charStack = []
  for (let i = 0; i < s.length; i++) {
    if (charStack.length > 0 && s[i] === charStack[charStack.length - 1].char) {
      if (charStack[charStack.length - 1].count === k - 1) {
        charStack.pop()
      } else {
        charStack[charStack.length - 1].count++
      }
    } else {
      charStack.push({ count: 1, char: s[i] })
    }
  }
  console.log(charStack)

  let resultString = ''
  for (let j = 0; j < charStack.length; j++) {
    resultString += charStack[j].char.repeat(charStack[j].count)
  }
  return resultString
}
console.log(removeDuplicates('aaabbbcccd', 3))
