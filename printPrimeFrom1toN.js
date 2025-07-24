const n = 10
const arr = new Array(n + 1).fill(true)
arr[0] = false
arr[1] = false

for (let i = 2; i * i <= n; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= n; j = j + i) {
      arr[j] = false
    }
  }
}

for (let i = 0; i < n; i++) {
  if (arr[i]) {
    console.log(i)
  }
}
