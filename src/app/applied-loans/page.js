"use client";
import React, { act, useEffect , useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar';
import { AppliedLoanListServ } from '../services/loan.service';
import { LoggedDataContext } from '../context/Context';
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

    const {loggedUserData } = useContext(LoggedDataContext);
    const [loans , setLoans] = useState([]);
    const [loading, setLoading] = useState(true);

    const loanApplicationList = async () => {
        setLoading(true);
       try{
        const res = await AppliedLoanListServ({userId : loggedUserData?._id});
        setLoans(res?.data)
       }
       catch(err){
          console.log("error" ,err)
       }finally {
      setLoading(false);
    }
    }

 useEffect(() => {
  if (loggedUserData?._id) {
    loanApplicationList();
  }
}, [loggedUserData?._id]);

    
  return (
    <> 
    <Navbar/>
    <div className='profile-page'>
        <div className="dashboard-container">

          <ProfileSidebar/>

        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h1>Loan Applications</h1>
                    <p>Track and manage all your applied loan requests here</p>
                </div>
                {/* <div className="credit-score">
                    <span className="score">782</span>
                    <span className="label">Credit Score</span>
                </div> */}
            </div>

            <div className="main-content">
                <div className="section">
                    <h2 className="section-title">
                        Applied Loans
                        {/* <button className="edit-btn" id="editProfileBtn">
                            <i className="fas fa-edit"></i> Edit Profile
                        </button> */}
                    </h2>
                   
                   <div className='loans-table'>
                          <table className='w-100 '>
                           <thead className=''>
      <tr>
        <th className='py-3 ps-2'>ID</th>
        <th className='py-3'>Type</th>
        <th className='py-3'>Branch</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Amount</th>
        <th className='text-center'>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
  {loading
    ? Array.from({ length: 3 }).map((_, index) => (
        <tr key={index}>
          <td className="ps-2"><Skeleton width={80} height={20} /></td>
          <td><Skeleton width={100} height={20} /></td>
          <td><Skeleton width={120} height={20} /></td>
          <td><Skeleton width={100} height={20} /></td>
          <td><Skeleton width={100} height={20} /></td>
          <td><Skeleton width={70} height={20} /></td>
          <td><Skeleton width={80} height={20} /></td>
          <td><Skeleton width={30} height={20} /></td>
        </tr>
      ))
    : loans.map((loan) => (
        <tr key={loan._id}>
          <td className="ps-2">{loan.code}</td>
          <td>{loan.loanId?.name}</td>
          <td>{loan.branchId?.name}</td>
          <td>{loan.startDate}</td>
          <td>{loan.endDate}</td>
          <td>₹{loan.loanAmount}</td>
          <td
            className={`loan-status ${
              loan.status === "approved"
                ? "status-approved"
                : loan.status === "pending"
                ? "status-new"
                : "status-default"
            }`}
          >
            {loan.status}
          </td>
          <td>
            <div className="d-flex justify-content-center text-center">
              <i className="fas fa-eye action-icon" title="View"></i>
            </div>
          </td>
        </tr>
      ))}
</tbody>

                          
                          </table>
                   </div>

                </div>


            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default page
