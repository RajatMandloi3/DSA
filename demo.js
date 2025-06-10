// function someFunc (a, ...b) {
//   // You code goes here
//   const str = 'abcdefghijk'
//   console.log({ ...str })
// }

// someFunc(1, 2, 3, 4, 56, 6, 7, 8, 8)
// const object = {
//   a: 'Good morning',
//   b: 100
// }

// console.log(Object.values(object))

// const user = {
//   name: 'John',
//   printInfo: function () {
//     console.log(`My name is ${this.name}.`)
//   }
// }

// const admin = Object.create(user)
// console.log(admin)

// admin.name = 'Nick' // Remember that "name" is a property set on "admin" but not on "user" object

// admin.printInfo() // My name is Nick

// var x = 10
// function f (params) {
//   if (params === 1) {
//     var y = 100
//   }
//   console.log(y, x)
// }
// // console.log(y, x)
// f(1)

// function logger(target) {
//     console.log(`Class created: ${target.name}`);
//   }

//   @logger
//   class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   // Logs: Class created: Person

// const x = '100'
// const y = -x
// console.log(typeof x, typeof y, y, typeof Infinity) // string, number
const obj = {}
console.log(Object.getPrototypeOf(obj)) // true
