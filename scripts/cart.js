// Cart array to store selected products
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM elements
const cartItemsContainer = document.getElementById("cart-items");
cartItemsContainer.id = 'product-box';
const totalItemsElement = document.getElementById("total-items");
const totalPriceElement = document.getElementById("total-price");

// Function to render cart items
function renderCart() {
    cartItemsContainer.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty. Add products to see them here!</p>";
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.classList.add("card");

        itemDiv.innerHTML = `
            <img id="pimg" src="${item.images}" alt="${item.pname}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.pname}</h4>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    updateSummary();
}

// Function to update summary (total items and price)
function updateSummary() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice;
}

// Function to remove item from cart
cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const index = event.target.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
});

// Initial render
renderCart();

// Checkout button functionality
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Checkout process will begin.");
    }
});
