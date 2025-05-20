// // Declare an array of size 100
// const a = new Array(100)
// console.log(a[99])
// a[101] = 147
// // console.log(a[101])
// console.log()

// =========================================================================================

// function countZerosAndOnesInArray (arr) {
//   const length = arr.length
//   let zeroCount = 0
//   for (let i = 0; i < length; i++) {
//     if (arr[i] === 0) {
//       zeroCount++
//     }
//   }
//   return { zeroCount, oneCount: (length - zeroCount) }
// }
// const result = countZerosAndOnesInArray([1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
// console.log('result: ', result)

// =========================================================================================

// function minimumNumberInArr (arr) {
//   const length = arr.length
//   let minNumber = Number.MAX_SAFE_INTEGER
//   for (let i = 0; i < length; i++) {
//     if (arr[i] < minNumber) {
//       minNumber = arr[i]
//     }
//   }
//   return minNumber
// }
// const result = minimumNumberInArr([12, 3, 14, 15, 6, 17, 13, 4, 12, 5, 21, 5, 15, 30, 21, 20, 51, 50, 21])
// console.log('result: ', result)

// =========================================================================================

// function reverseAnArray (arr) {
//   const length = arr.length
//   for (let left = 0, right = (length - 1); left < right; left++, right--) {
//     const temp = arr[right]
//     arr[right] = arr[left]
//     arr[left] = temp
//   }
//   return arr
// }
// const result = reverseAnArray([30, 21, 20, 10, 51, 50, 21])
// console.log('result: ', result)

// =========================================================================================

// function reverseAnArray (arr) {
//   const length = arr.length
//   for (let left = 0, right = (length - 1); left < right; left++, right--) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//   }
//   return arr
// }
// const result = reverseAnArray([30, 21, 20, 10, 51, 50, 21])
// console.log('result: ', result)

// =========================================================================================

// function swapUsingBitwise (a, b) {
//   a = a ^ b
//   b = a ^ b
//   a = a ^ b
//   return { a, b }
// }
// const result = swapUsingBitwise(10, 20)
// console.log('result: ', result)

// =========================================================================================

// example given arr=[10,20,30] we need to print (10,10)(10,20)(10,30)(20,10)(20,20)(20,30)(20,10)(30,20)(30,30)
// const calculatePairs = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       process.stdout.write(`(${arr[i]},${arr[j]})`)
//     }
//   }
// }
// calculatePairs([10, 20, 30])

// =========================================================================================

// example shift Elements by one position to right [1,2,3]=>[3,1,2]
// const shiftByOnePosition = (arr) => {
//   const temp = arr[arr.length - 1]
//   for (let i = (arr.length - 1); i > 0; i--) {
//     arr[i] = arr[i - 1]
//   }
//   arr[0] = temp
//   console.log(arr)
// }

// shiftByOnePosition([1, 2, 3, 5, 6])

// =========================================================================================

const shiftByNPosition = (arr, n) => {
  const temp = arr.slice(((arr.length) - n))
  for (let i = ((arr.length) - 1); i > (n - 1); i--) {
    arr[i] = arr[i - 2]
  }

  for (let j = 0; j < n; j++) {
    arr[j] = temp[j]
  }
  console.log(arr)
}

shiftByNPosition([1, 2, 3, 4, 5, 6, 7], 3)

// =========================================================================================

// const twoSumProblem = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if ((array[i] + array[j]) === target) {
//         return { i, j }
//       }
//     }
//   }
// }
// console.log(twoSumProblem([0, -1, 2, -3, 1], -2))

//= ========================================================================================
// const a = [[10, 20]]
// console.log(a)

// const a = new Array(10)
// console.log('a: ', a)

// const empty2DArray = new Array(3) // 3 rows
// for (let i = 0; i < 3; i++) {
//   empty2DArray[i] = new Array(4) // 4 columns
// }
// console.log(empty2DArray)

// const empty2DArray = new Array(3) // 3 rows
// empty2DArray[0] = new Array(4) // 4 columns
// empty2DArray[1] = new Array(3) // 4 columns
// empty2DArray[2] = new Array(5) // 4 columns

// console.log(empty2DArray)
