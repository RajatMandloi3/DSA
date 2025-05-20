const customSortString = function (order, s) {
  const str = s.split('')
  const odr = order.split('')
  console.log(str.sort((char1, char2) => odr.indexOf(char1) - odr.indexOf(char2)).join(''))
}
customSortString('cba', 'abcd')
