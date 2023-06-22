console.log("this is indexe.js");
//Constructor
function Book(title, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}

//ADD method to display prototype 
Display.prototype.add = function (book) {
    console.log("adding to UI");
    tableBody = document.getElementById('tableBody ')
    let uiString = `<tr>
     <td>${book.name}</td>
     <td>${book.author}</td>
     <td>${book.type}</td>
</tr>`
    tableBody.innerHTML += uiStirng;
}
//implement the clear fucntion
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
//implement the validate function
Display.prototype.validate = function (book) {

    let libraryForm = document.getElementById('libraryForm');

    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.validate = function (type, message) {
    let massage = document.getElementById('message');
    Message.innerHtml = `
    
     `
}





//Add submit event listener to libraryform

let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('you have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type.fiction.value
    } else if (programming.checked) {
        type.programming.value
    }
    else if (cooking.checked) {
        type.cooking.value
    }
    let book = new Book(name, author, type);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been successfully added');

    } else {
        //show error to 
        display.show('danger', ' Sorry you cannot add this book');
    }
    e.preventDefault();
}
