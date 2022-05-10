console.log("this is tut 44js");

//pretend this is coming from a server
let a = "herry bhai"
a = undefined;
if (a != undefined) {
    throw new Error("this is not undefined");
} else {
    console.log("this is undefined");
}

try {
    //jkdsfsdfasf
    console.log('we are inside try block');
    functionHerry();
} catch (error) {
    console.log("are you okay");

    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log("finally we will run this");
} 