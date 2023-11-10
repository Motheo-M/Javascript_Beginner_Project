// --------------------------------------------- Exercise 1 --------------------------------------------//

console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')
console.log()

// init string
let val = '30 Days Of JavaScript'
console.log(val)

// length of var
console.log(val.length)

// upppercase
console.log(val.toUpperCase())

// lowercase
console.log(val.toLowerCase())

// slice string 1
let subVal1 = val.substring(0, 1)
console.log(subVal1)

// slice string 2
let subVal2 = val.substring(3, val.length - 1)
console.log(subVal2)

// includes
console.log(val.includes('Script'))

// split
console.log(val.split())

// split by space
console.log(val.split(' '))

// split
let tech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(tech.split(','))

// replace
console.log(val.replace('JavaScript', 'Python'))

// charAt
console.log(val.charAt(15))

// charCodeAt
console.log(val.charCodeAt('J'))

// indexOf
console.log(val.indexOf('a'))

// lastIndex
console.log(val.lastIndexOf('a'))

// indexOf
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

// lastIndexOf
console.log(sentence.lastIndexOf('because'))

// search
console.log(sentence.search('because'))

// trim 
let val1 = ' 30 Days Of JavaScript '
console.log(val1.trim())

// startswith
console.log(val.startsWith('30 Days Of JavaScript'))

// endsWith
console.log(val.endsWith('30 Days Of JavaScript'))

// match
console.log(val.match('a'))

// concat
let part1 = '30 Days of'
let part2 = 'JavaScript'
console.log(part1.concat(part2))

// repeat
console.log(val.repeat(2))


// --------------------------------------------- Exercise 2 --------------------------------------------//

console.log('// --------------------------------------------- Exercise 2 --------------------------------------------//')
console.log()
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let stringNum = '10'
console.log(parseInt(stringNum) == 10)

console.log(Math.round(parseInt('9.8')) == 10)

console.log('Python'.includes('on'))
console.log('Jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))

let randomNum = Math.random()         // generates 0 to 0.999
let numFifty = randomNum * 51
let numBtnZeroAndTen = randomNum * 101

console.log(Math.ceil(randomNum * 101))
console.log(Math.ceil())
console.log(Math.ceil(Math.random() * 255))

// --------------------------------------------- Exercise 3 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 3 --------------------------------------------//')

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 

console.log(love.match(/love/gi))