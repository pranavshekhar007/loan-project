"use client";
import React, { act, useEffect , useContext } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { useState } from 'react'
import ProfileSidebar from '../../Components/ProfileSidebar';
import { AppliedLoanListServ } from '../../services/loan.service';
import { LoggedDataContext } from '../../context/Context';

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

    const loanApplicationList = async () => {
       try{
        const res = await AppliedLoanListServ({userId : loggedUserData?._id});
        setLoans(res?.data)
       }
       catch(err){

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

          {/* <ProfileSidebar/> */}

        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h1>Loan Applications</h1>
                    <p>Track and manage all your applied loan requests here</p>
                </div>
                
            </div>

            <div className="main-content">
                <div className="section">
                    <h2 className="section-title">
                        Applied Loan Details
                       
                    </h2>
                   
                   <div className='applied-details'>
                          <div className="row mb-5">
            {/* <h3 className="medium-text my-3 textPrimary">
              Appointment Summary
            </h3> */}
           <div className="col-12 col-md-8">
  <div className="row gy-3">
    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 ">Loan Id</p>
      <p className=" text-dark small-bold para">
       R0012
      </p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 ">Loan Name</p>
      <p className="small-bold text-dark para">Gold Name</p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 ">Loan Status</p>
      <p className="small-bold para" style={{color:"#281b36"}}>
        pending
      </p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 ">Start Date</p>
      <p className="small-bold text-dark para">08-08-2025</p>
    </div>

    <div className="col-12 col-sm-6">
      <p className="text-muted mb-2 ">End Date</p>
      <p className="small-bold text-dark para">
        10-10-2026
      </p>
    </div>

 {/* <div className="col-12 col-sm-6">
       {details?.status === "pending" && (
  <div className="mb-2">
    <button
      className="viewButton textPrimary bg-white px-4 py-2"
      onClick={() => setShowReviewPopup(true)}
    >
      Add Review
    </button>
  </div>
)}
</div> */}
  </div>
</div>

          </div>
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
