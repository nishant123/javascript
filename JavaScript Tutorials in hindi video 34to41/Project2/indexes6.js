console.log('this si es6 version of project2');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        console.log("Adding TO UI");
        tableBody = document.getElementById('tableBody');
        let uiStirng = `
        <tr>

                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>   `
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {

        let libraryForm = document.getElementById('libraryForm');

        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let massage = document.getElementById('message');
        Message.innerHtml = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong>  ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
        setTimeout(function () => {
            message.innerHTML = ''
        }, 2000);

    }
}


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
        display.show('success', '  your book has been successfully added');

    } else {
        //show error to 
        display.show('danger', '  Sorry you cannot add this book');
    }
    e.preventDefault();
}