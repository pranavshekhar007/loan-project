"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const page = () => {
  const [amount, setAmount] = useState(500000);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(5);

  const calculateEMI = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return emi;
  };

  const emi = calculateEMI(amount, interest, tenure);
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - amount;

  const pieData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [amount, totalInterest],
        backgroundColor: ["#f3f0f7", "#281b36"],
        hoverOffset: 10,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
  };
  return (
    <>
      <Navbar />
      <div className="emi-calculator">
        <div className="container p-sm-5 p-3 my-4">
          <h3 className="fw-bold h3-big ">EMI Calculator</h3>
          <div className="row align-items-center">
            <div className="col-md-6 py-4 col-12">
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label>Loan Amount</label>
                  <div className="emi-input-group">
                    <span className="">₹</span>
                    <input
                      type=""
                      className=" calculatorInput w-100"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
                <input
                  type="range"
                  className="emi-form-range"
                  min="10000"
                  max="1000000"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                ></input>
              </div>
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label>Interest Rate</label>
                  <div className="emi-input-group">
                    <input
                      type=""
                     
                      className="calculatorInput widthInput"
                      value={interest}
                      onChange={(e) => setInterest(Number(e.target.value))}
                    >
                     
                    </input>
                    <span className="">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  className="emi-form-range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                ></input>
              </div>
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label>Loan Tenure</label>
                   <div className="emi-input-group">
                  <input
                    type=""
                 
                    className="calculatorInput  widthInput"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  ></input>
                    <span className="">Yr</span>
                  </div>
                </div>
                <input
                  type="range"
                  className="emi-form-range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                ></input>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Pie
                data={pieData}
                options={pieOptions}
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 mt-4 emi-output">
              <div className="output-row">
                <span className="output-label">Monthly EMI</span>
                <span className="output-value">
                  ₹ {emi.toFixed(2).toLocaleString()}
                </span>
              </div>
              <div className="output-row">
                <span className="output-label">Principal Amount</span>
                <span className="output-value">
                  ₹ {amount.toLocaleString()}
                </span>
              </div>
              <div className="output-row">
                <span className="output-label">Total Interest</span>
                <span className="output-value">
                  ₹ {totalInterest.toFixed(2).toLocaleString()}
                </span>
              </div>
              <div className="output-row">
                <span className="output-label">Total Amount</span>
                <span className="output-value">
                  ₹ {totalPayment.toFixed(2).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
