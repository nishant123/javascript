console.log("this is tut46.js");
let reg = /harry/;     //this is a regular expression literals in js
reg = /harry/g;           //g means global 

console.log(reg);
console.log(reg.source);

//function to match expressions
let s = "this is great code with hart and also harry bhai";
// 1.exec()-this fucntion will return  an array for match or null no match
let result = reg.exec()
//console.log(result);----->we can use multiple exec with global flag
console.log(result.input);
console.log(result.index);


//2.test()--return true or false


let result2 = reg.test(s);
console.log(result);

let result3 = s.match(reg);
console.log(result3);

let result4 = s.search(reg)
console.log(result4);
let result5 = s.replace(reg, 'shubham');
console.log(results);