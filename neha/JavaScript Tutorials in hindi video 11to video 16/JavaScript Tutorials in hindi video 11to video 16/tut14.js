console.log('welcome to tut14 js');
/*element selectors
    1.single element selector
    2.multi element selector
*/

let element = document.getElementById('myfirst');
// element = element.className
//element = element.childNodes
element.style.color = 'red';
element.innerText = 'Harry is  a gud boy';
element.innerHTML = '<b>Harry is  a gud boy</b>';
//console.log(element.innerText);

let sel = document.querySelector('#myfirst');
sel.document.querySelector('.child');
sel.document.querySelector('div');
sel.style.color = 'green';

console.log(sel);



//2.multi element by selectors

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue'
});
//console.log(elems[0]).getElementsByClassName('child');