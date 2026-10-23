(function () {
  'use strict';

  const currentYear = new Date().getFullYear();

  document.write(`
    <footer class="khil-shared-footer">
      <div class="container">
        <div class="khil-footer-grid">
          <!-- Left Column: Brand & Newsletter -->
          <div class="khil-footer-brand-col">
            <a class="khil-footer-brand" href="index.html" aria-label="Kamat Hotels (India) Limited home">
              <img src="assets/images/logo-2.png" alt="Kamat Hotels (India) Limited">
            </a>
            <p class="khil-footer-subscribe-text">Subscribe to our newsletter for the latest news and updates from Kamat Hotels.</p>
            <form class="khil-footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
              <input type="email" class="khil-footer-input" placeholder="Enter your email..." required aria-label="Enter your email">
              <button type="submit" class="khil-footer-send-btn">Send Now</button>
            </form>
          </div>

          <!-- Column 2: Company -->
          <nav class="khil-footer-column" aria-label="Company">
            <h3 class="khil-footer-heading">Company</h3>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="index.html#brands">Our Brands</a></li>
              <li><a href="media.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>

          <!-- Column 3: Our Hotels -->
          <nav class="khil-footer-column" aria-label="Our Hotels">
            <h3 class="khil-footer-heading">Our Hotels</h3>
            <ul>
              <li><a href="index.html#brands">The Orchid Hotels</a></li>
              <li><a href="index.html#brands">Fort JadhavGADH</a></li>
              <li><a href="index.html#brands">Mahodadhi Palace</a></li>
              <li><a href="index.html#brands">Lotus Resorts</a></li>
              <li><a href="index.html#brands">IRA by Orchid Hotels</a></li>
            </ul>
          </nav>

          <!-- Column 4: Resources -->
          <nav class="khil-footer-column" aria-label="Resources">
            <h3 class="khil-footer-heading">Resources</h3>
            <ul>
              <li><a href="media.html">Media &amp; News</a></li>
              <li><a href="https://khil.com/investors/annual-reports/annual-reports.html" target="_blank" rel="noopener noreferrer">Annual Reports</a></li>
              <li><a href="https://khil.com/investors/quarterly-results/quarterly-results.html" target="_blank" rel="noopener noreferrer">Quarterly Results</a></li>
              <li><a href="https://khil.com/investors/corporate-governance-reports.html" target="_blank" rel="noopener noreferrer">Corporate Governance</a></li>
              <li><a href="contact.html">Get in Touch</a></li>
            </ul>
          </nav>

          <!-- Column 5: Social Media -->
          <nav class="khil-footer-column" aria-label="Social Media">
            <h3 class="khil-footer-heading">Social Media</h3>
            <ul>
              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </nav>
        </div>

        <!-- Bottom Copyright Row -->
        <div class="khil-footer-bottom">
          <p class="khil-footer-copy">Copyright &copy; ${currentYear}. Kamat Hotels (India) Limited. All rights reserved.</p>
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
