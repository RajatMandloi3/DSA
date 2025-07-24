// let name = 'rjtm'

// function pr (params) {
//   name = 'jai ho'
//   console.log(name)
// }
// console.log(name)
// pr()
// function greet (name) {
//   return `Hello, ${name}`
// }

// function higherOrder (fn) {
//   return function (name) {
//     return fn(name).toUpperCase()
//   }
// }

// const shoutGreet = higherOrder(greet)
// console.log(shoutGreet('Rajat')) // "HELLO, RAJAT"

// const str = 'abc'
// const grade = 'C'
// var result ;
// switch (grade) {
//   case 'C':
//     result+=8
//     break;

//   default:
//     break;
// }
// console.log(result)
const original = 'abc'
let result = 0
for (let i = 0; i < original.length; i++) {
  result = result ^ original[i].charCodeAt(0)
}
console.log(result)

const xorChar = String.fromCharCode(result)
console.log('xorChar: ', xorChar)
