// const swap = (str, i, j) => {
//   if (i === j) return str

//   const arr = str.split('');
//   [arr[i], arr[j]] = [arr[j], arr[i]]
//   return arr.join('')
// }

// const allPermutations = (str, n, i) => {
//   if (i > n - 1) {
//     console.log(str)
//     return
//   }

//   for (let iterator = i; iterator < n; iterator++) {
//     const newStr = swap(str, i, iterator)
//     allPermutations(newStr, n, i + 1)
//   }
// }

// const s = 'abc'
// const i = 0
// allPermutations(s, s.length, i)

// using backtracking
const swap = (str, i, j) => {
  if (i === j) {
    return str
  }
  [str[i], str[j]] = [str[j], str[i]]
}

const allPermutations = (str, n, i) => {
  if (i > n - 1) {
    console.log(str.join(''))
    return
  }

  for (let iterator = i; iterator < n; iterator++) {
    swap(str, i, iterator)
    allPermutations(str, n, i + 1)

    // backtracking statement
    swap(str, iterator, i)
  }
}

const s = 'abc'
const charArr = s.split('')
const i = 0
allPermutations(charArr, charArr.length, i)
