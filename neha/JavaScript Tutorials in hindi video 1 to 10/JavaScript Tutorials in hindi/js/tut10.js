console.log("this is tut 10");
function greet(name, thank = "Thank YOU") {
    let msg = ` Happy birthady ${name}I’m wishing a very, very happy birthday
to you today, buddy${thank}`
    return msg;
}
let name = 'Neha';
let name1 = 'Mona';
let val = greet(name, 'Thanks a lot');
console.log(val);

const myobj = {
    name: 'skillf',
    game: function () {
        return "GTA";
    }
}
console.log(myobj.game())
arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function (element, index, array) {
    console.log(element, index)
});