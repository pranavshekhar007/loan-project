"use client";

import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion ,   AnimatePresence,} from "framer-motion";
import { useState } from "react";
import Faq from "../Components/Faq";

const faqData = [
                  {
                    question: "How do I apply for a loan?",
                    answer: "You can apply for a loan through our website or mobile app. The process is simple: 1) Select the loan type you need, 2) Fill out the application form with your details, 3) Upload necessary documents, 4) Get approval decision within minutes, and 5) Receive funds in your account after verification.",
                  },
                  {
                    question: "What documents are required for a personal loan?",
                    answer: "For a personal loan, you typically need: 1) Identity proof (Aadhaar, PAN card, or passport), 2) Address proof (utility bill, rental agreement, or Aadhaar), 3) Income proof (salary slips for salaried individuals or bank statements for self-employed), and 4) Recent photographs.",
                  },
                  {
                    question: "How long does it take to get loan approval?",
                    answer: "Most loan applications are approved within 15 minutes to 2 hours during business hours. After approval, funds are typically disbursed within 24-48 hours after document verification.",
                  },
                  {
                    question: "What is the minimum credit score required?",
                    answer: "We consider applicants with a credit score of 650 and above. However, even if your score is lower, we might still be able to offer you a loan with different terms. Apply now to check your eligibility.",
                  },
                  {
                    question: "Can I prepay my loan without penalties?",
                    answer: "Yes, you can prepay your loan after 6 EMIs without any prepayment charges. For foreclosing your loan within the first 6 months, a nominal fee may apply depending on your loan agreement.",
                  },
                ]

export default function Support() {

  const [activeIndexes, setActiveIndexes] = useState([]);
  
    const toggleFAQ = (index) => {
      if (activeIndexes.includes(index)) {
        setActiveIndexes(activeIndexes.filter((i) => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    };

  return (
    <>
      <Head>
        <title>Customer Support - Rupee Loan</title>
        <meta
          name="description"
          content="Get 24/7 customer support for your loan applications, repayments, and account queries with RupeeLoan."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Support Hero Section */}
        <section className="support-hero">
          <div className="container d-flex flex-column justify-content-center" style={{minHeight:"65vh"}}>
            <h1 className="text-black">We're Here to Help</h1>
            <p className="text-black">
              Get assistance with your loan application, account management, or
              any other queries you might have. Our support team is available
              24/7.
            </p>
            <div
              className="input-group mb-3 mx-auto"
              style={{ maxWidth: "500px" }}
            >
              {/* <input
                type="text"
                className="form-control"
                placeholder="What can we help you with?"
                style={{backgroundColor:"#faf9f9"}}
              /> */}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0 gx-0 px-md-5 px-3">
                <h2>Get in Touch</h2>
                <p className="text-muted">
                  Have a question or need assistance? Fill out the form and our
                  team will contact you shortly.
                </p>

                <div className="d-flex align-items-center mt-5">
                  <div className="bg-light rounded-circle p-3 me-3">
                    <i className="fas fa-map-marker-alt  fs-4"></i>
                  </div>
                  <div>
                    <h5>Visit Our Office</h5>
                    <p className="text-muted mb-0">
                      123 Financial Street, Banking District
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-4">
                  <div className="bg-light rounded-circle p-3 me-3">
                    <i className="fas fa-clock  fs-4"></i>
                  </div>
                  <div>
                    <h5>Working Hours</h5>
                    <p className="text-muted mb-0">
                      Monday - Friday: 9:00 - 18:00
                      <br />
                      Saturday: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                    <select className="form-control" required>
                      <option value="" disabled selected>
                        Select Inquiry Type
                      </option>
                      <option>Loan Application</option>
                      <option>Existing Loan Query</option>
                      <option>Documentation</option>
                      <option>Repayment Issues</option>
                      <option>Technical Support</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                    <button type="submit" className="btn btn-submit d-flex justify-content-center">
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="support-options">
          <div className="container">
            <div className="text-center mb-5">
              <h2>How can we help you today?</h2>
              <p className="text-muted">
                Choose from our support options to get the help you need
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="support-card">
                  <div className="support-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3>Call Support</h3>
                  <p>
                    Speak directly with our support team for immediate
                    assistance
                  </p>
                  <p className="fw-bold mt-3">+91 98*** ***10</p>
                  <p className="text-muted">Available 24/7</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="support-card">
                  <div className="support-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h3>Live Chat</h3>
                  <p>
                    Chat with our support agents in real-time for quick
                    solutions
                  </p>
                  <button className="btn btn-submit mt-3 d-flex justify-content-center">Start Chat</button>
                </div>
              </div>

              <div className="col-md-4">
                <div className="support-card">
                  <div className="support-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>Email Support</h3>
                  <p>
                    Send us an email and we'll get back to you within 24 hours
                  </p>
                  <p className="fw-bold mt-3">support@RupeeLoan.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* FAQ Section */}
        {/* <section className="faq-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2>Frequently Asked Questions</h2>
              <p className="text-muted">
                Find quick answers to common questions about our loan services
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
              <div className="faq-list">
          {faqData.map((faq, index) => (
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
              </div>
            </div>
          </div>
        </section> */}
        <Faq/>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
