const cards = ['S2', 'D2', 'H2', 'C2']
const cardsWithSuits = {
  C: [],
  D: [],
  H: [],
  S: []
}

const suitsSum = {
  C: 0,
  D: 0,
  H: 0,
  S: 0
}

for (const key in cards) {
  const arr = cards[key].split('')
  cardsWithSuits[arr[0]].push(arr[1])
}

// check for all aces
let isAce = true
for (const key in cardsWithSuits) {
  // if all the cards are ace then there should be exactly one card in each suit and the card must be ace
  if (cardsWithSuits[key].length === 1) {
    cardsWithSuits[key].forEach(card => {
      if (card !== 'A') {
        isAce = false
      }
    })
  } else if (cardsWithSuits[key].length > 1) {
    isAce = false
  }
}

if (isAce) {
  console.log(200)
  process.exit(0)
}

let ifAllWithSameNumber = true
const singleCardNumber = cards[0].split('')[1]
for (const key in cardsWithSuits) {
  if (cardsWithSuits[key].length > 0) {
    cardsWithSuits[key].forEach(card => {
      if (card !== singleCardNumber) {
        ifAllWithSameNumber = false
      }
    })
  }
}

if (ifAllWithSameNumber) {
  console.log(100)
  process.exit(0)
}

for (const key in cardsWithSuits) {
  let sum = 0
  if (cardsWithSuits[key].length > 0) {
    cardsWithSuits[key].forEach(card => {
      if (card === 'A') {
        sum += 11
      } else if (['J', 'K', 'Q'].includes(card)) {
        sum += 10
      } else {
        sum = sum + (+card)
      }
    })
  }
  suitsSum[key] = sum
}
console.log(Math.max(...Object.values(suitsSum)))
