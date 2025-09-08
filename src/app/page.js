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
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // const services = [
  //   {
  //     title: "Personal Loan",
  //     icon: "bi bi-cash-coin",
  //     desc: "Get quick funds with our digital application process, instant eligibility checks, and flexible repayment options.",
  //     img: "assets/2.png",
  //     link: "form.html",
  //   },
  //   {
  //     title: "Business Loan",
  //     icon: "bi bi-briefcase",
  //     desc: "Tailored for SMEs and enterprises with fast approval, minimal paperwork, and flexible credit limits.",
  //     img: "assets/3.png",
  //     link: "business-loan-form.html",
  //   },
  //   {
  //     title: "Consumer Durable Loan",
  //     icon: "bi bi-credit-card",
  //     desc: "Buy appliances and gadgets easily with zero-cost EMI options and instant approvals at point-of-sale.",
  //     img: "assets/4.png",
  //     link: "consumer-form.html",
  //   },
  //   {
  //     title: "Buy Now, Pay Later",
  //     icon: "bi bi-cart-check",
  //     desc: "Shop instantly and pay later with flexible repayment tenures and easy merchant integrations.",
  //     img: "assets/5.png",
  //     link: "bnpl-form.html",
  //   },
  //   {
  //     title: "Loan Against Property",
  //     icon: "bi bi-house-door",
  //     desc: "Unlock the value of your property with low interest rates and high loan-to-value ratio.",
  //     img: "assets/6.png",
  //     link: "property-form.html",
  //   },
  //   {
  //     title: "Gold Loan",
  //     icon: "bi bi-gem",
  //     desc: "Secure loans against your gold assets with quick valuation and attractive interest rates.",
  //     img: "assets/7.png",
  //     link: "gold-loan-form.html",
  //   },
  // ];


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
            Get the financial support you need within minutes. Our AI-powered
            platform offers personalized loan options with competitive rates and
            no hidden fees.
          </p>
          <div className="hero-btn">
            Apply Now <i className="fas fa-arrow-right"></i>
          </div>

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

        <div className="loan-circle-section">
          <img src="assets/girl-inr.png" alt="Rupee" />
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
            <motion.h1 className="text-center fw-bold" variants={fadeUp}>
              Your Trusted Partner in Easy & Secure Loans
            </motion.h1>
            <motion.p className="text-center text-muted fs-5" variants={fadeUp}>
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
                  <img src="/assets/trust.png" alt="Trustworthy" width="40" />
                </div>
                <h5 className="fw-bold mt-3">100% Trustworthy</h5>
                <p className="text-muted">
                  Safe, secure & transparent process.
                </p>
              </motion.div>

              <motion.div className="box mb-5" variants={fadeUp}>
                <div className="about-icon">
                  <img src="/assets/fast-money.png" alt="Fast" width="40" />
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
                  50,000+ Clients
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
                  <img src="/assets/legal.png" alt="Legal" width="40" />
                </div>
                <h5 className="fw-bold mt-3">Legal & Secure</h5>
                <p className="text-muted">
                  All loans are verified & RBI compliant.
                </p>
              </motion.div>

              <motion.div className="box mb-5" variants={fadeUp}>
                <div className="about-icon">
                  <img src="/assets/support.png" alt="Support" width="40" />
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
            <h2>All your finances, in one smart app</h2>
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
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="card-content">
                  <h3 className="service-title">
                    <div className="service-icon">
                      <i className={service?.icon}></i>
                      {/* <img src={service?.icon}  alt="icon" style={{height:"40px" , width:"40px"}}></img> */}
                    </div>
                    {service?.name}
                  </h3>
                  <p className="service-description">{service?.description}</p>

                  <div className="service-footer">
                    <a href={service.link} className="learn-more-btn">
                      Apply Now <i className="fas fa-arrow-right"></i>
                    </a>
                    <div className="footer-icon">
                      {/* <img src={service.img} alt={service.title} /> */}
                       <img src={service?.icon} alt={service.title} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="marquee-bar"
      >
        Money transfer ✦ Loans ✦ Travel ✦ Insurance ✦ Bill Payments ✦ EMI
        Payments ✦ Rewards & Cashback ✦
      </marquee>

      {/*     
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
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.3}
          centeredSlides={true} 
          pagination={{ clickable: true }}
          loop={false}
          navigation={{
            nextEl: ".rl-next",
            prevEl: ".rl-prev",
          }}
          className="rl-swiper"
        >
        
          <SwiperSlide>
            <div className="rl-step rl-step-1">
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
                      <i className="fas fa-check-circle"></i> 100% digital
                      process
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> No documentation
                      upload initially
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Instant
                      eligibility check
                    </li>
                  </ul>
                  <a href="form.html" className="rl-step-cta">
                    Start Application
                  </a>
                </div>
                <div className="rl-step-visual">
                  <div className="rl-phone-mockup">
                    <img src="assets/1.png" alt="Application Process" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rl-step rl-step-2">
              <div className="rl-step-container">
                <div className="rl-step-content">
                  <div className="rl-step-number">02</div>
                  <h3>Verification</h3>
                  <p>
                    Our advanced systems verify your details instantly with
                    security.
                  </p>
                  <ul className="rl-step-features">
                    <li>
                      <i className="fas fa-check-circle"></i> Instant document
                      verification
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Bank-grade
                      security
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Quick approval
                    </li>
                  </ul>
                  <a href="interest-rate.html" className="rl-step-cta">
                    Learn About Interest
                  </a>
                </div>
                <div className="rl-step-visual">
                  <div className="rl-phone-mockup">
                    <img src="assets/verification.png" alt="Verification" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
         

        #010a2d
        
          <SwiperSlide>
            <div className="rl-step rl-step-3">
              <div className="rl-step-container">
                <div className="rl-step-content">
                  <div className="rl-step-number">03</div>
                  <h3>Disbursement</h3>
                  <p>
                    Receive funds directly in your account within hours of
                    approval.
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
                  <a href="cibil.html" className="rl-step-cta">
                    Check CIBIL Now
                  </a>
                </div>
                <div className="rl-step-visual">
                  <div className="rl-phone-mockup">
                    <img src="assets/disbursement.png" alt="Disbursement" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        
        <div className="rl-arrows-nav">
          <button className="rl-prev">◀</button>
          <button className="rl-next">▶</button>
        </div>
      </section> */}

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
                <img src="assets/1.png" alt="Application Process" />
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
                </li>
              </ul>
              <Link href="/interest-rate" className="rl-step-cta">
                Learn About Interest
              </Link>
            </div>
            <div className="rl-step-visual">
              <div className="rl-phone-mockup">
                <img src="assets/verification.png" alt="Verification" />
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
              <h3>Disbursement</h3>
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
                Check Cibil Now
              </Link>
            </div>
            <div className="rl-step-visual">
              <div className="rl-phone-mockup">
                <img src="assets/disbursement.png" alt="Disbursement" />
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

      {/* <section
            className="process pt-140 pb-40 pos-rel"
            data-bg-color="#fff"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8">
                  <div className="process-left pt-70">
                    <div className="sec-title">
                      <h2
                        className="title mb-40 wow fadeInUp"
                        data-wow-duration="600ms"
                        style={{
                          visibility: "visible",
                          animationDuration: "600ms",
                          animationName: "fadeInUp",
                        }}
                      >
                        Our 5-step workflow
                      </h2>
                      <span
                        className="content wow fadeInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="600ms"
                        style={{
                          visibility: "visible",
                          animationDuration: "600ms",
                          animationDelay: "200ms",
                          animationName: "fadeInUp",
                        }}
                      >
                        Our Dousoft Efficient Workflow in 5 Steps ensures
                        streamlined IT solutions. We start by understanding your
                        needs, then plan the project, design intuitive
                        interfaces, build robust systems, and thoroughly test.
                      </span>
                    </div>
                    <div
                      className="xb-btn mt-55 wow fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="600ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "600ms",
                        animationDelay: "400ms",
                        animationName: "fadeInUp",
                      }}
                    >
                      <a
                        href="/about-us"
                        className="thm-btn thm-btn--fill_icon"
                      >
                        <div className="xb-item--hidden-text">
                          <span className="text">Learn more about us</span>
                        </div>
                        <div className="xb-item--holder">
                          <span className="xb-item--text">
                            Learn more about us
                          </span>
                          <div className="xb-item--icon">
                            <i className="far fa-long-arrow-right" />
                          </div>
                          <span className="xb-item--text">
                            Learn more about us
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8">
                  <div className="process-right f-right">
                    <div className="process-item">
                      <span className="xb-item--number">01</span>
                      <div className="xb-item--img">
                        <img src="assets/1.png" alt="consultation and need analysis icon" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Consultation &amp; needs analysis
                        </h3>
                        <span className="xb-item--content">
                          We first understand your challenges to tailor a
                          solution that fits your needs.
                        </span>
                      </div>
                    </div>
                    <div className="process-item">
                      <span className="xb-item--number">02</span>
                      <div className="xb-item--img">
                        <img src="assets/2.png" alt="planning and strategy development" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Planning &amp; strategy development
                        </h3>
                        <span className="xb-item--content">
                          Our team crafts a strategic plan, defining the project
                          roadmap and setting timelines.
                        </span>
                      </div>
                    </div>
                    <div className="process-item">
                      <span className="xb-item--number">03</span>
                      <div className="xb-item--img">
                        <img src="assets/3.png" alt="design and development icon" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Design &amp; development
                        </h3>
                        <span className="xb-item--content">
                          Our designers create intuitive interfaces, while
                          developers build scalable, robust systems.
                        </span>
                      </div>
                    </div>
                    <div className="process-item">
                      <span className="xb-item--number">04</span>
                      <div className="xb-item--img">
                        <img src="assets/4.png" alt="testing and quality assurance icon" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Testing &amp; quality assurance
                        </h3>
                        <span className="xb-item--content">
                          We rigorously test for security, performance resolving
                          any issues before deployment.
                        </span>
                      </div>
                    </div>
                    <div className="process-item">
                      <span className="xb-item--number">05</span>
                      <div className="xb-item--img">
                        <img src="assets/5.png" alt="deployment and ongoing support" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Deployment &amp; ongoing support
                        </h3>
                        <span className="xb-item--content">
                          We first understand your challenges to tailor a
                          solution that fits your needs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="peocess-shape">
              <div className="shape shape--one">
                <img src="assets/img/shape/process-shape01-Photoroom.png" alt="icon" />
              </div>
              <div className="shape shape--two">
                <img src="assets/img/shape/process-shape02-Photoroom.png" alt="icon" />
              </div>
            </div>
          </section> */}

      <section className="process">
        <div className="process-title mb-5">
          <h2>Here's how it works</h2>
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
            <h4>We help you qualify - 15 days</h4>
            <p>
              We work with you over the next 15 days to ensure everything is in
              place for qualification.
            </p>
          </div>
          <div className="step step-consultation">
            <div className="overlay"></div>

            <div className="consultation-content">
              <div className="consultation-left">
                <div className="support-text">
                  <h4>Need Consultation Support?</h4>
                  <p>
                    Our experts are here to guide you through every step of the
                    process with personalized support.
                  </p>
                  <a href="#consultation" className="cta-btn">
                    Get Free Consultation
                  </a>
                </div>
              </div>

              <div className="consultation-right">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/636/756/small_2x/consultation-3d-icons-png.png"
                  alt="Consultation Support"
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
          <h2>Empowering Your Financial Journey</h2>
          <p>
            With over a decade of expertise, we've helped{" "}
            <span className="highlight">50,000+ clients</span> achieve their
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
          <a href="/faq">
            <motion.button whileHover={{ scale: 1.1 }}>All FAQs</motion.button>
          </a>
        </motion.div>
      </section>

      {/* <section className="app-section">
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

        <div className="app-image">
          <img src="assets/mockup.png" alt="App Promotion" width="100%" />
        </div>
      </section> */}

      <Footer />
    </>
  );
}
