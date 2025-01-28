import {Images} from "../assets/images.js";

//login the user and authenticate the password
let userArr=[];

let header = document.getElementById('header');
header.innerHTML = `
    <div class="header-nav">
        <img src="${Images.logo}" />
    </div>
`;

let form = document.querySelector('form');

form.email.value = 'new@gmail.com'
form.password.value = '@user'

form.addEventListener("submit", () => {
    event.preventDefault()
    let email = form.email.value
    let password = form.password.value
    // let email = 'p@gmail.com'
    // let password = '@p'

    if(email == '' || password == ''){
        let emptyString = email == '' ? "email" : password == '' ? "password" : null;
        alert(`Enter ${emptyString}`)
    }

    LoginFunc(email, password)

})

function LoginFunc(email, password) {
    userArr[userArr.length] = {
        "email": email,
        "password": password
    };

    console.log(userArr);

    fetch(`https://heady-pickle-lightyear.glitch.me/users`)
    .then((res) => res.json())
    .then((data) => {
        let user = data.filter((el, i) => el.email == email)
        if(user.length!=0) {
            if(user[0].password == password){
                alert('Login success...');
                //store user data in Local Storage
                localStorage.setItem("loginData", JSON.stringify(user[0]))
                window.location.href = "index.html";
            }
            else{
                alert('Incorrect Password! Please enter correct password.')
            }
        } else {
            //user not present
            alert('User not registered! Please Signup...')
            window.location.href = "signup.html";
        }
    })

}