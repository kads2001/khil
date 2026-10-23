(function () {
  'use strict';

  document.write(`
    <footer class="khil-shared-footer">
      <div class="khil-footer-container">
        <div class="khil-footer-grid">
          <!-- Left Column: Brand & Newsletter -->
          <div class="khil-footer-brand-col">
            <a class="khil-footer-brand" href="index.html" aria-label="Kamat Hotels (India) Limited home">
              <img src="assets/images/logo-2.png" alt="Kamat Hotels (India) Limited" class="khil-footer-logo-img">
            </a>
            <p class="khil-footer-subscribe-text">Subscribe to our newsletter for the latest<br>news and updates from Kamat Hotels.</p>
            <form class="khil-footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
              <input type="email" class="khil-footer-input" placeholder="Enter your email..." required aria-label="Enter your email">
              <button type="submit" class="khil-footer-send-btn">Send Now</button>
            </form>
          </div>

          <!-- Column 1: Company -->
          <div class="khil-footer-column">
            <h4 class="khil-footer-heading">Company</h4>
            <ul class="khil-footer-links">
              <li><a href="about.html">About Us</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="index.html#brands">Our Brands</a></li>
              <li><a href="media.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <!-- Column 2: Our Hotels -->
          <div class="khil-footer-column">
            <h4 class="khil-footer-heading">Our Hotels</h4>
            <ul class="khil-footer-links">
              <li><a href="index.html#brands">The Orchid Hotels</a></li>
              <li><a href="index.html#brands">Fort JadhavGADH</a></li>
              <li><a href="index.html#brands">Mahodadhi Palace</a></li>
              <li><a href="index.html#brands">Lotus Resorts</a></li>
              <li><a href="index.html#brands">IRA by Orchid Hotels</a></li>
            </ul>
          </div>

          <!-- Column 3: Resources -->
          <div class="khil-footer-column">
            <h4 class="khil-footer-heading">Resources</h4>
            <ul class="khil-footer-links">
              <li><a href="media.html">Media &amp; News</a></li>
              <li><a href="https://khil.com/investors/annual-reports/annual-reports.html" target="_blank" rel="noopener noreferrer">Annual Reports</a></li>
              <li><a href="https://khil.com/investors/quarterly-results/quarterly-results.html" target="_blank" rel="noopener noreferrer">Quarterly Results</a></li>
              <li><a href="https://khil.com/investors/corporate-governance-reports.html" target="_blank" rel="noopener noreferrer">Corporate Governance</a></li>
              <li><a href="contact.html">Get in Touch</a></li>
            </ul>
          </div>

          <!-- Column 4: Social Media -->
          <div class="khil-footer-column">
            <h4 class="khil-footer-heading">Social Media</h4>
            <ul class="khil-footer-links">
              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright Row -->
        <div class="khil-footer-bottom">
          <div class="khil-footer-copy">
            Copyright &copy; 2026. Kamat Hotels (India) Limited. All rights reserved.
          </div>
          <div class="khil-footer-bottom-links">
            <a href="about.html">About Company</a>
            <a href="index.html#brands">Our Brands</a>
            <a href="media.html">News</a>
          </div>
        </div>
      </div>
    </footer>
  `);
}());
