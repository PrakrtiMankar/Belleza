

// main container of product
let main_Product = document.getElementById('main-product');
// main_Product.innerHTML = `<h4>Product page</h4>`;

// side bar for filter and sorting
let sideBar = document.getElementById('side-bar');
sideBar.innerHTML = `
    <h4>Filter products</h4>
`;

// product card container
let pBox = document.getElementById('product-box');

// product card
let pCard = document.createElement('div');
pCard.classList.add('card');
pCard.innerHTML = `
    <img src="../assets/products/product(17 perfumes elegantes y duraderos de mujer que son MUY especiales).jpg" />
    <img src="../assets/products/product(17 perfumes elegantes y duraderos de mujer que son MUY especiales).jpg" />
    <img src="../assets/products/product(17 perfumes elegantes y duraderos de mujer que son MUY especiales).jpg" />
    <img src="../assets/products/product(17 perfumes elegantes y duraderos de mujer que son MUY especiales).jpg" />
    <img src="../assets/products/product(17 perfumes elegantes y duraderos de mujer que son MUY especiales).jpg" />

    `;
pBox.append(pCard);


console.log(pBox);