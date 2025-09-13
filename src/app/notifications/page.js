"use client";
import React, { act } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar';

const page = () => {

    
  return (
    <> 
    <Navbar/>
    <div className='profile-page'>
        <div className="dashboard-container">

          <ProfileSidebar title={"Notifications"}/>

        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h1>Notifications</h1>
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
                   
                   <div >
                         
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
