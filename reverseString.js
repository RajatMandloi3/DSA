const reverseString = (string) => {
  const str = string.split('')
  const length = str.length
  let s = 0; let e = length - 1
  while (s <= e) {
    const temp = str[e]
    str[e] = str[s]
    str[s] = temp
    s++
    e--
  }
  return str.join('')
}

console.log('reverseString(): ', reverseString('abgc'))
