const decodeMessage = function (key, message) {
  const mapping = []
  let start = 'a'.charCodeAt(0)
  for (const char of key) {
    if (mapping[char] === undefined && char !== ' ') {
      mapping[char] = String.fromCharCode(start)
      // console.log(mapping[char])

      start++
    }
  }

  let result = ''
  for (let j = 0; j < message.length; j++) {
    if (message[j] === ' ') {
      result += ' '
    } else {
      result += mapping[message[j]]
    }
  }
  return result
}
decodeMessage()
