function maximizeTheCuts (n, x, y, z) {
  // Base cases
  if (n === 0) return 0
  if (n < 0) return -Infinity

  // Try all three possible cuts
  const option1 = 1 + maximizeTheCuts(n - x, x, y, z)
  const option2 = 1 + maximizeTheCuts(n - y, x, y, z)
  const option3 = 1 + maximizeTheCuts(n - z, x, y, z)

  // Take the max of all valid cuts
  const finalAns = Math.max(option1, option2, option3)

  // If no valid cuts possible, return 0
  return finalAns < 0 ? 0 : finalAns
}

// Example usage:
const n = 7; const x = 5; const y = 3; const z = 6
console.log(maximizeTheCuts(n, x, y, z))
