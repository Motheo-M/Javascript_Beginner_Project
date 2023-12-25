// import { countries } from './countries.js';

// // a callback function, the name of the function could be any name
// const callback = (n) => {
//   return n ** 2
// }

// // function that takes other function as a callback
// function cube(callback, n) {
//   return callback(n) * n
// }

// console.log(cube(callback, 3))

// // Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

// // function sayHello() {
// //     console.log('Hello')
// //   }
// //   setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// function sayHello() {
//     console.log('Hello')
//   }
//   setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

//   const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]
//   users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
//   console.log(users) // sorted ascending
//   // [{…}, {…}, {…}, {…}]

// --------------------------------------------- Exercise 1 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')

