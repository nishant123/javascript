console.log("this si tutroial 59");

//symbols
const sym1 = symbol('my identifier');
const sym2 = symbol('my indetifier');


const a = 'this is';
const b = "this is";


console.log('Symbol is', sym1);
console.log('type of symbol is', typeof sym1);

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);


const k1 = Symbol('indentifier for k1');
const k2 = Symbol('for k2');


myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "Good boy"
myObj["4"] = "Good int"


console.log(myobj);
console.log(myobj[k1]);
console.log(myObj[k2]);
console.log(myObj[k2])//ALERT:cannot do this to get rohan beacuse it is same as myObj["K2"]; 


//symbols are ignored in for in loop
For(key in myObj){
    console.log(key, myObj[key])
}

console.log(json.stringify(myObj));