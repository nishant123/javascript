console.log('this is tut41js ');


//Arrow  function
//Creting a normal function
//const harry= function     (){
//     console.log("this is the best person ever");

// }

//converting it to an arrow function
// const herry = () => {
//     console.log("this is the best person ever");
// }
//harry();  

//function returning something 
// const greet = function () {
//     return "Good morning "
// }
//one liners do not require braces/return
//one line will automaticaly return
//const greet = () => "Good MORNING";

//const greet = () => ({ name: "herry" });
//single parameters donot need paranhtisis but you will have to parenthisis if there are multiple parameters
const greet = (name, ending) => "Good Morning" + name + ending;

console.log(greet('Harry', 'bye'));
