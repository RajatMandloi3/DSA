const garbageCollection = function (garbage, travel) {
  let pickP = 0; let pickG = 0; let pickM = 0
  let travelP = 0; let travelG = 0; let travelM = 0
  let lastP = 0; let lastG = 0; let lastM = 0

  for (let i = 0; i < garbage.length; i++) {
    const garbageStr = garbage[i]
    for (let j = 0; j < garbageStr.length; j++) {
      if (garbageStr[j] === 'P') {
        pickP++
        lastP = i
      } else if (garbageStr[j] === 'G') {
        pickG++
        lastG = i
      } else if (garbageStr[j] === 'M') {
        pickM++
        lastM = i
      }
    }
  }
  for (let i = 0; i < travel.length; i++) {
    if (i < lastP) {
      travelP += travel[i]
    }
    if (i < lastG) {
      travelG += travel[i]
    }
    if (i < lastM) {
      travelM += travel[i]
    }
  }
  return (pickP + pickG + pickM + travelP + travelG + travelM)
}

console.log(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3]))
