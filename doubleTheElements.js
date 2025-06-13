const doubleElements = (arr, length, index, xMultiply, result) => {
  if (index >= length) {
    return result
  }
  const doubleElement = arr[index] * xMultiply
  result.push(doubleElement)
  return doubleElements(arr, length, index + 1, xMultiply, result)
}
console.log(doubleElements([10, 20, 30, 40, 50], 5, 0, 2, []))
