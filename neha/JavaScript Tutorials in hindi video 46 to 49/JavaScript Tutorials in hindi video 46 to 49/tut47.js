console.log('this is for tut47.js');
let regex = /harry/;
//lets look into some metacharacter symbols
regex = /^harr/;      //^means expressions means will match if string starts with           

//$at the end of string means " string ends with " 
regex = /harry$/;

regex = /h.rry/;          //matches any one character
let str = "harry is a god boy harry is a code with   harry";
let result = regex.exec(str);
console.log("the result from exec is", result);
if (regex.test(str)) {
    console.log(`the string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`the string ${str}does not match the expression ${regex.source}`);
}