"use client";
import Script from "next/script";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { motion, AnimatePresence, useAnimation, useInView  } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Personal Loan");
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  // Tab-wise FAQs (3 har ek me)
  const faqsData = {
    "Personal Loan": [
      {
        question: "What is the minimum salary required to get a personal loan?",
        answer:
          "The minimum salary required varies depending on the lender, but generally starts from ₹15,000–₹25,000 per month.",
      },
      {
        question: "What is the eligibility criteria for a personal loan?",
        answer:
          "You must be a salaried or self-employed individual, aged 21–60 years, with a stable income and good credit history.",
      },
      {
        question: "What is the rate of interest that will be charged?",
        answer:
          "Interest rates vary by lender, loan amount, and your credit profile. Typical personal loan rates start around 10% p.a.",
      },
    ],
    "Home Renovation Loan": [
      {
        question: "Can I get a loan for full home renovation?",
        answer:
          "Yes, banks/NBFCs provide renovation loans covering painting, repairs, and furnishing costs.",
      },
      {
        question: "Do I need collateral for a renovation loan?",
        answer:
          "No, most renovation loans are unsecured, but large amounts may need security.",
      },
      {
        question: "What is the maximum repayment tenure?",
        answer:
          "Usually up to 15 years depending on loan amount and bank policy.",
      },
    ],
    "Education Loan": [
      {
        question: "Do education loans cover foreign studies?",
        answer:
          "Yes, most banks cover tuition fees, travel, and living expenses for overseas education.",
      },
      {
        question: "What is the moratorium period?",
        answer:
          "Typically, repayment starts 6–12 months after course completion or employment.",
      },
      {
        question: "Is collateral needed?",
        answer: "Collateral is usually required for loans above ₹7.5 lakh.",
      },
    ],
    "Shopping Loan": [
      {
        question: "Can I buy electronics with shopping loan?",
        answer:
          "Yes, shopping loans are often used for electronics, mobiles, and furniture.",
      },
      {
        question: "Is shopping loan EMI zero interest?",
        answer:
          "Some banks and partners offer zero-cost EMI, but processing fees may apply.",
      },
      {
        question: "What is the max limit?",
        answer: "Usually ₹50,000 to ₹5 lakh depending on profile.",
      },
    ],
    "Travel Loan": [
      {
        question: "Can I use travel loan for international trips?",
        answer:
          "Yes, travel loans can be used for both domestic and international trips.",
      },
      {
        question: "Do I need to show travel tickets before applying?",
        answer:
          "Not always, but some lenders may ask for travel itinerary proof.",
      },
      {
        question: "What is the repayment tenure?",
        answer: "Typically 12–60 months.",
      },
    ],
    General: [
      {
        question: "What documents are required?",
        answer:
          "Aadhar, PAN, salary slips/ITR, and last 6 months bank statement.",
      },
      {
        question: "How fast can I get the loan?",
        answer:
          "Disbursement usually happens within 24–48 hours after approval.",
      },
      {
        question: "Can I prepay my loan?",
        answer:
          "Yes, most lenders allow prepayment but may charge a small fee.",
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const stats = [
    { value: 50000, label: "Happy Customers", suffix: "+" },
    { value: 825, label: "Loan Disbursed", prefix: "₹", suffix: "Cr+" },
    { value: 98, label: "Customer Satisfaction", suffix: "%" },
    { value: 24, label: "Quick Approval", suffix: "h" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };


  function Counter({ end, prefix = "", suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    useEffect(() => {
      if (!isInView) return;
  
      let start = 0;
      const duration = 2000; // 2 sec
      const increment = end / (duration / 16);
  
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
  
      return () => clearInterval(counter);
    }, [end, isInView]);
  
    return (
      <h4 ref={ref}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </h4>
    );
  }
  

  return (
    <>
      <Navbar />

      {/* hero section */}
      <section>
        <div className="hero-banner">
          <div className="badge1">
            <i className="fas fa-award"></i> Trusted by 500K+ users
          </div>

          <div className="content1">
            <h1>Instant Loans Made Simple & Fast</h1>
            <p>
              Get the financial support you need within minutes. Our AI-powered
              platform offers personalized loan options with competitive rates
              and no hidden fees.
            </p>

            <div className="cta-buttons">
              <a href="#" className="btn">
                <img src="assets/app-store.svg" alt="" />
              </a>
              <a href="#" className="btn">
                <img src="assets/Google_Play_Store_badge_EN.svg" alt="" />
              </a>
            </div>

            <div className="features">
              <div className="feature">
                <i className="fas fa-check-circle"></i> No paperwork
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i> Instant approval
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i> Low interest rates
              </div>
            </div>
          </div>

          <div className="loan1-circle1-section1">
            <img src="assets/rupee2.png" alt="Rupee" />
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30"></circle>
              <circle cx="50" cy="50" r="40"></circle>
              <circle cx="50" cy="50" r="48"></circle>
            </svg>
            <i className="fa-solid fa-landmark icon"></i>
            <i className="fa-solid fa-hand-holding-dollar icon"></i>
            <i className="fa-solid fa-credit-card icon"></i>
            <i className="fa-solid fa-piggy-bank icon"></i>
            <i className="fa-solid fa-sack-dollar icon"></i>
            <i className="fa-solid fa-chart-line icon"></i>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="new-about py-5">
      <div className="container">
        {/* Heading */}
        <div className="row my-5">
          <h1 className="text-center fw-bold">
            Your Trusted Partner in Easy & Secure Loans
          </h1>
          <p className="text-center text-muted fs-5">
            We are committed to making borrowing simple, fast, and transparent.
            Our platform connects you with the best banks and lenders, ensuring
            quick disbursement, lowest interest rates, and a completely
            hassle-free experience. With trust and integrity at our core, we
            help you achieve your financial goals with confidence.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Boxes */}
          <div className="col-md-3">
            <motion.div
              className="box mb-5"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="about-icon">
                <img src="/assets/trust.png" alt="Trustworthy" width="40" />
              </div>
              <h5 className="fw-bold mt-3">100% Trustworthy</h5>
              <p className="text-muted">
                Safe, secure & transparent process.
              </p>
            </motion.div>

            <motion.div
              className="box mb-5"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="about-icon">
                <img src="/assets/fast-money.png" alt="Fast" width="40" />
              </div>
              <h5 className="fw-bold mt-3">Fast Disbursement</h5>
              <p className="text-muted">
                Quick loan approval & instant funds.
              </p>
            </motion.div>
          </div>

          {/* Center Image */}
          <div className="col-md-6 text-center">
            <div className="position-relative circle-wrap">
              <motion.img
                src="/assets/1.png"
                alt="About Us"
                className="img-fluid rounded"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="clients position-absolute top-0 start-0 px-3 py-2 rounded-pill shadow bg-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                50,000+ Clients
              </motion.div>
            </div>
          </div>

          {/* Right Boxes */}
          <div className="col-md-3">
            <motion.div
              className="box mb-5"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="about-icon">
                <img src="/assets/legal.png" alt="Legal" width="40" />
              </div>
              <h5 className="fw-bold mt-3">Legal & Secure</h5>
              <p className="text-muted">
                All loans are verified & RBI compliant.
              </p>
            </motion.div>

            <motion.div
              className="box mb-5"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="about-icon">
                <img src="/assets/support.png" alt="Support" width="40" />
              </div>
              <h5 className="fw-bold mt-3">24/7 Support</h5>
              <p className="text-muted">
                We are always here to help you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* Financial Platform Services Section */}
      <div className="main-service">
        <section className="financial-platform">
          <div className="container">
            {/* Header */}
            <motion.div
              className="platform-header text-center mb-5"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="fw-bold display-6">
                All your finances, in one smart app
              </h2>
              <p className="text-muted fs-5">
                Comprehensive lending solutions – faster, compliant, and
                digital-first
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="services-grid">
              {[
                {
                  title: "Personal Loan",
                  desc: "Get quick funds with our digital application process, instant eligibility checks, and flexible repayment options.",
                  icon: "fas fa-user",
                  img: "/assets/2.png",
                  link: "form.html",
                },
                {
                  title: "Business Loan",
                  desc: "Tailored for SMEs and enterprises with fast approval, minimal paperwork, and flexible credit limits.",
                  icon: "fas fa-briefcase",
                  img: "/assets/3.png",
                  link: "business-loan-form.html",
                },
                {
                  title: "Consumer Durable Loan",
                  desc: "Buy appliances and gadgets easily with zero-cost EMI options and instant approvals at point-of-sale.",
                  icon: "fas fa-tv",
                  img: "/assets/4.png",
                  link: "consumer-form.html",
                },
                {
                  title: "Buy Now, Pay Later",
                  desc: "Shop instantly and pay later with flexible repayment tenures and easy merchant integrations.",
                  icon: "fas fa-shopping-cart",
                  img: "/assets/5.png",
                  link: "bnpl-form.html",
                },
                {
                  title: "Loan Against Property",
                  desc: "Unlock the value of your property with low interest rates and high loan-to-value ratio.",
                  icon: "fas fa-home",
                  img: "/assets/6.png",
                  link: "property-form.html",
                },
                {
                  title: "Gold Loan",
                  desc: "Secure loans against your gold assets with quick valuation and attractive interest rates.",
                  icon: "fas fa-gem",
                  img: "/assets/7.png",
                  link: "gold-loan-form.html",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="service-card"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="card-content">
                    <h3 className="service-title">
                      <div className="service-icon">
                        <motion.i
                          className={service.icon}
                          style={{
                            background:
                              "linear-gradient(90deg, #003c9e, #ffffff, #003c9e)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundSize: "200% 200%",
                            display: "inline-block",
                            fontSize: "28px",
                          }}
                          animate={{
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>
                      {service.title}
                    </h3>
                    <p className="service-description">{service.desc}</p>

                    <div className="service-footer d-flex align-items-center justify-content-between">
                      <motion.a
                        href={service.link}
                        className="learn-more-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now{" "}
                        <motion.i
                          className="fas fa-arrow-right"
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.a>
                      <motion.div
                        className="footer-icon"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <img src={service.img} alt={service.title} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* <section className="step-section">

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

        <div className="image-box">
          <img src="assets/step.png" alt="Loan Process" />
        </div>
      </section> */}

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
          <p>Fill out our simple online form in just 5 minutes. No complicated paperwork or branch visits needed.</p>
          <ul className="rl-step-features">
            <li><i className="fas fa-check-circle"></i> 100% digital process</li>
            <li><i className="fas fa-check-circle"></i> No documentation upload needed initially</li>
            <li><i className="fas fa-check-circle"></i> Instant eligibility check</li>
          </ul>
          <a href="form.html" className="rl-step-cta">Start Application</a>
        </div>
        <div className="rl-step-visual">

          <div className="rl-phone-mockup fade-in">
            <img src="assets/1.png" alt="Application Process" className="animate__animated animate__fadeInRight"/>
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
          <p>Our advanced systems verify your details instantly while maintaining complete security and privacy.</p>
          <ul className="rl-step-features">
            <li><i className="fas fa-check-circle"></i> Instant document verification</li>
            <li><i className="fas fa-check-circle"></i> Bank-grade security</li>
            <li><i className="fas fa-check-circle"></i> Quick approval decision</li>
          </ul>
          <a href="interest-rate.html" className="rl-step-cta">Learn About Interest</a>
        </div>
        <div className="rl-step-visual">

          <div className="rl-phone-mockup">
            <img src="assets/2.png" alt="Application Process" className="animate__animated animate__fadeInLeft" />
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
          <p>Receive funds directly in your bank account within hours of approval. No hidden charges or delays.</p>
          <ul className="rl-step-features">
            <li><i className="fas fa-check-circle"></i> Quick transfer to your account</li>
            <li><i className="fas fa-check-circle"></i> Transparent fee structure</li>
            <li><i className="fas fa-check-circle"></i> 24/7 customer support</li>
          </ul>
          <a href="cibil.html" className="rl-step-cta">Check Cibil Now</a>
        </div>
        <div className="rl-step-visual">

          <div className="rl-phone-mockup">
            <img src="assets/3.png" alt="Application Process" className="animate__animated animate__fadeInRight" />
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* <section className="rl-process-cta">
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
      </section> */}

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
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Empowering Your Financial Journey</h2>
        <p>
          With over a decade of expertise, we've helped{" "}
          <span className="highlight">50,000+ clients</span> achieve their
          financial goals through personalized solutions and competitive rates.
          Our commitment to excellence has established us as a trusted partner
          in financial growth.
        </p>
      </motion.div>

      <motion.div
        className="stats-bar"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-item"
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -6,
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <Counter
              end={stat.value}
              prefix={stat.prefix || ""}
              suffix={stat.suffix || ""}
            />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

      <section className="faq-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently <span>Asked Questions</span>
      </motion.h2>

      {/* Search */}
      <motion.div
        className="faq-search"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" placeholder="Search" />
        <i className="fas fa-search"></i>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="faq-tabs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {Object.keys(faqsData).map((tab, idx) => (
          <motion.div
            key={idx}
            className={`faq-tab ${activeTab === tab ? "active" : ""}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setActiveTab(tab);
              setActiveIndexes([]);
            }}
          >
            {tab}
          </motion.div>
        ))}
      </motion.div>

      {/* FAQs */}
      <div className="faq-list">
        {faqsData[activeTab].map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${
              activeIndexes.includes(index) ? "active" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <motion.span
                className="icon"
                animate={{ rotate: activeIndexes.includes(index) ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {activeIndexes.includes(index) && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="faq-btn"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="faq.html">
          <motion.button whileHover={{ scale: 1.1 }}>
            All FAQs
          </motion.button>
        </a>
      </motion.div>
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
