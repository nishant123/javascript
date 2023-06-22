console.log("this is tutorial 30");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (name) {
        this.name = newName
    }
}
const harry = object.create(proto);

harry.name = "Harry";
herry.role = "programmer";
herry.changeName("Harry2");
//console.log(harry)

const harry1 = Object.create(proto, {
    name: { value: "herry", writable: true },
    role: { value: "programmer" },
})
harry.changeName("Harry2")
//console.log(harry1)

//Employee constructor

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//slogan
Employee.prototype.slogan = function () {
    return `this company is the best.Regards,${this.name}`;
}

let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

//programmer
function programmer(name, salary, experience, language) {
    Employee.call(this, name, salar, experience);
    this.language = language;
}
//Inherit a prototype
programmer.prototype = Object.create(Employee.prototype);

//manually set the construtor
programmer.prototype.costructor = Programmer;

rohan = new programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);