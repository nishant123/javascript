console.log('we are at tut 6');
const name = "Herry";
const greeting = "Good Morning";
// console.log(greeting + name);

let html;
html = "<h1>this is the heading</h1>" +
    "<p>this is my para</p>";

html = html.concat('this', 'str');
// console.log(html)
// console.log(html.toLowerCase());
// console.log(html.toUpperCase())


// console.log(html.lastIndexOf('<'));

// console.log(html.charAt(0));
// console.log(html.endsWith('thisstf'));
// console.log(html.includes('str'));
// console.log(html.substring(0, 3));
// console.log(html.slice(0, 4));
// console.log(html.split(' '));
//console.log(html.replace('this', 'it'));    

let fruit1 = 'Banana';
let fruit2 = 'Apple';
let myhtml = `Hello ${name}<h1>this si heading</h1><>you like${fruit1} and ${fruit2}`;


document.body.innerHTML = myHtml;












