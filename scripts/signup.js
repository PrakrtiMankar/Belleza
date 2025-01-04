import {Images} from "../assets/images.js";
import {postData} from "./crudOperations.js";

let header = document.getElementById('header');
header.innerHTML = `
    <div class="header-nav">
        <img src="${Images.logo}" />
    </div>
`;

let signupBox = document.querySelector('.main-signup');
//signup form
let form = document.querySelector('form');
let userData = [];

form.addEventListener("submit", () => {
    event.preventDefault()
    let fullname = form.fullName.value
    let username = form.username.value
    let email = form.email.value
    let password = form.password.value

    if(fullname == '' || username == '' || email == '' || password == ''){
        let emptyString = fullname == '' ? "Full Name" : username == '' ? "username" : email == '' ? "email" : password == '' ? "password" : null;
        alert(`Enter ${emptyString}`)
    }
    // else{
        signupFunc(fullname, username, email, password)
    // }

})

function signupFunc(fullname, username, email, password) {
    event.preventDefault();
    userData = {
        "fullname": fullname,
        "username": username,
        "email": email,
        "password": password,
    };

    let bodyContent = JSON.stringify(userData);
    // console.log(bodyContent)
    postData(userData, bodyContent);
}


