console.log('this is tutroial 58');
//set stores unique values
const mySet = new Set();//initialize an empty set
console.log('this set looks like :', mySet);
//adding the values to this set

mySet.add('this');
mySet.add('my name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
// console.log('this set looks like this now', mySet);
// let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }]);

console.log(mySet.size); // get the size of the set
console.log(mySet.has(346)); //chekc wether set has 346 or not

console.log('before removal', mySet.has('that2  '));

mySet.delete('thst2');
console.log('After removal', mySet.has('that'));


//iterating set

mySet.forEach(() => {
    console.log('item is:', item);
})