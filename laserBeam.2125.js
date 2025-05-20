const numberOfBeams = function (bank) {
  let count = 0
  const alarms = []
  for (let i = 0; i < bank.length; i++) {
    const floorPlan = bank[i]
    let alarmCountInFloor = 0
    for (let j = 0; j < floorPlan.length; j++) {
      if (floorPlan[j] === '1') {
        alarmCountInFloor++
      }
    }
    alarms.push(alarmCountInFloor)
  }
  const arr = alarms.filter(el => el !== 0)
  for (let i = 0; i < arr.length - 1; i++) {
    count += arr[i] * arr[i + 1]
  }

  return count
}
console.log(numberOfBeams(['011001', '000000', '010100', '001000']))
