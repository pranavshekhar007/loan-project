"use client";

import Head from "next/head";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PersonalLoan() {
  // Loan Calculator States
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTenure, setLoanTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(12.5);

  // EMI Formula
  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const n = loanTenure;
    return (
      principal * rate * Math.pow(1 + rate, n) /
      (Math.pow(1 + rate, n) - 1)
    ).toFixed(0);
  };

  return (
    <>
      <Head>
        <title>Personal Loans - RupeeLoan</title>
        <meta
          name="description"
          content="Get instant approval on personal loans up to ₹25 lakhs with minimal documentation and competitive interest rates."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6">
              <h1>Personal Loans Made Simple & Fast</h1>
              <p>
                Get instant approval on personal loans up to ₹25 lakhs with
                minimal documentation and competitive interest rates starting at
                10.25% p.a.
              </p>
              <a href="/form" className="btn btn-light btn-lg rounded-pill">
                Apply Now
              </a>

              <div className="hero-stats mt-4 d-flex gap-4">
                <div className="stat-item text-center">
                  <i className="fas fa-users fa-2x"></i>
                  <div>
                    <strong>50K+</strong>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="stat-item text-center">
                  <i className="fas fa-clock fa-2x"></i>
                  <div>
                    <strong>24h</strong>
                    <p>Quick Approval</p>
                  </div>
                </div>
                <div className="stat-item text-center">
                  <i className="fas fa-percentage fa-2x"></i>
                  <div>
                    <strong>10.25%</strong>
                    <p>Lowest Interest</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Calculator */}
            <div className="col-lg-6">
              <div className="loan-calculator p-4 border rounded shadow-sm">
                <h3 className="mb-4">Calculate Your EMI</h3>

                {/* Loan Amount */}
                <div className="mb-3">
                  <label className="form-label">Loan Amount (₹)</label>
                  <input
                    type="range"
                    min="50000"
                    max="2500000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="form-range"
                  />
                  <div className="d-flex justify-content-between">
                    <span>₹50,000</span>
                    <span>₹{loanAmount.toLocaleString()}</span>
                    <span>₹25,00,000</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div className="mb-3">
                  <label className="form-label">Tenure (Months)</label>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    step="12"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="form-range"
                  />
                  <div className="d-flex justify-content-between">
                    <span>12 Months</span>
                    <span>{loanTenure} Months</span>
                    <span>60 Months</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="mb-3">
                  <label className="form-label">Interest Rate (%)</label>
                  <input
                    type="range"
                    min="10.25"
                    max="18"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="form-range"
                  />
                  <div className="d-flex justify-content-between">
                    <span>10.25%</span>
                    <span>{interestRate}%</span>
                    <span>18%</span>
                  </div>
                </div>

                {/* Result */}
                <div className="loan-details mt-4">
                  <div className="loan-detail-item">
                    <span>Your Monthly EMI</span>
                    <h4>₹{calculateEMI()}</h4>
                  </div>
                </div>

                <a
                  href="/form"
                  className="btn btn-dark mt-4 rounded-pill px-4"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container text-center">
          <h2>Why Choose Our Personal Loans?</h2>
          <p className="lead">
            Experience the best personal loan services with unmatched benefits
          </p>

          <div className="row mt-4 g-4">
            {[
              {
                icon: "fa-bolt",
                title: "Instant Approval",
                desc: "Approval within hours with minimal documentation.",
              },
              {
                icon: "fa-percentage",
                title: "Low Interest Rates",
                desc: "Competitive rates starting from 10.25% p.a.",
              },
              {
                icon: "fa-file-alt",
                title: "Minimal Documentation",
                desc: "Only basic KYC, income proof, and bank statements.",
              },
              {
                icon: "fa-unlock",
                title: "No Collateral Required",
                desc: "Unsecured loans without security or assets.",
              },
              {
                icon: "fa-random",
                title: "Flexible Tenure",
                desc: "Choose repayment tenure from 1 to 5 years.",
              },
              {
                icon: "fa-hand-holding-usd",
                title: "No Prepayment Charges",
                desc: "Pay off early with no hidden fees.",
              },
            ].map((feature, i) => (
              <div className="col-md-4" key={i}>
                <div className="feature-card p-4 border rounded shadow-sm h-100">
                  <i className={`fas ${feature.icon} fa-2x mb-3`}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* <!-- Eligibility Section --> */}
    <section className="eligibility-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 left">
                    <h2>Eligibility Criteria</h2>
                    <p className="lead">Check if you qualify for our personal loan</p>

                    <div className="eligibility-criteria mt-4">
                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Age</h5>
                                <p>21 to 60 years</p>
                            </div>
                        </div>

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <div>
                                <h5>Minimum Income</h5>
                                <p>₹15,000 per month (₹20,000 for self-employed)</p>
                            </div>
                        </div>

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <div>
                                <h5>Employment</h5>
                                <p>Salaried or self-employed with stable income</p>
                            </div>
                        </div>

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-history"></i>
                            </div>
                            <div>
                                <h5>Work Experience</h5>
                                <p>Minimum 2 years of total work experience</p>
                            </div>
                        </div>

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-credit-card"></i>
                            </div>
                            <div>
                                <h5>Credit Score</h5>
                                <p>650 or above for best rates</p>
                            </div>
                        </div>
                    </div>
                </div>

              <div className="col-lg-6 right">
                <img src="assets/lender.gif" alt="" width="100%" />
              </div>
            </div>
        </div>
    </section>

    {/* <!-- Process Section --> */}
    <section className="process-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2>Simple Application Process</h2>
                <p className="lead">Get your personal loan in just 4 easy steps</p>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">1</div>
                        <h4>Apply Online</h4>
                        <p>Fill our simple application form in just 5 minutes</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">2</div>
                        <h4>Upload Documents</h4>
                        <p>Upload required documents securely through our portal</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">3</div>
                        <h4>Verification</h4>
                        <p>Quick verification process completed within hours</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">4</div>
                        <h4>Get Money</h4>
                        <p>Amount disbursed directly to your bank account</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <a href="#" className="btn btn-dark btn-lg rounded-pill px-4 py-2">Start Application</a>
            </div>
        </div>
    </section>

    {/* <!-- Documents Section --> */}
    <section className="documents-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2>Required Documents</h2>
                    <p className="lead">Minimal documentation for quick processing</p>

                    <h4 className="mt-4">For Salaried Individuals</h4>
                    <ul className="documents-list">
                        <li>KYC Documents (PAN Card, Aadhaar Card)</li>
                        <li>Latest 3 months' salary slips</li>
                        <li>Last 6 months' bank statements</li>
                        <li>Employee ID card</li>
                    </ul>

                    <h4 className="mt-4">For Self-Employed Individuals</h4>
                    <ul className="documents-list">
                        <li>KYC Documents (PAN Card, Aadhaar Card)</li>
                        <li>Last 2 years' ITR</li>
                        <li>Last 6 months' business bank statements</li>
                        <li>Business proof (GST, Shop Act License, etc.)</li>
                    </ul>
                </div>

                <div className="col-lg-6">
                    <div className="bg-light p-5 rounded">
                        <h3 className="mb-4">Interest Rates & Charges</h3>

                        <div className="mb-4">
                            <h5>Interest Rates</h5>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Starting From</span>
                                <strong>10.25% p.a.</strong>
                            </div>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Up To</span>
                                <strong>18% p.a.</strong>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5>Processing Fee</h5>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Fee</span>
                                <strong>1% - 2% of loan amount</strong>
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
                                <strong>Nil after 12 EMIs</strong>
                            </div>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Late Payment Penalty</span>
                                <strong>2% per month</strong>
                            </div>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Loan Cancellation Charges</span>
                                <strong>₹1000 + GST</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- FAQ Section --> */}
    <section className="faq-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2>Frequently Asked Questions</h2>
                <p className="lead">Find answers to common questions about personal loans</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="faq-item">
                        <div className="faq-question">
                            What is the maximum amount I can get as a personal loan?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            You can get a personal loan up to ₹25 lakhs, depending on your income, credit score, and
                            repayment capacity. The final amount is determined after evaluating your eligibility.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            How long does it take to disburse the loan?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            Once your application is approved and all documents are verified, the loan amount is
                            typically disbursed within 24 to 48 hours directly to your bank account.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            Is there any prepayment penalty?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            No, there are no prepayment penalties if you choose to foreclose your loan after paying 12
                            EMIs. You can pay off your loan early without any extra charges.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            Can I apply if I have a low credit score?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            While we prefer applicants with a credit score of 650 and above, we do consider applications
                            with lower scores on a case-by-case basis, possibly at a higher interest rate.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-question">
                            What is the minimum salary required to apply?
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            The minimum net monthly income required is ₹15,000 for salaried individuals and ₹20,000 for
                            self-employed professionals and business persons.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



      {/* CTA */}
      {/* <section className="cta-section text-center py-5 bg-danger text-white">
        <div className="container">
          <h2>Ready to get your personal loan?</h2>
          <p className="lead">
            Apply now and get instant approval with minimal documentation.
          </p>
          <a href="/form" className="btn btn-light btn-lg rounded-pill mt-3">
            Apply Now
          </a>
          <a
            href="#"
            className="btn btn-outline-light btn-lg rounded-pill mt-3 ms-3"
          >
            Check Eligibility
          </a>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
