console.log("this is tut37.js");

//pretend this response is coming from server    
const students = [

    { name: "herry", subject: "Javascript" },
    { name: "Rohan", subject: "Machine learning" }
]

function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled ")
        callback();
    }, 8000);
}
function getStudent() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (post) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Student have been fetched")
    }, 1000);
}

let newStudent = { name: "Sunny", subject: "python" }
//enrollStudent(newStudent);
enrollStudent(newStudent,getStudent());
//getStudents();
