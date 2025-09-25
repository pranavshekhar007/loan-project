"use client";
import React, { act, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { useParams } from "next/navigation";
import ProfileSidebar from "../../Components/ProfileSidebar";
import {
  AppliedLoanDetailsServ,
  AppliedLoanListServ,
} from "../../services/loan.service";
import { LoggedDataContext } from "../../context/Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

const page = () => {

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
  
  const router = useRouter();
  const { loggedUserData } = useContext(LoggedDataContext);
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const[popupShow , setPopupShow] = useState(false);

  const loanApplicationList = async () => {
    try {
      setLoading(true);
      const res = await AppliedLoanDetailsServ(
        { userId: loggedUserData?._id },
        id
      );
      if (res?.statusCode == 200) {
        setLoan(res?.data);
      }
    } catch (err) {
      console.log("getting error");
    } finally {
      setLoading(false);
    }
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
                <h3 className="h3-big fw-bold">Loan Details</h3>
                <p>
                  View complete information and status of your selected loan
                </p>
              </div>
            </div>
 
            <div className="main-content">
              <div className="section">
              
            <p style={{fontSize:"14px" , cursor:"pointer"}} onClick={() => router.push("/applied-loans")}>
              <i className="fa fa-arrow-left me-1"></i> Back to Loans</p>
                <h3 className="section-title">Applied Loan Details</h3>

                <div className="applied-details">
                  <div className="row mb-5">
                    <div className="col-md-6 ">
                      <div className="row ">
                        <div className="col-12 col-md-12 ps-4">
                          <div className="row gy-1">
                            {loading ? (
                              // skeleton view
                              <>
                                {/* Loan Id */}
                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block mb-3">
                                  <Skeleton width={100} height={14} />{" "}
                                  {/* label skeleton */}
                                  <Skeleton width={180} height={18} />{" "}
                                  {/* value skeleton */}
                                </div>

                                {/* Loan Name */}
                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block mb-3">
                                  <Skeleton width={100} height={14} />
                                  <Skeleton width={200} height={18} />
                                </div>

                                {/* Loan Status */}
                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block mb-3">
                                  <Skeleton width={100} height={14} />
                                  <Skeleton width={120} height={18} />
                                </div>

                                {/* Start Date */}
                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block mb-3">
                                  <Skeleton width={100} height={14} />
                                  <Skeleton width={150} height={18} />
                                </div>

                                {/* End Date */}
                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block mb-3">
                                  <Skeleton width={100} height={14} />
                                  <Skeleton width={150} height={18} />
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                                  <p
                                    className="text-muted mb-2 "
                                    style={{ width: "115px" }}
                                  >
                                    Loan Id
                                  </p>
                                  <p className=" text-dark small-bold para">
                                    {loan?.code}
                                  </p>
                                </div>

                                <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                                  <p
                                    className="text-muted mb-2 "
                                    style={{ width: "115px" }}
                                  >
                                    Loan Name
                                  </p>
                                  <p className="small-bold text-dark para">
                                    {loan?.loanId?.name}
                                  </p>
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
                                    {loan?.status === "completed"
                                      ? "Closed"
                                      : loan?.status === "disbursed"
                                      ? "Active"
                                      : loan?.status}
                                  </p>
                                </div>

                                {loan?.startDate && loan?.startDate != null && (
                                  <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                                    <p
                                      className="text-muted mb-2 "
                                      style={{ width: "115px" }}
                                    >
                                      Start Date
                                    </p>
                                    <p className="small-bold text-dark para">
                                      {loan?.startDate}
                                    </p>
                                  </div>
                                )}

                                {loan?.endDate && loan?.endDate != null && (
                                  <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                                    <p
                                      className="text-muted mb-2 "
                                      style={{ width: "115px" }}
                                    >
                                      End Date
                                    </p>
                                    <p className="small-bold text-dark para">
                                      {loan?.endDate}
                                    </p>
                                  </div>
                                )}

                                {loan?.nextEmiDate &&
                                  loan?.nextEmiDate != null && (
                                    <div className="col-12 col-sm-6 d-flex gap-2 d-sm-block">
                                      <p
                                        className="text-muted mb-2 "
                                        style={{ width: "115px" }}
                                      >
                                        Next EMI Date
                                      </p>
                                      <p className="small-bold text-dark para">
                                        {loan?.nextEmiDate}
                                      </p>
                                    </div>
                                  )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-sm-0">
                      {loading ? (
                        <div className="loans-detail-card shadow-sm h-100 p-3">
                          <div className="card-body">
                            <div
                              className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                              style={{ borderBottom: "1px solid #ddd5e6" }}
                            >
                              <Skeleton width={120} height={20} /> {/* Title */}
                              <Skeleton circle width={26} height={26} />{" "}
                              {/* Icon */}
                            </div>

                            <p>
                              <Skeleton
                                width={100}
                                height={14}
                                className="me-2"
                              />
                              <Skeleton width={150} height={18} />
                            </p>
                            <p>
                              <Skeleton
                                width={80}
                                height={14}
                                className="me-2"
                              />
                              <Skeleton width={120} height={18} />
                            </p>
                            <p>
                              <Skeleton
                                width={100}
                                height={14}
                                className="me-2"
                              />
                              <Skeleton width={100} height={18} />
                            </p>
                            <p>
                              <Skeleton
                                width={90}
                                height={14}
                                className="me-2"
                              />
                              <Skeleton width={150} height={18} />
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="loans-detail-card shadow-sm h-100 p-3">
                            <div className="card-body">
                              <div
                                className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                                style={{ borderBottom: "1px solid #ddd5e6" }}
                              >
                                <h5 className="card-title pb-0">
                                  Loan Details
                                </h5>
                                {/* <img src="https://cdn-icons-png.flaticon.com/128/16756/16756842.png" style={{height:"26px" , width:"26px"}}></img>
                                 */}
                                <i class="fa-regular fa-file-lines loan-icon"></i>
                              </div>
                              <p>
                                <strong className="loan-detail-p">
                                  Loan Amount:
                                </strong>{" "}
                                ₹{loan?.loanAmount}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Tenure:
                                </strong>{" "}
                                {loan?.loanTenuare} {loan?.loanTenuareType}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Interest Rate:
                                </strong>{" "}
                                {loan?.intrestRate}% ({loan?.intrestRateType})
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Frequency:
                                </strong>{" "}
                                {loan?.repaymentFrequency}{" "}
                                {loan?.repaymentFrequencyType}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
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
                    {loading ? (
                       <div className="loans-detail-card shadow-sm h-100 p-3   col-md-6">
                        <div className="card-body">
                          <div
                            className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                            style={{ borderBottom: "1px solid #ddd5e6" }}
                          >
                            <Skeleton width={120} height={20} />
                            <Skeleton circle width={26} height={26} />
                          </div>

                          <p>
                            <Skeleton width={60} height={14} className="me-2" />
                            <Skeleton width={180} height={18} />
                          </p>
                          <p>
                            <Skeleton width={70} height={14} className="me-2" />
                            <Skeleton width={200} height={18} />
                          </p>
                          <p>
                            <Skeleton width={70} height={14} className="me-2" />
                            <Skeleton width={150} height={18} />
                          </p>
                        </div>
                      </div>
                    ) : (
                      loan?.branchId &&
                      Object.keys(loan.branchId).length > 0 && (
                        <div className="col-md-6 mb-3">
                          <div className="loans-detail-card shadow-sm h-100 p-3">
                            <div className="card-body">
                              <div
                                className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                                style={{ borderBottom: "1px solid #ddd5e6" }}
                              >
                                <h5 className="card-title pb-0">
                                  Branch Details
                                </h5>
                                {/* <img src="https://cdn-icons-png.flaticon.com/128/18560/18560647.png" style={{height:"26px" , width:"26px"}}></img> */}
                                <i class="fa-solid fa-location-dot loan-icon"></i>
                              </div>

                              <p>
                                <strong className="loan-detail-p">Name:</strong>{" "}
                                {loan?.branchId?.name}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Address:
                                </strong>{" "}
                                {loan?.branchId?.address}
                              </p>
                              <p>
                                <strong className="loan-detail-p">City:</strong>{" "}
                                {loan?.branchId?.city}, {loan?.branchId?.state}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Pincode:
                                </strong>{" "}
                                {loan?.branchId?.pincode}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Contact:
                                </strong>{" "}
                                {loan?.branchId?.contactPerson}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}

                    {/* Admin Details Card */}
                    {loading ? (
                      <div className="loans-detail-card shadow-sm h-100 p-3   col-md-6">
                        <div className="card-body">
                          <div
                            className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                            style={{ borderBottom: "1px solid #ddd5e6" }}
                          >
                            <Skeleton width={120} height={20} />
                            <Skeleton circle width={26} height={26} />
                          </div>

                          <p>
                            <Skeleton width={60} height={14} className="me-2" />
                            <Skeleton width={180} height={18} />
                          </p>
                          <p>
                            <Skeleton width={70} height={14} className="me-2" />
                            <Skeleton width={200} height={18} />
                          </p>
                          <p>
                            <Skeleton width={70} height={14} className="me-2" />
                            <Skeleton width={150} height={18} />
                          </p>
                        </div>
                      </div>
                    ) : (
                      loan?.assignedAdminId &&
                      Object.keys(loan.assignedAdminId).length > 0 && (
                        <div className="col-md-6 mb-3">
                          <div className="loans-detail-card shadow-sm h-100 p-3">
                            <div className="card-body">
                              <div
                                className="d-flex gap-2 justify-content-between w-100 mb-2 pb-2"
                                style={{ borderBottom: "1px solid #ddd5e6" }}
                              >
                                <h5 className="card-title pb-0">
                                  Agent Details
                                </h5>
                                {/* <img src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png" style={{height:"26px" , width:"26px"}}></img> */}

                                <i class="fa-solid fa-user loan-icon"></i>
                              </div>

                              <p>
                                <strong className="loan-detail-p">Name:</strong>{" "}
                                {loan?.assignedAdminId?.firstName}{" "}
                                {loan?.assignedAdminId?.lastName}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Email:
                                </strong>{" "}
                                {loan?.assignedAdminId?.email}
                              </p>
                              <p>
                                <strong className="loan-detail-p">
                                  Phone:
                                </strong>{" "}
                                {loan?.assignedAdminId?.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="row">
                    <div className="col-lg-7">
                      {Array.isArray(loan?.emiSchedule) &&
                        loan.emiSchedule.length > 0 && (
                          <div className="section mt-5">
                            <h5 className="section-title">EMI Schedule</h5>

                            <div
                              className=" loans-table d-sm-block d-none"
                              style={{
                                border: "1px solid #e5e2e2",
                                borderRadius: "30px",
                                overflow: "hidden",
                              }}
                            >
                              <table
                                className="align-middle w-100"
                                style={{ marginBottom: "-20px" }}
                              >
                                <thead className="">
                                  <tr>
                                    <th className="py-3 ps-3">SR</th>
                                    <th className="py-3">Expected Date</th>
                                    <th className="py-3">Amount</th>
                                    <th className="py-3 text-center">Status</th>
                                    <th className="py-3 text-center"> Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {loan?.emiSchedule?.map((emi, index) => (
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
                                      <td className="text-center">
                                        {emi.status == "pending" ? (
                                          <div className="mx-2 py-2 text-center text-white pay-button"
                                          onClick={() => setPopupShow(!popupShow)}
                                           style={{fontWeight:"600" , backgroundColor:"#28a745" , borderRadius:"10px" , cursor:"pointer"}}>Pay</div>
                                        ):(
                                            <i 
                                // onClick={() => handleDtailClick(loan)}
                                  className="fas fa-eye action-icon"
                                   onClick={() => setPopupShow(!popupShow)}
                                  style={{cursor:"pointer" , textAlign:"center"}}
                                  title="View"
                                ></i>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div className="loan-cards d-sm-none d-flex row">
                              {loan?.emiSchedule?.map((loan, index) => (
                                <div
                                  key={index}
                                  className="col-sm-6 col-12 p-2"
                                >
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
                                    <p className="d-flex gap-2">
                                      <strong style={{width: "110px"}}>
                                        Action
                                      </strong>
                                        {loan.status == "pendin" ? (
                                          <div className="px-4 py-1 text-center text-white " style={{fontWeight:"600" , backgroundColor:"#28a745" , borderRadius:"10px" , cursor:"pointer"}}>Pay</div>
                                        ):(
                                             <div className="px-4 py-1 text-center text-white " style={{fontWeight:"600" , backgroundColor:"#281b36" , borderRadius:"10px" , cursor:"pointer"}}>View</div>
                                        )}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>

                    <div className="col-lg-5">
                      {/* {Array.isArray(loan?.transactions) &&
                        loan.transactions.length > 0 && ( */}
                          <div className="section mt-5">
                            <h5 className="section-title">Transactions</h5>

                            <div
                              className=" loans-table d-sm-block d-none"
                              style={{
                                border: "1px solid #e5e2e2",
                                borderRadius: "30px",
                                overflow: "hidden",
                              }}
                            >
                              <table
                                className="align-middle w-100"
                                style={{ marginBottom: "-20px" }}
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
  {Array.isArray(loan?.transactions) && loan.transactions.length > 0 ? (
    loan.transactions.map((emi) => (
      <tr key={emi.id}>
        <td className="ps-3">{emi?.id}</td>
        <td>{emi.date}</td>
        <td>{emi.message}</td>
        <td className="text-center">₹{emi.amount}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center py-3 text-muted">
        No transactions found
      </td>
    </tr>
  )}
</tbody>

                              </table>
                            </div>

                           <div className="loan-cards d-sm-none d-flex row">
  {Array.isArray(loan?.transactions) && loan.transactions.length > 0 ? (
    loan.transactions.map((txn, index) => (
      <div key={index} className="col-sm-6 col-12 p-2">
        <div className="loan-card">
          <p className="d-flex gap-2">
            <strong style={{ width: "85px" }}>ID:</strong> {txn.id}
          </p>
          <p className="d-flex gap-2">
            <strong style={{ width: "85px" }}>Date:</strong> {txn.date}
          </p>
          <p className="d-flex gap-2">
            <strong style={{ width: "85px" }}>Amount:</strong> ₹{txn.amount}
          </p>
          <p className="d-flex gap-2">
            <strong className="flex-shrink-0" style={{ width: "85px" }}>
              Message:
            </strong>
            <span>{txn.message}</span>
          </p>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12 text-center py-3 text-muted">
      No transactions found
    </div>
  )}
</div>

                          </div>
                        {/* )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {popupShow && (
        <div
          className="payment-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
        >
          <div
            className="bg-white p-4 shadow"
            style={{ width: "440px", maxWidth: "90%" , borderRadius:"16px" }}
          >
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h3>PAY</h3>
              <button className="btn-close" 
         onClick={() => setPopupShow(!popupShow)}
         ></button>
            </div>

            
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
};

export default page;
