"use client";

import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";


export default function ConsumerDurableLoan() {
  return (
    <>
      <Head>
        <title>Consumer Durable Loan - RupeeLoan</title>
        <meta
          name="description"
          content="Get consumer durable loans with zero down payment, flexible EMIs, and quick approval to buy electronics, appliances, furniture, and more."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="container p-sm-5 p-4">
          <div className="hero-content">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="text-black" >Upgrade Your Lifestyle with Consumer Durable Loans</h1>
                <p className="text-black">
                  Get the latest electronics, appliances, and furniture without
                  straining your finances. Enjoy zero down payment, flexible EMI
                  options, and quick approval.
                </p>
                <a
                  href="/consumer-form"
                  className="btn btn-light btn-lg rounded-pill px-4 py-2"
                >
                  Apply Now
                </a>

                <div className="hero-stats text-black">
                  <div className="stat-item">
                    <i className="fas fa-tv"></i>
                    <div className="stat-text">
                      <strong >50K+</strong>
                      <span>Products Financed</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-bolt"></i>
                    <div className="stat-text">
                      <strong>2h</strong>
                      <span>Quick Approval</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-percentage"></i>
                    <div className="stat-text">
                      <strong>0%</strong>
                      <span>Down Payment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="loan-calculator">
                  <img
                    src="/assets/Consumer-Durable-LoanNew.png"
                    alt="Consumer Durable Loan"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="premium-section">
        <div className="container p-sm-5 p-4">
          <div className="premium-row justify-center mb-60">
            <div className="premium-col col-lg-10 text-center">
              <h2 className="premium-title">
                Easy Financing for Your Desired Products
              </h2>
              <p className="premium-subtitle">
                From electronics to furniture, get what you need now and pay in
                convenient EMIs
              </p>
            </div>
          </div>

          <div className="premium-row align-center mb-60">
            <div className="premium-col col-lg-6">
              <div className="premium-content">
                <h3>Enjoy Now, Pay Later</h3>
                <p>
                  At RupeeLoan, we make it easy to own the latest gadgets,
                  appliances, and furniture without upfront payment. Our consumer
                  durable loans come with flexible repayment options and quick
                  processing.
                </p>

                <div className="loan-feature-list">
                  {[
                    {
                      icon: "fa-money-bill-wave",
                      title: "Zero Down Payment",
                      desc: "Get your desired products without any initial payment",
                    },
                    {
                      icon: "fa-bolt",
                      title: "Instant Approval",
                      desc: "Quick processing with minimal documentation",
                    },
                    {
                      icon: "fa-calendar-alt",
                      title: "Flexible Tenure",
                      desc: "Choose repayment period from 3 to 24 months",
                    },
                    {
                      icon: "fa-store",
                      title: "Wide Partner Network",
                      desc: "Available at thousands of retail stores across India",
                    },
                  ].map((f, i) => (
                    <div className={`loan-feature-item bg${i + 1}`} key={i}>
                      <div className="loan-feature-icon">
                        <i className={`fas ${f.icon}`}></i>
                      </div>
                      <div className="loan-feature-text">
                        <h5>{f.title}</h5>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="premium-col col-lg-6">
              <img
                src="/assets/consumer-durable-loan.png"
                alt="Consumer Durable Financing"
                className="img-fluid rounded"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container p-sm-5 p-4">
          <div className="text-center mb-5">
            <h2>Products You Can Finance</h2>
            <p className="lead">
              From everyday essentials to luxury items, we've got you covered
            </p>
          </div>

          <div className="row">
            {[
              {
                img: "/assets/television.jpg",
                title: "Televisions",
                desc: "LED, OLED, Smart TVs from all leading brands",
              },
              {
                img: "/assets/ac.jpg",
                title: "Air Conditioners",
                desc: "Split, window ACs with inverter technology",
              },
              {
                img: "/assets/mobile.webp",
                title: "Smartphones",
                desc: "Latest smartphones from Apple, Samsung, etc.",
              },
              {
                img: "/assets/laptop.webp",
                title: "Laptops",
                desc: "Premium laptops for work and entertainment",
              },
              {
                img: "/assets/refrigerator.webp",
                title: "Refrigerators",
                desc: "Single door, double door, and side-by-side models",
              },
              {
                img: "/assets/washing machine.webp",
                title: "Washing Machines",
                desc: "Front load, top load, and semi-automatic machines",
              },
              {
                img: "/assets/furniture.webp",
                title: "Furniture",
                desc: "Sofas, beds, wardrobes and home furniture",
              },
              {
                img: "/assets/kitchen.webp",
                title: "Kitchen Appliances",
                desc: "Microwaves, mixers, cooktops and more",
              },
            ].map((p, i) => (
              <div className="col-md-3 col-6 mb-4" key={i}>
                <div className="product-card">
                  <div className="product-img">
                    <img src={p.img} alt={p.title} width="100%" />
                  </div>
                  <div className="product-content">
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="documents-section">
        <div className="container p-sm-5 p-4">
          <div className="row">
            {/* Left */}
            <div className="col-lg-6">
              <h2>Required Documents</h2>
              <p className="lead">Minimal documentation for quick approval</p>

              <h4 className="mt-4">Basic Requirements</h4>
              <ul className="documents-list">
                <li>KYC Documents (PAN Card, Aadhaar Card)</li>
                <li>Recent passport size photograph</li>
                <li>
                  Income proof (salary slips for salaried, bank statements for
                  self-employed)
                </li>
                <li>Address proof (Aadhaar, utility bill, passport)</li>
              </ul>

              <h4 className="mt-4">Additional Benefits</h4>
              <ul className="documents-list">
                <li>No collateral required</li>
                <li>No processing fee on selected products</li>
                <li>Special discounts for existing customers</li>
                <li>Insurance coverage option available</li>
              </ul>
            </div>

            {/* Right */}
            <div className="col-lg-6">
              <div className="bg-light p-5 rounded">
                <h3 className="mb-4">Interest Rates & Charges</h3>

                <div className="mb-4">
                  <h5>Interest Rates</h5>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Starting From</span>
                    <strong>12% p.a.</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Up To</span>
                    <strong>22% p.a.</strong>
                  </div>
                </div>

                <div className="mb-4">
                  <h5>Processing Fee</h5>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <span>Fee</span>
                    <strong>₹499 or 1% of loan amount</strong>
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
                    <strong>Nil after 3 EMIs</strong>
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

      {/* Loan Process Section */}
      <section className="loan-process-section">
        <div className="container p-sm-5 p-4">
          <div className="section-header">
            <h2 className="section-title text-black">CONSUMER DURABLE LOAN PROCESS</h2>
            <p className="section-subtitle">
              Get your desired product in three simple steps:
            </p>
          </div>

          <div className="process-steps">
            {[
              {
                num: "1",
                icon: "fa-store",
                title: "Select Product",
                desc: "Choose your desired product at any of our partner stores.",
              },
              {
                num: "2",
                icon: "fa-mobile-alt",
                title: "Apply",
                desc: "Provide basic details and documents for instant approval.",
              },
              {
                num: "3",
                icon: "fa-box-open",
                title: "Take Home",
                desc: "Complete the process and take your product home immediately.",
              },
            ].map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{s.num}</div>
                <div className="step-icon">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-description">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="cta-container">
            <a href="/consumer-form" className="btn btn-apply">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="faq-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <p className="lead">
              Find answers to common questions about consumer durable loans
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {[
                {
                  q: "What is a consumer durable loan?",
                  a: "A consumer durable loan is a financing option that allows you to purchase household products like electronics, appliances, and furniture without paying the entire amount upfront. You can pay through easy EMIs over a period of time.",
                },
                {
                  q: "How quickly can I get approval?",
                  a: "Approval for consumer durable loans is typically instant. At our partner stores, you can complete the application and get approval within 2 hours, allowing you to take the product home immediately.",
                },
                {
                  q: "Is there any down payment required?",
                  a: "Most of our consumer durable loans require zero down payment. You can take the product home without any initial payment and start paying through EMIs from the next month.",
                },
                {
                  q: "What products can I purchase with this loan?",
                  a: "You can purchase a wide range of products including televisions, refrigerators, air conditioners, washing machines, smartphones, laptops, furniture, kitchen appliances, and more from our partner stores.",
                },
                {
                  q: "What is the maximum loan amount and tenure?",
                  a: "You can get loans from ₹5,000 up to ₹5 lakhs depending on the product and your eligibility. The tenure ranges from 3 to 24 months, giving you flexibility in repayment.",
                },
              ].map((faq, i) => (
                <div className="faq-item" key={i}>
                  <div className="faq-question">
                    {faq.q}
                    <span className="faq-toggle"></span>
                  </div>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Faq/>

      <Footer />
    </>
  );
}
