(function () {
  'use strict';
  document.write(`
<header class="header-one header-relative header--sticky">
    <div class="khil-header-container">
        <div class="header-wrapper-main">
            <div class="nav-area">
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
                                            <div class="item-icon-box">
                                                <i class="fa-regular fa-hotel"></i>
                                            </div>
                                            <div class="item-content">
                                                <span class="item-title">About Us</span>
                                                <span class="item-desc">Asia's pioneer in environmentally sensitive hotels</span>
                                            </div>
                                            <i class="fa-regular fa-chevron-right item-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="milestone.html">
                                            <div class="item-icon-box">
                                                <i class="fa-regular fa-flag"></i>
                                            </div>
                                            <div class="item-content">
                                                <span class="item-title">Milestones</span>
                                                <span class="item-desc">Four decades of hospitality excellence &amp; growth</span>
                                            </div>
                                            <i class="fa-regular fa-chevron-right item-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="board-of-directors.html">
                                            <div class="item-icon-box">
                                                <i class="fa-regular fa-user-tie"></i>
                                            </div>
                                            <div class="item-content">
                                                <span class="item-title">Board of Directors</span>
                                                <span class="item-desc">Executive stewardship &amp; strategic vision</span>
                                            </div>
                                            <i class="fa-regular fa-chevron-right item-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="committees-of-board.html">
                                            <div class="item-icon-box">
                                                <i class="fa-regular fa-clipboard-check"></i>
                                            </div>
                                            <div class="item-content">
                                                <span class="item-title">Committees of Board</span>
                                                <span class="item-desc">Audit, stakeholders &amp; governance oversight</span>
                                            </div>
                                            <i class="fa-regular fa-chevron-right item-arrow"></i>
                                        </a>
                                    </li>
                                    <li class="who-link-item">
                                        <a href="directorships-of-the-board-of-directors.html">
                                            <div class="item-icon-box">
                                                <i class="fa-regular fa-id-card-clip"></i>
                                            </div>
                                            <div class="item-content">
                                                <span class="item-title">Directorships of the Board</span>
                                                <span class="item-desc">Board representations &amp; corporate disclosures</span>
                                            </div>
                                            <i class="fa-regular fa-chevron-right item-arrow"></i>
                                        </a>
                                    </li>
                                </ul>

                                <!-- Right Column: Brand Feature Highlight Card -->
                                <div class="who-feature-card">
                                    <div>
                                        <span class="feat-tag"><i class="fa-solid fa-leaf"></i> Pioneering Eco-Luxury</span>
                                        <h4 class="feat-title">Kamat Hotels (India) Ltd.</h4>
                                        <p class="feat-desc">From the iconic 5-star Orchid Hotel to 300-year-old heritage Fort JadhavGADH, redefining conscious hospitality across India.</p>
                                    </div>
                                    <div>
                                        <div class="feat-stats">
                                            <span class="stat-pill"><i class="fa-regular fa-calendar-check"></i> Since 1986</span>
                                            <span class="stat-pill"><i class="fa-regular fa-award"></i> Multi-Awarded</span>
                                        </div>
                                        <a href="about.html" class="feat-btn">Discover Our Story <i class="fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Our Brands with Brand Showcase Dropdown -->
                    <li class="main-nav has-dropdown">
                        <a href="index.html#brands">Our Brands</a>
                        <div class="khil-dropdown-brands">
                            <div class="brands-grid">
                                <div class="brand-card-item">
                                    <a href="https://www.orchidhotel.com/" target="_blank">
                                        <div class="brand-top">
                                            <span class="brand-name">The Orchid Hotel</span>
                                            <span class="brand-badge badge-orchid">5-Star Ecotel</span>
                                        </div>
                                        <span class="brand-tagline">Asia's First Certified Eco-Friendly 5-Star Hotel</span>
                                        <span class="brand-locs"><i class="fa-regular fa-location-dot"></i> Mumbai &bull; Pune &bull; Jamnagar</span>
                                    </a>
                                </div>
                                <div class="brand-card-item">
                                    <a href="index.html#brands">
                                        <div class="brand-top">
                                            <span class="brand-name">Fort JadhavGADH</span>
                                            <span class="brand-badge badge-heritage">Heritage Fort</span>
                                        </div>
                                        <span class="brand-tagline">Maharashtra's Only 300-Year-Old Fort Heritage Hotel</span>
                                        <span class="brand-locs"><i class="fa-regular fa-location-dot"></i> Hadapsar &bull; Pune</span>
                                    </a>
                                </div>
                                <div class="brand-card-item">
                                    <a href="index.html#brands">
                                        <div class="brand-top">
                                            <span class="brand-name">Lotus Eco Resort</span>
                                            <span class="brand-badge badge-resort">Beach Resort</span>
                                        </div>
                                        <span class="brand-tagline">Serene Nature &amp; Beach Resorts in Pristine Landscapes</span>
                                        <span class="brand-locs"><i class="fa-regular fa-location-dot"></i> Konark &bull; Goa &bull; Murud</span>
                                    </a>
                                </div>
                                <div class="brand-card-item">
                                    <a href="index.html#brands">
                                        <div class="brand-top">
                                            <span class="brand-name">IRA by Orchid Hotels</span>
                                            <span class="brand-badge badge-contemporary">Upscale Leisure</span>
                                        </div>
                                        <span class="brand-tagline">Contemporary Business &amp; Leisure Experiences</span>
                                        <span class="brand-locs"><i class="fa-regular fa-location-dot"></i> Bhubaneswar &bull; Nashik &bull; Sambhajinagar</span>
                                    </a>
                                </div>
                            </div>
                            <div class="brands-bottom-bar">
                                <span>Experience world-class sustainable hospitality</span>
                                <a href="index.html#brands">View All Destinations <i class="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </li>

                    <!-- Investors Mega Menu -->
                    <li class="main-nav has-dropdown mega-menu">
                        <a href="#">Investors</a>
                        <div class="khil-mega-dropdown">
                            <!-- Top Investor Bar: Pulse Status & Instant Search -->
                            <div class="investor-top-bar">
                                <div class="investor-status-info">
                                    <span class="live-pulse-dot"></span>
                                    <span class="portal-title-tag">KHIL Investor Relations</span>
                                    <span class="stock-ticker-pill">BSE: <strong>526668</strong></span>
                                    <span class="stock-ticker-pill">NSE: <strong>KAMATHOTEL</strong></span>
                                    <span class="stock-ticker-pill d-none d-xxl-inline">ISIN: <strong>INE967C01018</strong></span>
                                </div>
                                <div class="investor-search-box">
                                    <i class="fa-regular fa-magnifying-glass"></i>
                                    <input type="text" id="investorSearchInput" placeholder="Quick find filings (e.g. AGM, Results, Secretarial)...">
                                </div>
                            </div>

                            <div class="row g-3 g-xl-4" id="investorMegaGrid">
                                <!-- Column 1: Financials & Shareholding -->
                                <div class="col-lg-3">
                                    <div class="mega-col-card">
                                        <div class="mega-col-header">
                                            <div class="header-left">
                                                <span class="header-icon"><i class="fa-regular fa-chart-line"></i></span>
                                                <span class="header-title">Financials</span>
                                            </div>
                                            <span class="header-count">4 Filings</span>
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="annual-reports.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Annual Reports</span> <span class="badge-new">Audited</span></a></li>
                                            <li><a href="quarterly-results.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Quarterly Reports</span> <span class="badge-new">Latest</span></a></li>
                                            <li><a href="khil-subsidiary.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Khil Subsidiary</span></a></li>
                                            <li><a href="investor-presentations.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Investor Presentations</span></a></li>
                                        </ul>

                                        <div class="sub-section-divider">
                                            <i class="fa-regular fa-pie-chart"></i> Shareholding &amp; Dividends
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="shareholding-pattern.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Shareholding Pattern</span></a></li>
                                            <li><a href="unclaimed-shares-dividend.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Unclaimed Shares &amp; Dividend</span></a></li>
                                            <li><a href="unclaimed-dividend.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Unclaimed Dividend</span></a></li>
                                        </ul>

                                        <div class="sub-section-divider">
                                            <i class="fa-regular fa-headset"></i> Investor Support
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="investor-contact.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Investor Contact Details</span></a></li>
                                            <li><a href="investor-notices.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Investor Notices</span></a></li>
                                            <li><a href="investor-grievance.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Investor Grievance</span> <span class="badge-form">Portal</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- Column 2: Corporate Governance & Debt Disclosures (Reg 62) -->
                                <div class="col-lg-3">
                                    <div class="mega-col-card">
                                        <div class="mega-col-header">
                                            <div class="header-left">
                                                <span class="header-icon"><i class="fa-regular fa-shield-halved"></i></span>
                                                <span class="header-title">Governance</span>
                                            </div>
                                            <span class="header-count">6 Items</span>
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="related-party-policy.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Related Party Policy</span></a></li>
                                            <li><a href="insider-trading.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Insider Trading</span></a></li>
                                            <li><a href="other-policies.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Other Policies</span></a></li>
                                            <li><a href="corporate-governance-reports.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Governance Reports</span></a></li>
                                            <li><a href="appointment-letters-of-directors.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Appointment Letters</span></a></li>
                                            <li><a href="Employee Stock Option Scheme 2026.pdf" target="_blank"><span class="link-left"><i class="fa-regular fa-file-pdf text-danger"></i> ESOP Scheme 2026</span> <span class="badge-pdf">PDF</span></a></li>
                                        </ul>

                                        <div class="sub-section-divider">
                                            <i class="fa-regular fa-file-invoice-dollar"></i> Disclosures Reg 62 (Debt)
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="financial-results-security-cover-certificate.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Financial Results &amp; Security Cover</span> <span class="badge-debt">Debt</span></a></li>
                                            <li><a href="record-date-intimation.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Record Date Intimation</span></a></li>
                                            <li><a href="investor-grievance-debt.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Investor Grievance Debt</span></a></li>
                                            <li><a href="interest-payment-and-redemption.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Interest Payment &amp; Redemption</span></a></li>
                                            <li><a href="statement-of-deviation-and-variation.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Statement of Deviation</span></a></li>
                                            <li><a href="other-disclosures-debt.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Other Disclosures Debt</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- Column 3: Meetings & Corporate Compliance -->
                                <div class="col-lg-3">
                                    <div class="mega-col-card">
                                        <div class="mega-col-header">
                                            <div class="header-left">
                                                <span class="header-icon"><i class="fa-regular fa-users"></i></span>
                                                <span class="header-title">Meetings</span>
                                            </div>
                                            <span class="header-count">5 Meetings</span>
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="board-meeting.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Board Meeting Intimation</span></a></li>
                                            <li><a href="board-meeting-outcome.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Board Meeting Outcome</span></a></li>
                                            <li><a href="annual-general-meeting.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Annual General Meeting</span></a></li>
                                            <li><a href="extra-ordinary-general-meeting.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Extra-Ordinary General Meeting</span></a></li>
                                            <li><a href="postal-ballot.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Postal Ballot</span></a></li>
                                        </ul>

                                        <div class="sub-section-divider">
                                            <i class="fa-regular fa-file-contract"></i> Secretarial &amp; Compliance
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="trading-window-closure.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Trading Window Closure</span></a></li>
                                            <li><a href="structural-digital-database.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Structural Digital Database</span></a></li>
                                            <li><a href="reconciliation-share-capital-audit.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Reconciliation Share Capital</span></a></li>
                                            <li><a href="related-party-transactions.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Related Party Transactions</span></a></li>
                                            <li><a href="annual-secretarial-compliance-report.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Annual Secretarial Compliance</span></a></li>
                                            <li><a href="newspaper-publications.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Newspaper Publications</span></a></li>
                                            <li><a href="book-closure-intimation.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Book Closure Intimation</span></a></li>
                                            <li><a href="merger.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Merger</span></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- Column 4: Regulatory Disclosures (LODR / SEBI) -->
                                <div class="col-lg-3">
                                    <div class="mega-col-card">
                                        <div class="mega-col-header">
                                            <div class="header-left">
                                                <span class="header-icon"><i class="fa-regular fa-scale-balanced"></i></span>
                                                <span class="header-title">SEBI &amp; Filings</span>
                                            </div>
                                            <span class="header-count">9 Filings</span>
                                        </div>
                                        <ul class="mega-links-list">
                                            <li><a href="regulation-30.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Regulation 30 SEBI (LODR)</span> <span class="badge-lodr">LODR</span></a></li>
                                            <li><a href="disclosures-under-Regulation-46-of-the-LODR.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Disclosures under Reg 46</span> <span class="badge-lodr">LODR 46</span></a></li>
                                            <li><a href="credit-ratings.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Credit Ratings</span></a></li>
                                            <li><a href="complaince-certificate.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Compliance Cert Reg 40(9)</span></a></li>
                                            <li><a href="complaince-certificate-2.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Compliance Cert Reg 7(3)</span></a></li>
                                            <li><a href="confirmation-certificate.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Confirmation Cert Reg 74(5)</span></a></li>
                                            <li><a href="sast-regulations.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> SAST Regulations</span></a></li>
                                            <li><a href="investor-analyst-meet.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Investor/Analyst Meet</span></a></li>
                                            <li><a href="others.html"><span class="link-left"><i class="fa-regular fa-chevron-right"></i> Others</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Mega Menu Bottom Bar -->
                            <div class="mega-menu-bottom-bar">
                                <div class="bottom-info">
                                    <span class="badge-tag">CIN: L55101MH1986PLC039307</span>
                                    <span class="text">Head Office: 70-C, Nehru Road, Vile Parle (East), Mumbai 400099</span>
                                </div>
                                <div class="bottom-links">
                                    <a href="investor-contact.html" class="quick-link"><i class="fa-regular fa-envelope"></i> Investor Relations</a>
                                    <a href="investor-grievance.html" class="quick-link redressal"><i class="fa-regular fa-shield-check"></i> Grievance Redressal</a>
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
                    <li class="main-nav">
                        <a href="contact.html">Contact</a>
                    </li>
                    <li class="main-nav">
                        <a href="careers.html">Careers</a>
                    </li>
                </ul>
            </div>

            <div class="logo-area">
                <a href="index.html">
                    <img src="assets/images/logo-2.png" alt="Kamat Hotels (India) Ltd.">
                </a>
            </div>

            <div class="header-action-buttons">
                <a href="employee-login.html" class="btn-employer-login">
                    <i class="fa-regular fa-user"></i>
                    <span>Employer Login</span>
                </a>
                <a href="https://bookings.orchidhotel.com/?propertyId=246&amp;chainId=3685&amp;dlyx_xs=05a400bc797cdec0bc0e1655ea41621c&amp;_gl=1*hsiqx0*_gcl_au*MTU4Njg4MzUwMS4xNzIyMjI5MzY2Ljc2ODcyNzYwMy4xNzIyNDA4NTc1LjE3MjI0MDg1NzQ." target="_blank" class="btn-book-now">
                    <i class="fa-regular fa-calendar-check"></i>
                    <span>Book Now</span>
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
            </a>
            <a href="employee-login.html" class="btn-employer-login">
                <i class="fa-regular fa-user"></i>
                <span>Employer Login</span>
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
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="linkdin"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- mobile menu area end -->
</div>

<div id="anywhere-home" class=""></div>
`);
}());
