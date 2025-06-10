// const printFibbonacci = (n) => {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   return printFibbonacci(n - 1) + printFibbonacci(n - 2)
// }
// console.log(printFibbonacci(7))

const fib = (n) => { // printing
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

const printFibonacci = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(fib(i))
  }
}

printFibonacci(7)
