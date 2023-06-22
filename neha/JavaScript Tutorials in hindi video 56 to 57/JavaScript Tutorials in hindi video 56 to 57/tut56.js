console.log("this is tutorial 56 on for in and for of loops");

let people = ['harry', "komal", "mohan", "soham", "prakash"];

//traditional for loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }   
//ITERATING AN OBJECT
obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "android app development"
}
//console.log(obj);
//console.log(obj);
//iterating an object using tarditional for loop
for (let index = 0; index < object.keys(obj).length; index++) {
    const element = obj[object.keys(obj)[index]];
    //console.log(element);

}
//iterating an object using for in loop

myString = "This is my string";
for (let char in myString) {
    //console.log(myString[char]);
}


//QUIZ:use traditional for loop to iterate through the same string



//********************for of loop */
console.log("******************for of loop start here ***************")
people = ['harry', "komal", "mohan", "soham", "prakash"];

for (let name of people) {
    console.log(name);


}  