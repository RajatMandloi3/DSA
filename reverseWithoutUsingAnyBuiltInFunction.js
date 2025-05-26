const reverseString = (str) => {
  let reversed = ''
  let i = 0

  // Find length without using .length
  while (str[i] !== undefined) {
    i++
  }

  // Now i is the length
  let j = i - 1

  // Build reversed string
  while (j >= 0) {
    reversed += str[j]
    j--
  }

  return reversed
}

console.log(reverseString('hello')) // "olleh"
