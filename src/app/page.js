"use client";
import Script from "next/script";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* hero section */}
      <section className="hero2">
        <section className="banca-hero dark_mode_sec_wrap">
          <div className="bubbles">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                <div className="bubble"></div>
              </div>
            ))}
          </div>

          <div className="logos">
            <img src="/assets/trust.png" alt="Logo 1" />
            <img src="/assets/fast-money.png" alt="Logo 2" />
            <img src="/assets/legal.png" alt="Logo 3" />
            <img src="/assets/cyber.png" alt="Logo 4" />
            <img src="/assets/support.png" alt="Logo 5" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="banner-content text-center">
                  <h1 className="__title">
                    Get Instant Loans <br /> with Complete Security
                  </h1>

                  <div>
                    <a href="#" className="btn">
                      <img src="/assets/app-store.svg" alt="App Store" />
                    </a>
                    <a href="#" className="btn btn-outline">
                      <img
                        src="/assets/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                      />
                    </a>
                  </div>

                  <div className="img-area">
                    <img
                      src="/assets/dousoft (2).png"
                      className="img-fluid"
                      alt="Person using mobile app"
                      width="40%"
                    />
                    <div className="symbol-pulse">
                      <div className="pulse-1"></div>
                      <div className="pulse-2"></div>
                      <div className="pulse-x"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Company Introduction Section */}
      <section className="about container p-5 rounded">
        <div className="row g-5 align-items-center">
          {/* Left Content */}
          <div className="col-md-8 left">
            <span className="badge px-3 py-2 mb-2">About Our Company</span>
            <h2 className="fw-bold mb-3 display-6 text-dark">
              Your Trusted Partner in Easy & Secure Loans
            </h2>
            <p className="text-muted fs-5">
              We are committed to making borrowing simple, fast, and
              transparent. Our platform connects you with the best banks and
              lenders, ensuring quick disbursement, lowest interest rates, and a
              completely hassle-free experience. With trust and integrity at our
              core, we help you achieve your financial goals with confidence.
            </p>

            <div className="row mt-4 g-4">
              {/* Feature 1 */}
              <div className="col-md-6">
                <div className="p-3 bg-white shadow-sm rounded d-flex align-items-center hover-shadow">
                  <div className="me-3">
                    <div className="icon-circle bg-danger text-white d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/trust.png"
                        alt="Trustworthy"
                        width="28"
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">100% Trustworthy</h6>
                    <small className="text-muted">
                      Safe, secure & transparent process.
                    </small>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-md-6">
                <div className="p-3 bg-white shadow-sm rounded d-flex align-items-center hover-shadow">
                  <div className="me-3">
                    <div className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/fast-money.png"
                        alt="Fast Disbursement"
                        width="28"
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Fast Disbursement</h6>
                    <small className="text-muted">
                      Quick loan approval & instant funds.
                    </small>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-md-6">
                <div className="p-3 bg-white shadow-sm rounded d-flex align-items-center hover-shadow">
                  <div className="me-3">
                    <div className="icon-circle bg-success text-white d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/legal.png"
                        alt="Legal & Secure"
                        width="28"
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Legal & Secure</h6>
                    <small className="text-muted">
                      All loans are verified & RBI compliant.
                    </small>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-md-6">
                <div className="p-3 bg-white shadow-sm rounded d-flex align-items-center hover-shadow">
                  <div className="me-3">
                    <div className="icon-circle bg-warning text-white d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/support.png"
                        alt="Customer Support"
                        width="28"
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">24/7 Support</h6>
                    <small className="text-muted">
                      We are always here to help you.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-4 right text-center">
            <div className="position-relative">
              <img
                src="/assets/opening.6552095.gif"
                alt="About Us"
                className="img-fluid rounded"
              />
              <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-2 rounded-pill shadow">
                50,000+ Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Platform Services Section */}
      <div className="main-service">
        <section className="financial-platform">
          <div className="container">
            <div className="platform-header text-center mb-5">
              <h2>All your finances, in one smart app</h2>
              <p>
                Comprehensive lending solutions – faster, compliant, and
                digital-first
              </p>
            </div>

            <div className="services-grid">
              {/* Service Cards */}
              <div className="service-card">
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <motion.i
                        className="fas fa-user"
                        style={{
                          background:
                            "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "200% 200%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    Personal Loan
                  </h3>
                  <p className="service-description">
                    Get quick funds with our digital application process,
                    instant eligibility checks, and flexible repayment options.
                  </p>
                  <div className="service-footer">
                    <motion.a
                      href="form.html"
                      className="learn-more-btn"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply Now{" "}
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>
                    <div className="footer-icon">
                      <img src="/assets/2.png" alt="personal loan" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <motion.i
                        className="fas fa-briefcase"
                        style={{
                          background:
                            "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "200% 200%",
                          display: "inline-block",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // shimmer left→right→left
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    Business Loan
                  </h3>
                  <p className="service-description">
                    Tailored for SMEs and enterprises with fast approval,
                    minimal paperwork, and flexible credit limits.
                  </p>
                  <div className="service-footer">
                    <motion.a
                      href="business-loan-form.html"
                      className="learn-more-btn"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply Now{" "}
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>
                    <div className="footer-icon">
                      <img src="/assets/3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <motion.i
                        className="fas fa-tv"
                        style={{
                          background:
                            "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "200% 200%",
                          display: "inline-block",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // smooth shimmer pass
                        }}
                        transition={{
                          duration: 3.5, // thoda slow aur elegant
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    Consumer Durable Loan
                  </h3>
                  <p className="service-description">
                    Buy appliances and gadgets easily with zero-cost EMI options
                    and instant approvals at point-of-sale.
                  </p>
                  <div className="service-footer">
                    <motion.a
                      href="consumer-form.html"
                      className="learn-more-btn"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply Now{" "}
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>
                    <div className="footer-icon">
                      <img src="/assets/4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <motion.i
                        className="fas fa-shopping-cart"
                        style={{
                          background:
                            "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "200% 200%",
                          display: "inline-block",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // shimmer shine pass
                        }}
                        transition={{
                          duration: 3.5, // slow & elegant movement
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    Buy Now, Pay Later
                  </h3>
                  <p className="service-description">
                    Shop instantly and pay later with flexible repayment tenures
                    and easy merchant integrations.
                  </p>
                  <div className="service-footer">
                    <motion.a
                      href="bnpl-form.html"
                      className="learn-more-btn"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply Now{" "}
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>
                    <div className="footer-icon">
                      <img src="/assets/5.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <motion.i
                        className="fas fa-home"
                        style={{
                          background:
                            "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "200% 200%",
                          display: "inline-block",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // smooth shimmer pass
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    Loan Against Property
                  </h3>
                  <p className="service-description">
                    Unlock the value of your property with low interest rates
                    and high loan-to-value ratio.
                  </p>
                  <div className="service-footer">
                    <motion.a
                      href="property-form.html"
                      className="learn-more-btn"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply Now{" "}
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>
                    <div className="footer-icon">
                      <img src="/assets/6.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <motion.i
                        className="fas fa-gem"
                        style={{
                          background:
                            "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundSize: "200% 200%",
                          display: "inline-block",
                        }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // shimmer slide
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    Gold Loan
                  </h3>
                  <p className="service-description">
                    Secure loans against your gold assets with quick valuation
                    and attractive interest rates.
                  </p>
                  <div className="service-footer">
                    <motion.a
                      href="gold-loan-form.html"
                      className="learn-more-btn"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Apply Now{" "}
                      <motion.i
                        className="fas fa-arrow-right"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.a>
                    <div className="footer-icon">
                      <img src="/assets/7.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="step-section">
        {/* <!-- Left Content --> */}
        <div className="content">
          <h2>
            Get loan from 3 <br />
            simple process
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form,
          </p>
          <ul className="check-list">
            <li>It is a long established fact that a reader will be</li>
            <li>It is a long established fact distracted by the readable</li>
          </ul>
          <a href="#step-process">Learn about the process →</a>
        </div>

        {/* <!-- Right Image --> */}
        <div className="image-box">
          <img src="assets/step.png" alt="Loan Process" />
        </div>
      </section>

      {/* <!-- Replace the current step-section with this code --> */}
      <section className="rl-process-hero" id="step-process">
        <div className="rl-process-intro">
          <h2>Our Simple 3-Step Loan Process</h2>
          <p>
            Getting the funds you need has never been easier. Just follow these
            three simple steps.
          </p>
          <div className="rl-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="rl-mouse">
              <div className="rl-wheel"></div>
            </div>
            <div className="rl-arrows">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="rl-process-steps">
        {/* <!-- Step 1 --> */}
        <div className="rl-step rl-step-1" data-step="1">
          <div className="rl-step-container">
            <div className="rl-step-content">
              <div className="rl-step-number">01</div>
              <h3>Application</h3>
              <p>
                Fill out our simple online form in just 5 minutes. No
                complicated paperwork or branch visits needed.
              </p>
              <ul className="rl-step-features">
                <li>
                  <i className="fas fa-check-circle"></i> 100% digital process
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> No documentation
                  upload needed initially
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Instant eligibility
                  check
                </li>
              </ul>
              <a href="form.html" className="rl-step-cta">
                Start Application
              </a>
            </div>
            <div className="rl-step-visual">
              <div className="rl-floating-card rl-card-1">
                <div className="rl-card-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h4>Digital Application</h4>
                <p>Apply from anywhere, anytime</p>
              </div>
              <div className="rl-floating-card rl-card-2">
                <div className="rl-card-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h4>Minimal Info</h4>
                <p>Basic details required</p>
              </div>
              <div className="rl-phone-mockup">
                <img src="assets/mockup9.png" alt="Application Process" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Step 2 --> */}
        <div className="rl-step rl-step-2" data-step="2">
          <div className="rl-step-container">
            <div className="rl-step-content">
              <div className="rl-step-number">02</div>
              <h3>Verification</h3>
              <p>
                Our advanced systems verify your details instantly while
                maintaining complete security and privacy.
              </p>
              <ul className="rl-step-features">
                <li>
                  <i className="fas fa-check-circle"></i> Instant document
                  verification
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Bank-grade security
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Quick approval
                  decision
                </li>
              </ul>
              <a href="interest-rate.html" className="rl-step-cta">
                Learn About Interest
              </a>
            </div>
            <div className="rl-step-visual">
              <div className="rl-phone-mockup">
                <img src="assets/mockup8.png" alt="Application Process" />
              </div>

              <div className="rl-floating-icon rl-icon-1">
                <i className="fas fa-lock"></i>
              </div>
              <div className="rl-floating-icon rl-icon-2">
                <i className="fas fa-user-check"></i>
              </div>
              <div className="rl-floating-icon rl-icon-3">
                <i className="fas fa-file-invoice"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Step 3 --> */}
        <div className="rl-step rl-step-3" data-step="3">
          <div className="rl-step-container">
            <div className="rl-step-content">
              <div className="rl-step-number">03</div>
              <h3>Disbursement</h3>
              <p>
                Receive funds directly in your bank account within hours of
                approval. No hidden charges or delays.
              </p>
              <ul className="rl-step-features">
                <li>
                  <i className="fas fa-check-circle"></i> Quick transfer to your
                  account
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Transparent fee
                  structure
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 24/7 customer support
                </li>
              </ul>
              <a href="cibil.html" className="rl-step-cta">
                Check Cibil Now
              </a>
            </div>
            <div className="rl-step-visual">
              <div className="rl-money-transfer">
                <div className="rl-bank-building">
                  <i className="fas fa-building"></i>
                </div>
                <div className="rl-money-arrow">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </div>
                <div className="rl-bank-account">
                  <i className="fas fa-piggy-bank"></i>
                </div>
              </div>
              <div className="rl-phone-mockup">
                <img src="assets/mockup10.png" alt="Application Process" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rl-process-cta">
        <div className="rl-cta-content">
          <h2>Ready to get started?</h2>
          <p>
            Join thousands of satisfied customers who have simplified their
            financial journey with RupeeLoan
          </p>
          <div className="rl-cta-buttons">
            <motion.a
              href="form.html"
              className="learn-more-btn"
              style={{
                background: "transparent",
                color: "white",
                padding: "10px 25px",
                border: "2px solid white",
                borderRadius: "30px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px", // text aur arrow ke beech spacing
              }}
              whileHover={{
                backgroundColor: "white",
          
                scale: 1.05,
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Apply Now{" "}
              <motion.i
                className="fas fa-arrow-right"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.a>

            <a href="about.html" className="rl-btn rl-btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Here's how it works.</h2>
        <p>
          When you're ready, RupeeLoan is ready too - 24 hours a day, 7 days a
          week.
        </p>

        <div className="steps-container mb-5">
          {/* <!-- Step 1 --> */}
          <div className="step-box">
            <div className="step-header">
              <img
                src="https://wordpress-theme.spider-themes.net/banca/wp-content/uploads/2021/07/icon.svg"
                alt="Apply Online"
              />
              <div>
                <h4>Apply Online</h4>
                <p>Apply for a Personal Loan quickly and easily.</p>
              </div>
            </div>
            <ul className="step-list">
              <li>
                <span className="number">1.</span> Apply Online
              </li>
              <li>
                <span className="number">2.</span> Enter Your Information - 10
                min
              </li>
              <li>
                <span className="number">3.</span> Pre-qualify / Pre-Approve - 5
                min
              </li>
              <li>
                <span className="number">4.</span> Help you prepare
              </li>
              <li>
                <span className="number">5.</span> We help you qualify - 15 days
              </li>
            </ul>
          </div>

          {/* <!-- Step 2 --> */}
          <div className="step-box">
            <div className="step-header">
              <img
                src="https://wordpress-theme.spider-themes.net/banca/wp-content/uploads/2021/07/icon1.svg"
                alt="Consultation"
              />
              <div>
                <h4>Consultation</h4>
                <p>Expert guidance on banking & loan solutions.</p>
              </div>
            </div>
            <ul className="step-list">
              <li>
                <span className="number">1.</span> Schedule a Free Consultation
              </li>
              <li>
                <span className="number">2.</span> Discuss your Situation
              </li>
              <li>
                <span className="number">3.</span> We Review your condition &
                find a solution
              </li>
              <li>
                <span className="number">4.</span> Help you prepare
              </li>
              <li>
                <span className="number">5.</span> We help you qualify
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="new-financial-services">
        <div className="section-header">
          <h2>Empowering Your Financial Journey</h2>
          <p>
            With over a decade of expertise, we've helped{" "}
            <span className="highlight">50,000+ clients</span> achieve their
            financial goals through personalized solutions and competitive
            rates. Our commitment to excellence has established us as a trusted
            partner in financial growth.
          </p>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <h4>50K+</h4>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h4>₹825Cr+</h4>
            <p>Loan Disbursed</p>
          </div>
          <div className="stat-item">
            <h4>98%</h4>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <h4>24h</h4>
            <p>Quick Approval</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>
          Frequently <span>Asked Questions</span>
        </h2>

        <div className="faq-search">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>

        <div className="faq-tabs">
          <div className="faq-tab active">Personal Loan</div>
          <div className="faq-tab">Home Renovation Loan</div>
          <div className="faq-tab">Education Loan</div>
          <div className="faq-tab">Shopping Loan</div>
          <div className="faq-tab">Travel Loan</div>
          <div className="faq-tab">General</div>
        </div>

        {/* <!-- FAQ Items --> */}
        <div className="faq-item">
          <div className="faq-question">
            What is the minimum salary required to get a personal loan?
            <span className="icon">+</span>
          </div>
          <div className="faq-answer">
            The minimum salary required varies depending on the lender, but
            generally starts from ₹15,000–₹25,000 per month.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            What is the eligibility criteria for a personal loan?
            <span className="icon">+</span>
          </div>
          <div className="faq-answer">
            You must be a salaried or self-employed individual, aged 21–60
            years, with a stable income and good credit history.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            What is the rate of interest that will be charged?
            <span className="icon">+</span>
          </div>
          <div className="faq-answer">
            Interest rates vary by lender, loan amount, and your credit profile.
            Typical personal loan rates start around 10% p.a.
          </div>
        </div>

        <div className="faq-btn">
          <a href="faq.html">
            <button>All FAQs</button>
          </a>
        </div>
      </section>

      <section className="app-section">
        {/* <!-- Left content --> */}
        <div className="app-content">
          <h2>100% online process – no branch visits needed!</h2>
          <p>
            Experience seamless and paperless loan processing right from your
            phone, anytime, anywhere.
          </p>
          <div className="store-buttons">
            <a href="#">
              <img src="assets/app-store.svg" alt="App Store" width="100%" />
            </a>
            <a href="#">
              <img
                src="assets/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width="100%"
              />
            </a>
          </div>
        </div>

        {/* <!-- Right image --> */}
        <div className="app-image">
          <img src="assets/mockup.png" alt="App Promotion" width="100%" />
        </div>
      </section>

      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/script.js" />
    </>
  );
}
