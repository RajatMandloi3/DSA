const drawSquareStarPattern = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      process.stdout.write('*')
    }
    process.stdout.write('\n')
  }
}
// drawSquareStarPattern()

const drawSquareRectPattern = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
      process.stdout.write('*')
    }
    process.stdout.write('\n')
  }
}
// drawSquareRectPattern()

const drawHollowRectPattern = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 10; j++) {
      if (i === 0 || i === 3) {
        process.stdout.write('*')
      } else if (j === 0 || j === 9) {
        process.stdout.write('*')
      } else {
        process.stdout.write(' ')
      }
    }
    process.stdout.write('\n')
  }
}
// drawHollowRectPattern()

const drawHalfPyramidPattern = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write('*')
    }
    process.stdout.write('\n')
  }
}
// drawHalfPyramidPattern()

// const drawHalfInvertedPyramidPattern=()=>{
//     for (let i=0; i<=10; i++){
//         for (let j=0; j<=(10-i); j++){
//             process.stdout.write('*')
//         }
//         process.stdout.write("\n")
//     }
// }
// drawHalfInvertedPyramidPattern()

const drawHalfInvertedPyramidPattern = () => {
  for (let i = 10; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write('*')
    }
    process.stdout.write('\n')
  }
}
// drawHalfInvertedPyramidPattern()

const drawNumbersHalfPyramidPattern = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String(j + 1))
    }
    process.stdout.write('\n')
  }
}
// drawNumbersHalfPyramidPattern()

const drawFullPyramidPattern = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < (5 - i - 1); j++) {
      process.stdout.write(' ')
    }
    for (let j = 0; j < (i + 1); j++) {
      process.stdout.write('* ')
    }
    process.stdout.write('\n')
  }
}
// drawFullPyramidPattern()

const drawFullInvertedPyramidPattern = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(' ')
    }
    for (let j = 0; j < 5 - i; j++) {
      process.stdout.write('* ')
    }
    process.stdout.write('\n')
  }
}
// drawFullInvertedPyramidPattern()

const drawHollowPyramidPattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows - i - 1; j++) {
      process.stdout.write(' ')
    }
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        process.stdout.write('* ')
      } else {
        process.stdout.write('  ')
      }
    }
    process.stdout.write('\n')
  }
}
// drawHollowPyramidPattern(5)

const drawHollowInvertedPyramidPattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(' ')
    }
    for (let k = 0; k < (2 * rows - 2 * i - 1); k++) {
      if (k === 0 || k === (2 * rows - 2 * i - 2)) {
        process.stdout.write('*')
      } else {
        process.stdout.write(' ')
      }
    }
    process.stdout.write('\n')
  }
}
// drawHollowInvertedPyramidPattern(5)

const drawHollowDiamondPattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows - i - 1; j++) {
      process.stdout.write(' ')
    }
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        process.stdout.write('* ')
      } else {
        process.stdout.write('  ')
      }
    }
    process.stdout.write('\n')
  }
  for (let i = 0; i < rows; i++) {
    // for(let j=0;j<i;j++){
    //     process.stdout.write(" ")
    // }
    process.stdout.write(' '.repeat(i))
    for (let k = 0; k < (2 * rows - 2 * i - 1); k++) {
      if (k === 0 || k === (2 * rows - 2 * i - 2)) {
        process.stdout.write('*')
      } else {
        process.stdout.write(' ')
      }
    }
    process.stdout.write('\n')
  }
}
// drawHollowDiamondPattern(8)

const flippedSolidDiamond = (rows) => {
  const halfPatternRows = rows / 2
  for (let i = 0; i < halfPatternRows; i++) {
    for (let j = 0; j < halfPatternRows - i; j++) {
      process.stdout.write('*')
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write(' ')
    }
    for (let j = 0; j < halfPatternRows - i; j++) {
      process.stdout.write('*')
    }
    process.stdout.write('\n')
  }
  for (let i = 0; i < halfPatternRows; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write('*')
    }

    for (let j = 0; j < (2 * halfPatternRows - 2 * i - 1); j++) {
      process.stdout.write(' ')
    }

    for (let j = 0; j < i + 1; j++) {
      process.stdout.write('*')
    }
    process.stdout.write('\n')
  }
}
// flippedSolidDiamond(8)

const numberStarPattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    for (j = 0; j < 2 * i + 1; j++) {
      if ((j + 1) % 2 === 0) {
        process.stdout.write('*')
      } else {
        process.stdout.write(`${i + 1}`)
      }
    }>
    process.stdout.write('\n')
  }
}
// numberStarPattern(5)

const hollowInvertedTrianglePattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    for (j = 0; j < rows - i; j++) {
      if (i === 0 || i === rows - 1) {
        process.stdout.write('*')
      } else {
        if (j === 0 || j === rows - i - 1) {
          process.stdout.write('*')
        } else {
          process.stdout.write(' ')
        }
      }
    }
    process.stdout.write('\n')
  }
}
// hollowInvertedTrianglePattern(6)

const alphabetPattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    let ch
    for (j = 0; j < i + 1; j++) {
      ch = 'A'.charCodeAt(0) + j
      process.stdout.write(String.fromCharCode(ch))
    }
    // console.log(ch)
    for (let char = ch - 1; char >= ('A').charCodeAt(0); char--) {
      process.stdout.write(String.fromCharCode(char))
    }
    process.stdout.write('\n')
  }
}

alphabetPattern(5)

// console.log('(A)charCodeAt(0): ', ('A').charCodeAt(0));
