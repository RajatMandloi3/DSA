const str = 'My@name@is@rajat@mandloi'
// method 1
// console.log(str.split('@').join(' '))

// method 2
let i = 0
let newStr = ''
while (str[i] !== undefined) {
  if (str[i] === '@') {
    newStr += ' '
  } else {
    newStr += str[i]
  }
  i++
}
console.log(newStr)
