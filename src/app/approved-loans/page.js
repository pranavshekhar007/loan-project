"use client";
import React, { act, useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import ProfileSidebar from "../Components/ProfileSidebar";
import { AppliedLoanListServ } from "../services/loan.service";
import { LoggedDataContext } from "../context/Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  // const loans = [
  //     {
  //         id: "RL001",
  //         type:"Gold Loan",
  //         branch: "CHD Branch",
  //         startDate:"10-09-2025",
  //         endDate:"10-12-205",
  //         amount:"10000",
  //         status:"New Request",
  //     },
  //      {
  //         id: "RL002",
  //         type:"Buisness Loan",
  //         branch: "CHD Branch",
  //         startDate:"10-09-2025",
  //         endDate:"10-12-205",
  //         amount:"6000",
  //         status:"Approved",
  //     },
  //      {
  //         id: "RL004",
  //         type:"Eduation Loan",
  //         branch: "CHD Branch",
  //         startDate:"10-09-2025",
  //         endDate:"10-12-205",
  //         amount:"10000",
  //         status:"Approved",
  //     },
  // ]

  const { loggedUserData } = useContext(LoggedDataContext);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const loanApplicationList = async () => {
    setLoading(true);
    try {
      const res = await AppliedLoanListServ({ userId: loggedUserData?._id , status: "approved" });
      const sortedLoans = [...(res?.data || [])].sort(
      (a, b) => new Date(b.createdAt || b.startDate) - new Date(a.createdAt || a.startDate)
    );

    setLoans(sortedLoans);
    } catch (err) {
      console.log("error", err);
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
          <ProfileSidebar title={"Aplied Loans"} />

          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
               <h1>Approved Loan Applications</h1>
               <p>Check loan requests that have been approved and are ready for processing</p>
              </div>
              {/* <div className="credit-score">
                    <span className="score">782</span>
                    <span className="label">Credit Score</span>
                </div> */}
            </div>

            <div className="main-content">
              <div className="section">
                {/* <h2 className="section-title">
                  Applied Loans
                  <button className="edit-btn" id="editProfileBtn">
                            <i className="fas fa-edit"></i> Edit Profile
                        </button>
                </h2> */}

                <div className="loans-table d-lg-block d-none">
                  <table className="w-100 ">
                    <thead className="">
                      <tr>
                        <th className="py-3 ps-2">ID</th>
                        <th className="py-3">Type</th>
                        <th className="py-3">Branch</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Amount</th>
                        <th className="text-center">Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading
                        ? Array.from({ length: 3 }).map((_, index) => (
                            <tr key={index}>
                              <td className="ps-2">
                                <Skeleton width={80} height={20} />
                              </td>
                              <td>
                                <Skeleton width={100} height={20} />
                              </td>
                              <td>
                                <Skeleton width={120} height={20} />
                              </td>
                              <td>
                                <Skeleton width={100} height={20} />
                              </td>
                              <td>
                                <Skeleton width={100} height={20} />
                              </td>
                              <td>
                                <Skeleton width={70} height={20} />
                              </td>
                              <td>
                                <Skeleton width={80} height={20} />
                              </td>
                              <td>
                                <Skeleton width={30} height={20} />
                              </td>
                            </tr>
                          ))
                        : loans.length === 0 ? (
    <tr>
      <td colSpan="8" className="text-center py-4 text-muted">
        No loan applications found.
      </td>
    </tr>
  ) :  loans.map((loan) => (
                            <tr key={loan._id}>
                              <td className="ps-2">{loan.code}</td>
                              <td>{loan.loanId?.name}</td>
                              <td>{loan.branchId?.name}</td>
                              <td>{loan.startDate}</td>
                              <td>{loan.endDate}</td>
                              <td>₹{loan.loanAmount}</td>
                              <td
                                className="loan-status  status-approved"
                              >
                               {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                              </td>
                              <td>
                                <div className="d-flex justify-content-center text-center">
                                  <i
                                    className="fas fa-eye action-icon"
                                    title="View"
                                  ></i>
                                </div>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>


           <div className="loan-cards d-lg-none d-flex row">
  {loading
    ? Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="col-sm-6 col-12 p-2">
          <div className="loan-card">
            {/* Card Title */}
            <h3><Skeleton width="60%" height={20} /></h3>

            {/* Card Body */}
            <p>
              <strong><Skeleton width={80} height={15} /></strong>{" "}
              <Skeleton width="50%" height={15} />
            </p>
            <p>
              <strong><Skeleton width={70} height={15} /></strong>{" "}
              <Skeleton width="40%" height={15} />
            </p>
            <p>
              <strong><Skeleton width={90} height={15} /></strong>{" "}
              <Skeleton width="50%" height={15} />
            </p>
            <p>
              <strong><Skeleton width={100} height={15} /></strong>{" "}
              <Skeleton width="60%" height={15} />
            </p>

            {/* Status Line */}
            <p className="d-flex justify-content-between">
              <strong><Skeleton width={70} height={15} /></strong>{" "}
              <Skeleton width={80} height={20} />
            </p>
          </div>
        </div>
      ))
    : loans.length === 0 ? (
        <div className="col-12 text-center text-muted py-4">
          It looks like you haven’t applied for any loans yet.
        </div>
      ) : (
        loans.map((loan, index) => (
          <div key={index} className="col-sm-6 col-12 p-2">
            <div className="loan-card">
              <h3>{loan.loanId?.name}</h3>
              <p className="d-flex  gap-2 " ><strong  style={{width:"110px"}}>Id:</strong> {loan.code}</p>
              <p className="d-flex  gap-2 "><strong  style={{width:"110px"}}>Branch:</strong> {loan.branchId?.name}</p>
              <p className="d-flex  gap-2 "><strong  style={{width:"110px"}}>Amount:</strong> ₹{loan.loanAmount}</p>
              <p className="d-flex  gap-2 "><strong  style={{width:"110px"}}>Start Date:</strong> {loan.startDate}</p>
              <p className="d-flex  gap-2 "><strong  style={{width:"110px"}}>End Date:</strong> {loan.endDate}</p>
              <p className="d-flex gap-2">
                <strong  style={{width:"110px"}}>Status:</strong>{" "}
                <span
                  className="loan-status status-approved"
                >
                  {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                </span>
              </p>
            </div>
          </div>
        ))
      )}
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
