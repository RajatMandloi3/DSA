const createMap = (str) => {
  const map = new Map()
  let start = 'a'.charCodeAt(0)
  for (const ch of str) {
    if (map.get(ch) === undefined) {
      map.set(ch, String.fromCharCode(start))
      start++
    }
  }

  let mappedStr = ''
  for (const ch of str) {
    mappedStr += map.get(ch)
  }

  return mappedStr
}

const findAndReplacePattern = function (words, pattern) {
  const mappedPatter = createMap(pattern)
  const result = []
  words.forEach(word => {
    const mappedWord = createMap(word)
    if (mappedWord === mappedPatter) {
      result.push(word)
    }
  })
  return result
}
findAndReplacePattern(['jqq', 'cdd'], 'pqq')
