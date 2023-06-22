console.log('welcome to tut28js');
//object literal
let obj = {
    name: 'herry',
    channel: "code with herry",
    address: "Mars"
}
function Obj(givenName) {
    this.name = givenName
}
Obj.prototype.getName = function () {
    return this.name;
}
Obj.prototype.setName = function (newName) {
    return this.name = newName;
}
let obj2 = new Obj("Rohan Das");
console.log(obj2);