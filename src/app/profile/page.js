import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <> 
    <Navbar/>
    <div className='profile-page'>
        <div class="dashboard-container">
        <div class="sidebar">
            <div class="sidebar-profile">
                <div class="sidebar-avatar">
                    <span>AS</span>
                </div>
                <div class="sidebar-name">Aarav Sharma</div>
                <div class="sidebar-id">RL7894561230</div>
            </div>

            <div class="sidebar-menu">
                <div class="menu-item active">
                    <i class="fas fa-user-circle"></i>
                    <span>Profile</span>
                </div>
                <div class="menu-item">
                    <i class="fas fa-envelope"></i>
                    <span>Contact</span>
                </div>

                <div class="menu-item">
                    <i class="fas fa-question-circle"></i>
                    <span>FAQ</span>
                </div>

                <div class="menu-item">
                    <i class="fas fa-file-contract"></i>
                    <span>Terms & Conditions</span>
                </div>

                <div class="menu-item">
                    <i class="fas fa-user-shield"></i>
                    <span>Privacy Policy</span>
                </div>
                <div class="menu-item">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </div>
            </div>
        </div>

        <div class="profile-container">
            <div class="profile-header">
                <div class="profile-info">
                    <h1>Personal Information</h1>
                    <p>Manage your account details and personal information</p>
                </div>
                <div class="credit-score">
                    <span class="score">782</span>
                    <span class="label">Credit Score</span>
                </div>
            </div>

            <div class="main-content">
                <div class="section">
                    <h2 class="section-title">
                        Personal Details
                        <button class="edit-btn" id="editProfileBtn">
                            <i class="fas fa-edit"></i> Edit Profile
                        </button>
                    </h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-user"></i>
                                </div>
                                <label for="">Name</label>
                                <div class="info-value" id="fullName">Aarav Sharma</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                  <label for="">Mobile No</label>
                                <div class="info-value" id="mobileNumber">+91 98765 43210</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                  <label for="">Email</label>
                                <div class="info-value" id="email">aarav.sharma@example.com</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-id-card"></i>
                                </div>
                                  <label for="">Aadhar No</label>
                                <div class="info-value" id="aadhar">XXXX-XXXX-1234</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-address-card"></i>
                                </div>
                                  <label for="">Pan no.</label>
                                <div class="info-value" id="pan">ABCDE1234F</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-user-friends"></i>
                                </div>
                                  <label for="">Father Name</label>
                                <div class="info-value" id="fatherName">Rajesh Sharma</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-user-friends"></i>
                                </div>
                                  <label for="">Mother Name</label>
                                <div class="info-value" id="motherName">Priya Sharma</div>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="input-with-icon">
                                <div class="input-icon">
                                    <i class="fas fa-calendar"></i>
                                </div>
                                  <label for="">date of birth</label>
                                <div class="info-value" id="dob">15/08/1985</div>
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
