console.log('this is 42js');
//button with id myBtn
let myBtn = document.getElementById('myBtn');

//div with id conetent 
let content = document.getElementById('content');

// function getData() {
//     console.log("started getData")
//     url = "herry.txt";
//     fetch(url).then((response) => {
//         console.log("inside first then");
//         return response.text();
//     }).then((data) => {
//         console.log("inside second then");
//         console.log(data);
//     })
// }

function getData() {
    console.log("started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("inside first then");
        return response.json();
    }).then((data) => {
        console.log("inside second then");
        console.log(data);
    })
}



function getData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = `{"name":"hary347485945","salary":"123","age":"23"}`
    params = {
        method: 'post',
        header: {
            'content-type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then((response) => response.json()
    ).then((data) => {
        console.log(data);
    })
}
console.log("before running get data");
getData()
console.log("affter running get data");