// --------------------------------------------- Exercise 1 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')

/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old
 enough to drive' but if not 18 give another feedback stating
  to wait for the number of years he needs to turn 18.
*/
age = prompt('What is your age')
age >= 18
    ? console.log('You are old enough to drive')
    : console.log(`Need to wait for ${18 - age} before you can drive`)


/*
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result
 to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
 */

 let myAge = prompt(`How old am I?`)
 let yourAge = prompt(`How old are you?`)

if(myAge > yourAge) 
{
    console.log("I'm older than you")
} else {
    console.log("You're older than you")
}

 /*
 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 
 Try to implement it in to ways

 using if else
 ternary operator.

 */
 let a = prompt(`Enter a number`)
 let b = prompt(`Enter a number`)

if(a > b) 
{
    console.log("a is greater than b")
} else {
    console.log("a is lesser than b")
}

a > b
    ? console.log("a is greater than b")
    : console.log("a is lesser than b")
 
/*

 4. Even numbers are divisible by 2 and the remainder is zero. How do you check,
  if a number is even or not using JavaScript?
*/

let num = prompt(`Enter a number`)

num % 2 === 0
    ? console.log("divisible by 2")
    : console.log("not divisible by 2")

// --------------------------------------------- Exercise 2 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 2 --------------------------------------------//')

/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
Check if a day is weekend day or a working day. Your script will take day as an input.
*/

// --------------------------------------------- Exercise 3 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 3 --------------------------------------------//')

/*
Write a program which tells the number of days in a month. 
Write a program which tells the number of days in a month, now consider leap year.
*/