console.log("weocme to tut 15 js");
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[3].nodeType;
// console.log(nodeName);
// console.log(nodeType);
//node types
// 1.Element
// 2.attribute
// 3.text Node
// 8.comment
// 9.document
// 10.doctype




// console.log(cont.chidNodes);
// console.log(cont.chidren);



let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
console.log(container.firstchild);
console.log(container.firstElementChild);

console.log(container.lastchild);
console.log(container.lastElementChild);


console.log(container.childElementCount);

console.log(container.childElementCount.parentNode);
