// const funcWithProperties = (a, b, c, d) => {

// }

// funcWithProperties.age = 'rajat'
// console.log(funcWithProperties.age)
// console.log(funcWithProperties.length)
// console.log('Array.prototype.includes: ', Array.prototype.includes)

// 'use strict'
// const user = {
//   name: 'John',
//   employment: {
//     department: 'IT'
//   }
// }

// Object.freeze(user)
// user.employment.department = 'HR'
// // user.name = 'HR'

// console.log(user)
// function someFunc(a,…b,c){
//     //You code goes here
//     return;
//     }

// const findIndexOfPivotElementInRotatedSortedArray = (arr) => {
//   let start = 0; let end = arr.length - 1; let mid = Math.floor((start + end) / 2)

//   while (start <= end) {
//     if (start === end) {
//       return start
//     }
//     if ((mid + 1) < (arr.length) && arr[mid] > arr[mid + 1]) {
//       return mid
//     } else if ((mid - 1) > 0 && arr[mid] < arr[mid - 1]) {
//       return mid - 1
//     } else if (arr[start] > arr[mid]) {
//       end = mid - 1
//     } else {
//       start = mid + 1
//     }
//     mid = Math.floor((start + end) / 2)
//   }
//   return -1
// }
// console.log(findIndexOfPivotElementInRotatedSortedArray([5, 6, 7, 8, 0, 1, 2, 3, 4]))

// const arr = [[10, 11], [9, 10], [20, 30]]
// console.log(arr.sort((a, b) => a[0] - b[0]))
