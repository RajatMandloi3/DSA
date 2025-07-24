const findSubsequence = (str, output, index, result) => {
  if (index >= str.length) {
    console.log(output)
    result.push(output)
    return
  }

  const ch = str[index]

  // exclude case
  findSubsequence(str, output, index + 1, result)

  // include case
  output = output + ch
  findSubsequence(str, output, index + 1, result)
}
const resultArray = []
findSubsequence('abc', '', 0, resultArray)
console.log(resultArray)
