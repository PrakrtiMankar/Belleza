

// check if user has login
let data = localStorage.getItem("loginData");
data = JSON.parse(data);
let loginData = data;

if(loginData == "" || loginData.length == 0 || loginData == null){
    alert("Please login to see wishlist");
    window.location.href = "login.html";
}

let wishBox = document.getElementById("main-wishlist");
let productBox = document.getElementById("product-box");
productBox.classList.add("row");
productBox.classList.add("wishlistBox");
// ✨✨ function to display wishlist products
showProducts();

function showProducts() {

    // fetch the wishlist Data
    let wishlistData = localStorage.getItem("wishlistData");
    let wishlistArr = wishlistData ? JSON.parse(wishlistData) : [];

    wishlistArr.map((item, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img id="pimg" src="${item.images}" />
            <h5>${item.pname}</h5>
            <p>${item.description.slice(0,22)}...</p>
            <div class="row " id="card-bottom"> 
                
                    <h6>₹${item.price}</h6>
                    <p id="star">☆☆☆☆☆</p>
                
            </div>

        `;

        //<button id="removeBtn">Remove</button>
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = `Remove`;
        removeBtn.id = "removeBtn";
        console.log(removeBtn)

        removeBtn.addEventListener('click', () => {
            // Remove the product from wishlistArr
            wishlistArr.splice(index, 1);

            // Update the localStorage with the updated array
            localStorage.setItem("wishlistData", JSON.stringify(wishlistArr));

            // Remove the card from the DOM
            card.remove();

            // Show an alert to the user
            alert(`Removed ${item.pname} from wishlist`);
        });

        card.append(removeBtn);
        productBox.append(card);
    });

}