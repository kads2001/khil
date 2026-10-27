(function () {
  'use strict';

  var hasPreloader = !!document.getElementById('khil-preloader');
  var preloaderMarkup = hasPreloader ? '' : `
    <!-- ==========================================================================
         KHIL CLASSIC ANIMATED LUXURY PRELOADER
         ========================================================================== -->
    <div class="khil-preloader-wrapper loader-wrapper" id="khil-preloader" role="status" aria-live="polite" aria-label="Loading Kamat Hotels">
        <div class="khil-preloader-backdrop-effects">
            <div class="khil-preloader-orb khil-preloader-orb-1"></div>
            <div class="khil-preloader-orb khil-preloader-orb-2"></div>
        </div>
        
        <div class="khil-preloader-inner loader">
            <!-- Classic Rotating Luxury Emblem Ring System -->
            <div class="khil-preloader-crest">
                <svg class="khil-crest-ring-outer" viewBox="0 0 200 200" aria-hidden="true">
                    <circle class="khil-ring-track" cx="100" cy="100" r="94" fill="none" stroke="rgba(160, 10, 168, 0.18)" stroke-width="1.5" stroke-dasharray="4 6" />
                    <circle class="khil-ring-solid" cx="100" cy="100" r="88" fill="none" stroke="url(#khilGoldPurpleGradHdr)" stroke-width="1.2" opacity="0.75" />
                    <circle cx="100" cy="6" r="3.5" fill="#D4AF37" />
                    <circle cx="194" cy="100" r="3.5" fill="#A00AA8" />
                    <circle cx="100" cy="194" r="3.5" fill="#D4AF37" />
                    <circle cx="6" cy="100" r="3.5" fill="#A00AA8" />
                    <defs>
                        <linearGradient id="khilGoldPurpleGradHdr" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#A00AA8" />
                            <stop offset="50%" stop-color="#D4AF37" />
                            <stop offset="100%" stop-color="#140253" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg class="khil-crest-ring-inner" viewBox="0 0 160 160" aria-hidden="true">
                    <circle cx="80" cy="80" r="74" fill="none" stroke="url(#khilInnerGradHdr)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="140 280" />
                    <defs>
                        <linearGradient id="khilInnerGradHdr" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#7d007d" stop-opacity="0" />
                            <stop offset="50%" stop-color="#A00AA8" stop-opacity="1" />
                            <stop offset="100%" stop-color="#D4AF37" stop-opacity="1" />
                        </linearGradient>
                    </defs>
                </svg>

                <div class="khil-crest-glow"></div>

                <div class="khil-preloader-logo">
                    <img src="assets/images/logo-2.png" alt="Kamat Hotels (India) Limited Logo">
                </div>
            </div>

            <div class="khil-preloader-brand">
                <span class="khil-preloader-title">KAMAT HOTELS</span>
                <span class="khil-preloader-corp">(INDIA) LIMITED</span>
                
                <div class="khil-preloader-divider">
                    <span class="khil-divider-line"></span>
                    <span class="khil-divider-icon">◆</span>
                    <span class="khil-divider-line"></span>
                </div>
                
                <span class="khil-preloader-sub">SINCE 1986 • ASIA'S PIONEERING HOSPITALITY</span>
            </div>

            <div class="khil-preloader-meter">
                <div class="khil-preloader-progress-track">
                    <div class="khil-preloader-progress-bar" id="khil-preloader-bar">
                        <span class="khil-progress-sparkle"></span>
                    </div>
                </div>
                <div class="khil-preloader-status-row">
                    <span class="khil-preloader-status-text" id="khil-preloader-status">Curating bespoke hospitality...</span>
                    <span class="khil-preloader-counter" id="khil-preloader-percent">0%</span>
                </div>
            </div>
        </div>
    </div>
  `;

  document.write(preloaderMarkup + `
<header class="header-one header-relative header--sticky">
    <div class="khil-header-container">
        <div class="header-wrapper-main">
            <nav class="nav-area" aria-label="Primary navigation">
                <ul class="khil-nav">
                    <li class="main-nav">
                        <a href="index.html">Home</a>
                    </li>

    
                       



                    <li class="main-nav has-dropdown">
                        <a href="#">Who We Are</a>
                        <div class="khil-dropdown-who">





                            <div class="who-dropdown-wrapper">
                                <!-- Left Column: Rich Navigation Cards -->
                                <ul class="who-links-list">
                                    <li class="who-link-item">
                                        <a href="about.html">
                                            <div class="item-content">
                                                <span class="item-title">About Us</span>
                                               
                                            </div>
                                        </a>
                                    </li>

                                    
                                    <li class="who-link-item">
                                        <a href="milestone.html">
                                            <div class="item-content">
                                                <span class="item-title">Milestones</span>
                                                
                                            </div>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="board-of-directors.html">
                                            <div class="item-content">
                                                <span class="item-title">Board of Directors</span>
                                                
                                            </div>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="committees-of-board.html">
                                            <div class="item-content">
                                                <span class="item-title">Committees of Board</span>
                                             
                                            </div>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="directorships-of-the-board-of-directors.html">
                                            <div class="item-content">
                                                <span class="item-title">Directorships of the Board</span>
                                              
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                               
                           
                            </div>
                        </div>
                    </li>

                    <!-- Our Brands Dropdown -->
                    <li class="main-nav ">
                        <a href="brands.html">Our Brands</a>
                       
                    </li>

                    <!-- Investors Mega Menu -->
                    <li class="main-nav has-dropdown mega-menu">
                        <a href="#">Investors</a>
                        <div class="khil-mega-dropdown">
                            <div class="investor-link-groups" id="investorMegaGrid">
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Financials</div>
                                    <ul class="mega-links-list">
                                        <li><a href="annual-reports.html">Annual Reports</a></li>
                                        <li><a href="quarterly-results.html">Quarterly Reports</a></li>
                                        <li><a href="khil-subsidiary.html">Khil Subsidiary</a></li>
                                        <li><a href="investor-presentations.html">Investor Presentations</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Shareholding &amp; Dividends</div>
                                    <ul class="mega-links-list">
                                        <li><a href="shareholding-pattern.html">Shareholding Pattern</a></li>
                                        <li><a href="unclaimed-shares-dividend.html">Unclaimed Shares &amp; Dividend</a></li>
                                        <li><a href="unclaimed-dividend.html">Unclaimed Dividend</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Investor Support</div>
                                    <ul class="mega-links-list">
                                        <li><a href="investor-contact.html">Investor Contact Details</a></li>
                                        <li><a href="investor-notices.html">Investor Notices</a></li>
                                        <li><a href="investor-grievance.html">Investor Grievance</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Governance</div>
                                    <ul class="mega-links-list">
                                        <li><a href="related-party-policy.html">Related Party Policy</a></li>
                                        <li><a href="insider-trading.html">Insider Trading</a></li>
                                        <li><a href="other-policies.html">Other Policies</a></li>
                                        <li><a href="corporate-governance-reports.html">Governance Reports</a></li>
                                        <li><a href="appointment-letters-of-directors.html">Appointment Letters</a></li>
                                        <li><a href="Employee Stock Option Scheme 2026.pdf" target="_blank" rel="noopener noreferrer">ESOP Scheme 2026</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Disclosures Reg 62 (Debt)</div>
                                    <ul class="mega-links-list">
                                        <li><a href="financial-results-security-cover-certificate.html">Financial Results &amp; Security Cover</a></li>
                                        <li><a href="record-date-intimation.html">Record Date Intimation</a></li>
                                        <li><a href="investor-grievance-debt.html">Investor Grievance Debt</a></li>
                                        <li><a href="interest-payment-and-redemption.html">Interest Payment &amp; Redemption</a></li>
                                        <li><a href="statement-of-deviation-and-variation.html">Statement of Deviation</a></li>
                                        <li><a href="other-disclosures-debt.html">Other Disclosures Debt</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Meetings</div>
                                    <ul class="mega-links-list">
                                        <li><a href="board-meeting.html">Board Meeting Intimation</a></li>
                                        <li><a href="board-meeting-outcome.html">Board Meeting Outcome</a></li>
                                        <li><a href="annual-general-meeting.html">Annual General Meeting</a></li>
                                        <li><a href="extra-ordinary-general-meeting.html">Extra-Ordinary General Meeting</a></li>
                                        <li><a href="postal-ballot.html">Postal Ballot</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">Secretarial &amp; Compliance</div>
                                    <ul class="mega-links-list">
                                        <li><a href="trading-window-closure.html">Trading Window Closure</a></li>
                                        <li><a href="structural-digital-database.html">Structural Digital Database</a></li>
                                        <li><a href="reconciliation-share-capital-audit.html">Reconciliation Share Capital</a></li>
                                        <li><a href="related-party-transactions.html">Related Party Transactions</a></li>
                                        <li><a href="annual-secretarial-compliance-report.html">Annual Secretarial Compliance</a></li>
                                        <li><a href="newspaper-publications.html">Newspaper Publications</a></li>
                                        <li><a href="book-closure-intimation.html">Book Closure Intimation</a></li>
                                        <li><a href="merger.html">Merger</a></li>
                                    </ul>
                                </div>
                                <div class="investor-link-group">
                                    <div class="sub-section-divider">SEBI &amp; Filings</div>
                                    <ul class="mega-links-list">
                                        <li><a href="regulation-30.html">Regulation 30 SEBI (LODR)</a></li>
                                        <li><a href="disclosures-under-Regulation-46-of-the-LODR.html">Disclosures under Reg 46</a></li>
                                        <li><a href="credit-ratings.html">Credit Ratings</a></li>
                                        <li><a href="complaince-certificate.html">Compliance Cert Reg 40(9)</a></li>
                                        <li><a href="complaince-certificate-2.html">Compliance Cert Reg 7(3)</a></li>
                                        <li><a href="confirmation-certificate.html">Confirmation Cert Reg 74(5)</a></li>
                                        <li><a href="sast-regulations.html">SAST Regulations</a></li>
                                        <li><a href="investor-analyst-meet.html">Investor/Analyst Meet</a></li>
                                        <li><a href="others.html">Others</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="main-nav">
                        <a href="csr.html">CSR</a>
                    </li>
                    <li class="main-nav">
                        <a href="media.html">Media</a>
                    </li>
                </ul>
                
            </nav>
        <div class="logo-area khil-logo-tab">
                <a href="index.html" aria-label="Kamat Hotels (India) Ltd.">
                    <img src="assets/images/logo-2.png" alt="Kamat Hotels (India) Ltd.">
                </a>
            </div>
            <div class="header-right-group">
                <nav class="nav-area nav-area-right" aria-label="Secondary navigation">
                    <ul class="khil-nav">
                        
                        <li class="main-nav">
                            <a href="contact.html">Contact</a>
                        </li>
                        <li class="main-nav">
                            <a href="careers.html">Careers</a>
                        </li>
                    </ul>
                </nav>

                <div class="header-action-buttons">
                    <a href="employee-login.html" class="btn-employer-login khil-btn-outline">
                        <span>Employer Login</span>
                        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a href="https://bookings.orchidhotel.com/?propertyId=246&amp;chainId=3685&amp;dlyx_xs=05a400bc797cdec0bc0e1655ea41621c&amp;_gl=1*hsiqx0*_gcl_au*MTU4Njg4MzUwMS4xNzIyMjI5MzY2Ljc2ODcyNzYwMy4xNzIyNDA4NTc1LjE3MjI0MDg1NzQ." target="_blank" class="btn-book-now">
                        <span>Book Now</span>
                        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <div class="menu-btn-toggle khil-toggle">
                        <svg width="22" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="14" width="20" height="2" fill="#121826"></rect>
                            <rect y="7" width="20" height="2" fill="#121826"></rect>
                            <rect width="20" height="2" fill="#121826"></rect>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div id="side-bar" class="side-bar header-two">
    <div class="rts-sidebar-menu-desktop">
        <div class="logo-area">
            <a class="logo" href="index.html"><img src="assets/images/logo-2.png" alt="Kamat Hotels (India) Ltd."></a>
            <button class="close-icon-menu" aria-label="Close_Button"><i class="far fa-times"></i></button>
        </div>

        <!-- Mobile CTA Action Buttons -->
        <div class="khil-mobile-actions">
            <a href="https://bookings.orchidhotel.com/?propertyId=246&amp;chainId=3685&amp;dlyx_xs=05a400bc797cdec0bc0e1655ea41621c&amp;_gl=1*hsiqx0*_gcl_au*MTU4Njg4MzUwMS4xNzIyMjI5MzY2Ljc2ODcyNzYwMy4xNzIyNDA4NTc1LjE3MjI0MDg1NzQ." target="_blank" class="btn-book-now">
                <i class="fa-regular fa-calendar-check"></i>
                <span>Book Now</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="employee-login.html" class="btn-employer-login khil-btn-outline">
                <span>Employer Login</span>
                <i class="fa-regular fa-arrow-right"></i>
            </a>
        </div>

        <div class="mobile-menu-main">
            <nav class="nav-main mainmenu-nav mt--20">
                <ul class="mainmenu metismenu" id="mobile-menu-active">
                    <li>
                        <a href="index.html" class="main">Home</a>
                    </li>
                    <li class="has-droupdown">
                        <a href="#" class="main">Who We Are</a>
                        <ul class="submenu mm-collapse">
                            <li><a href="about.html">About</a></li>
                            <li><a href="milestone.html">Milestones</a></li>
                            <li><a href="board-of-directors.html">Board of Directors</a></li>
                            <li><a href="committees-of-board.html">Committees of Board</a></li>
                            <li><a href="directorships-of-the-board-of-directors.html">Directorships of the Board of Directors</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html#brands" class="main">Our Brands</a>
                    </li>
                    <li class="has-droupdown">
                        <a href="#" class="main">Investors</a>
                        <ul class="submenu mm-collapse">
                            <li class="has-droupdown">
                                <a href="#" class="main">Financials</a>
                                <ul class="submenu mm-collapse">
                                    <li><a href="annual-reports.html">Annual Reports</a></li>
                                    <li><a href="quarterly-results.html">Quarterly Reports</a></li>
                                    <li><a href="khil-subsidiary.html">Khil Subsidiary</a></li>
                                    <li><a href="investor-presentations.html">Investor Presentations</a></li>
                                </ul>
                            </li>
                            <li class="has-droupdown">
                                <a href="#" class="main">Disclosures</a>
                                <ul class="submenu mm-collapse">
                                    <li class="has-droupdown">
                                        <a href="#" class="main">Board Meeting</a>
                                        <ul class="submenu mm-collapse">
                                            <li><a href="board-meeting.html">Board Meeting Intimation</a></li>
                                            <li><a href="board-meeting-outcome.html">Board Meeting Outcome</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-droupdown">
                                        <a href="#" class="main">Annual General Meeting</a>
                                        <ul class="submenu mm-collapse">
                                            <li><a href="annual-general-meeting.html">Annual General Meeting</a></li>
                                            <li><a href="extra-ordinary-general-meeting.html">Extra-Ordinary General Meeting</a></li>
                                            <li><a href="postal-ballot.html">Postal Ballot</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-droupdown">
                                        <a href="#" class="main">Insider Trading Regulations</a>
                                        <ul class="submenu mm-collapse">
                                            <li><a href="trading-window-closure.html">Trading Window Closure</a></li>
                                            <li><a href="structural-digital-database.html">Structural Digital Database</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="investor-analyst-meet.html">Investor/Analyst Meet</a></li>
                                    <li><a href="unclaimed-dividend.html">Unclaimed Dividend</a></li>
                                    <li><a href="investor-grievance.html">Investor Grievance</a></li>
                                    <li><a href="reconciliation-share-capital-audit.html">Reconciliation of Share Capital Audit</a></li>
                                    <li><a href="related-party-transactions.html">Related Party Transactions</a></li>
                                    <li><a href="annual-secretarial-compliance-report.html">Annual Secretarial Compliance Report</a></li>
                                    <li><a href="newspaper-publications.html">Newspaper Publications</a></li>
                                    <li><a href="book-closure-intimation.html">Book Closure Intimation</a></li>
                                    <li><a href="credit-ratings.html">Credit Ratings</a></li>
                                    <li><a href="complaince-certificate.html">Compliance Certificate under Reg 40(9) of SEBI (LODR) 2015</a></li>
                                    <li><a href="appointment-letters-of-directors.html">Appointment Letters of Directors</a></li>
                                    <li><a href="sast-regulations.html">SAST Regulations</a></li>
                                    <li><a href="confirmation-certificate.html">Confirmation Certificate under Regulation 74(5) of SEBI (D&amp;P) Regulations</a></li>
                                    <li><a href="complaince-certificate-2.html">Compliance Certificate Regulation 7(3) of SEBI (LODR) 2015</a></li>
                                    <li><a href="regulation-30.html">Regulation 30 of SEBI (LODR) 2015</a></li>
                                    <li><a href="others.html">Others</a></li>
                                    <li><a href="merger.html">Merger</a></li>
                                    <li><a href="Employee Stock Option Scheme 2026.pdf" target="_blank">ESOP <span class="badge-pdf">PDF</span></a></li>
                                </ul>
                            </li>
                            <li class="has-droupdown">
                                <a href="#" class="main">Corporate Governance</a>
                                <ul class="submenu mm-collapse">
                                    <li><a href="related-party-policy.html">Related Party Policy</a></li>
                                    <li><a href="insider-trading.html">Insider Trading</a></li>
                                    <li><a href="other-policies.html">Other Policies</a></li>
                                    <li><a href="corporate-governance-reports.html">Corporate Governance Reports</a></li>
                                </ul>
                            </li>
                            <li><a href="shareholding-pattern.html">Shareholding Pattern</a></li>
                            <li class="has-droupdown">
                                <a href="#" class="main">Disclosures under Regulation 62 of the LODR</a>
                                <ul class="submenu mm-collapse">
                                    <li><a href="financial-results-security-cover-certificate.html">Financial Results and Security Cover Certificate</a></li>
                                    <li><a href="record-date-intimation.html">Record Date Intimation</a></li>
                                    <li><a href="investor-grievance-debt.html">Investor Grievance Debt</a></li>
                                    <li><a href="interest-payment-and-redemption.html">Interest Payment and Redemption</a></li>
                                    <li><a href="statement-of-deviation-and-variation.html">Statement of Deviation and Variation</a></li>
                                    <li><a href="other-disclosures-debt.html">Other Disclosures Debt</a></li>
                                </ul>
                            </li>
                            <li class="has-droupdown">
                                <a href="#" class="main">Investor Information</a>
                                <ul class="submenu mm-collapse">
                                    <li><a href="investor-contact.html">Investor Contact Details</a></li>
                                    <li><a href="investor-notices.html">Investor Notices</a></li>
                                </ul>
                            </li>
                            <li><a href="unclaimed-shares-dividend.html">Unclaimed Shares and Dividend</a></li>
                            <li><a href="disclosures-under-Regulation-46-of-the-LODR.html">Disclosures under Regulation 46 of the LODR</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="csr.html" class="main">CSR</a>
                    </li>
                    <li>
                        <a href="media.html" class="main">Media</a>
                    </li>
                    <li>
                        <a href="contact.html" class="main">Contact</a>
                    </li>
                    <li>
                        <a href="careers.html" class="main">Careers</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="body d-none d-xl-block">
            <div class="about-us">
                <h4>About KHIL</h4>
                <p>
                    Kamat Hotels (India) Ltd. is Asia's pioneering hospitality chain of environmentally sensitive 5-star hotels & resorts, leading the way in sustainable luxury hospitality.
                </p>
            </div>
            <div class="get-in-touch">
                <h4>Get In Touch</h4>
                <div class="wrapper">
                    <div class="single">
                        <i class="fas fa-phone-alt"></i>
                        <a href="tel:+912226164000">+91 22 2616 4000</a>
                    </div>
                    <div class="single">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:cs@khil.com">cs@khil.com</a>
                    </div>
                    <div class="single">
                        <i class="fas fa-globe"></i>
                        <a href="https://www.khil.com" target="_blank">www.khil.com</a>
                    </div>
                    <div class="single">
                        <i class="fas fa-map-marker-alt"></i>
                        <a href="#">70-C, Nehru Road, Vile Parle (East), Mumbai 400099</a>
                    </div>
                </div>
               <div class="social-wrapper-two menu">
                    <a href="https://www.facebook.com/KHILINDIA" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/KHILINDIA" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/kamat-hotels-india-limited-ba2a79171" aria-label="linkedin"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/results?search_query=kamat+hotel+india+limited" aria-label="youtube"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- mobile menu area end -->
</div>

<div id="anywhere-home" class=""></div>
`);

  // Ensure classic animated preloader controller is initialized on all pages
  if (!window.khilPreloaderScriptLoaded) {
    window.khilPreloaderScriptLoaded = true;
    var s = document.createElement('script');
    s.src = 'assets/js/khil-preloader.js';
    document.head ? document.head.appendChild(s) : document.body.appendChild(s);
  }
}());
