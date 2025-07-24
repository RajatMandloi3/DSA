// /* eslint-disable no-extend-native */
// Array.prototype.myMap = function (callbackFunction) {
//   const result = []
//   for (let index = 0; index < this.length; index++) {
//     const res = callbackFunction(this[index], index, this)
//     result.push({ res })
//   }
//   return result
// }

// // Then use it
// const ans = [1, 2, 3].myMap((el) => el * 2)
// console.log(ans)

const isValidWithBrackets = (str) => {
  const stack = []
  for (const char of str) {
    if ((char === '{' && (stack[stack.length - 1] === '}')) || (char === '}' && (stack[stack.length - 1] === '{'))) {
      stack.pop()
      continue
    }
    if ((char === '[' && (stack[stack.length - 1] === ']')) || (char === ']' && (stack[stack.length - 1] === '['))) {
      stack.pop()
      continue
    }
    if ((char === '(' && (stack[stack.length - 1] === ')')) || (char === ')' && (stack[stack.length - 1] === '('))) {
      stack.pop()
      continue
    }
    stack.push(char)
  }
  console.log(!(stack.length > 0))
}
isValidWithBrackets('({}[]({}))')
