import {getData} from "./crudOperations.js";
import {Icons} from "../assets/icons.js";
import {Images} from "../assets/images.js";

// check user is login ?


// ⛳ check for userData
let userArr = [];

// ✨✨main container of product
let main_Product = document.getElementById('main-product');

// ✨✨ side bar for filter and sorting
let sideBar = document.getElementById('side-bar');
sideBar.innerHTML = `
    <ul>
        <h3>Filter:</h3>
        <select id="filter">
            <option>All Products</option>
            <option>Fashion</option>
            <option>Beauty</option>
            <option>Luxury</option>
            <option>Skincare</option>
            <option>Accessories</option>
        </select>
        <h3>Sort:</h3>
        <select id="sort">
            <option>none</option>
            <option>A-Z</option>
            <option>Z-A</option>
        </select>
    </ul>
    
    <h5></h5>
`;

// ✨✨ product card container
let pBox = document.getElementById('product-box');

// ✨✨ top-section
let topSection = document.createElement('section');
topSection.innerHTML = ``;


// ✨✨ view Product
let viewBox = document.createElement('div');
viewBox.classList.add('viewBox');
// viewBox.innerHTML = 

let closeView = document.createElement('button');
closeView.id = 'closeView';
closeView.innerHTML = `<img id="crossIcon" src="${Icons.cross}" />`;
closeView.addEventListener('click', () => {
    viewBox.style.display = "none";

    //removing previous view product detials
    let emptyViewProduct = '';
    localStorage.setItem("viewProductData", emptyViewProduct);
    window.location.reload();
})

viewBox.append(closeView);

function getViewData() {
    let retriveData = localStorage.getItem("viewProductData");
    let viewData = JSON.parse(retriveData);
    console.log(retriveData);
    
    let viewPcard = document.createElement('div');
    viewPcard.classList.add('viewPcard');
    viewPcard.innerHTML = `
        <img id="viewImg" src="${viewData[0].images}" />

        <div class="viewDetailsBox">
            <div id="viewDetailsId" class="viewDetails" >
            <p>${viewData[0].pname} </p>
            <h4>${viewData[0].description}...</h4>
            <h2>₹${viewData[0].price} <span>30% OFF</span> </h2>
            <h5>MRP ₹<span>4,499</span> Inclusive of all taxes</h5>
            </div>

            <div class="brandCard">
                <h5>ABOUT MIRAGGIO</h5>
                <div class="brandImg">
                    <img src="${Images.brandLogo}" />
                    <p>Miraggio pushes the boundaries of modern accessories by constantly reinventing fashion with its curated collections. Their accessories are designed to empower women.</p>

                </div>
            </div>
        </div>
    `;
    
    viewBox.append(viewPcard);
}

document.body.append(viewBox);


// ⛳ product array
let productArr = [];

// ➿ function to get product data
const fetchProducts = async () => {
    const token = 'products';
    productArr = await getData(token);
    if(productArr){
        console.log('successfully retrived data', productArr);
        showProducts(productArr);
    }
    else{
        console.log('failed to fetch data')
    }
}
fetchProducts();

// ➿ fucntion to display products
function showProducts(arr) {
    //removing previous view product detials
    let emptyViewProduct = '';
    localStorage.setItem("viewProductData", JSON.stringify(emptyViewProduct));

    // ⛳product card
    arr.map((item, index) => {
        let desp = window.innerWidth < 800 ? `${item.description.slice(0,20)}...` :  `${item.description.slice(0,40)}...`;
        let pCard = document.createElement('div');
        pCard.classList.add('card');

        // let imgBox = document.createElement('button');
         // imgBox.classList.add('viewProductBtn');
         // imgBox.id = "viewProductBtnId";
         // imgBox.innerHTML = `<img id="pimg" src="${item.images}" />`
 
         // <button class="viewProductBtn" id="viewProductBtnId" href="./product.html" onClick="viewProductPage()">
         //     <img id="pimg" src="${item.images}" />
        // </button>
        pCard.innerHTML = `
            <button class="viewProductBtn" id="viewProductBtnId">
                <img id="pimg" src="${item.images}" />
            </button>
            <div id="detail">
                <h5>${item.pname}</h5>
                <div class="row">
                    <h6>₹${item.price}</h6>

                    <div>
                        <img id="star" src="${Icons.star}" />
                        <img id="star" src="${Icons.star}" />
                        <img id="star" src="${Icons.star}" />
                        <img id="star" src="${Icons.star}" />
                        <img id="star" src="${Icons.star}" />
                    </div>
                </div>
                <p>${desp}</p>
                
                <div class="row card-bottom">
                    <button class="add-to-cart">Add to Cart</button>
                    <button id="wishlistBtn" class="row">Wishlist <img id="heart-icon" src="${Icons.heart}" style="margin-right: -4px" /></button>

                </div>
            </div>
        `;

        //view the product on product page
        pCard.querySelector("#viewProductBtnId").addEventListener("click", () => {

            alert("show")
            
            let productToShow = [item, index];
            let data = JSON.stringify(productToShow);
            localStorage.setItem("viewProductData", data);
            // window.location.href = "./viewProduct.html";
            getViewData();
            viewBox.style.display = 'flex';
        })

        // Add event listener for the Add to Cart button
        pCard.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(item);
        });

        pCard.querySelector("#wishlistBtn").addEventListener("click", () => {
            addToWishlist(item);
        })

        pBox.append(pCard);
    })


    // console.log("product card");
};

// ➿ function to add product to wishlist
function addToWishlist(product){
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];

    // check if product is already in wishlist
    const existingProduct = wishlistData.find((p) => p.id === product.id);

    if(existingProduct){
        alert('product already present in wishlist');
    }
    else{
        wishlistData.push(product);
    }

    localStorage.setItem("wishlistData", JSON.stringify(wishlistData));
    alert(`${product.pname} added to wishlist`);

}

// ➿ Function to add product to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity
    } else {
        product.quantity = 1; // Set initial quantity
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.pname} has been added to your cart.`);
}

// ➿ function to filter and sort
let modifiedArr = []; // product arr after manipulation
let filter = document.getElementById('filter');
let sort = document.getElementById('sort');

// ⭐ filter fucntion
filter.addEventListener('change', () => {

    if(filter.value.toLowerCase() == 'all products'){
        modifiedArr = productArr
    }
    else{
        modifiedArr = productArr.filter((item, index) => {
            if(filter.value.toLowerCase() == item.category){
                return item
            }
        })
    }
    pBox.innerHTML = '';
    showProducts(modifiedArr);
    // console.log(modifiedArr, filter.value, 'fff');
})

// ⭐ sorting function
sort.addEventListener('change', () => {
    let sortedArr = modifiedArr.length == 0 ? productArr : modifiedArr
    // console.log(sortedArr.length, "sortedArr")

    if(sort.value.toLowerCase() != 'none'){
        sortedArr = sortedArr.sort((a,b) => {
            // console.log(a.pname, b.pname)
            const nameA =  a.pname.toUpperCase();
            const nameB =  b.pname.toUpperCase();
            if(sort.value.toLowerCase() == 'a-z'){
                if(nameA < nameB) {
                    return -1;
                }
                if(nameA > nameB) {
                    return 1;
                }
                return 0;
            }
            else{
                if(nameA < nameB) {
                    return 1;
                }
                if(nameA > nameB) {
                    return -1;
                }
                return 0;
            }

        })
    }
    
    pBox.innerHTML = '';
    showProducts(sortedArr)
});

console.log(pBox, filter, sort);

// 📋 category and price future scope
{/* <ul>
    <h3>Categories</h3>
    <li><input type="checkbox" name="tops">Tops</input></li>
    <li><input type="checkbox" name="sweatshirt">Sweatshirt</input></li>
    <li><input type="checkbox" name="jacket">Jeans</input></li>
    </ul>

    <ul>
    <h3>Price</h3>
    <li><input type="checkbox" name="5000above>">above 5000</input></li>
    <li><input type="checkbox" name="5000-2000">5000 - 2000</input></li>
    <li><input type="checkbox" name="below2000">below 2000</input></li>
    </ul> 
*/}