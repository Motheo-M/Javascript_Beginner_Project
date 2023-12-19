// --------------------------------------------- Exercise 1 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')


//Regular
function fullName() {
    console.log('Motheo Motau')
}

fullName()

function fullNames(Name, Surname) {
    console.log(`${Name} ${Surname}`)
}

fullNames("Motheo", "Motau")


//Arrow
const addNumbers = (n, m) => {console.log(n + m)}

addNumbers(2, 5);


//Sel-Invoking
// remember the add semicolon at the statement 
(function (l, w) {
    console.log(l * w)
})(2, 6); 
// before the function declaration and after function declaration

//Anon
const periOfRec = function(l, w) {
    console.log(2*(l + w))
};

periOfRec(2, 3);


