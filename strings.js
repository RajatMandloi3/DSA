const str = 'abcdefgh/0'
// console.log(str.length)

// length of string without using built in function in js
let length = 0
while (str[length] !== undefined) {
  length++
}
console.log(length)
