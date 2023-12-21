// --------------------------------------------- Exercise 1 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')


const dog = {}

console.log(dog)

dog.name = 'Tim'
dog.legs = '4'
dog.color = 'black'
dog.age = 21
dog.bark = 'woof woof'

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)

dog.breed = 'Collier'
dog.getDogInfo = function() {
    return `${this.name} is ${this.age} years old!`
}

console.log(dog.breed)
console.log(dog.getDogInfo())

// --------------------------------------------- Exercise 2 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 2 --------------------------------------------//')
