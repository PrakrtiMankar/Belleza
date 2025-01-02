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
            <a>Fashion</a>
            <a>Beauty</a>
            <a>Luxury</a>
            <a>Skincare</a>
            <a>Accessories</a>
        <div>`;

nav.append(navBottom);


// 🧧 🧧 floating menu for smaller device

// if(window.innerWidth <= 600){
    let IsMenuShown = false;
    let MenuBox = document.createElement('div');
    MenuBox.style.display = 'none';
    document.body.append(MenuBox);

    let menu = document.createElement('div');
    menu.innerHTML = `<div class="menu-box">
        <a href="index.html"><img  src="${Images.logo}"/></a>
        <div id="menu-box"></div>
    </div>`;
    document.body.append(menu);

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
                        <a>Fashion</a>
                        <a>Beauty</a>
                        <a>Luxury</a>
                        <a>Skincare</a>
                        <a>Accessories</a>
                    <div>
            
                    <div>
                    <a id="signup" class="row">SignUp <img id="user-icon" src="${Icons.user}"/> </a>
                    <a class="row">Cart <img id="cart-icon" src="${Icons.cart}"/> </a>
                    </div>

                </section>
            `;
        }
    }
    
// }



console.log(Images.banners)
