"use client";

import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Page = () => {
  // ---------------- State ----------------
  const [step, setStep] = useState(1);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTenure, setLoanTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [interestRate, setInterestRate] = useState(7.5);

  // ---------------- Functions ----------------
  const showStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const tenure = loanTenure;
    const baseRate = 7.5; // default gold loan rate
    const monthlyRate = baseRate / 12 / 100;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    setEmi(Math.round(emiValue));
    setInterestRate(baseRate);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, loanTenure]);

  // ---------------- Render ----------------
  return (
    <div>
      <Navbar />

      {/* <!-- Hero Section --> */}
      <section className="signup-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Unlock the Value of Your Gold</h1>
              <p>
                Get instant financial support with our secure gold loans. Apply
                today for quick approval, minimal documentation, and attractive
                interest rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gold Loan Form Section --> */}
      <section className="signup-form">
        <div className="container">
          <div className="row">
            {/* ---------------- Form ---------------- */}
            <div className="col-lg-8">
              <div className="signup-form-container">
                {/* Progress Indicators */}
                <div className="form-progress">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className={`progress-step ${
                        num < step ? "completed" : num === step ? "active" : ""
                      }`}
                    >
                      <div className="step-number">{num}</div>
                      <div className="step-title">
                        {num === 1 && "Personal Info"}
                        {num === 2 && "Gold Details"}
                        {num === 3 && "Loan Requirements"}
                        {num === 4 && "Documents"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ---------------- Form Steps ---------------- */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Application submitted successfully! Our gold loan specialist will contact you shortly."
                    );
                  }}
                >
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="form-step active">
                      <h3 className="mb-4">Personal Information</h3>
                      {/* Inputs */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Date of Birth</label>
                          <input
                            type="date"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label for="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label for="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <label for="address" className="form-label">
                            Residential Address
                          </label>
                          <textarea
                            className="form-control"
                            id="address"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button
                          type="button"
                          className="btn btn-next"
                          onClick={() => showStep(2)}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="form-step active">
                      <h3 className="mb-4">Gold Information</h3>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Gold Type</label>
                          <select className="form-select" required>
                            <option value="">Select Type</option>
                            <option value="jewelry">Jewelry</option>
                            <option value="coins">Coins</option>
                            <option value="bars">Bars</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            Approx. Weight (grams)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <label for="purity" className="form-label">
                            Gold Purity (e.g., 22K, 24K)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="purity"
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-prev"
                          onClick={() => showStep(1)}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-next"
                          onClick={() => showStep(3)}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="form-step active">
                      <h3 className="mb-4">Loan Requirements</h3>

                      <div className="mb-3">
                        <label className="form-label">Loan Amount (₹)</label>
                        <input
                          type="range"
                          className="form-range"
                          min="10000"
                          max="5000000"
                          step="5000"
                          value={loanAmount}
                          onChange={(e) =>
                            setLoanAmount(parseInt(e.target.value))
                          }
                        />
                        <div className="d-flex justify-content-between">
                          <span>₹10,000</span>
                          <span>
                            ₹{new Intl.NumberFormat("en-IN").format(loanAmount)}
                          </span>
                          <span>₹50,00,000</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tenure (Months)</label>
                        <input
                          type="range"
                          className="form-range"
                          min="1"
                          max="36"
                          step="1"
                          value={loanTenure}
                          onChange={(e) =>
                            setLoanTenure(parseInt(e.target.value))
                          }
                        />
                        <div className="d-flex justify-content-between">
                          <span>1 Month</span>
                          <span>{loanTenure} Months</span>
                          <span>36 Months</span>
                        </div>
                      </div>

                      <div className="loan-detail-item bg-light p-3 rounded">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Your Monthly EMI</span>
                          <span>
                            ₹{new Intl.NumberFormat("en-IN").format(emi)}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between small text-muted">
                          <span>Estimated Interest Rate</span>
                          <span>{interestRate}% p.a.</span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-prev"
                          onClick={() => showStep(2)}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-next"
                          onClick={() => showStep(4)}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {step === 4 && (
                    <div className="form-step active">
                      <h3 className="mb-4">Document Upload</h3>
                      <p className="mb-4">
                        Please upload the required documents to complete your
                        application.
                      </p>

                      <div className="mb-3">
                        <label className="form-label">Identity Proof</label>
                        <input type="file" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Address Proof</label>
                        <input type="file" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label for="goldImages" className="form-label">
                          Gold Item Photographs
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="goldImages"
                          accept=".jpg,.jpeg,.png"
                          required
                          multiple
                        />
                      </div>

                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          required
                        />
                        <label className="form-check-label">
                          I agree to the <a href="#">Terms</a> &{" "}
                          <a href="#">Privacy Policy</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <button
                          type="button"
                          className="btn btn-prev"
                          onClick={() => showStep(3)}
                        >
                          Previous
                        </button>
                        <button type="submit" className="btn btn-submit">
                          Submit Application
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* ---------------- Sidebar ---------------- */}
            <div className="col-lg-4">
              <div className="benefits-sidebar">
                <h3 className="mb-4 text-light">Why Choose Gold Loan?</h3>
                <div className="benefit-item">
                  <i className="fas fa-ring"></i>
                  <div>
                    <h5>Instant Cash</h5>
                    <p>Get quick loans against your gold within hours.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-percentage"></i>
                  <div>
                    <h5>Low Interest Rates</h5>
                    <p>Attractive interest rates starting at just 7.5% p.a.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-bolt"></i>
                  <div>
                    <h5>Quick Processing</h5>
                    <p>Fast approvals with minimal documentation required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
