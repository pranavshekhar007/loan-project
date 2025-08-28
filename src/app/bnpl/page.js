"use client";

// pages/bnpl.js
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function BNPL() {
  return (
    <>
      <Head>
        <title>Buy Now, Pay Later - RupeeLoan</title>
        <meta
          name="description"
          content="Shop now and pay later with RupeeLoan BNPL service. Get instant approval, zero interest for 3 months, and flexible repayment options."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center">
              {/* Left */}
              <div className="col-lg-6" data-aos="fade-right">
                <h1>Shop Now, Pay Later with Zero Interest</h1>
                <p>
                  Enjoy your purchases today and pay in easy EMIs with our Buy
                  Now, Pay Later service. No hidden charges, no complex
                  paperwork.
                </p>
                <a
                  href="/form"
                  className="btn btn-light btn-lg rounded-pill px-4 py-3"
                >
                  Get Started
                </a>

                <div className="hero-stats">
                  <div className="stat-item">
                    <i className="fas fa-percentage"></i>
                    <div className="stat-text">
                      <strong>0%</strong>
                      <span>Interest</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-bolt"></i>
                    <div className="stat-text">
                      <strong>2 Min</strong>
                      <span>Approval</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="col-lg-6">
                <div className="loan-calculator">
                  <img
                    src="/assets/buy-now-pay-later.webp"
                    alt="Buy Now Pay Later"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container text-center mb-5">
          <h2 className="section-title">Why Choose Our BNPL Service</h2>
          <p className="section-subtitle">
            Experience the future of shopping with flexible payment options
          </p>
        </div>

        <div className="container">
          <div className="row">
            {[
              {
                icon: "fa-money-bill-wave",
                title: "Zero Interest",
                desc: "Pay only the product price with no extra interest charges for up to 3 months.",
              },
              {
                icon: "fa-bolt",
                title: "Instant Approval",
                desc: "Get approved in minutes with minimal documentation and quick verification.",
              },
              {
                icon: "fa-mobile-alt",
                title: "Easy Management",
                desc: "Manage your payments, track spending, and view statements through our mobile app.",
              },
            ].map((f, i) => (
              <div
                className="col-md-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                key={i}
              >
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={`fas ${f.icon}`}></i>
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container text-center mb-5">
          <h2 className="section-title">Shop at Your Favorite Stores</h2>
          <p className="section-subtitle">
            Use BNPL at thousands of online and offline retailers
          </p>
        </div>

        <div className="container partner-grid">
          {[
            "amazon-logo.jpg",
            "croma.png",
            "Flipkart-logo.jpg",
            "Puma_complete_logo.svg",
            "Adidas-Logo.png",
          ].map((img, i) => (
            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              key={i}
            >
              <img
                src={`/assets/${img}`}
                alt="Partner Brand"
                className="partner-img"
              />
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container text-center mb-5">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started with BNPL in three simple steps
          </p>
        </div>

        <div className="container works-container">
          <div className="row">
            {[
              {
                step: 1,
                icon: "fa-user-plus",
                title: "Sign Up",
                desc: "Create your account with basic details and get instant credit limit approval.",
              },
              {
                step: 2,
                icon: "fa-shopping-cart",
                title: "Shop",
                desc: "Select BNPL at checkout from any of our partner stores, online or offline.",
              },
              {
                step: 3,
                icon: "fa-credit-card",
                title: "Pay in EMIs",
                desc: "Pay back in easy monthly installments with zero interest for 3 months.",
              },
            ].map((w, i) => (
              <div
                className="col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={i * 200}
                key={i}
              >
                <div className={`works-card works-card-${w.step}`}>
                  <div className="works-number">{w.step}</div>
                  <div className="works-icon mb-4">
                    <i className={`fas ${w.icon} fa-2x`}></i>
                  </div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="Benefits"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="mb-4">Benefits of Using BNPL</h2>
            {[
              {
                icon: "fa-wallet",
                title: "Financial Flexibility",
                desc: "Manage your cash flow better by splitting payments over time without interest.",
              },
              {
                icon: "fa-shopping-bag",
                title: "Instant Gratification",
                desc: "Get what you need now without waiting to save up the full amount.",
              },
              {
                icon: "fa-chart-line",
                title: "Build Credit History",
                desc: "Responsible use of BNPL can help you build a positive credit history.",
              },
            ].map((b, i) => (
              <div className="benefit-item d-flex mb-3" key={i}>
                <div className="benefit-icon me-3">
                  <i className={`fas ${b.icon}`}></i>
                </div>
                <div>
                  <h5>{b.title}</h5>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container text-center mb-5">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied users who enjoy flexible payments
          </p>
        </div>

        <div className="container row">
          {[
            {
              rating: 5,
              text: `"BNPL helped me purchase a new laptop for my studies without burdening my parents. The process was smooth and the zero interest offer was amazing!"`,
              img: "https://randomuser.me/api/portraits/women/65.jpg",
              name: "Priya Sharma",
              role: "Student, Delhi",
            },
            {
              rating: 5,
              text: `"As a freelancer, my income is irregular. BNPL allows me to make necessary purchases and pay when I have funds. It's been a financial lifesaver!"`,
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              name: "Rahul Mehta",
              role: "Freelancer, Mumbai",
            },
            {
              rating: 4.5,
              text: `"I used BNPL to buy furniture for my new apartment. The process was seamless and being able to pay in installments made budgeting so much easier."`,
              img: "https://randomuser.me/api/portraits/women/45.jpg",
              name: "Neha Patel",
              role: "Marketing Executive, Bangalore",
            },
          ].map((t, i) => (
            <div
              className="col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={i * 200}
              key={i}
            >
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <i
                      key={star}
                      className={`fas ${
                        t.rating >= star + 1
                          ? "fa-star"
                          : t.rating > star
                          ? "fa-star-half-alt"
                          : "fa-star-o"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="mb-4">{t.text}</p>
                <div className="d-flex align-items-center">
                  <div className="testimonial-avatar me-3">
                    <img src={t.img} alt={t.name} className="img-fluid" />
                  </div>
                  <div>
                    <h6 className="mb-0">{t.name}</h6>
                    <small>{t.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Ready to Shop Smarter?</h2>
          <p>
            Join thousands of savvy shoppers who are using BNPL to make their
            purchases more affordable
          </p>
          <a href="/form" className="btn btn-light btn-lg">
            Get Started Now
          </a>
        </div>
      </section>

      {/* <!-- FAQ Section --> */}
    <section class="faq-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-subtitle">Find answers to common questions about our BNPL service</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="faq-item" data-aos="fade-up">
                        <div class="faq-question">
                            What is Buy Now, Pay Later (BNPL)?
                            <span class="faq-toggle"></span>
                        </div>
                        <div class="faq-answer">
                            Buy Now, Pay Later is a payment solution that allows you to make purchases and pay for them in installments over time, usually with zero interest if paid within the promotional period.
                        </div>
                    </div>

                    <div class="faq-item" data-aos="fade-up">
                        <div class="faq-question">
                            Is there any interest charged on BNPL?
                            <span class="faq-toggle"></span>
                        </div>
                        <div class="faq-answer">
                            For standard repayment periods (up to 3 months), we charge zero interest. For extended tenures beyond 3 months, a nominal interest of 1% per month may apply.
                        </div>
                    </div>

                    <div class="faq-item" data-aos="fade-up">
                        <div class="faq-question">
                            How do I increase my credit limit?
                            <span class="faq-toggle"></span>
                        </div>
                        <div class="faq-answer">
                            Your credit limit can be increased by maintaining a good repayment history, providing income documents, and regularly using our BNPL service. You can request a limit increase through the app.
                        </div>
                    </div>

                    <div class="faq-item" data-aos="fade-up">
                        <div class="faq-question">
                            Can I use BNPL for online shopping?
                            <span class="faq-toggle"></span>
                        </div>
                        <div class="faq-answer">
                            Yes, our BNPL service is accepted at thousands of online stores across various categories including electronics, fashion, travel, and more.
                        </div>
                    </div>

                    <div class="faq-item" data-aos="fade-up">
                        <div class="faq-question">
                            What happens if I miss a payment?
                            <span class="faq-toggle"></span>
                        </div>
                        <div class="faq-answer">
                            A late payment fee of ₹100 will be charged for each missed payment. Repeated missed payments may affect your credit score and limit eligibility.
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
