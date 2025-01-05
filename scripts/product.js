import {getData} from "./crudOperations.js";

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
topSection.innerHTML = ``

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
    // ⛳product card
    arr.map((item, index) => {
        let desp = window.innerWidth < 800 ? `${item.description.slice(0,20)}...` :  `${item.description.slice(0,40)}...`;
        let pCard = document.createElement('div');
        pCard.classList.add('card');
        pCard.innerHTML = `
            <img id="pimg" src="${item.images}" />
            <div id="detail">
                <h5>${item.pname}</h5>
                <div class="row">
                    <h6>₹${item.price}</h6>

                    <div>
                        <img id="star" src="../assets/icons/star.png" />
                        <img id="star" src="../assets/icons/star.png" />
                        <img id="star" src="../assets/icons/star.png" />
                        <img id="star" src="../assets/icons/star.png" />
                        <img id="star" src="../assets/icons/star.png" />
                    </div>
                </div>
                <p>${desp}</p>

                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        // Add event listener for the Add to Cart button
        pCard.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(item);
        });

        pBox.append(pCard);
    })


    console.log("ppp");
};

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