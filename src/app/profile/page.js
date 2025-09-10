// "use client";
// import React, { act } from 'react'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import { useState } from 'react'

// const page = () => {

//      const [activeMenu, setActiveMenu] = useState("Profile");
     
//       const menuItems = [
//     { name: "Profile", icon: "fas fa-user-circle" },
//       { name: "Applied Loans", icon: "fas fa-hand-holding-usd" },
//     { name: "Transactions", icon: "fas fa-exchange-alt" },
//     { name: "EMI Reminder", icon: "fa-solid fa-stopwatch" },
//     { name: "Notification", icon: "fa-solid fa-bell" },
//     { name: "Logout", icon: "fas fa-sign-out-alt" },
//     // { name: "Contact", icon: "fas fa-envelope" },
//     // { name: "FAQ", icon: "fas fa-question-circle" },
//     // { name: "Terms & Conditions", icon: "fas fa-file-contract" },
//     // { name: "Privacy Policy", icon: "fas fa-user-shield" },
 
  
//   ];
//   return (
//     <> 
//     <Navbar/>
//     <div className='profile-page'>
//         <div className="dashboard-container">
//         <div className="sidebar">
//             <div className="sidebar-profile">
//                 <div className="sidebar-avatar">
//                     <span>AS</span>
//                 </div>
//                 <div className="sidebar-name">Aarav Sharma</div>
//                 <div className="sidebar-id">RL7894561230</div>
//             </div>

//             <div className="sidebar-menu">
//                 {/* <div className="menu-item active">
//                     <i className="fas fa-user-circle"></i>
//                     <span>Profile</span>
//                 </div> */}
                
//                  {menuItems.map((item, i) => (
//                 <div
//                   key={i}
//                   className={`menu-item ${activeMenu === item.name ? "active" : ""}`}
//                   onClick={() => setActiveMenu(item.name)}
//                 >
//                   <i className={item.icon}></i>
//                   <span>{item.name}</span>
//                 </div>
//               ))}
//                 {/* <div className="menu-item">
//                     <i className="fas fa-envelope"></i>
//                     <span>Contact</span>
//                 </div>

//                 <div className="menu-item">
//                     <i className="fas fa-question-circle"></i>
//                     <span>FAQ</span>
//                 </div>

//                 <div className="menu-item">
//                     <i className="fas fa-file-contract"></i>
//                     <span>Terms & Conditions</span>
//                 </div>

//                 <div className="menu-item">
//                     <i className="fas fa-user-shield"></i>
//                     <span>Privacy Policy</span>
//                 </div>
//                 <div className="menu-item">
//                     <i className="fas fa-sign-out-alt"></i>
//                     <span>Logout</span>
//                 </div> */}
//             </div>
//         </div>

//         <div className="profile-container">
//             <div className="profile-header">
//                 <div className="profile-info">
//                     <h1>Personal Information</h1>
//                     <p>Manage your account details and personal information</p>
//                 </div>
//                 <div className="credit-score">
//                     <span className="score">782</span>
//                     <span className="label">Credit Score</span>
//                 </div>
//             </div>

//             <div className="main-content">
//                 <div className="section">
//                     <h2 className="section-title">
//                         Personal Details
//                         <button className="edit-btn" id="editProfileBtn">
//                             <i className="fas fa-edit"></i> Edit Profile
//                         </button>
//                     </h2>
//                     <div className="info-grid">
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-user"></i>
//                                 </div>
//                                 <label for="">Name</label>
//                                 <div className="info-value" id="fullName">Aarav Sharma</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-mobile-alt"></i>
//                                 </div>
//                                   <label for="">Mobile No</label>
//                                 <div className="info-value" id="mobileNumber">+91 98765 43210</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-envelope"></i>
//                                 </div>
//                                   <label for="">Email</label>
//                                 <div className="info-value" id="email">aarav.sharma@example.com</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-id-card"></i>
//                                 </div>
//                                   <label for="">Aadhar No</label>
//                                 <div className="info-value" id="aadhar">XXXX-XXXX-1234</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-address-card"></i>
//                                 </div>
//                                   <label for="">Pan no.</label>
//                                 <div className="info-value" id="pan">ABCDE1234F</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-user-friends"></i>
//                                 </div>
//                                   <label for="">Father Name</label>
//                                 <div className="info-value" id="fatherName">Rajesh Sharma</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-user-friends"></i>
//                                 </div>
//                                   <label for="">Mother Name</label>
//                                 <div className="info-value" id="motherName">Priya Sharma</div>
//                             </div>
//                         </div>
//                         <div className="info-item">
//                             <div className="input-with-icon">
//                                 <div className="input-icon">
//                                     <i className="fas fa-calendar"></i>
//                                 </div>
//                                   <label for="">date of birth</label>
//                                 <div className="info-value" id="dob">15/08/1985</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     </div>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default page


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

          <ProfileSidebar/>

        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h1>Personal Information</h1>
                    <p>Manage your account details and personal information</p>
                </div>
                <div className="credit-score">
                    <span className="score">782</span>
                    <span className="label">Credit Score</span>
                </div>
            </div>

            <div className="main-content">
                <div className="section">
                    <h2 className="section-title">
                        Personal Details
                        <button className="edit-btn" id="editProfileBtn">
                            <i className="fas fa-edit"></i> Edit Profile
                        </button>
                    </h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <label for="">Name</label>
                                <div className="info-value" id="fullName">Aarav Sharma</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                  <label for="">Mobile No</label>
                                <div className="info-value" id="mobileNumber">+91 98765 43210</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                  <label for="">Email</label>
                                <div className="info-value" id="email">aarav.sharma@example.com</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-id-card"></i>
                                </div>
                                  <label for="">Aadhar No</label>
                                <div className="info-value" id="aadhar">XXXX-XXXX-1234</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-address-card"></i>
                                </div>
                                  <label for="">Pan no.</label>
                                <div className="info-value" id="pan">ABCDE1234F</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-user-friends"></i>
                                </div>
                                  <label for="">Father Name</label>
                                <div className="info-value" id="fatherName">Rajesh Sharma</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-user-friends"></i>
                                </div>
                                  <label for="">Mother Name</label>
                                <div className="info-value" id="motherName">Priya Sharma</div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="input-with-icon">
                                <div className="input-icon">
                                    <i className="fas fa-calendar"></i>
                                </div>
                                  <label for="">date of birth</label>
                                <div className="info-value" id="dob">15/08/1985</div>
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
