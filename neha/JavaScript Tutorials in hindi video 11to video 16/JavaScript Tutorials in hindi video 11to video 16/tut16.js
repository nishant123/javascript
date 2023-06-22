let element = document.createElement('li');
console.log(element);
//add aclass element to the li element

element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
element.innerText = 'hello this is created by herry';


let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);

// console.log(element);

let elem2 = document.createElement('h3');
elem2.className = elem2;
let tnode = document.createTextNode('this is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));

myul.removeChild(element, document.getElementById('lui'));


//let pr = elem2.getAttribute('id');
console.log(elem2);

let pr = elem2.hasAttribute('class');
