let a = () => {
    console.log('test');
}
a();

const obj = [{fname:'nishant',age:21,dept:'science'}
,{fname:'nishant1',age:25,dept:'math'}
,{fname:'nishant2',age:21,dept:'science'},
{fname:'nishant3',age:26,dept:'english'}];
obj.forEach(
    myfunc
);
function myfunc(item,index) {

    console.log('item',item,index);
}

function filtfunc(item) {
   return item.age==21;
}
console.log(obj.filter(filtfunc));
function filtfuncdept(item) {
    return item.dept=='science';
 }
 console.log(obj.filter(filtfuncdept));
 function filtfuncmap(item) {
     item.age = item.age*10;
    return item;
 }
 console.log(obj.map(filtfuncmap));

 const arr1 = ["f1","f2","f3"];
 const arr2 = ["f4","f5","f6"];
const arr3 = arr1.concat(arr2);
console.log(arr3);
const entrarr = arr1.entries();

for(let x of entrarr) {
    console.log(x);
}
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}
console.log(ages.find(checkAge));

const numbers = [175, 50, 25];
console.log( numbers.reduce(myFunc));
//100
console.log( numbers.reduceRight(myFunc));
//-200
function myFunc(total, num) {
  return total - num;
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log( fruits.shift());
//"Orange", "Apple", "Mango"
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1, 3);
//Orange,Lemon
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits2.slice(-3, -1);
//Lemon,Apple
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon", "Pineapple");
//Lemon,Pineapple,Banana,Orange,Apple,Mango
// valueOf() returns the array itself:

// Banana,Orange,Apple,Mango