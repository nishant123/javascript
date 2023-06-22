console.log('welocme to tutiral 25js');
//create a new element
let divElm = document.createElement('div');


//add text to that created element
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('this is my element .click to edit it');
} else {
    text = document.createTextNode(val);
}
divElm.appendChild(text);
//give element id ,style,class
divElm.setAttribute('id', 'elem');
divElm.setAttribute('class', 'elem');

divElm.setAttribute('style', 'border:2px solid black ;width:145px;margin:34px;padding:2px');

//grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//insert the element before element with id first
container.insertBefore(divElm, first);
divElm.appendChild(text);
console.log(divElm, container, first);


//add event listioner to the element
divElm.addEventListener('click', function () {

    let noTextArea = document.getElementsByClassName('textarea').length;
    if (noTextArea == 0) {
        let html = elem.innerHTML;
        divElm.innerHTML = `<textarea class="form-control" class="textarea" id="textarea" rows="3">${html}</textarea>`;

    }
    //listen for the blur event on the textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value)
    })
});
