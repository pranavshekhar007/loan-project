"use client";
import React, { act } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState , useContext , useEffect } from "react";
import { LoggedDataContext } from "../context/Context";
import ProfileSidebar from "../Components/ProfileSidebar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { emiNotificationListServ } from "../services/emi.service";

const page = () => {
  // const emiList = [
  //   {
  //     // id: "RL001",
  //     type: "Gold Loan",
  //     branch: "CHD Branch",
  //     startDate: "10-09-2025",
  //     endDate: "N/A",
  //     amount: "10000",
  //     status: "Pending",
  //   },
  //   {
  //     // id: "RL002",
  //     type: "Buisness Loan",
  //     branch: "CHD Branch",
  //     startDate: "10-09-2025",
  //     endDate: "N/A",
  //     amount: "6000",
  //     status: "Pending",
  //   },
  //   {
  //     // id: "RL004",
  //     type: "Eduation Loan",
  //     branch: "CHD Branch",
  //     startDate: "10-09-2025",
  //     endDate: "N/A",
  //     amount: "10000",
  //     status: "Pending",
  //   },
  // ];


  const { loggedUserData } = useContext(LoggedDataContext);
    const [emiList, setEmiList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const loanApplicationList = async () => {
      setLoading(true);
      try {
        const res = await emiNotificationListServ({ userId: loggedUserData?._id });
        const sortedLoans = [...(res?.data || [])].sort(
        (a, b) => new Date(b.createdAt || b.startDate) - new Date(a.createdAt || a.startDate)
      );
  
      setEmiList(sortedLoans);
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
          <ProfileSidebar  title={"EMI Reminder"}/>

          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                <h3 className="h3-big fw-bold" >Emi Reminder</h3>
                <p>
                  Stay updated with your upcoming EMI schedules and payments
                </p>
              </div>
            </div>

            <div className="main-content">
              <div className="section">
                <div className="loans-table d-lg-block d-none">
                  <table className="w-100 ">
                    <thead className="">
                      <tr>
                        <th className="py-3 ps-2">Loan Name</th>
                        <th className="py-3">Branch</th>
                        <th>Amount</th>
                        <th>Expected Date</th>
                        <th>Paid Date</th>

                        <th className="text-center">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading
                        ? Array(5)
                            .fill()
                            .map((_, i) => (
                              <tr key={i}>
                                <td className="ps-2">
                                  <Skeleton width={120} />
                                </td>
                                <td>
                                  <Skeleton width={100} />
                                </td>
                                <td>
                                  <Skeleton width={80} />
                                </td>
                                <td>
                                  <Skeleton width={100} />
                                </td>
                                <td>
                                  <Skeleton width={100} />
                                </td>
                                <td className="text-center">
                                  <Skeleton width={80} height={20} />
                                </td>
                              </tr>
                            ))
                        : emiList.length === 0 ? (
    <tr>
      <td colSpan="6" className="text-center py-4">
        You don’t have any EMI reminders right now
      </td>
    </tr>
  ) : emiList.map((loan) => (
                        <tr key={loan.applicationCode}>
                          <td className="ps-2">{loan.loanName}</td>
                          <td>{loan.branchName}</td>
                          <td>₹{loan.amount}</td>
                          <td>{loan.expectedDate}</td>
                          <td>{loan.paidDate || "N/A"}</td>

                          <td  className={`loan-status ${
                                loan.status === "disbursed"
                                  ? "status-active"
                                  : loan.status === "pending"
                                  ? "status-pending"
                                  : loan.status === "rejected"
                                  ? "status-rejected"
                                  : loan.status === "completed"
                                  ? "status-completed"
                                  : loan.status === "approved"
                                  ? "status-approved"
                                  : "status-default"
                              }`} > {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)} </td>
                          {/* <td>
           <div className='d-flex justify-content-center text-center'>
               <i className="fas fa-eye action-icon" title="View"></i>
           </div>
          </td> */}
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
                              
                  
                              {/* Status Line */}
                              <p className="d-flex justify-content-between">
                                <strong><Skeleton width={70} height={15} /></strong>{" "}
                                <Skeleton width={80} height={20} />
                              </p>
                            </div>
                          </div>
                        ))
                      : emiList.length === 0 ? (
    <tr>
     <div className="col-12 text-center py-4">
    You don’t have any EMI reminders right now
  </div>
    </tr>
  ) : emiList.map((loan, index) => (
                    <div className="col-sm-6 col-12 p-2">
                    <div key={index} className="loan-card ">
                      <h3>{loan.loanName}</h3>
                      <p className="d-flex  gap-2 " >
                        <strong  style={{width:"110px"}}>Branch:</strong> <span>{loan.branchName}</span>
                      </p>
                      <p className="d-flex  gap-2 " >
                        <strong  style={{width:"110px"}}>Amount:</strong> <span>₹{loan.amount}</span>
                      </p>
                      <p className="d-flex  gap-2 " >
                        <strong  style={{width:"110px"}}>Expected Date:</strong> <span>{loan.expectedDate}</span>
                      </p>
                      <p className="d-flex  gap-2 " >
                        <strong  style={{width:"110px"}}>Paid Date:</strong> <span>{loan.paidDate || "N/A"}</span>
                      </p>
                      <p className="d-flex  gap-2 ">
                        <strong  style={{width:"110px"}}>Status:</strong>{" "}
                        <span className={`loan-status ${
                                loan.status === "disbursed"
                                  ? "status-active"
                                  : loan.status === "pending"
                                  ? "status-pending"
                                  : loan.status === "rejected"
                                  ? "status-rejected"
                                  : loan.status === "completed"
                                  ? "status-completed"
                                  : loan.status === "approved"
                                  ? "status-approved"
                                  : "status-default"
                              }`} >  {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)} </span>
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
      <Footer />
    </>
  );
};

export default page;
