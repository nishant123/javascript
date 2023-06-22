console.log("tut31 js file");
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience
        this.division = givenDivision;
    }
    slogan() {
        return `I am     ${this, name}and this company is the  best`;
    }

    joiningYear() {
        return 2020 - this.experience;
    }
    static add(a, b) {

        return a + b;
    }

}
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language) {
        super(givenName, givenExperience, givenDivision);

        this.language = language;
        // this.Github = Github;
    }

    static favoriteLanguage() {
        if (this.language == 'python') {
            return 'python'
        }
        else {
            return 'JavaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}
// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
rohan = new Programmer("Rohan", 3, "Lays", "Rohan420")
console.log(rohan);
console.log(rohan.favoriteLanguage);
