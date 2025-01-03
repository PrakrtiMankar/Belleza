import {Images} from '../assets/images.js';
// main-container of home content
let main_Home = document.querySelector('.main-home');

// banners ✨✨
showBanners();
function showBanners() {
    let bannerArr = Images.Home_banners;
    let bannerSection = document.createElement('section');
    main_Home.append(bannerSection);

    // Create an image element for the banner
    let bannerImg = document.createElement('img');
    bannerImg.src = bannerArr[0]; // Set the first image initially
    // bannerImg.classList.add('banner-img');
    bannerImg.style.transition = 'opacity 0.5s ease-in-out';

    bannerSection.append(bannerImg);

    // Variable to keep track of the current banner index
    let currentIndex = 0;

    // Function to update the banner image
    function updateBanner() {
        currentIndex = (currentIndex + 1) % bannerArr.length; // Cycle through the images
        bannerImg.src = bannerArr[currentIndex];
    }

    // Set an interval to change the banner every 3 seconds
    setInterval(updateBanner, 3000);
}

// offers ✨✨
let offerBox = document.createElement('div');
    offerBox.innerHTML = `
        <h3 id="offer-h4"><hr />Exclusive - New Year Offers | New Year - New Trends - New You
        <hr />
        </h3>
    `;

main_Home.append(offerBox);

showOffers();

function showOffers() {

    let offerSection = document.createElement('offer');
    offerBox.append(offerSection);

    let offerArr = Images.offers;
    
    offerArr.map((item, index) => {
        let offerImg = document.createElement('img');
        offerImg.src = item;
        offerSection.append(offerImg);
    })

}

// boards ✨✨
let boardBox = document.createElement('div');
boardBox.classList.add('board');
let offerH4 = document.createElement('h4');
offerH4.innerHTML = `
<h3 id="offer-h4">
    <hr id="hr"/>
    Weekly Fashion Inspo | ❁ Your Style Guide ❁ | Fashion Boards
    <hr id="hr"/>
</h3>`;
main_Home.append(offerH4);

let boardRow = document.createElement('div');
boardRow.classList.add('board-row');
boardBox.append(boardRow);
main_Home.append(boardBox);

showBoards(0, 3000);
showBoards(1, 3160);
showBoards(2, 3340);

function showBoards(start_index, duration) {

    let boardSection = document.createElement('board');
    // boardSection.style.background = 'red';
    // boardSection.style.dislpay = 'grid';
    // boardSection.style.gridTemplateColumns = 'auto auto'
    boardBox.append(boardSection);

    let boardArr = Images.boards;
    
    let boardImg = document.createElement('img');
    boardImg.src = boardArr[start_index]; // Set the first image initially
    boardImg.style.transition = 'opacity 0.5s ease-in-out';
    boardSection.append(boardImg);

    let currentIndex = start_index;
    function updateBanner() {
        currentIndex = (currentIndex + 1) % boardArr.length; // Cycle through the images
        boardImg.src = boardArr[currentIndex];
    }
    setInterval(updateBanner, duration);

}
