console.log('This is Project 4 ');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
console.log(name, email, phone);
name.addeventlistner('blur', () => {
    console.log("name is blurred");

    //validate name here
    let regex = /^(a-zA-Z)([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is  valid')
        name.classList.remove('is-invalid')
        validUser = true;
    } else {
        console.log('your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
    }

})
email.addeventlistner('blur', () => {
    console.log("email is blurred");

    //validate email here
    let regex = /^([_\-\.0-9a-zA-Z+])@([_\-\.0-9a-zA-Z+])\.([a-zA-z])$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is  valid')
        email.classList.remove('is-invalid')
        validEmail = true;

    } else {
        console.log('your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }


})
phone.addeventlistner('blur', () => {
    console.log("phone is blurred");

    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone is  valid')
        phone.classList.remove('is-invalid')
        validPhone = true;

    } else {
        console.log('your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addeventlistner('click', () => {

    console.log('you cliked on submit');
    //submit hyour form here
    console.log(validEmail, validUser, validPhone);

    let success = document.getElementById('success');
    success.classList.add('show');

    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');

        console.log('phone ,user,email are valid .submiting the form');
        let success = document.getElementById('success');
        //success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#failure').show();

    }
    else {
        console.log('one of phone, phone, user, email are not valid.Hence not submiting the form please correct the erorrs and try again')
        let failure = document.getElementById('failure');
        //failure.classList.add('show');
        //success.classList.remove('show');
        $('#success').hide();
        $('#success').show();
    }


    let failure = document.getElementById('failure');
    failure.classList.add('show');



})