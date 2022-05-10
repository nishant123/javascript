console.log('this tut 36.js');

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = [];
    }
    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });

    }
    issueBook(bookName, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user

        }
        else {
            console.log("this book already issued!");
        }
    }
    returnBook(book) {
        delete this.issuedBooks[bookname];
    }
}
