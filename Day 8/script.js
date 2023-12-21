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

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

  const key = Object.keys(users)
  let lastuser = '';
  let max = 0;
  let logCount = 0
  let pointsCount = 0
  const newArr = Array()
  for (let i = 0; i < key.length; i++) {
    
    let user = users[`${key[i]}`];
    let count = user.skills.length;

    if (count > max) {
        max = count
        lastuser = key[i]
    }

    let logged = user.isLoggedIn
    let points = user.points


    if(logged) {
        logCount++;
    }

    if(points >= 50) {
        pointsCount++;
    }

    if(user.skills.includes('JavaScript') && user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node') )
    {
        newArr.push(`${key[i]}`)
        
    }
    
  }
  newArr.forEach((x) => console.log(`${x} uses MERN stack!`));
  for(const x in newArr) {
    console.log(`${newArr[x]} uses MERN stack!`)
  }

  console.log(`${lastuser} has ${max} skills at their disposal!`)
  console.log(`${logCount} users are looged on!`)
  console.log(`${pointsCount} has 50 or more points!`)