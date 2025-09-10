"use client";
import React, { act } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar';

const page = () => {

    const loans = [
        {
            id: "RL001",
            type:"Gold Loan",
            branch: "CHD Brack",
            startDate:"10-09-2025",
            endDate:"10-12-205",
            amount:"10000",
            status:"New Request",
        },
         {
            id: "RL002",
            type:"Buisness Loan",
            branch: "CHD Brack",
            startDate:"10-09-2025",
            endDate:"10-12-205",
            amount:"6000",
            status:"Approved",
        },
         {
            id: "RL004",
            type:"Eduation Loan",
            branch: "CHD Brack",
            startDate:"10-09-2025",
            endDate:"10-12-205",
            amount:"10000",
            status:"Approved",
        },
    ]

    
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
      {loans.map((loan) => (
        <tr key={loan.id} >
          <td className='ps-2' >{loan.id}</td>
          <td >{loan.type}</td>
          <td >{loan.branch}</td>
          <td >{loan.startDate}</td>
          <td >{loan.endDate}</td>
          <td >₹{loan.amount}</td>
         <td
  className={`loan-status ${
    loan.status === "Approved"
      ? "status-approved"
      : loan.status === "New Request"
      ? "status-new"
      : "status-default"
  }`}
>
  {loan.status}
</td>
          <td>
           <div className='d-flex justify-content-center text-center'>
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
