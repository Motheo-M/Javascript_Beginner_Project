// --------------------------------------------- Exercise 3 --------------------------------------------//
console.log('// --------------------------------------------- Exercise 3 --------------------------------------------//')

const box = document.querySelector('body');

box.style.textAlign = 'center';


const listLang = document.querySelectorAll('li');
console.log(listLang);

for(let i = 0; i < listLang.length; i++) {

    listLang[i].style.listStyleType = 'none';
    listLang[i].style.padding = '5px 10px';
    listLang[i].style.margin = '5px 10px';
    listLang[i].style.height = '50px';
    listLang[i].style.display = 'flex';
    listLang[i].style.justifyContent = 'center';
    listLang[i].style.alignContent = 'center';

    if(i === 0) {
        listLang[i].style.backgroundColor = 'green';
    } else if (i === 1) {
        listLang[i].style.backgroundColor = 'yellow';
    } else if (i > 1) {
        listLang[i].style.backgroundColor = 'red';
    }
}