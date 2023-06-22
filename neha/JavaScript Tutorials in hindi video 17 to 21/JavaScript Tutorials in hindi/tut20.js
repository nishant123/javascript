console.log('thhis is tut20 js ');
let impArray = ['adrak', 'pyaz', 'bhindi'];
//add a key value piar inside local storage
localStorage.setItem('Name', 'Herry');

localStorage.setItem('Sabzi', JSON.stringify(impArray));
//clears the entire the local storage
//localstotage.clear();


localStorage.removeItem('Name');
//retrieve an item from the local storage
let name = localStorage.getItem('Name');
let name1 = JSON.parse(localStorage.getItem('Sabzi'));

console.log(name1);

sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));








