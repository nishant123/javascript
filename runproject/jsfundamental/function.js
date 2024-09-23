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



const emp = [
    { name: "Alice", age: 25, dept: "it" , salary: 15000 },
    { name: "Bob", age: 30 , dept: "sales" , salary: 19000},
    { name: "Carol", age: 27 , dept: "it" , salary: 18000},
    { name: "Dave", age: 32 , dept: "sales" , salary: 14000},
  ];

  //emp.filter(sumsal);
//   function sumsal(item) {

//     return item.
//   }


  
//   To find age>28 and sum up salary as per department
//   emp.foreach
//   algorithm
  
//   1 use foreach loop to extract the record which is having age>28 and put it into array
//   2 print that array
  
  var arr = [11, 21, 31, 41, 51]
  for(var i = 0; i < arr.length; i++) {
    var j =i;
    //console.log(arr[j]);
    
    setTimeout(() => {
      console.log(arr[j]);
  
    }, 0);
    
  }
  
  var arr = [1,1,1,1,2,2,2,3,3,3,44,4,44,4,44,5,5,5];
  
  var newarr,resarr;
  for(var i=0;i<arr.length; i++)
  {
    //resarr[newarr[i]] = arr.filter(sumarr(arr[i]));
    // resarr[i]=arr[i];
    if(arr[i]== arr[i+1]) {
      
    }
  }
  function sumarr(value) {
    console.log('sum arr caled');
  }
  
  // output
  
  /* {
      1: 4,
      2: 3,
      3: 3,
      44: 3,
      4: 2,
      5: 3
  } */

  

  const products = [
    { name: "apples", category: "fruits" },
    { name: "oranges", category: "fruits" },
    { name: "potatoes", category: "vegetables" }
  ];
  
  const groupByCategory = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});
  
  console.log(JSON.stringify(groupByCategory, null, 2)); // { fruits: [...], vegetables: [...] }
  






// Banana,Orange,Apple,Mango

//result is given below
// test
// item { fname: 'nishant', age: 21, dept: 'science' } 0
// item { fname: 'nishant1', age: 25, dept: 'math' } 1
// item { fname: 'nishant2', age: 21, dept: 'science' } 2
// item { fname: 'nishant3', age: 26, dept: 'english' } 3
// [
//   { fname: 'nishant', age: 21, dept: 'science' },
//   { fname: 'nishant2', age: 21, dept: 'science' }
// ]
// [
//   { fname: 'nishant', age: 21, dept: 'science' },
//   { fname: 'nishant2', age: 21, dept: 'science' }
// ]
// [
//   { fname: 'nishant', age: 210, dept: 'science' },
//   { fname: 'nishant1', age: 250, dept: 'math' },
//   { fname: 'nishant2', age: 210, dept: 'science' },
//   { fname: 'nishant3', age: 260, dept: 'english' }
// ]
// [ 'f1', 'f2', 'f3', 'f4', 'f5', 'f6' ]
// [ 0, 'f1' ]
// [ 1, 'f2' ]
// [ 2, 'f3' ]
// 20
// 100
// -200
// Banana