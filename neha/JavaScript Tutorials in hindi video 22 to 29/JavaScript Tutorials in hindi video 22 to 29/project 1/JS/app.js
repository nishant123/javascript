console.log('welcome to notes app.this is app.js');
//if user adds note,add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
    
    <div class="noteCard my-2 mx-2 card" style="width:18rem">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary" id="addBtn">Delete Note</button>
    </div>
</div>`;
    });

    let notesElm = document.getElementById('notes');
    if (notes.length !== 0) {
        notesElm.innerHTML = html;
    }

}

//function a delete note
function deleteNote(index) {
    console.log('I am deleting', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        motesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCard).forEach(function (element) {

        let cardTxt = element.getElementByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.getElementsByClassName.display = "block";
        }
        else {
            element.getElementsByClassName.display = "none";
        }

    })
})


//Further features
// 1.add title
// 2.mark a note as important
// 3.seprate note by user
//4.sync and host to web server