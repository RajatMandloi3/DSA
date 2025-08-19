const maze = [[1, 0, 0, 0], [1, 1, 0, 0], [1, 1, 1, 0], [1, 1, 1, 1]]
const rows = 4
const cols = 4
const output = []
const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
// console.log(visited)
const isSafe = (maze, rows, cols, srcx, srcy, visited) => {
  if (
    srcx >= 0 && srcx < rows &&
    srcy >= 0 && srcy < cols &&
    maze?.[srcx]?.[srcy] === 1 &&
    visited[srcx][srcy] === false
  ) {
    return true
  }

  return false
}

const findAllPossibleWays = (maze, rows, cols, srcx, srcy, visited, output) => {
  // base case
  if (srcx === rows - 1 && srcy === cols - 1) {
    console.log(output.join(''))
    return
  }

  // up
  let newx = srcx - 1
  let newy = srcy
  if (isSafe(maze, rows, cols, newx, newy, visited)) {
    visited[newx][newy] = true
    output.push('U')
    findAllPossibleWays(maze, rows, cols, newx, newy, visited, output)
    visited[newx][newy] = false
    output.pop()
  }

  // down
  newx = srcx + 1
  newy = srcy

  if (isSafe(maze, rows, cols, newx, newy, visited)) {
    visited[newx][newy] = true
    output.push('D')
    findAllPossibleWays(maze, rows, cols, newx, newy, visited, output)
    visited[newx][newy] = false
    output.pop()
  }

  // left
  newx = srcx
  newy = srcy - 1

  if (isSafe(maze, rows, cols, newx, newy, visited)) {
    visited[newx][newy] = true
    output.push('L')
    findAllPossibleWays(maze, rows, cols, newx, newy, visited, output)
    visited[newx][newy] = false
    output.pop()
  }

  // Right
  newx = srcx
  newy = srcy + 1
  if (isSafe(maze, rows, cols, newx, newy, visited)) {
    visited[newx][newy] = true
    output.push('R')
    findAllPossibleWays(maze, rows, cols, newx, newy, visited, output)
    visited[newx][newy] = false
    output.pop()
  }
}

const print = (maze, rows, cols, visited, output) => {
  const initialStep = maze[0][0]
  if (initialStep === 0 || maze[rows - 1][cols - 1] === 0) {
    return 0
  }
  const srcx = 0
  const srcy = 0
  visited[srcx][srcy] = true
  findAllPossibleWays(maze, rows, cols, srcx, srcy, visited, output)
}

print(maze, rows, cols, visited, output)
