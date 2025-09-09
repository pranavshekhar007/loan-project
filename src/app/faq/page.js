"use client";

import Head from "next/head";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState([]);

  const toggleAnswer = (index) => {
  if (openQuestion.includes(index)) {
    // Agar already open hai to remove kar do
    setOpenQuestion(openQuestion.filter((i) => i !== index));
  } else {
    // Agar open nahi hai to add kar do
    setOpenQuestion([...openQuestion, index]);
  }
};

  const faqs = [
    {
      q: "What is the minimum salary required to get a personal loan?",
      a: "The minimum salary required varies depending on the lender, but generally starts from ₹15,000–₹25,000 per month. Some lenders may have higher requirements based on the city of residence and employer profile.",
      category: ["personal", "eligibility"],
    },
    {
      q: "What is the eligibility criteria for a personal loan?",
      a: "You must be a salaried or self-employed individual, aged 21–60 years, with a stable income and good credit history. Specific requirements may vary by lender but typically include minimum income thresholds, employment stability, and a credit score above 650.",
      category: ["personal", "eligibility"],
    },
    {
      q: "What is the rate of interest that will be charged?",
      a: "Interest rates vary by lender, loan amount, and your credit profile. Typical personal loan rates start around 10% p.a. and can go up to 24% p.a. based on your creditworthiness, income, and relationship with the lender.",
      category: ["personal"],
    },
    {
      q: "What documents are required for a business loan?",
      a: "Typically, you'll need business registration documents, bank statements for the last 6-12 months, income tax returns, business proof, KYC documents of promoters, and financial statements. Specific requirements may vary based on the lender and loan amount.",
      category: ["business", "eligibility"],
    },
    {
      q: "How long does it take to get a business loan approved?",
      a: "For pre-approved offers, disbursal can happen within 24-48 hours. For new applications, the process typically takes 3-7 working days after document submission, depending on the completeness of documentation and the lender's verification process.",
      category: ["business"],
    },
    {
      q: "What properties are eligible for loan against property?",
      a: "Most residential and commercial properties are eligible, including self-occupied, rented, or vacant properties. The property should have a clear title and be free from any legal disputes. The age and location of the property also factor into eligibility.",
      category: ["property", "eligibility"],
    },
    {
      q: "What is the maximum loan amount I can get against my property?",
      a: "You can typically get up to 60-70% of the market value of your property as a loan. The exact percentage depends on the property type, location, and the lender's policies. The maximum loan amount can go up to several crores based on property valuation.",
      category: ["property"],
    },
    {
      q: "How long does the loan application process take?",
      a: "The initial application takes just 5-10 minutes to complete online. After document submission, approval can take anywhere from 1 hour to 7 working days depending on the loan type, lender, and completeness of your documentation.",
      category: ["application"],
    },
    {
      q: "Is there any fee for applying through RupeeLoan?",
      a: "No, our service is completely free for applicants. We earn our revenue from lenders when a loan is successfully disbursed. There are no hidden charges or fees for using our platform to find and compare loan options.",
      category: ["application"],
    },
    {
      q: "What is the minimum CIBIL score required for loan approval?",
      a: "Most lenders prefer a CIBIL score of 750 or above for the best interest rates. Some may approve loans with scores as low as 650, but these may come with higher interest rates or additional conditions. A higher score always improves your chances of approval.",
      category: ["eligibility"],
    },
    {
      q: "Can I get a loan if I'm self-employed?",
      a: "Yes, self-employed individuals can apply for both business loans and personal loans. You'll need to provide business registration documents, bank statements, and income tax returns for the past 2-3 years to establish income stability and repayment capacity.",
      category: ["eligibility"],
    },
  ];

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "personal", label: "Personal Loan" },
    { key: "business", label: "Business Loan" },
    { key: "property", label: "Loan Against Property" },
    { key: "application", label: "Application Process" },
    { key: "eligibility", label: "Eligibility" },
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Rupee Loan</title>
        <meta
          name="description"
          content="Find answers to common questions about our loan products, application process, and more."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="faq-hero">
          <div className="container d-flex flex-column justify-content-center" style={{minHeight:"65vh"}}>
            <h1 className="text-dark mt-md-4">Frequently Asked Questions</h1>
            <p className="text-dark">
              Find answers to common questions about our loan products,
              application process, and more.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-content py-5">
          <div className="container faq-section">

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
            <div className="faq-tabs d-flex justify-content-center mb-4 flex-wrap">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className={`faq-tab mx-2 ${
                    activeCategory === cat.key ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.key)}
                  style={{ cursor: "pointer" }}
                >
                  {cat.label}
                </div>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="faq-items">
              {faqs
                .filter(
                  (faq) =>
                    activeCategory === "all" ||
                    faq.category.includes(activeCategory)
                )
                .map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item mb-3 p-3 border rounded ${
                      openQuestion.includes(index) ? "active" : ""
                    }`}
                  >
                    <div
                      className="faq-question d-flex justify-content-between align-items-center"
                      onClick={() => toggleAnswer(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>{faq.q}</span>
                     <motion.span
                  className="icon"
                  animate={{ rotate: openQuestion.includes(index) ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
                    </div>
                    {openQuestion.includes(index) && (
                      <div className="faq-answer mt-2">{faq.a}</div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
