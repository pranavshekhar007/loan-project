"use client";

import Link from "next/link";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function GoldLoan() {
  return (
    <>
      <Navbar />
      {/* <!-- Hero Section --> */}
      <section className="personal-loan-hero">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <h1>Unlock the Value of Your Gold</h1>
                <p>
                  Get instant loans against your gold ornaments with minimal
                  documentation and the highest value per gram in the market.
                </p>
                <Link
                  href="/gold-loan-form"
                  className="btn btn-dark btn-lg rounded-pill px-4 py-3"
                >
                  Apply Now
                </Link>

                <div className="hero-stats">
                  <div className="stat-item">
                    <i className="fas fa-percentage"></i>
                    <div className="stat-text">
                      <strong>0.75%*</strong>
                      <span>Per Month</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-weight"></i>
                    <div className="stat-text">
                      <strong>₹5,500*</strong>
                      <span>Per Gram</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="loan-calculator">
                  <img
                    src="assets/gold-loan.webp"
                    alt="gold-loan"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section className="gold-feature features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Benefits of Gold Loan</h2>
            <p className="section-subtitle">
              Leverage your gold assets to meet your financial needs instantly
            </p>
          </div>

          <div className="row">
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Instant Disbursal</h4>
                <p>
                  Get funds transferred to your account within 30 minutes of
                  approval.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h4>Safe & Secure</h4>
                <p>
                  Your gold is stored in secure vaults with insurance coverage.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-percentage"></i>
                </div>
                <h4>Low Interest Rates</h4>
                <p>
                  Enjoy lower interest rates compared to personal loans and
                  credit cards.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h4>Minimal Documentation</h4>
                <p>
                  Simple application process with minimal paperwork required.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h4>Flexible Repayment</h4>
                <p>
                  Choose from various repayment options including EMI and bullet
                  payment.
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>No Credit Check</h4>
                <p>
                  Gold loans are secured against your gold, so no credit score
                  is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gold Types Section --> */}
      <section className="gold-types">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Accepted Gold Items</h2>
            <p className="section-subtitle">
              We accept various types of gold ornaments and coins
            </p>
          </div>

          <div className="row">
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="gold-card">
                <div className="gold-img">
                  <img
                    src="assets/gold-jewellery.webp"
                    alt="gold-jewellery"
                    width="100%"
                  />
                </div>
                <div className="gold-content">
                  <h4>Jewelry</h4>
                  <p>
                    Necklaces, chains, rings, bangles, bracelets, earrings, and
                    other gold jewelry.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="gold-card">
                <div className="gold-img">
                  <img src="assets/gold-bar.avif" alt="gold-bar" width="100%" />
                </div>
                <div className="gold-content">
                  <h4>Coins & Bars</h4>
                  <p>
                    Gold coins issued by banks and government mints, gold bars,
                    and biscuits.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="gold-card">
                <div className="gold-img">
                  <img src="assets/antique-gold.webp" alt="antique" />
                </div>
                <div className="gold-content">
                  <h4>Antique Gold</h4>
                  <p>
                    Heritage gold items, antique jewelry, and traditional gold
                    ornaments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="alert bg-warning mt-5 text-center" data-aos="fade-up">
            <h5>
              <i className="fas fa-exclamation-circle me-2"></i>Note
            </h5>
            <p className="mb-0">
              We accept only 18K, 22K, and 24K gold items. Gold-plated items and
              imitation jewelry are not accepted.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Eligibility Section --> */}
      <section className="eligibility-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="assets/eligibility.gif" alt="elegibility" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="mb-4">Eligibility Criteria</h2>

              <div className="eligibility-item">
                <div className="eligibility-icon">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h5>Age Requirement</h5>
                  <p>Applicants must be between 18-75 years of age.</p>
                </div>
              </div>

              <div className="eligibility-item">
                <div className="eligibility-icon">
                  <i className="fas fa-id-card"></i>
                </div>
                <div>
                  <h5>Identity Proof</h5>
                  <p>
                    Valid government-issued ID proof (Aadhaar, PAN, Passport,
                    Voter ID, or Driving License).
                  </p>
                </div>
              </div>

              <div className="eligibility-item">
                <div className="eligibility-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div>
                  <h5>Address Proof</h5>
                  <p>
                    Recent utility bill, Aadhaar card, or any other valid
                    address proof.
                  </p>
                </div>
              </div>

              <div className="eligibility-item">
                <div className="eligibility-icon">
                  <i className="fas fa-weight"></i>
                </div>
                <div>
                  <h5>Gold Requirements</h5>
                  <p>
                    Minimum 10 grams of gold jewelry/coins with a purity of 18K
                    or above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Process Section --> */}
      <section className="gold-feature process-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Simple 4-Step Process</h2>
            <p className="section-subtitle">
              Get your gold loan in less than 30 minutes
            </p>
          </div>

          <div className="process-container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="process-card">
                  <div className="process-number">1</div>
                  <div className="feature-icon mb-4">
                    <i className="fas fa-wallet"></i>
                  </div>
                  <h4>Bring Your Gold</h4>
                  <p>Visit our branch with your gold ornaments and ID proof.</p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="process-card">
                  <div className="process-number">2</div>
                  <div className="feature-icon mb-4">
                    <i className="fas fa-search"></i>
                  </div>
                  <h4>Gold Evaluation</h4>
                  <p>Our experts evaluate and test the purity of your gold.</p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="process-card">
                  <div className="process-number">3</div>
                  <div className="feature-icon mb-4">
                    <i className="fas fa-file-signature"></i>
                  </div>
                  <h4>Complete Paperwork</h4>
                  <p>
                    Fill out a simple application form and sign the agreement.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="process-card">
                  <div className="process-number">4</div>
                  <div className="feature-icon mb-4">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <h4>Receive Money</h4>
                  <p>Get instant cash transfer or cheque within minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Calculator Section --> */}
      <section className="calculator-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Gold Loan Calculator</h2>
            <p className="section-subtitle">
              Calculate your loan amount and EMI instantly
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4" data-aos="fade-right">
              <div className="calculator-card">
                <div className="mb-4">
                  <label for="goldWeight" className="form-label">
                    Gold Weight (grams)
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="10"
                    max="500"
                    step="1"
                    id="goldWeight"
                  />
                  <div className="d-flex justify-content-between">
                    <span>10g</span>
                    <span id="goldWeightValue">100g</span>
                    <span>500g</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label for="goldPurity" className="form-label">
                    Gold Purity
                  </label>
                  <select className="form-select" id="goldPurity">
                    <option value="24">24K (99.9% Pure)</option>
                    <option value="22" selected>
                      22K (91.6% Pure)
                    </option>
                    <option value="18">18K (75.0% Pure)</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label for="goldRate" className="form-label">
                    Gold Rate (₹ per gram)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="goldRate"
                    value="5500"
                  />
                </div>

                <div className="mb-4">
                  <label for="loanPercentage" className="form-label">
                    Loan Percentage
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="60"
                    max="80"
                    step="1"
                    id="loanPercentage"
                    value="75"
                  />
                  <div className="d-flex justify-content-between">
                    <span>60%</span>
                    <span id="loanPercentageValue">75%</span>
                    <span>80%</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label for="tenure" className="form-label">
                    Loan Tenure (months)
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="3"
                    max="36"
                    step="3"
                    id="tenure"
                  />
                  <div className="d-flex justify-content-between">
                    <span>3m</span>
                    <span id="tenureValue">12m</span>
                    <span>36m</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label for="interestRate" className="form-label">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="9"
                    max="15"
                    step="0.1"
                    id="interestRate"
                    value="10.5"
                  />
                  <div className="d-flex justify-content-between">
                    <span>9%</span>
                    <span id="interestRateValue">10.5%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="calculator-card h-100">
                <h4 className="mb-4">Loan Calculation</h4>

                <div className="calc-result mb-4">
                  <div className="result-item">
                    <span>Gold Value:</span>
                    <span id="goldValue">₹0</span>
                  </div>
                  <div className="result-item">
                    <span>Loan Amount:</span>
                    <span id="loanAmount">₹0</span>
                  </div>
                  <div className="result-item">
                    <span>Monthly EMI:</span>
                    <span id="monthlyEmi">₹0</span>
                  </div>
                  <div className="result-item">
                    <span>Total Interest:</span>
                    <span id="totalInterest">₹0</span>
                  </div>
                  <div className="result-item">
                    <span>Total Payment:</span>
                    <span id="totalPayment">₹0</span>
                  </div>
                </div>

                <div className="alert alert-info">
                  <h6>
                    <i className="fas fa-info-circle me-2"></i>Note
                  </h6>
                  <p className="small mb-0">
                    The actual loan amount may vary based on the physical
                    assessment of your gold at our branch.
                  </p>
                </div>

                <a href="#" className="btn btn-gold w-100 mt-4">
                  Apply for Gold Loan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Documents Section --> */}
      <section className="documents-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Required Documents</h2>
            <p className="section-subtitle">
              Minimal documentation for quick processing
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4" data-aos="fade-right">
              <div className="doc-card">
                <h4 className="mb-4">
                  <i className="fas fa-id-card me-2 text-gold"></i> Identity &
                  Address Proof
                </h4>
                <ul className="doc-list">
                  <li>Aadhaar Card</li>
                  <li>PAN Card</li>
                  <li>Voter ID Card</li>
                  <li>Passport</li>
                  <li>Driving License</li>
                  <li>Utility Bill (for address proof)</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4" data-aos="fade-left">
              <div className="doc-card">
                <h4 className="mb-4">
                  <i className="fas fa-camera me-2 text-gold"></i> Photographs
                </h4>
                <ul className="doc-list">
                  <li>2 recent passport-size photographs</li>
                </ul>

                <h4 className="mb-4 mt-5">
                  <i className="fas fa-file-invoice me-2 text-gold"></i> Gold
                  Documents
                </h4>
                <ul className="doc-list">
                  <li>Original bill/purchase invoice (if available)</li>
                  <li>Gold purity certificate (if available)</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="alert alert-warning mt-4 text-center"
            data-aos="fade-up"
          >
            <h5>
              <i className="fas fa-exclamation-triangle me-2"></i>Important
            </h5>
            <p className="mb-0">
              All documents must be original and self-attested. We may require
              additional documents based on individual cases.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section className="cta-section gold-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="zoom-in">
              <h2>Ready to Get Instant Funds Against Your Gold?</h2>
              <p>
                Apply now and get the best value for your gold with minimal
                paperwork and quick disbursal.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <a href="#" className="btn btn-apply">
                  Apply For Gold Loan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQ Section --> */}
      <section className="faq-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about gold loans
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-item" data-aos="fade-up">
                <div className="faq-question">
                  <span>
                    What is the minimum and maximum gold weight accepted?
                  </span>
                  <div className="faq-toggle"></div>
                </div>
                <div className="faq-answer">
                  <p>
                    We accept gold loans starting from a minimum of 10 grams
                    with no upper limit. The loan amount depends on the purity
                    and weight of your gold.
                  </p>
                </div>
              </div>

              <div className="faq-item" data-aos="fade-up">
                <div className="faq-question">
                  <span>How is the gold value calculated?</span>
                  <div className="faq-toggle"></div>
                </div>
                <div className="faq-answer">
                  <p>
                    The gold value is calculated based on the current market
                    rate, purity of gold (measured in karats), and weight of the
                    gold items. We use advanced electronic gold purity testing
                    machines for accurate assessment.
                  </p>
                </div>
              </div>

              <div className="faq-item" data-aos="fade-up">
                <div className="faq-question">
                  <span>How long does the gold loan process take?</span>
                  <div className="faq-toggle"></div>
                </div>
                <div className="faq-answer">
                  <p>
                    The entire process from evaluation to disbursal typically
                    takes 30-45 minutes, provided you have all the necessary
                    documents.
                  </p>
                </div>
              </div>

              <div className="faq-item" data-aos="fade-up">
                <div className="faq-question">
                  <span>What happens if I cannot repay the loan?</span>
                  <div className="faq-toggle"></div>
                </div>
                <div className="faq-answer">
                  <p>
                    In case you're unable to repay the loan, we offer a grace
                    period and options to extend the loan tenure by paying only
                    the interest. As a last resort, the gold may be auctioned to
                    recover the loan amount, with any surplus returned to you.
                  </p>
                </div>
              </div>

              <div className="faq-item" data-aos="fade-up">
                <div className="faq-question">
                  <span>Is my gold safe with RupeeLoan?</span>
                  <div className="faq-toggle"></div>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, your gold is completely safe with us. We store all gold
                    items in secure, insured vaults with 24/7 monitoring and
                    insurance coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
