"use client";

import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function BusinessLoan() {
  return (
    <>
      <Head>
        <title>Business Loans - RupeeLoan</title>
        <meta
          name="description"
          content="Get quick approval on business loans up to ₹50 lakhs with minimal documentation and flexible repayment options."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1>Business Loans Made Easy & Fast</h1>
                <p>
                  Get quick approval on business loans up to ₹50 lakhs with
                  minimal documentation and flexible repayment options to grow
                  your business hassle-free.
                </p>
                <a
                  href="/business-loan-form"
                  className="btn btn-light btn-lg rounded-pill px-4 py-2"
                >
                  Apply Now
                </a>

                <div className="hero-stats mt-4">
                  <div className="stat-item">
                    <i className="fas fa-briefcase"></i>
                    <div className="stat-text">
                      <strong>25K+</strong>
                      <span>Businesses Funded</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-bolt"></i>
                    <div className="stat-text">
                      <strong>48h</strong>
                      <span>Quick Disbursal</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-hand-holding-usd"></i>
                    <div className="stat-text">
                      <strong>₹50 Lakhs</strong>
                      <span>Loan Amount</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="col-lg-6">
                <div className="loan-calculator">
                  <img
                    src="/assets/Business-deal-bro.png"
                    alt="Business Loan"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Business Loans Section */}
      <section className="premium-section py-5">
        <div className="container">
          <div className="premium-row justify-center mb-5 text-center">
            <div className="premium-col col-lg-10">
              <h2 className="premium-title">
                Business Loans for Growth and Expansion
              </h2>
              <p className="premium-subtitle">
                Fuel your business ambitions with flexible financing solutions
                designed for entrepreneurs and established businesses
              </p>
            </div>
          </div>

          <div className="premium-row row align-items-center mb-5">
            <div className="premium-col col-lg-6">
              <div className="premium-content">
                <h3>Empower Your Business Vision</h3>
                <p>
                  At RupeeLoan, we understand that every business has unique
                  financial needs. Our business loans are designed to provide
                  the capital you need to expand operations, purchase equipment,
                  manage cash flow, or seize new opportunities.
                </p>

                <div className="loan-feature-list">
                  <div className="loan-feature-item bg1">
                    <div className="loan-feature-icon">
                      <i className="fas fa-cogs"></i>
                    </div>
                    <div className="loan-feature-text">
                      <h5>Customized Loan Solutions</h5>
                      <p>
                        Tailored financing options based on your business
                        requirements
                      </p>
                    </div>
                  </div>

                  <div className="loan-feature-item bg2">
                    <div className="loan-feature-icon">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div className="loan-feature-text">
                      <h5>Quick Processing</h5>
                      <p>Minimal documentation and fast approval process</p>
                    </div>
                  </div>

                  <div className="loan-feature-item bg3">
                    <div className="loan-feature-icon">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="loan-feature-text">
                      <h5>Flexible Repayment</h5>
                      <p>
                        Choose tenure that matches your business cash flow
                      </p>
                    </div>
                  </div>

                  <div className="loan-feature-item bg4">
                    <div className="loan-feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="loan-feature-text">
                      <h5>Secure & Reliable</h5>
                      <p>
                        Trusted loan process with complete transparency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Image */}
            <div className="premium-col col-lg-6">
              <img
                src="/assets/business-loan.png"
                alt="Business Growth"
                className="img-fluid"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Charges */}
      <section className="documents-section py-5">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <h2>Required Documents for Business Loan</h2>
              <p className="lead">Simple documentation to ensure smooth approval</p>

              <h4 className="mt-4">For Self-Employed / Business Owners</h4>
              <ul className="documents-list">
                <li>KYC Documents (PAN Card, Aadhaar Card)</li>
                <li>
                  Business Proof (GST Certificate, Shop Act, Partnership Deed,
                  etc.)
                </li>
                <li>Last 12 months’ business bank statements</li>
                <li>Last 2 years’ ITR with audited financials</li>
              </ul>

              <h4 className="mt-4">For Private Limited / Partnership Firms</h4>
              <ul className="documents-list">
                <li>Company KYC (PAN, Incorporation Certificate, GST)</li>
                <li>
                  Last 2 years’ audited balance sheet & profit/loss account
                </li>
                <li>Last 12 months’ current account bank statement</li>
                <li>Authorized signatory ID & address proof</li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="bg-light p-5 rounded">
                <h3 className="mb-4">Interest Rates & Charges</h3>

                <div className="mb-4">
                  <h5>Interest Rates</h5>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Starting From</span>
                    <strong>11% p.a.</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Up To</span>
                    <strong>20% p.a.</strong>
                  </div>
                </div>

                <div className="mb-4">
                  <h5>Processing Fee</h5>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Fee</span>
                    <strong>Up to 2% of loan amount</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>GST</span>
                    <strong>18% on processing fee</strong>
                  </div>
                </div>

                <div className="mb-4">
                  <h5>Other Charges</h5>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Prepayment Charges</span>
                    <strong>Nil after 6 EMIs</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Late Payment Penalty</span>
                    <strong>2% per month</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Loan Cancellation Charges</span>
                    <strong>₹2000 + GST</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Business Loans Without Collateral Process Section --> */}
    <section className="loan-process-section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">BUSINESS LOANS WITHOUT COLLATERAL LOAN PROCESS</h2>
                <p className="section-subtitle">You can apply for a Business Loan Without Collateral by following these
                    three simple steps:</p>
            </div>

            <div className="process-steps">
                <div className="step-card">
                    <div className="step-number">1</div>
                    <div className="step-icon">
                        <i className="fas fa-mouse-pointer"></i>
                    </div>
                    <h3 className="step-title">Step 1</h3>
                    <p className="step-description">Click on Apply Now and enter your contact details.</p>
                </div>

                <div className="step-card">
                    <div className="step-number">2</div>
                    <div className="step-icon">
                        <i className="fas fa-id-card"></i>
                    </div>
                    <h3 className="step-title">Step 2</h3>
                    <p className="step-description">Enter Your PAN and other relevant details, and click Apply Now.</p>
                </div>

                <div className="step-card">
                    <div className="step-number">3</div>
                    <div className="step-icon">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h3 className="step-title">Step 3</h3>
                    <p className="step-description">Complete verification and receive funds directly in your account.</p>
                </div>
            </div>

            <div className="cta-container">
                <a href="#" className="btn btn-apply">Apply Now</a>
            </div>
        </div>
    </section>


    {/* <!-- FAQ Section --> */}
    <section className="faq-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2>Frequently Asked Questions</h2>
                <p className="lead">Find answers to common questions about business loans</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="faq-item">
                        <div className="faq-question">
                            What is the maximum amount I can get as a business loan?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            You can avail a business loan of up to ₹50 lakhs depending on your business turnover,
                            credit score, and repayment history. Higher loan amounts may be considered for established
                            firms.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            How soon will the loan be disbursed?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            After submitting all required documents and completing verification, the loan is usually
                            disbursed within 3 to 5 working days directly into your business bank account.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            Do I need collateral for a business loan?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            Many business loans are offered without collateral (unsecured). However, secured loans with
                            collateral may offer lower interest rates and higher amounts.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            Can startups apply for a business loan?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            Yes, startups can apply. However, lenders may require additional documents such as a
                            detailed
                            business plan, projected revenues, and proof of business registration.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            What is the repayment tenure for business loans?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            Business loan tenure typically ranges from 12 months to 60 months, depending on the loan
                            amount
                            and the applicant’s repayment capacity.
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
