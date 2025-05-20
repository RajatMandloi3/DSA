//  * * * *
//  * * * *
//  * * * *
//  * * * *
// const square = (rows) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < rows; j++) {
//       process.stdout.write('* ')
//     }
//     process.stdout.write('\n')
//   }
// }
// square(5)

//  * * * *
//  *     *
//  *     *
//  * * * *
// const hollowRectangle = (rows, cols) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (i === 0 || i === rows - 1) {
//         process.stdout.write('* ')
//       } else {
//         if ((j === 0 || j === cols - 1)) {
//           process.stdout.write('* ')
//         } else {
//           process.stdout.write('  ')
//         }
//       }
//     }
//     process.stdout.write('\n')
//   }
// }
// hollowRectangle(5, 10)

// const halfPyramid = (rows) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       process.stdout.write('* ')
//     }
//     process.stdout.write('\n')
//   }
// }
// halfPyramid(5)

// const halfPyramid = (rows) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = rows - i; j > 0; j--) {
//       process.stdout.write('* ')
//     }
//     process.stdout.write('\n')
//   }
// }
// halfPyramid(5)

// const halfPyramid = (rows) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < rows - i; j++) {
//       process.stdout.write(' ')
//     }
//     for (let k = 0; k < i + 1; k++) {
//       process.stdout.write('* ')
//     }
//     process.stdout.write('\n')
//   }
// }
// halfPyramid(5)

// const drawHollowInvertedPyramidPattern = (rows) => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < i; j++) {
//       process.stdout.write(' ')
//     }
//     for (let k = 0; k < (2 * rows - 2 * i - 1); k++) {
//       if (k === 0 || k === (2 * rows - 2 * i - 2)) {
//         process.stdout.write('*')
//       } else {
//         process.stdout.write(' ')
//       }
//     }
//     process.stdout.write('\n')
//   }
// }

// drawHollowInvertedPyramidPattern(5)

// const draw = () => {
//   const n = 8
//   const rows = n / 2
//   for (let i = 0; i < rows; i++) {
//     // inverted pyramid 1
//     for (let stars = 0; stars < rows - i; stars++) {
//       process.stdout.write('*')
//     }

//     // full pyramid 2
//     for (let spaces = 0; spaces < ((2 * i) + 1); spaces++) {
//       process.stdout.write('-')
//     }

//     // inverted pyramid 3
//     for (let stars = 0; stars < rows - i; stars++) {
//       process.stdout.write('*')
//     }
//     process.stdout.write('\n')
//   }
//   /// /////////////////////
//   for (let i = 0; i < rows; i++) {
//     // inverted pyramid 1
//     for (let stars = 0; stars < i + 1; stars++) {
//       process.stdout.write('*')
//     }

//     // full pyramid 2
//     for (let spaces = 0; spaces < ((((2 * rows) - (2 * i)) - 1)); spaces++) {
//       process.stdout.write('-')
//     }

//     // inverted pyramid 3
//     for (let stars = 0; stars < i + 1; stars++) {
//       process.stdout.write('*')
//     }
//     process.stdout.write('\n')
//   }
// }
// draw()

// const draw = () => {
//   const rows = 4
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < ((2 * i) + 1); j++) {
//       if (j % 2 === 0) {
//         process.stdout.write(`${i + 1}`)
//       } else {
//         process.stdout.write('*')
//       }
//     }
//     process.stdout.write('\n')
//   }
// }

// draw()
const a = [[0, 1], [1, 0]]
console.log('a.length(): ', a.length)
console.log('length(): ', a[0].length)
const b = [1, 2, 3]
console.log(b.length)
