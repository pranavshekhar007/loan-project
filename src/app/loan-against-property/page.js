"use client";


// pages/loan-against-property.js
import Head from "next/head";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";

export default function LoanAgainstProperty() {
  // EMI Calculator States
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(10);

  // EMI Formula
  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const n = loanTenure * 12;
    return (
      (principal * rate * Math.pow(1 + rate, n)) /
      (Math.pow(1 + rate, n) - 1)
    ).toFixed(0);
  };

  const totalPayment = (calculateEMI() * loanTenure * 12).toFixed(0);
  const totalInterest = (totalPayment - loanAmount).toFixed(0);

  return (
    <>
      <Head>
        <title>Loan Against Property - RupeeLoan</title>
        <meta
          name="description"
          content="Get high-value loans against your property with attractive interest rates, flexible tenure, and quick approval."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="container p-sm-5 p-4">
            <div className="hero-content">
               <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <h1 className="text-black">Unlock Your Property's Value</h1>
                    <p className="text-black">Get high-value loans against your residential or commercial property at attractive interest rates with flexible repayment options.</p>
                    <a href="property-form.html" className="btn btn-light btn-lg rounded-pill px-4 py-3">Apply Now</a>

                    <div className="hero-stats">
                        <div className="stat-item text-black">
                            <i className="fas fa-percentage"></i>
                            <div className="stat-text">
                                <strong>8.5%*</strong>
                                <span>Interest Rate</span>
                            </div>
                        </div>
                        <div className="stat-item text-black">
                            <i className="fas fa-rupee-sign"></i>
                            <div className="stat-text">
                                <strong>5 Cr</strong>
                                <span>Loan Amount</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <div className="loan-calculator">
                            <img src="assets/property.png" alt="" width="100%" />
                        </div>
                </div>
            </div>
            </div>
        </div>
    </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container p-sm-5 p-4">
            <div className="text-center mb-5">
                <h2 className="section-title">Benefits of Loan Against Property</h2>
                <p className="section-subtitle">Leverage your property's value to meet your financial needs</p>
            </div>
            
            <div className="row">
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-money-bill-wave"></i>
                        </div>
                        <h4>Higher Loan Amounts</h4>
                        <p>Get loans up to 60-70% of your property's market value, with amounts ranging up to ₹5 crores.</p>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-percentage"></i>
                        </div>
                        <h4>Lower Interest Rates</h4>
                        <p>Enjoy significantly lower interest rates compared to unsecured loans like personal loans.</p>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <h4>Longer Tenure</h4>
                        <p>Flexible repayment options with tenure extending up to 15 years based on your eligibility.</p>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-university"></i>
                        </div>
                        <h4>Continue Ownership</h4>
                        <p>Retain ownership and usage rights of your property while using it as collateral.</p>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-file-invoice-dollar"></i>
                        </div>
                        <h4>Tax Benefits</h4>
                        <p>Avail tax benefits on interest payments under Section 24 of the Income Tax Act.</p>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h4>Quick Disbursal</h4>
                        <p>Fast processing and disbursal within 5-7 days after document verification.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Property Types */}
      <section className="property-types">
        <div className="container p-sm-5 p-4">
            <div className="text-center mb-5">
                <h2 className="section-title">Eligible Property Types</h2>
                <p className="section-subtitle">We accept various types of properties as collateral</p>
            </div>
            
            <div className="row">
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="property-card">
                        <div className="property-img">
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Residential Property" />
                        </div>
                        <div className="property-content">
                            <h4>Residential Properties</h4>
                            <p>Apartments, independent houses, villas, and builder floors in approved areas.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="property-card">
                        <div className="property-img">
                            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Commercial Property" />
                        </div>
                        <div className="property-content">
                            <h4>Commercial Properties</h4>
                            <p>Office spaces, retail shops, warehouses, and industrial buildings with clear titles.</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="property-card">
                        <div className="property-img">
                            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Plot/Land" />
                        </div>
                        <div className="property-content">
                            <h4>Plots & Land</h4>
                            <p>Residential and commercial plots with clear titles in approved areas and developments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Eligibility */}
      <section className="benefits-section" id="eligibility">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                    <img src="assets/eligibility.gif" alt="Eligibility" className="img-fluid rounded shadow"/>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <h2 className="mb-4">Eligibility Criteria</h2>
                    
                    <div className="eligibility-item">
                        <div className="eligibility-icon">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Age Requirement</h5>
                            <p>Applicants must be between 21-65 years of age at the time of loan maturity.</p>
                        </div>
                    </div>
                    
                    <div className="eligibility-item">
                        <div className="eligibility-icon">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <div>
                            <h5>Employment Status</h5>
                            <p>Salaried individuals, self-employed professionals, and business owners can apply.</p>
                        </div>
                    </div>
                    
                    <div className="eligibility-item">
                        <div className="eligibility-icon">
                            <i className="fas fa-money-bill-wave"></i>
                        </div>
                        <div>
                            <h5>Income Criteria</h5>
                            <p>Minimum annual income of ₹3 lakhs for salaried and ₹5 lakhs for self-employed individuals.</p>
                        </div>
                    </div>
                    
                    <div className="eligibility-item">
                        <div className="eligibility-icon">
                            <i className="fas fa-home"></i>
                        </div>
                        <div>
                            <h5>Property Requirements</h5>
                            <p>Property should be self-owned, with clear title deeds and free from any legal disputes.</p>
                        </div>
                    </div>

                    <a href="#" className="btn btn-apply">Apply Now</a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Process Section --> */}
    <section className="process-section">
        <div className="container p-sm-5 p-4">
            <div className="text-center mb-5">
                <h2 className="section-title">Application Process</h2>
                <p className="section-subtitle">Simple and transparent process for loan against property</p>
            </div>
            
            <div className="process-container">
                <div className="process-connector d-none d-lg-block"></div>
                
                <div className="row">
                    <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="0">
                        <div className="process-card works-card-1">
                            <div className="process-number">1</div>
                            <div className="feature-icon mb-4">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h4>Application & Documentation</h4>
                            <p>Fill the application form and submit necessary documents for verification.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="process-card works-card-2">
                            <div className="process-number">2</div>
                            <div className="feature-icon mb-4">
                                <i className="fas fa-search"></i>
                            </div>
                            <h4>Property Evaluation</h4>
                            <p>Our experts evaluate your property to determine the loan eligibility.</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="process-card works-card-3">
                            <div className="process-number">3</div>
                            <div className="feature-icon mb-4">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h4>Loan Approval & Disbursal</h4>
                            <p>Get final approval and receive funds in your account within days.</p>
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
                <h2 className="section-title">EMI Calculator</h2>
                <p className="section-subtitle">Calculate your monthly installments for loan against property</p>
            </div>
            
            <div className="row">
                <div className="col-lg-6 mb-4" data-aos="fade-right">
                    <div className="calculator-card">
                        <div className="mb-4">
                            <label for="loanAmount" className="form-label">Loan Amount (₹)</label>
                            <input type="range" className="form-range" min="500000" max="50000000" step="500000" id="loanAmount" />
                            <div className="d-flex justify-content-between">
                                <span>5 Lakhs</span>
                                <span id="loanAmountValue">25 Lakhs</span>
                                <span>5 Crores</span>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label for="interestRate" className="form-label">Interest Rate (% per annum)</label>
                            <input type="range" className="form-range" min="7" max="15" step="0.1" id="interestRate" />
                            <div className="d-flex justify-content-between">
                                <span>7%</span>
                                <span id="interestRateValue">8.5%</span>
                                <span>15%</span>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label for="loanTenure" className="form-label">Loan Tenure (Years)</label>
                            <input type="range" className="form-range" min="1" max="15" step="1" id="loanTenure" />
                            <div className="d-flex justify-content-between">
                                <span>1 Year</span>
                                <span id="loanTenureValue">10 Years</span>
                                <span>15 Years</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 mb-4" data-aos="fade-left">
                    <div className="calculator-card h-100 d-flex flex-column justify-content-center">
                        <div className="calc-result">
                            <h4 className="text-center mb-4">Your EMI Details</h4>
                            
                            <div className="result-item">
                                <span>Loan Amount:</span>
                                <strong id="resultLoanAmount">₹25,00,000</strong>
                            </div>
                            
                            <div className="result-item">
                                <span>Interest Rate:</span>
                                <strong id="resultInterestRate">8.5%</strong>
                            </div>
                            
                            <div className="result-item">
                                <span>Loan Tenure:</span>
                                <strong id="resultTenure">10 Years</strong>
                            </div>
                            
                            <div className="result-item">
                                <span>Monthly EMI:</span>
                                <strong id="resultEMI" className="text-primary">₹31,000</strong>
                            </div>
                            
                            <div className="result-item">
                                <span>Total Interest:</span>
                                <strong id="resultInterest">₹12,20,000</strong>
                            </div>
                            
                            <div className="result-item">
                                <span>Total Payment:</span>
                                <strong id="resultTotal">₹37,20,000</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Documents Section --> */}
    <section className="documents-section">
        <div className="container p-sm-5 p-4">
            <div className="text-center mb-5">
                <h2 className="section-title">Required Documents</h2>
                <p className="section-subtitle">Keep these documents ready for smooth processing</p>
            </div>
            
            <div className="row">
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="doc-card  works-card-1">
                        <h4 className="mb-4">Personal Documents</h4>
                        <ul className="doc-list">
                            <li>Completed application form with photograph</li>
                            <li>Identity proof (Aadhaar, PAN Card, Passport, or Driving License)</li>
                            <li>Address proof (Aadhaar, Utility bills) </li>
                                                        <li>Address proof (Aadhaar, Utility bills, Passport)</li>
                            <li>Age proof (Birth certificate, PAN card, School leaving certificate)</li>
                            <li>Latest passport-sized photographs</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="doc-card  works-card-2">
                        <h4 className="mb-4">Income & Financial Documents</h4>
                        <ul className="doc-list">
                            <li>Salaried individuals: Last 3 months' salary slips</li>
                            <li>Bank statements for the last 6 months</li>
                            <li>Income Tax Returns for the last 2 years</li>
                            <li>Form 16 (for salaried individuals)</li>
                            <li>Profit/Loss statement and balance sheet (for self-employed)</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="doc-card  works-card-3">
                        <h4 className="mb-4">Property Documents</h4>
                        <ul className="doc-list">
                            <li>Original sale deed/conveyance deed</li>
                            <li>Approved building plan and occupancy certificate</li>
                            <li>Property tax receipts and utility bills</li>
                            <li>Encumbrance certificate for the last 13 years</li>
                            <li>No Objection Certificate (NOC) from society/development authority</li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="doc-card  works-card-4">
                        <h4 className="mb-4">Additional Documents</h4>
                        <ul className="doc-list">
                            <li>Previous loan sanction letters (if any)</li>
                            <li>Existing loan repayment schedules (if any)</li>
                            <li>Legal opinion report (if required)</li>
                            <li>Valuation report of the property</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials Section --> */}
    <section className="testimonials-section">
        <div className="container p-sm-5 p-4">
            <div className="text-center mb-5">
                <h2 className="section-title">Customer Experiences</h2>
                <p className="section-subtitle">Hear from our satisfied customers</p>
            </div>
            
            <div className="row">
                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p className="mb-4">"RupeeLoan made the process of getting a loan against my property incredibly smooth. The interest rates were competitive, and the customer service was exceptional throughout."</p>
                        <div className="d-flex align-items-center">
                            <div className="testimonial-avatar">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="img-fluid" />
                            </div>
                            <div>
                                <h5 className="mb-0">Rajesh Kumar</h5>
                                <small>Business Owner, Mumbai</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p className="mb-4">"I needed funds for my daughter's education abroad. The loan against property from RupeeLoan came through with minimal paperwork and a very reasonable processing time."</p>
                        <div className="d-flex align-items-center">
                            <div className="testimonial-avatar">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="img-fluid" />
                            </div>
                            <div>
                                <h5 className="mb-0">Priya Sharma</h5>
                                <small>Professor, Delhi</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p className="mb-4">"The transparency in the entire process impressed me the most. No hidden charges, and the representatives were always available to answer my queries. Highly recommended!"</p>
                        <div className="d-flex align-items-center">
                            <div className="testimonial-avatar">
                                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Customer" className="img-fluid" />
                            </div>
                            <div>
                                <h5 className="mb-0">Vikram Singh</h5>
                                <small>CA, Bangalore</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- FAQ Section --> */}
    {/* <section className="faq-section">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">Find answers to common questions about Loan Against Property</p>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="faq-item" data-aos="fade-up" data-aos-delay="0">
                        <div className="faq-question">
                            <span>What is the maximum loan amount I can get against my property?</span>
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            <p>You can get a loan up to 60-70% of your property's current market value, depending on factors like property type, location, and your repayment capacity. The maximum loan amount can go up to ₹5 crores.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-question">
                            <span>How long does it take to get a loan against property approved?</span>
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            <p>Typically, the approval process takes 5-7 working days after submission of all required documents and completion of property valuation. The disbursal happens immediately after approval and documentation.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="faq-question">
                            <span>Can I prepay my loan against property?</span>
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            <p>Yes, most lenders allow prepayment or foreclosure of the loan after a certain lock-in period (usually 6-12 months). Some lenders may charge a nominal prepayment penalty, which varies between institutions.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="faq-question">
                            <span>What happens if I fail to repay the loan?</span>
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            <p>In case of consistent default in EMI payments, the lender has the right to take possession of the mortgaged property and auction it to recover the outstanding loan amount. However, lenders usually provide a grace period and work with borrowers to find solutions before taking such measures.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                        <div className="faq-question">
                            <span>Can I get a loan against a property that already has an existing loan?</span>
                            <span className="faq-toggle"></span>
                        </div>
                        <div className="faq-answer">
                            <p>Yes, it's possible to get a top-up loan on a property that already has an existing mortgage, provided you have a good repayment history and the property has sufficient equity value left after the existing loan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    <Faq/>

      {/* CTA */}
      <section className="cta-section text-center py-5 bg-danger text-white">
        <div className="container p-sm-5 p-4">
          <h2 className="text-black">Ready to unlock your property&apos;s value?</h2>
          <p className="text-black">Apply today with minimal paperwork and quick approval.</p>
          <a href="/form" className="btn btn-light btn-lg rounded-pill mt-3">
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
