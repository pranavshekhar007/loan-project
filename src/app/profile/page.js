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
import React, { act } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import ProfileSidebar from "../Components/ProfileSidebar";

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Aarav Sharma",
    mobile: "+91 98765 43210",
    email: "aarav.sharma@example.com",
    aadhar: "XXXX-XXXX-1234",
    pan: "ABCDE1234F",
    fatherName: "Rajesh Sharma",
    motherName: "Priya Sharma",
    dob: "15/08/1985",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    if (isEditing) {
      console.log("Saved data:", formData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="dashboard-container">
          <ProfileSidebar />

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
                  <button className="edit-btn" onClick={toggleEdit}>
                    <i
                      className={`fas ${isEditing ? "fa-save" : "fa-edit"}`}
                    ></i>{" "}
                    {isEditing ? "Save" : "Edit Profile"}
                  </button>
                </h2>
                <div className="info-grid">
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <label for="">Name</label>
                      {isEditing ? (
                        <input
                          className="info-input"
                          type="text"
                          value={formData?.name}
                          name="name"
                          onChange={handleChange}
                        ></input>
                      ) : (
                        <div className="info-value" id="fullName">
                          {formData?.name}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <label for="">Mobile No</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="mobile"
                          className="info-input"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.mobile}</div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <label for="">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          className="info-input"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-id-card"></i>
                      </div>
                      <label for="">Aadhar No</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="aadhar"
                          className="info-input"
                          value={formData.aadhar}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.aadhar}</div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-address-card"></i>
                      </div>
                      <label for="">Pan no.</label>
                      {isEditing ? (
                        <input
                          type="text"
                          className="info-input"
                          name="pan"
                          value={formData.pan}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.pan}</div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-user-friends"></i>
                      </div>
                      <label for="">Father Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          className="info-input"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.fatherName}</div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-user-friends"></i>
                      </div>
                      <label for="">Mother Name</label>
                       {isEditing ? (
                        <input
                          type="text"
                          className="info-input"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.motherName}</div>
                      )}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-calendar"></i>
                      </div>
                      <label for="">date of birth</label>
                        {isEditing ? (
                        <input
                          type="text"
                          name="dob"
                          className="info-input" 
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData.dob}</div>
                      )}
                    </div>
                  </div>
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
