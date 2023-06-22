console.log("this is a tut48.js");
//regular expression:
//basic fucntions
//metacharacter symbols
//character sets
//const regex =/^h/i; 
const regex = /h[a-z]rry/;
regex = /h[aty]rry/;  //can be an a,tor y
regex = /^[aty]rry/   //can not be any of a,t or y
regex = /h[^aty]rr[yu]/;  //cannot be any of a t or y+ can be a  u or y   
regex = /h[a-z A-z]rr[yu]; / // we can have as many character sets as we want

//quantifiers
regex = /har{2}y/;//r can occur exactly 2 times
regex = /har{0,2}y/;//r can occur exactly0 to 2 (0 or 1 or 2)times

//groupings-we use paranthesis  for gruopings()




const str = "Harry bhai";


let result = regex.exec(str);
console.log("the result from exec is", result);
if (regex.test(str)) {
    console.log(`the string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`the string ${str}does not match the expression ${regex.source}`);
}