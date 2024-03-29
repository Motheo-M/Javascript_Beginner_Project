// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }

// let firstTitle = document.getElementById('first-title')


// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title

// Query Select All
// const allTitles = document.querySelectorAll('h1'); // selects all the available h1 elements in the page
// console.log(allTitles); // <h1>First Title</h1>

// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]);
// }

// const allTitles = document.querySelectorAll('.title'); // the same goes for selecting using class
// allTitles.forEach(title => console.log(title));


// Attributes
//SET
// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// console.log(titles)

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// console.log(titles)

// ClassList
//another way to setting an attribute: append the class, doesn't over ride
// const titles = document.querySelectorAll('h1')
// titles[3].classList.add('title', 'header-title') // If I used className, it would have replaced all the existing classes with one I have written
// console.log(titles)
// titles[3].classList.remove('title', 'header-title') // remove classes
// console.log(titles)

// Adding text to HTML Element using textContent or InnerHTML
// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title';

// const lists = `
//         <li>30DaysOfPython Challenge Done</li>
//         <li>30DaysOfJavaScript Challenge Ongoing</li>
//         <li>30DaysOfReact Challenge Coming</li>
//         <li>30DaysOfFullStack Challenge Coming</li>
//         <li>30DaysOfDataAnalysis Challenge Coming</li>
//         <li>30DaysOfReactNative Challenge Coming</li>
//         <li>30DaysOfMachineLearning Challenge Coming</li>`
// const ul = document.querySelector('ul')
// ul.innerHTML = lists
// setTimeout(() => {
//         ul.innerHTML = ''
// }, 2000);

// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.color = 'green'
//     title.style.backgroundColor = 'red'
//     title.style.fontSize = '20px'
//   } else {
//     title.style.color = 'red'
//     title.style.backgroundColor = 'green'
//     title.style.fontSize = '30px'
//   }
// })

// --------------------------------------------- Exercise 1 --------------------------------------------//
// console.log('// --------------------------------------------- Exercise 1 --------------------------------------------//')

// const allParaOne = document.querySelector('p');
// console.log(allParaOne);

// const onePara = document.querySelector('#first-par');
// const twoPara = document.querySelector('#second-par');
// const threePara = document.querySelector('#third-par');
// const fourPara = document.querySelector('#fourth-par');

// console.log(onePara);
// console.log(twoPara);
// console.log(threePara);
// console.log(fourPara);

// const allPara = document.querySelectorAll('p');
// console.log(allPara);

// for(let i = 0; i < allPara.length; i++) {
//     console.log(allPara[i].innerHTML);
//     console.log(allPara[i].textContent);
// }

// fourPara.textContent = 'I added this to the fourth';
// fourPara.innerHTML += '! Again!';
// console.log(fourPara.textContent);

// onePara.setAttribute('class', 'First');
// twoPara.className = 'Second';
// threePara.className = 'Third';
// fourPara.classList.add('Again', 'Fourth');

// console.log(onePara);
// console.log(twoPara);
// console.log(threePara);
// console.log(fourPara);

// --------------------------------------------- Exercise 2 --------------------------------------------//
// console.log('// --------------------------------------------- Exercise 2 --------------------------------------------//')

// for(let i = 0; i < allPara.length; i++) {
//     if(i % 2 === 0) {
//         allPara[i].style.backgroundColor = '#607FFF';
//         allPara[i].style.color = '#FFE060';
//     } else {
//         allPara[i].style.color = '#607FFF';
//         allPara[i].style.backgroundColor = '#FFE060';
//     }
// }

