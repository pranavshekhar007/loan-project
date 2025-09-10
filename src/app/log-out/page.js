"use client";
import React, { act } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState , useContext } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar';
import { LoggedDataContext } from '../context/Context';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const page = () => {

    const router = useRouter();
    const { setLoggedUserData, updateLoggedUserData } = useContext(LoggedDataContext);

const handleLogut = () => {
     console.log("Logging out..."); 
         updateLoggedUserData(null);    
           localStorage.removeItem('user');
  sessionStorage.removeItem('user');
     console.log("Logged out...");    
     toast.success("You’ve been logged out.")
    router.push("/sign-up");
}
  return (
    <> 
    <Navbar/>
    <div className='profile-page'>
        <div className="dashboard-container">

          <ProfileSidebar/>

        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h1>Log out of your account</h1>
                    <p>You are about to sign out of your account. Please confirm to proceed.</p>
                </div>
              
            </div>

            <div className="main-content">
                <div className="section">
                    <h2 className="section-title">
                        Log Out
                    </h2>
                    <div>
                          {/* <h3>Confirm Logout</h3> */}
                            <p>You’ll be signed out of your account and will need to log in again.</p>
                            {/* <button className='log-out-btn btn px-4' style={{width:"fit-content"}}
                            onClick={handleLogut}
                           > Log Out
                          <img className='log-out-icon' src='https://cdn-icons-png.flaticon.com/128/9208/9208320.png' style={{height:"22px" , width:"22px"}}></img> </button> */}

                           <button className="edit-btn px-4" style={{width:"fit-content"}}
                            onClick={handleLogut}
                           > Log Out
                          <img className='log-out-icon' src='https://cdn-icons-png.flaticon.com/128/9208/9208320.png' style={{height:"22px" , width:"22px"}}></img> </button>
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
