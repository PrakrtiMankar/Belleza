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
                <a id="signupBtn"><img id="user-icon" src="${Icons.user}"/> SignUp</a>
                <a class="row"><img id="cart-icon" src="${Icons.cart}"/> Cart</a>
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

    })

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
                    <a id="signup" class="row" href="../signup.html">
                        SignUp <img id="user-icon" src="${Icons.user}"/> 
                    </a>
                    <a class="row" href="../cart.html">
                        Cart <img id="cart-icon" src="${Icons.cart}"/> 
                    </a>
                    </div>

                </section>
            `;
        }
    }

