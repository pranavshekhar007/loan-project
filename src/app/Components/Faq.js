"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { faqListServ } from '../services/support.service';

const Faq = () => {

     const [activeIndexes, setActiveIndexes] = useState([]);
  
    const toggleFAQ = (index) => {
      if (activeIndexes.includes(index)) {
        setActiveIndexes(activeIndexes.filter((i) => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    };
    
      
      // const faqData = [
      //             {
      //               question: "How do I apply for a loan?",
      //               answer: "You can apply for a loan through our website or mobile app. The process is simple: 1) Select the loan type you need, 2) Fill out the application form with your details, 3) Upload necessary documents, 4) Get approval decision within minutes, and 5) Receive funds in your account after verification.",
      //             },
      //             {
      //               question: "What documents are required for a personal loan?",
      //               answer: "For a personal loan, you typically need: 1) Identity proof (Aadhaar, PAN card, or passport), 2) Address proof (utility bill, rental agreement, or Aadhaar), 3) Income proof (salary slips for salaried individuals or bank statements for self-employed), and 4) Recent photographs.",
      //             },
      //             {
      //               question: "How long does it take to get loan approval?",
      //               answer: "Most loan applications are approved within 15 minutes to 2 hours during business hours. After approval, funds are typically disbursed within 24-48 hours after document verification.",
      //             },
      //             {
      //               question: "What is the minimum credit score required?",
      //               answer: "We consider applicants with a credit score of 650 and above. However, even if your score is lower, we might still be able to offer you a loan with different terms. Apply now to check your eligibility.",
      //             },
      //             {
      //               question: "Can I prepay my loan without penalties?",
      //               answer: "Yes, you can prepay your loan after 6 EMIs without any prepayment charges. For foreclosing your loan within the first 6 months, a nominal fee may apply depending on your loan agreement.",
      //             },
      //           ]

      const [faqData, setFaqData] = useState([]);

         const getFaqList = async () => {
           try{
             const payload = {
              category: ""
            };
      
             const res = await faqListServ(payload);
            // if(res?.statusCode == 200){
              console.log("faq list res" , res?.data);
             setFaqData(res?.data?.slice(0, 5));
            // }
           }
           catch(err){
            console.log("error" , err)
           }
          }

        useEffect(() => {
          getFaqList();
        },[])

  return (
    <div>
        {/* FAQ Section */}
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
                    <motion.button whileHover={{ scale: 1.1 }}>View All FAQs</motion.button>
                  </a>
                </motion.div>
                      </div>
                    </div>
                  </div>
                </section>
    </div>
  )
}

export default Faq
