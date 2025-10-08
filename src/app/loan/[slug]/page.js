"use client";

import Head from "next/head";
import { useState , useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Faq from "../../Components/Faq";
import Calculator from "../../Components/Calculator"
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { useParams } from "next/navigation";
import { loanDetailsServ } from "@/app/services/loan.service";


export default function PersonalLoan() {

  
    const { slug } = useParams();
    
  // Loan Calculator States
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTenure, setLoanTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(12.5);

  const[loan , setLoanDetails] = useState(null);

  const getLoanDetails = async () => {
    console.log("fetching details")
     try{
       const res = await loanDetailsServ(slug);
    //    if(res?.statusCode == 200){
          setLoanDetails(res?.data?.loanType);
          console.log("loan detail response" , res?.data?.loanType);
    //    }
     }
     catch(err){
        console.log("getting error" , err);
     }
  }

    useEffect(() => {
    if (slug) getLoanDetails();
  }, [slug]);

  useEffect(() => {
    console.log("loan details " , loan)
  },[loan])

  const employmentMap = {
  Any: "Salaried or self-employed with stable income",
  Salaried: "Salaried with stable income",
  SelfEmployed: "Self-employed with stable income",
};

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
        <title>Personal Loans - RupeeLoan</title>
        <meta
          name="description"
          content="Get instant approval on personal loans up to ₹25 lakhs with minimal documentation and competitive interest rates."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="personal-loan-hero">
        <div className="container p-sm-5 p-4">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6">
              <h1>{loan?.title}</h1>
              <p>
               {loan?.description}
              </p>
              <button className="apply-button"><a href="" className="">
                Apply Now
              </a></button>

              <div className="hero-stats mt-4 d-flex gap-4">
                <div className="stat-item text-center text-black">
                  <i className="fas fa-users fa-2x"></i>
                  <div>
                    <strong className="text-black"> 50K+</strong>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="stat-item text-center text-black">
                  <i className="fas fa-clock fa-2x"></i>
                  <div>
                    <strong className="text-black">24h</strong>
                    <p>Quick Approval</p>
                  </div>
                </div>
                <div className="stat-item text-center text-black">
                  <i className="fas fa-percentage fa-2x"></i>
                  <div>
                    <strong className="text-black">{loan?.intrestRate}%</strong>
                    <p>Lowest Interest</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Hero Image */}
              <div className="col-lg-6">
                <div className="loan-calculator">
                  <img
                    src={loan?.banner}
                    alt="Business Loan"
                    width="100%"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* calculator section */}

     <Calculator minTenure={loan?.minTenure} maxTenure = {loan?.maxTenure} minAmount = {loan?.minAmount} 
     maxAmount = {loan?.maxAmount} intrestRate = {loan?.intrestRate} />


     

      {/* <!-- Eligibility Section --> */}
    <section className="eligibility-section">
        <div className="container p-sm-5 p-4">
            <div className="row">
                <div className="col-lg-6 left">
                    <h2>Eligibility Criteria</h2>
                    <p className="lead">Check if you qualify for our personal loan</p>

                    <div className="eligibility-criteria mt-4">
                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Age</h5>
                                <p>{loan?.minAge} to {loan?.maxAge} years</p>
                            </div>
                        </div>

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <div>
                                <h5>Minimum Income</h5>
                                <p>₹{loan?.minIncome} per month </p>
                            </div>
                        </div>

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <div>
                                <h5>Employment</h5>
                                <p> {loan?.employmentTypesAllowed
        .map(type => employmentMap[type] || type) 
        .join(", ")}</p>
                            </div>
                        </div>

                        {/* <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-history"></i>
                            </div>
                            <div>
                                <h5>Work Experience</h5>
                                <p>Minimum 2 years of total work experience</p>
                            </div>
                        </div> */}

                        <div className="criteria-item">
                            <div className="criteria-icon">
                                <i className="fas fa-credit-card"></i>
                            </div>
                            <div>
                                <h5>Credit Score</h5>
                                <p>{loan?.creditScoreRequired} or above for best rates</p>
                            </div>
                        </div>
                    </div>
                </div>

              <div className="col-lg-6 right">
                <img src="/assets/lender.gif" alt="" width="100%" />
              </div>
            </div>
        </div>
    </section>

    {/* <!-- Process Section --> */}
    <section className="process-section">
        <div className="container p-sm-5 p-4">
            <div className="text-center mb-5">
                <h2 className="fw-semibold">Simple Application Process</h2>
                <p className="lead">Get your personal loan in just 4 easy steps</p>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">1</div>
                        <h4>Apply Online</h4>
                        <p>Fill our simple application form in just 5 minutes</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">2</div>
                        <h4>Upload Documents</h4>
                        <p>Upload required documents securely through our portal</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">3</div>
                        <h4>Verification</h4>
                        <p>Quick verification process completed within hours</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="process-step">
                        <div className="step-number">4</div>
                        <h4>Get Money</h4>
                        <p>Amount disbursed directly to your bank account</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
               <button className="apply-button"> <a href="#" className="">Start Application</a></button>
            </div>
        </div>
    </section>

    {/* <!-- Documents Section --> */}
    <section className="documents-section">
        <div className="container p-sm-5 p-4">
            <div className="row">
                <div className="col-lg-6">
                    <h2>Required Documents</h2>
                    <p className="lead">Minimal documentation for quick processing</p>

                    {/* <h4 className="mt-4">For Salaried Individuals</h4> */}
                    <ul className="documents-list">
                       
                        {loan?.documentRequired.map((doc, index) => (
                             <li>{doc}</li>
                            )
                        )
                        }
                    </ul>

                    {/* <h4 className="mt-4">For Self-Employed Individuals</h4>
                    <ul className="documents-list">
                        <li>KYC Documents (PAN Card, Aadhaar Card)</li>
                        <li>Last 2 years' ITR</li>
                        <li>Last 6 months' business bank statements</li>
                        <li>Business proof (GST, Shop Act License, etc.)</li>
                    </ul> */}
                </div>

                <div className="col-lg-6">
                    <div className="bg-light p-5 rounded">
                        <h3 className="mb-4">Interest Rates & Charges</h3>

                        <div className="mb-4">
                            {/* <h5>Interest Rates</h5>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Starting From</span>
                                <strong>10.25% p.a.</strong>
                            </div>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Up To</span>
                                <strong>18% p.a.</strong>
                            </div> */}

                             <h5>Amount</h5>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Starting From</span>
                                <strong>₹{loan?.minAmount}</strong>
                            </div>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Up To</span>
                                <strong>₹{loan?.maxAmount}</strong>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5>Processing Fee</h5>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Fee</span>
                                {/* <strong>1% - 2% of loan amount</strong> */}
                                <strong>{loan?.processingFee}%</strong>
                            </div>
                            {/* <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>GST</span>
                                <strong>18% on processing fee</strong>
                            </div> */}
                        </div>

                        <div className="mb-4">
                            <h5>Other Charges</h5>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Prepayment Charges</span>
                                {/* <strong>Nil after 12 EMIs</strong> */}
                                <strong>{loan?.prepaymentFee}%</strong>
                            </div>
                            <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Late Payment Penalty</span>
                                {/* <strong>2% per month</strong> */}
                                <strong>{loan?.latePaymentPenalty}%</strong>
                            </div>
                            {/* <div className="d-flex justify-content-between py-2 border-bottom">
                                <span>Loan Cancellation Charges</span>
                                <strong>₹1000 + GST</strong>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    {/* <Faq/> */}


   <section className="faq-section">
                  <div className="container p-sm-5 p-4">
                    <div className="text-center mb-5">
                      <h2>Frequently Asked Questions</h2>
                      <p className="text-muted">
                        Find quick answers to common questions about our loan services
                      </p>
                    </div>
        
                    <div className="row justify-content-center gx-0">
                      <div className="col-lg-10 m-0">
                      <div className="faq-list">
  {loan?.faqList && loan.faqList.length > 0 ? (
    loan.faqList.map((faq, index) => (
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
    ))
  ) : (
    <p className="text-center text-muted py-3">
      No FAQs available for this loan type.
    </p>
  )}
</div>

        
                       <motion.div
                  className="faq-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a href="/faq">
                    <motion.button whileHover={{ scale: 1.1 }}>View All FAQs</motion.button>
                  </a>
                </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
      

      <Footer />
    </>
  );
}
