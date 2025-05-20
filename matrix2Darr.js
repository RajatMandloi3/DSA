// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// const transposeOfSquareMatrix = (arr, rows, cols) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = i; j < cols; j++) {
//       const temp = arr[i][j]
//       arr[i][j] = arr[j][i]
//       arr[j][i] = temp
//     }
//   }
//   console.log(arr)
// }

// transposeOfSquareMatrix(arr, 3, 3)

/// ///////////////////////////////////////////////////////////////////////////

// const separateNegAndPositiveNumbers = (arr) => {
//   let rightPointer = 1
//   let leftPointer = 0
//   while (rightPointer < arr.length) {
//     if (arr[rightPointer] < 0) {
//       const temp = arr[leftPointer]
//       arr[leftPointer] = arr[rightPointer]
//       arr[rightPointer] = temp
//       leftPointer++
//     }
//     rightPointer++
//   }
//   return arr
// }

// console.log(separateNegAndPositiveNumbers([23, -7, 12, -10, -11, 40, 60]))
