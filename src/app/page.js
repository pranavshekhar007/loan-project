"use client";
import Script from "next/script";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { loanListServ } from "./services/loan.service";
import Faq from "./Components/Faq";

export default function Home() {
  // const [activeTab, setActiveTab] = useState("Personal Loan");
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

 
 

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  


  const [services , setServices] = useState([])

  const getLoanList = async () => {
   try{
     const res = await loanListServ();
    // if(res?.statusCode == 200){
      console.log(" loan  list res" , res?.data);
      setServices(res?.data);
    // }
   }
   catch(err){
    console.log("error" , err)
   }

  }

  useEffect (() => {
    getLoanList();
  },[])

  const stats = [
    { value: 50, label: "Happy Customers", suffix: "K+" },
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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* <!-- Hero Section --> */}
      <div className="hero-banner">
        <div className="badge2">
          <i className="fas fa-award"></i> Trusted by 500K+ users
        </div>

        <div className="content">
          <h1>Instant Loans Made Simple & Fast</h1>
          <p>
            {/* Get the financial support you need within minutes. Our AI-powered
            platform offers personalized loan options with competitive rates and
            no hidden fees. */}
            Get the financial support you need in minutes. Our AI-powered platform offers personalized loan options with competitive rates and zero hidden fees.
          </p>
          {/* <div className="hero-btn">
            Apply Now <i className="fas fa-arrow-right"></i>
          </div> */}

          <div className="cta-buttons">
            <a href="#" className="btn">
              <img src="assets/app-store.svg" alt="Download on the App Store" />
            </a>
            <a href="#" className="btn">
              <img src="assets/Google_Play_Store_badge_EN.svg"  alt="Get it on Google Play" />
            </a>
          </div>

          <div className="features " style={{marginBottom:"30px"}}>
            <div className="feature">
              <i className="fas fa-check-circle"></i> No paperwork
            </div>
            <div className="feature">
              <i className="fas fa-check-circle"></i> Instant approval
            </div>
            <div className="feature">
              <i className="fas fa-check-circle"></i> Low-interest rates
            </div>
          </div>
        </div>

        <div className="loan-circle-section">
          <img src="assets/girl-inr3.png" alt="Hero section illustration"  className="img-fluid"/>
          <i className="fa-solid fa-landmark icon"></i>
          <i className="fa-solid fa-credit-card icon"></i>
          <i className="fa-solid fa-piggy-bank icon"></i>
          <i className="fa-solid fa-sack-dollar icon"></i>
          <i className="fa-solid fa-chart-line icon"></i>
        </div>
      </div>

      {/* Company Introduction Section */}
      <section className="new-about py-5">
        <div className="container">
          {/* Heading */}
          <motion.div
            className="row my-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // 👈 scroll trigger
            variants={staggerContainer}
          >
            <motion.h2 className="text-center fw-bold h2" variants={fadeUp}>
              Your Trusted Partner in Easy & Secure Loans
            </motion.h2>
            <motion.p className="text-center text-muted" variants={fadeUp}>
              We are committed to making borrowing simple, fast, and
              transparent. Our platform connects you with the best banks and
              lenders, ensuring quick disbursement, lowest interest rates, and a
              completely hassle-free experience. With trust and integrity at our
              core, we help you achieve your financial goals with confidence.
            </motion.p>
          </motion.div>

          <div className="row align-items-center">
            {/* Left Boxes */}
            <motion.div
              className="col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="box mb-5" variants={fadeUp}>
                <div className="about-icon">
                  <img src="/assets/trust.png" alt="Trustworthy Icon" width="40" />
                </div>
                <h5 className="fw-bold mt-3">100% Trustworthy</h5>
                <p className="text-muted">
                  Safe, secure & transparent process.
                </p>
              </motion.div>

              <motion.div className="box mb-5" variants={fadeUp}>
                <div className="about-icon">
                  <img src="/assets/fast-money.png" alt="Fast disbursement icon" width="40" />
                </div>
                <h5 className="fw-bold mt-3">Fast Disbursement</h5>
                <p className="text-muted">
                  Quick loan approval & instant funds.
                </p>
              </motion.div>
            </motion.div>

            {/* Center Image */}
            <motion.div
              className="col-md-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="position-relative circle-wrap">
                <motion.img
                  src="/assets/1.png"
                  alt="About Us"
                  className="img-fluid rounded"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="clients position-absolute top-0 start-0 px-3 py-2 rounded-pill shadow bg-white"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  50K+ Clients
                </motion.div>
              </div>
            </motion.div>

            {/* Right Boxes */}
            <motion.div
              className="col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="box mb-5" variants={fadeUp}>
                <div className="about-icon">
                  <img src="/assets/legal.png" alt="Legal Icon" width="40" />
                </div>
                <h5 className="fw-bold mt-3">Legal & Secure</h5>
                <p className="text-muted">
                  All loans are verified & RBI compliant.
                </p>
              </motion.div>

              <motion.div className="box mb-5" variants={fadeUp}>
                <div className="about-icon">
                  <img src="/assets/support.png" alt="Support Icon" width="40" />
                </div>
                <h5 className="fw-bold mt-3">24/7 Support</h5>
                <p className="text-muted">We are always here to help you.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Platform Services Section */}
      <section className="main-service">
        <div className="financial-platform">
          <div className="platform-header text-center mb-5">
            <h2 className="h2">All your finances, in one smart app</h2>
            <p>
              Comprehensive lending solutions – faster, compliant, and
              digital-first
            </p>
          </div>

          <div className="services-grid">
            {services?.map((service, i) => (
              <motion.div
                key={i}
                className="service-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={i}
                whileHover={{
                  scale: 0.3,
                  y: -4,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="card-content">
                  <h4 className="service-title">
                    {/* <div className="service-icon">
                      <i className={service?.icon}></i>
                     
                    </div> */}
                    {service?.name}
                  </h4>
                  <p className="service-description">{service?.description}</p>

                  <div className="service-footer">
                    <a href={service.link} className="learn-more-btn" style={{cursor:"pointer"}}>
                      View Details <i className="fas fa-arrow-right"></i>
                    </a>
                    <div className="footer-icon">
                      {/* <img src={service.img} alt={service.title} /> */}
                       <img src={service?.icon} alt={`${service?.name} icon`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="marquee-bar"
      >
        Money transfer ✦ Loans ✦ Travel ✦ Insurance ✦ Bill Payments ✦ EMI
        Payments ✦ Rewards & Cashback ✦
      </marquee>

     
      <section className="rl-process-hero" id="step-process">
        <div className="rl-process-intro">
          {/* <h2>Our Simple 3-Step Loan Process</h2> */}
           <h1>Our Simple 3-Step Loan Process</h1>
          <p>
            Getting the funds you need has never been easier. Just follow these
            three simple steps.
          </p>
          <div className="rl-scroll-indicator">
            <span style={{fontSize:"1rem"}}>Scroll to explore</span>
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

      {/* Process Steps */}
      <section className="rl-process-steps">
        {/* Step 1 */}
        <div
          className="rl-step rl-step-1"
          data-step="1"
          ref={(el) => (stepRefs.current[0] = el)}
        >
          <div className="rl-step-container">
            <div className="rl-step-content">
              <div className="rl-step-number">01</div>
              <h2>Application</h2>
              <p>
                Fill out our simple online form in only 5 minutes. No
                complicated paperwork or branch visits needed.
              </p>
              <ul className="rl-step-features">
                <li>
                  <i className="fas fa-check-circle"></i> 100% digital process
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> No documentation
                  upload initially
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Instant eligibility
                  check
                </li>
              </ul>
              <Link href="/form" className="rl-step-cta">
                Start Application
              </Link>
            </div>
            <div className="rl-step-visual">
              <div className="rl-phone-mockup">
                <img src="assets/1.png" alt="Application Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className="rl-step rl-step-2"
          data-step="2"
          ref={(el) => (stepRefs.current[1] = el)}
        >
          <div className="rl-step-container">
            <div className="rl-step-content">
              <div className="rl-step-number">02</div>
              <h2>Verification</h2>
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
                </li>
              </ul>
              <Link href="/interest-rate" className="rl-step-cta">
                {/* Learn About Interest */}
                View Interest Rates
              </Link>
              
            </div>
            <div className="rl-step-visual">
              <div className="rl-phone-mockup">
                <img src="assets/verification.png" alt="Verification Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className="rl-step rl-step-3"
          data-step="3"
          ref={(el) => (stepRefs.current[2] = el)}
        >
          <div className="rl-step-container">
            <div className="rl-step-content">
              <div className="rl-step-number">03</div>
              <h2>Disbursement</h2>
              <p>
                Receive funds directly in your bank account within hours of
                approval. No hidden charges or delays.
              </p>
              <ul className="rl-step-features">
                <li>
                  <i className="fas fa-check-circle"></i> Quick transfer
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Transparent fees
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 24/7 support
                </li>
              </ul>
              <Link href="/cibil" className="rl-step-cta">
                {/* Check Cibil Now */}
                Check CIBIL Score
              </Link>
            </div>
            <div className="rl-step-visual">
              <div className="rl-phone-mockup">
                <img src="assets/disbursement.png" alt="Disbursement Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      

     

      <section className="process">
        <div className="process-title mb-5">
          <h2 className="h2">Here's how it works</h2>
          <p>
            When you're ready, RupeeLoan is ready too - 24 hours a day, 7 days a
            week.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <h3>1.</h3>
            <h4>Apply Online.</h4>
            <p>
              Start your journey by submitting an online application through our
              simple form.
            </p>
          </div>
          <div className="step">
            <h3>2.</h3>
            <h4>Enter Your Information - 10 min</h4>
            <p>
              Provide your personal and financial details. It only takes around
              10 minutes to complete.
            </p>
          </div>
          <div className="step">
            <h3>3.</h3>
            <h4>Pre-qualify / Pre-Approve - 5 min</h4>
            <p>
              Get instant feedback to know whether you are pre-qualified or
              pre-approved in just 5 minutes.
            </p>
          </div>
          <div className="step">
            <h3>4.</h3>
            <h4>Help you prepare</h4>
            <p>
              Our team assists you with the required documents and guidance to
              move forward smoothly.
            </p>
          </div>
          <div className="step">
            <h3>5.</h3>
            <h4>We help you qualify - within 15 days</h4>
            <p>
              We work with you over the next 15 days to ensure everything is in
              place for qualification.
            </p>
          </div>
          <div className="step step-consultation">
            <div className="overlay "></div>

            <div className="consultation-content">
              <div className="consultation-left">
                <div className="support-text">
                  <h2 className="h2 mt-lg-0 mt-4" style={{color:"white"}}>Need Consultation Support?</h2>
                  <p>
                    Our experts are here to guide you through every step of the
                    process with personalized support.
                  </p>
                  <a href="#consultation" className="light-btn">
                    Get Free Consultation
                  </a>
                </div>
              </div>

              <div className="consultation-right">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/636/756/small_2x/consultation-3d-icons-png.png"
                  alt="Consultation Support Illustration"
                />
              </div>
            </div>
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
          <h2 className="h2">Empowering Your Financial Journey</h2>
          <p>
            With over a decade of expertise, we've helped{" "}
            <span className="highlight">50K+ clients</span> achieve their
            financial goals through personalized solutions and competitive
            rates. Our commitment to excellence has established us as a trusted
            partner in financial growth.
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
              <p className="mb-0">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* <section className="faq-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently <span>Asked Questions</span>
        </motion.h2>

       

       
        <motion.div
          className="faq-tabs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
        </motion.div>

        <div className="faq-list">
          {faqsData.map((faq, index) => (
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

       
        <motion.div
          className="faq-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/faq">
            <motion.button whileHover={{ scale: 1.1 }}>All FAQs</motion.button>
          </a>
        </motion.div>
      </section> */}

      <Faq/>

     
      <Footer />
    </>
  );
}
