console.log("this is tutorial 57.js");
//maps in javascript:we can use of any type of key or value.

const myMap = new Map();
//console.log(myMap);

const key1 = 'myStr', key2 = {}, key3 = function () { };

//setting map values
myMap.set(key1, 'this is string');
myMap.set(key2, 'this is a blank obj');
myMap.set(key3, 'this is an empty function');
//console.log(myMap);

//getting the value from a map
let value1 = myMap.get(key2);
console.log(value1);

//get the size of the map

console.log(myMap.size);

//you van loop using for...of to get keys and values 