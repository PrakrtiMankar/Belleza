import {Icons} from "../assets/icons.js";


let footer = document.getElementById('footer');

footer.innerHTML = `<footer class="belleza-footer">
  <div class="footer-container">
    <!-- Section 1: About Belleza -->
    <div class="footer-section">
      <h4>About Belleza</h4>
      <ul>
        <li><a href="/about-us">Who We Are</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/press">Press</a></li>
        <li><a href="/blog">Beauty Blog</a></li>
      </ul>
    </div>

    

    <!-- Section 2: Categories -->
    <div class="footer-section">
      <h4>Categories</h4>
      <ul>
        <li><a href="/beauty">Beauty</a></li>
        <li><a href="/clothing">Clothing</a></li>
        <li><a href="/accessories">Accessories</a></li>
        <li><a href="/skincare">Skincare</a></li>
        <li><a href="/luxury">Luxury</a></li>
      </ul>
    </div>

    

    <!-- Section 3: Customer Support -->
    <div class="footer-section">
      <h4>Customer Support</h4>
      <ul>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="/faq">FAQs</a></li>
        <li><a href="/track-order">Track Your Order</a></li>
        <li><a href="/shipping">Shipping & Delivery</a></li>
        <li><a href="/returns">Returns & Cancellations</a></li>
      </ul>
    </div>

    <!-- Section 4: Policies -->
    <div class="footer-section">
      <h4>Policies</h4>
      <ul>
        <li><a href="/terms">Terms & Conditions</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
      </ul>
    </div>

    <!-- Section 5: Social Media -->
    <div class="footer-section">
      <h4>Follow Us</h4>
      <div class="social-icons">
        <a href="https://instagram.com" target="_blank"><img src="${Icons.social[0]}" alt="Instagram"></a>
        <a href="https://pinterest.com" target="_blank"><img src="${Icons.social[1]}" alt="Pinterest"></a>
        <a href="https://Youtube.com" target="_blank"><img src="${Icons.social[2]}" alt="Youtube"></a>
        <a href="https://X.com" target="_blank"><img src="${Icons.social[3]}" alt="X"></a>
      </div>
    </div>

    <!-- Section 6: Payment Methods -->
    <div class="footer-section">
      <h4>Payment Methods</h4>
      <img src="${Icons.payment[0]}" alt="Visa">
      <img src="${Icons.payment[1]}" alt="Mastercard">
      <img src="${Icons.payment[2]}" alt="Paytm">
      <img src="${Icons.payment[3]}" alt="Google Pay">
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2024 Belleza. All Rights Reserved.</p>
    <p>Made with ❤️ for beauty, fashion, and skincare lovers.</p>
  </div>
</footer>
`