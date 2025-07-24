const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const cols = 3; const rows = 3

for (let i = 0; i < rows; i++) {
  for (let j = (i + 1); j < cols; j++) {
    const temp = arr[i][j]
    arr[i][j] = arr[j][i]
    arr[j][i] = temp
  }
}
for (let k = 0; k < rows; k++) {
  arr[k].reverse()
}
console.log(arr)
