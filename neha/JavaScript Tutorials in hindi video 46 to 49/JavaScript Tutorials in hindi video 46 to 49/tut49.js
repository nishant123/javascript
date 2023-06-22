console.log('this is the tut49.js');

//character classes
let regex = /\war/;   //word character-or alphabate or numbers
regex = /w+d1r/;        //+w+meansone or more word character
regex = /w+bhai/;         //non word character
regex = /\w.bhai/;          //w+means more then onenoen word character
regex = /\D999/;           //\D means digit
regex = /\D+999/
str = 'harhardlr4r5r bhai';


let result = regex.exec(str);
console.log("the result from exec is", result);
if (regex.test(str)) {
    console.log(`the string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`the string ${str}does not match the expression ${regex.source}`);
}