"use client";

import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Rupee Loan</title>
        <meta
          name="description"
          content="About RupeeLoan - Your trusted financial partner for over a decade."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="about-hero">
         <div className="container d-flex flex-column justify-content-center" style={{minHeight:"65vh"}}>
            <h1 className="text-black">About RupeeLoan</h1>
            <p className=" text-black">
              Your trusted financial partner for over a decade, providing
              seamless loan experiences with transparency, security, and speed.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col-lg-8 mx-auto">
                <h2 className="mb-4">Our Mission & Vision</h2>
                <p className="lead">
                  We're on a mission to democratize access to credit in India
                  through technology, transparency, and customer-centric
                  solutions.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To make borrowing simple, accessible, and transparent for
                    every Indian by leveraging technology and partnerships with
                    leading financial institutions.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To become India's most trusted financial platform that
                    empowers individuals and businesses to achieve their dreams
                    through accessible credit solutions.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                  <h3>Our Promise</h3>
                  <p>
                    We promise complete transparency, competitive rates, quick
                    approvals, and 24/7 support to ensure a hassle-free
                    borrowing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section ">
          <div className="container p-sm-5 p-4 ">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="mb-4 text-center">Our Journey</h2>
                <p className="lead">
                  From humble beginnings to becoming a trusted name in the
                  lending industry, our journey has been marked by innovation
                  and customer satisfaction.
                </p>
                <p>
                  Founded in 2010, RupeeLoan started with a simple goal: to make
                  the loan application process easier for everyday Indians. What
                  began as a small operation has now grown into a platform
                  serving over 50,000 customers across India.
                </p>
                <p>
                  Over the years, we have continuously upgraded our technology
                  to provide faster approvals, transparent processing, and
                  seamless digital experiences. Our focus has always been on
                  empowering individuals and businesses with access to
                  affordable credit solutions.
                </p>
                <p>
                  With a strong network of financial partners, RupeeLoan offers
                  a wide range of loan products, including personal loans,
                  business loans, loan against property, and consumer durable
                  loans—tailored to suit diverse customer needs.
                </p>
                <p>
                  Our customer-first approach has helped us achieve high
                  satisfaction ratings and build long-term relationships with
                  borrowers across metropolitan cities as well as smaller towns
                  and rural areas.
                </p>
                <p>
                  We take pride in being more than just a lending platform; we
                  are a financial partner committed to helping our customers
                  achieve their dreams—whether it’s expanding a business,
                  funding education, or managing unexpected expenses.
                </p>
                <p>
                  Looking ahead, RupeeLoan is focused on expanding its services,
                  adopting cutting-edge technologies like AI-driven credit
                  scoring, and ensuring financial inclusion for every Indian who
                  aspires for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container p-sm-5 p-4">
            <div className="row text-center mb-5">
              <div className="col-lg-8 mx-auto">
                <h2 className="mb-4">Our Values</h2>
                <p className="lead">
                  These core values guide everything we do at RupeeLoan and
                  define our company culture.
                </p>
              </div>
            </div>

            <div className="row">
              {[
                {
                  icon: "fas fa-shield-alt",
                  title: "Trust & Transparency",
                  desc: "We believe in complete transparency with no hidden charges or conditions.",
                },
                {
                  icon: "fas fa-rocket",
                  title: "Innovation",
                  desc: "We continuously innovate to make borrowing simpler, faster, and more accessible.",
                },
                {
                  icon: "fas fa-users",
                  title: "Customer First",
                  desc: "Our customers are at the heart of every decision we make and product we build.",
                },
                {
                  icon: "fas fa-hand-holding-usd",
                  title: "Financial Inclusion",
                  desc: "We're committed to making formal credit accessible to all segments of society.",
                },
                {
                  icon: "fas fa-balance-scale",
                  title: "Integrity",
                  desc: "We maintain the highest ethical standards in all our operations and interactions.",
                },
                {
                  icon: "fas fa-heart",
                  title: "Social Responsibility",
                  desc: "We believe in giving back to the community and promoting financial literacy.",
                },
              ].map((val, i) => (
                <div key={i} className="col-md-4 mb-4">
                  <div className="value-card">
                    <div className="value-icon">
                      <i className={val.icon}></i>
                    </div>
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container p-sm-5 p-4">
            <h2 className="text-black">Ready to Get Started?</h2>
            <p className="text-black">
              Join thousands of satisfied customers who have achieved their
              financial goals with RupeeLoan.
            </p>
            <a href="#" className="cta-btn text-decoration-none">
              Apply for a Loan Today
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
