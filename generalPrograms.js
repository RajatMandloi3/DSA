// const factorial = (num, ans) => {
//   if (num === 1 || num === 0) {
//     return 1
//   }
//   return num * factorial(num - 1)
// }
// console.log(factorial(5))

// const fibbo = (num) => {
//   if (num === 0) {
//     console.log('0')
//     return 0
//   }
//   if (num === 1) {
//     console.log('1')
//     return 1
//   }
//   const op1 = fibbo(num - 2)
//   console.log(num - 1)
//   const op2 = fibbo(num - 2)
//   console.log((num - 1))
//   return op2 + op1
// }
// console.log(fibbo(6))

const fibSeries = (n, a = 0, b = 1) => {
  if (n === 0) return
  console.log(a)
  fibSeries(n - 1, b, a + b)
}

fibSeries(7) // 0 1 1 2 3 5 8
