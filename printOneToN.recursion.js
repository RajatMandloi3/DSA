const printOneToN = (n) => {
  if (n === 1) {
    process.stdout.write(String(n))
    return 1
  } else {
    process.stdout.write(String(n))
    return printOneToN(n - 1)
  }
}
printOneToN(10)
