"use client";
import React, { act, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useParams } from "next/navigation";
import ProfileSidebar from "../../Components/ProfileSidebar";
import { AppliedLoanDetailsServ, AppliedLoanListServ } from "../../services/loan.service";
import { LoggedDataContext } from "../../context/Context";


const page = () => {
  const loan = [
    {
      _id: "68c7e8d9c00ad7a5805024d1",
      userId: {
        _id: "68c7b27239b5706208a5b946",
        firstName: "Anushka",
        lastName: "jat",
        email: "anushkatada01@gmail.com",
        phone: "6267023142",
        profilePic:
          "http://res.cloudinary.com/dzjfy8thf/image/upload/v1757930918/hft65p55uw6txdtmxgao.jpg",
      },
      loanId: {
        _id: "68be92693180be8199ce5e5e",
        name: "Personal Loan",
        code: "RL002",
      },
      branchId: {
        _id: "68b9d6d1cad847a1cfb50561",
        name: "CHD Branch",
        address: "Sector 001",
        city: "Chandigarh",
        // state: "Chandigarh",
        pincode: "140062",
        contactPerson: "Vincent",
      },
      assignedAdminId: {
        _id: "68a729fdbc1bd681e631e8ec",
        firstName: "Super",
        lastName: "Admin",
        email: "nbfc@gmail.com",
        phone: 9876543210,
      },
      createdBy: {
        _id: "68a729fdbc1bd681e631e8ec",
        firstName: "Super",
        lastName: "Admin",
        email: "nbfc@gmail.com",
        phone: 9876543210,
      },
      status: "disbursed",
      code: "RL014",
      emiSchedule: [
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d2",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d3",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d4",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d5",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d6",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d7",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d8",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024d9",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024da",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024db",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024dc",
        },
        {
          expectedDate: "2025-09-15",
          amount: 37,
          status: "pending",
          _id: "68c7e8d9c00ad7a5805024dd",
        },
      ],
      collateralDetails: [],
      documents: [],
      loanAmount: 200,
      loanTenuare: 12,
      loanTenuareType: "months",
      intrestRate: 10,
      intrestRateType: "flat",
      repaymentFrequency: 1,
      repaymentFrequencyType: "months",
      startDate: "15-09-2025",
      endDate: "15-09-2026",
      updatedAt: "2025-09-15T10:22:17.945Z",
      createdAt: "2025-09-15T10:22:17.945Z",
      __v: 0,
    },
  ];

  const Transactions = [
    {
      id: "RL001",
      message: "Loan EMI Payment",
      amount: "₹5,000",
      date: "2025-09-01",
    },
    {
      id: "RL002",
      message: "Processing Fee Deduction",
      amount: "₹1,200",
      date: "2025-09-03",
    },
    {
      id: "RL003",
      message: "Part Prepayment",
      amount: "₹10,000",
      date: "2025-09-10",
    },
    {
      id: "RL004",
      message: "Late Payment Charge",
      amount: "₹500",
      date: "2025-09-15",
    },
  ];

    const { id } = useParams();

  const { loggedUserData } = useContext(LoggedDataContext);
  const [loans, setLoans] = useState([]);

  const loanApplicationList = async () => {
    try {
      const res = await AppliedLoanDetailsServ({ userId: loggedUserData?._id } , id);
      setLoans(res?.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (loggedUserData?._id) {
      loanApplicationList();
    }
  }, [loggedUserData?._id]);

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="dashboard-container">
          {/* <ProfileSidebar/> */}

          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                <h1>Loan Details</h1>
                <p>
                  View complete information and status of your selected loan
                </p>
              </div>
            </div>

            <div className="main-content">
              <div className="section">
                <h2 className="section-title">Applied Loan Details</h2>

                <div className="applied-details">
                  <div className="row mb-5">
                  <div className="col-md-6 ">
                  <div className="row ">
                    <div className="col-12 col-md-12 ps-4">
                      <div className="row gy-1">
                        <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                          <p
                            className="text-muted mb-2 "
                            style={{ width: "115px" }}
                          >
                            Loan Id
                          </p>
                          <p className=" text-dark small-bold para">R0012</p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                          <p
                            className="text-muted mb-2 "
                            style={{ width: "115px" }}
                          >
                            Loan Name
                          </p>
                          <p className="small-bold text-dark para">Gold Loan</p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                          <p
                            className="text-muted mb-2 "
                            style={{ width: "115px" }}
                          >
                            {" "}
                            Loan Status
                          </p>
                          <p
                            className="small-bold para"
                            style={{ color: "#281b36" }}
                          >
                            Approved
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                          <p
                            className="text-muted mb-2 "
                            style={{ width: "115px" }}
                          >
                            Start Date
                          </p>
                          <p className="small-bold text-dark para">
                            08-08-2025
                          </p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                          <p
                            className="text-muted mb-2 "
                            style={{ width: "115px" }}
                          >
                            End Date
                          </p>
                          <p className="small-bold text-dark para">
                            10-10-2026
                          </p>
                        </div>
                        <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                          <p
                            className="text-muted mb-2 "
                            style={{ width: "115px" }}
                          >
                           Next EMI Date
                          </p>
                          <p className="small-bold text-dark para">
                            10-10-2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="col-md-6 mt-4 mt-sm-0">
                    <div className="loans-detail-card shadow-sm h-100 p-3">
                        <div className="card-body">
                          <div
                            className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                            style={{ borderBottom: "1px solid #ddd5e6" }}
                          >
                            <h5 className="card-title pb-0">Loan Details</h5>
                            {/* <img src="https://cdn-icons-png.flaticon.com/128/16756/16756842.png" style={{height:"26px" , width:"26px"}}></img>
                             */}
                            <i class="fa-regular fa-file-lines loan-icon"></i>
                          </div>
                          <p>
                            <strong className="loan-detail-p">
                              Loan Amount:
                            </strong>{" "}
                            ₹{loan[0]?.loanAmount}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Tenure:</strong>{" "}
                            {loan[0]?.loanTenuare} {loan[0]?.loanTenuareType}
                          </p>
                          <p>
                            <strong className="loan-detail-p">
                              Interest Rate:
                            </strong>{" "}
                            {loan[0]?.intrestRate}% ({loan[0]?.intrestRateType})
                          </p>
                          <p>
                            <strong className="loan-detail-p">
                              Frequency:
                            </strong>{" "}
                            {loan[0]?.repaymentFrequency}{" "}
                            {loan[0]?.repaymentFrequencyType}
                          </p>
                        </div>
                      </div>
                  </div>
                  </div>

                  <div className="row loan-summary-cards mb-4">
                    {/* Loan Details Card */}
                    {/* <div className="col-md-4 mb-3">
                      <div className="loans-detail-card shadow-sm h-100 p-3">
                        <div className="card-body">
                          <div
                            className="d-flex gap-2 justify-content-between w-100 mb-2"
                            style={{ borderBottom: "1px solid #ddd5e6" }}
                          >
                            <h5 className="card-title mb-1">Loan Details</h5>

                            <i class="fa-regular fa-file-lines loan-icon"></i>
                          </div>
                          <p>
                            <strong className="loan-detail-p">
                              Loan Amount:
                            </strong>{" "}
                            ₹{loan[0]?.loanAmount}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Tenure:</strong>{" "}
                            {loan[0]?.loanTenuare} {loan[0]?.loanTenuareType}
                          </p>
                          <p>
                            <strong className="loan-detail-p">
                              Interest Rate:
                            </strong>{" "}
                            {loan[0]?.intrestRate}% ({loan[0]?.intrestRateType})
                          </p>
                          <p>
                            <strong className="loan-detail-p">
                              Frequency:
                            </strong>{" "}
                            {loan[0]?.repaymentFrequency}{" "}
                            {loan[0]?.repaymentFrequencyType}
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* Branch Details Card */}
                    <div className="col-md-6 mb-3">
                      <div className="loans-detail-card shadow-sm h-100 p-3">
                        <div className="card-body">
                          <div
                            className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                            style={{ borderBottom: "1px solid #ddd5e6" }}
                          >
                            <h5 className="card-title pb-0">Branch Details</h5>
                            {/* <img src="https://cdn-icons-png.flaticon.com/128/18560/18560647.png" style={{height:"26px" , width:"26px"}}></img> */}
                            <i class="fa-solid fa-location-dot loan-icon"></i>
                          </div>

                          <p>
                            <strong className="loan-detail-p">Name:</strong>{" "}
                            {loan[0]?.branchId?.name}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Address:</strong>{" "}
                            {loan[0]?.branchId?.address}
                          </p>
                          <p>
                            <strong className="loan-detail-p">City:</strong>{" "}
                            {loan[0]?.branchId?.city},{" "}
                            {loan[0]?.branchId?.state}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Pincode:</strong>{" "}
                            {loan[0]?.branchId?.pincode}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Contact:</strong>{" "}
                            {loan[0]?.branchId?.contactPerson}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Admin Details Card */}
                    <div className="col-md-6 mb-3">
                      <div className="loans-detail-card shadow-sm h-100 p-3">
                        <div className="card-body">
                          <div
                            className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                            style={{ borderBottom: "1px solid #ddd5e6" }}
                          >
                            <h5 className="card-title pb-0">Agent Details</h5>
                            {/* <img src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png" style={{height:"26px" , width:"26px"}}></img> */}

                            <i class="fa-solid fa-user loan-icon"></i>
                          </div>

                          <p>
                            <strong className="loan-detail-p">Name:</strong>{" "}
                            {loan[0]?.assignedAdminId?.firstName}{" "}
                            {loan[0]?.assignedAdminId?.lastName}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Email:</strong>{" "}
                            {loan[0]?.assignedAdminId?.email}
                          </p>
                          <p>
                            <strong className="loan-detail-p">Phone:</strong>{" "}
                            {loan[0]?.assignedAdminId?.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="section mt-5">
                        <h2 className="section-title">EMI Schedule</h2>

                        <div className=" loans-table d-sm-block d-none" style={{
                              border: "1px solid #e5e2e2",
                              borderRadius: "30px",
                              overflow:"hidden"
                            }}>
                          <table
                            className="align-middle w-100"
                            style={{marginBottom:"-20px"}}
                          >
                            <thead className="">
                              <tr>
                                <th className="py-3 ps-3">SR</th>
                                <th className="py-3">Expected Date</th>
                                <th className="py-3">Amount</th>
                                <th className="py-3 text-center">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {loan[0]?.emiSchedule?.map((emi, index) => (
                                <tr key={emi._id}>
                                  <td className="ps-3">{index + 1}</td>
                                  <td>{emi.expectedDate}</td>
                                  <td>₹{emi.amount}</td>
                                  <td className="text-center">
                                    <span
                                      className={`px-3 py-2 loan-status  ${
                                        emi.status === "pending"
                                          ? "status-pending"
                                          : "status-completed"
                                      }`}
                                    >
                                      {emi.status.charAt(0).toUpperCase() +
                                        emi.status.slice(1)}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="loan-cards d-sm-none d-flex row">
                          {loan[0]?.emiSchedule?.map((loan, index) => (
                            <div key={index} className="col-sm-6 col-12 p-2">
                              <div className="loan-card">
                                <h3>{loan.loanId?.name}</h3>
                                <p>#{index + 1}</p>
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    Expected Date:
                                  </strong>{" "}
                                  {loan.expectedDate}
                                </p>
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    Amount:
                                  </strong>{" "}
                                  ₹{loan.amount}
                                </p>
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    Status:
                                  </strong>{" "}
                                  <span className="loan-status status-pending">
                                    {" "}
                                    {loan.status}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="section mt-5">
                        <h2 className="section-title">Transactions</h2>

                        <div className=" loans-table d-sm-block d-none" style={{
                              border: "1px solid #e5e2e2",
                              borderRadius: "30px",
                              overflow:"hidden"
                            }}>
                          <table
                            className="align-middle w-100"
                            style={{marginBottom:"-20px"}}
                          >
                            <thead className="">
                              <tr>
                                <th className="py-3 ps-3">ID</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Message</th>
                                <th className="py-3 text-center">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Transactions?.map((emi, index) => (
                                <tr key={emi.id}>
                                  <td className="ps-3">{emi?.id}</td>
                                  <td>{emi.date}</td>
                                  <td>{emi.message}</td>
                                  <td className="text-center">₹{emi.amount}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="loan-cards d-sm-none d-flex row">
                          {Transactions?.map((loan, index) => (
                            <div key={index} className="col-sm-6 col-12 p-2">
                              <div className="loan-card">
                                {/* <h3>{loan.loanId?.name}</h3> */}
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    ID:
                                  </strong>{" "}
                                  {loan.id}
                                </p>
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    Date:
                                  </strong>{" "}
                                  {loan.date}
                                </p>
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    Amount:
                                  </strong>{" "}
                                  {loan.amount}
                                </p>
                                <p className="d-flex  gap-2 ">
                                  <strong style={{ width: "110px" }}>
                                    Message:
                                  </strong>{" "}
                                  {loan.message}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
