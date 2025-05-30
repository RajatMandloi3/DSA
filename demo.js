const removeOccurrences = function (s, part) {
  let result = s
  while (result.includes(part)) {
    result = result.replace(part, '')
  }
  return result
}
console.log(removeOccurrences('daabcbaabcbc', 'abc'))
