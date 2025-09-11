"use client";
import React, { act } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {

     const loans = [
        {
            // id: "RL001",
            type:"Gold Loan",
            branch: "CHD Branch",
            startDate:"10-09-2025",
             endDate:"N/A",
            amount:"10000",
            status:"Pending",
        },
         {
            // id: "RL002",
            type:"Buisness Loan",
            branch: "CHD Branch",
            startDate:"10-09-2025",
             endDate:"N/A",
            amount:"6000",
            status:"Pending",
        },
         {
            // id: "RL004",
            type:"Eduation Loan",
            branch: "CHD Branch",
            startDate:"10-09-2025",
            endDate:"N/A",
            amount:"10000",
            status:"Pending",
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
                    <h1>Emi Reminder</h1>
                    <p>Stay updated with your upcoming EMI schedules and payments</p>
                </div>
                {/* <div className="credit-score">
                    <span className="score">782</span>
                    <span className="label">Credit Score</span>
                </div> */}
            </div>

            <div className="main-content">
                <div className="section">
                    <h2 className="section-title">
                        EMI
                        {/* <button className="edit-btn" id="editProfileBtn">
                            <i className="fas fa-edit"></i> Edit Profile
                        </button> */}
                    </h2>
                   
                   <div  className='loans-table'>
                             <table className='w-100 '>
                           <thead className=''>
      <tr>
        {/* <th className='py-3 ps-2'>ID</th> */}
        <th className='py-3 ps-2'>Loan Name</th>
        <th className='py-3'>Branch</th>
        <th>Amount</th>
        <th>Expected Date</th>
        <th>Paid Date</th>
        {/* <th className='text-center'>Status</th> */}
        <th className='text-center'>Action</th>
      </tr>
    </thead>

     <tbody>
      {loans.map((loan) => (
        <tr key={loan.id} >
          {/* <td className='ps-2' >{loan.id}</td> */}
          <td className='ps-2'  >{loan.type}</td>
          <td >{loan.branch}</td>
            <td >₹{loan.amount}</td>
          <td >{loan.startDate}</td>
          <td >{loan.endDate}</td>
        
         <td className='emi-status'>
  {loan.status}
</td>
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
