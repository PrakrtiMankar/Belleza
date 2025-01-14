import {Icons} from "../assets/icons.js";
import {Images} from "../assets/images.js"
let nav = document.querySelector('nav');

nav.innerHTML = `
    <div class="nav-box">
        <div class="top-line row">
            <a href="index.html"><img id="logo" src="./assets/logo/belleza.png" /></a>
            <div class="row">
                <div class="search-bar row">
                    <img src="${Icons.search}" />  
                    <input placeholder="Search for products, brands and more"/>
                </div>
                <a id="signupBtn" class="signupLink" href="signup.html"><img id="user-icon" src="${Icons.user}"/> SignUp</a>
                <a id="wishlist" class="row" href="wishlist.html"><img id="heart-icon" src="${Icons.heart}"/>Wishlist</a>
                <a class="row" href="cart.html"><img id="cart-icon" src="${Icons.cart}"/> Cart</a>
            <div>
        </div>
    </div>
    `;
let navBottom = document.createElement('div');

navBottom.innerHTML = `<div class="nav-Bottom row">
            <a href="./product.html?fashion=fashion">Fashion</a>
            <a href="./product.html?beauty=beauty">Beauty</a>
            <a href="./product.html?luxury=luzury">Luxury</a>
            <a href="./product.html?skincare=skincare">Skincare</a>
            <a href="./product.html?accessories=accessories">Accessories</a>
        <div>`;

nav.append(navBottom);

// ⛳ wishlist shall be hidden at first
document.getElementById("wishlist").style.display = 'none'

// console.log(nav)

// 🧧 🧧 floating menu for smaller device
    // when window.innerWidth <= 600
let IsMenuShown = false;
let MenuBox = document.createElement('div');
    // MenuBox.style.display = 'none';
    nav.append(MenuBox);

let menu = document.createElement('div');
    menu.innerHTML = `<div class="menu-box">
        <a href="index.html"><img  src="${Images.logo}"/></a>
        <div id="menu-box"></div>
    </div>`;
    nav.append(menu);

let menuBtn = document.getElementById('menu-box');

menuBtn.innerHTML = `<button id="menu"><img src="${Icons.menu}"/></button>`
menuBtn.addEventListener('click', () => {
    
    IsMenuShown = !IsMenuShown;
    showNav(IsMenuShown);
});

function showNav(IsMenuShown) {
    if(IsMenuShown == false){
        MenuBox.style.display = 'none';
    }
    else if(IsMenuShown == true){
        MenuBox.style.display = 'block';
        MenuBox.innerHTML = `
            <section id="floating-nav">
                <div  class="search-bar row">
                    <img src="${Icons.search}" />  
                    <input placeholder="Search for products, brands and more"/>
                </div>
        
                <div class="categories">
                    <h4>Categories</h4>
                    <a href="./product.html?fashion=fashion">Fashion</a>
                    <a href="./product.html?beauty=beauty">Beauty</a>
                    <a href="./product.html?luxury=luxury">Luxury</a>
                    <a href="./product.html?skincare=skincare">Skincare</a>
                    <a href="./product.html?beauty=beauty">Accessories</a>
                <div>
        
                <div>
                <a id="signup" class="signupLink" class="row" href="signup.html">
                    SignUp <img id="user-icon" src="${Icons.user}"/> 
                </a>
                <a id="wishlist" class="row" href="wishlist.html">Wishlist<img id="heart-icon" src="${Icons.heart}"/></a>
                <a class="row" href="../cart.html">
                    Cart <img id="cart-icon" src="${Icons.cart}"/> 
                </a>
                <a id="logout" class="row" href="#">logout</a>
                </div>
            </section>
        `;
    }
}

// hover function on signup button
let signupBtn = document.querySelector('.signupLink');
let userAcc = document.createElement('div');
userAcc.classList.add('user-acc');

userAcc.innerHTML = `<button>Account<button><button id="logout" href="#">Logout</button>`;
userAcc.querySelector('#logout').addEventListener('click', () => {
    console.log('logout')
})
signupBtn.append(userAcc);

// check user data
window.onload = async () => {
    let loginData = await localStorage.getItem("loginData");
    loginData = JSON.parse(loginData);
    if(loginData==null){
        alert("Please Login...");
        window.location.href = "login.html";
    }
    else {
        let userBoxDisplay = 'none';
        console.log(loginData)
        signupBtn.href="#";
        signupBtn.innerHTML = ``;

        let userAccount = document.createElement('div')
        userAccount.classList.add('userAccClass');
        // userAccount.innerHTML =  `<select id="user-tab"><option>Account</option><option id="logout">Logout</option></select>`;
        userAccount.innerHTML =  `<button id="userBtn"><img id="user-icon" src="${Icons.user}"/> User</button>`;
        userAccount.querySelector("#userBtn").addEventListener('click', () => {
            userBox.style.display = userBoxDisplay === 'none' ? "flex" : "none";
        })
        let userBox = document.createElement('div');
        userBox.classList.add('userBox');
        userBox.style.display = userBoxDisplay;
        userBox.innerHTML = `
                <button id="accBtn">Account</button>
                <hr/>
                <button id="logout">Logout</button>
            
        `;

        userAccount.append(userBox);

        signupBtn.append(userAccount);

        document.getElementById("logout").addEventListener("click", function(){
            localStorage.removeItem("loginData");
            alert('Redirecting to HomePage...');
            window.location.href = "login.html";
        });

        // ⛳ wishlist shall be visible when user has loged in
        document.getElementById("wishlist").style.display = 'flex'

    }
};


