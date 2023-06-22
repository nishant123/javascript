
console.log("welcome to 27js");
//  Object literals for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
}
// we have already seen construcotslike these
//new Date();
//Creating a cars for constructors
function GeneralCar(GivenName, givenSpeed) {
    this.name = givenName;
    this.TopSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this, name}is running `);
    }
}
console.log(car)