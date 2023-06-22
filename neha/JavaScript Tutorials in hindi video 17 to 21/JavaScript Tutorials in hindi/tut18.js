console.log('welcome to tut18 js ');
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }
// function func1(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }
// function func1(e) {
//     console.log("Thanks its a mouse down", e);
//     e.preventDefault();
// }


// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log('you enetred no');
// })
// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('you exited no');
// })

document.querySelector('.container').addEventListener('mousemove', function (e) {

    console.log(e.offSetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offestY},${e.offsetX},${e.offesetY})`;
    console.log('you triggerd mouse move event');
})