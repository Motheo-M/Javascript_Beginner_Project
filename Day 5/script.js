// import { webTechs } from "./webTechs.js";
import { countries } from './countries.js';

// --------------------------------------------- Exercise 1 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')

  //1
  const arr1 = Array()

  const arr2 = []


  //2
  arr1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  console.log(arr1)

  //3
  console.log(arr1.length)

  //4
  console.log(arr1.shift())
  console.log(arr1.pop())
  console.log(arr1[Math.round((arr1.length - 1) / 2)])

  //5
  const mixedArray = [5, 'What', false, {bag : 'White'}, 15, 'Do you remember?']
  console.log(mixedArray.length)

  //6
  const itComapnies = Array( 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')
  // console.log(itComapnies)
  // console.log(itComapnies.length)
  // console.log('//Check point')
  // console.log(itComapnies.shift())
  // console.log(itComapnies.pop())
  // console.log(itComapnies[(itComapnies.length - 1) / 2])

  // console.log('//Check point 2')
  // itComapnies.forEach( (item) => console.log(item))
  // itComapnies.forEach( (item) => console.log(item.toUpperCase()))

  // console.log('Checkpoint 3')

  // let amazon = itComapnies.pop()
  // let comapnies = itComapnies.join(', ')
  
  //12
  // console.log(`${comapnies} and ${amazon} are big IT companies.`)

  // if(itComapnies.includes('Microsoft')) {
  //   console.log('Microsoft')
  // } else{
  //   console.log('Not Found')
  // }

  // let oCompany = Array()
  
  // for(let i = 0; i < itComapnies.length - 1; i++) {
  //   if(itComapnies[i].includes('oo')) {
  //     console.log('Works')
  //     oCompany.push(itComapnies[i])
  //   }
  // }
  // console.log(oCompany)
  // console.log(itComapnies.sort())
  // console.log(itComapnies.reverse())
  // console.log(itComapnies.slice(0, 3))
  // console.log(itComapnies.slice(4, 7))
  // console.log(itComapnies.slice(3, 4))

  console.log(itComapnies.splice())






// --------------------------------------------- Exercise 2 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 2 --------------------------------------------//')

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.split(" ").length)

console.log('Shopping cart')

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.splice(4, 1)  // removes element 'Honey' from shopping cart
console.log(shoppingCart)

shoppingCart[3] = 'Green tea'
console.log(shoppingCart)

console.log('Countries')
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : console.log(countries.push('Ethiopa'))
console.log(countries)


// --------------------------------------------- Exercise 3 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 3 --------------------------------------------//')
