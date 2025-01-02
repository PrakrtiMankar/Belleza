import {Images} from '../assets/images.js';
// main-container of home content
let main_Home = document.querySelector('.main-home');

// banners ✨✨
showBanners();
// console.log(Images.Home_banners);
function showBanners() {
    let bannerArr = Images.Home_banners;
    let bannerSection = document.createElement('section');
    main_Home.append(bannerSection);

    // bannerArr.map((item, index) => {

        
    //     let banner_Img = document.createElement('img');
    //     banner_Img.src = item;

        

    //     setInterval(() => {
    //         // bannerSection.append(banner_Img);
    //         // bannerSection.innerHTML = '';
    //     }, 3000);
    // })

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

// footer ✨✨