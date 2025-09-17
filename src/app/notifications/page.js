// "use client";
// import React, { act } from 'react'
// import Navbar from '../Components/Navbar'
// import Footer from '../Components/Footer'
// import { useState } from 'react'
// import ProfileSidebar from '../Components/ProfileSidebar';

// const page = () => {

//     const categories = [

//     ]
//     const Notifications = [
//         {
//             message:"Your loan application has been submitted successfully",
//             icon:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
//             date:"14 september 2025",
//             time:"04:00 PM",
//         },
//         {
//             message:"Your loan request is under review. We’ll notify you once it’s approved.",
//             icon:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
//             date:"15 september 2025",
//             time:"03:48 PM",
//         },
//         {
//             message:"Your loan application has been declined. Please contact support for more details.",
//             icon:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
//             date:"16 september 2025",
//             time:"02:00 PM",
//         }
//     ]
    
//   return (
//     <> 
//     <Navbar/>
//     <div className='profile-page'>
//         <div className="dashboard-container">

//           <ProfileSidebar title={"Notifications"}/>

//         <div className="profile-container">
//             <div className="profile-header">
//                 <div className="profile-info">
//                     <h1>Notifications</h1>
//                     <p>Track and manage all your applied loan requests here</p>
//                 </div>
//                 {/* <div className="credit-score">
//                     <span className="score">782</span>
//                     <span className="label">Credit Score</span>
//                 </div> */}
//             </div>

//             <div className="main-content">
//                 <div className="section ">
                    
//                     {
//                         Notifications.map((ntf) => (
//                             <div className='mb-3 ntfDiv rounded shadow border p-2'>
//                               <div className='d-flex gap-3'>
//                                 <img src={ntf?.icon} style={{width:"29px"}}></img>
//                                 <div>
//                                     <p className='mb-2'>{ntf?.message}</p>
//                                     <div>
//                                         <p>{ntf?.date}, {ntf?.time}</p>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
                   
//                    <div>
                         
//                    </div>

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
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProfileSidebar from "../Components/ProfileSidebar";

const Page = () => {
  const categories = ["All", "Notify", "Application"];

  const Notifications = [
    {
      message: "Your loan application has been submitted successfully",
      type: "Application",
      icon: "https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
      date: "14 September 2025",
      time: "04:00 PM",
    },
    {
      message: "Your loan request is under review. We’ll notify you once it’s approved.",
      type: "Notify",
      icon: "https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
      date: "15 September 2025",
      time: "03:48 PM",
    },
    {
      message: "Your loan application has been declined. Please contact support for more details.",
      type: "Application",
      icon: "https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
      date: "16 September 2025",
      time: "02:00 PM",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredNotifications =
    activeCategory === "All"
      ? Notifications
      : Notifications.filter((ntf) => ntf.type === activeCategory);

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="dashboard-container">
          <ProfileSidebar title={"Notifications"} />

          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                <h1>Notifications</h1>
                <p>View all your loan notifications here."</p>
              </div>
            </div>

            <div className="main-content">
              <div className="section">
                {/* Category Tabs */}
                <div className="d-flex gap-sm-3 gap-1 mb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-sm-4 px-3 py-2  notify-cat ${
                        activeCategory === cat
                          ? "active-notify"
                          : ""
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Notifications */}
                {filteredNotifications.map((ntf, index) => (
                  <div
                    key={index}
                    className="mb-3 ntfDiv  p-sm-3 p-2"
                  >
                    <div className="d-flex gap-3">
                      <img
                        src={ntf?.icon}
                        alt="icon"
                        className="ntf-icon"
                      />
                      <div>
                        <p className="mb-2 text-black text-start ntf-message">{ntf?.message}</p>
                        <div>
                          <p className="mb-0 date-time text-start ">
                            {ntf?.date}, {ntf?.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredNotifications.length === 0 && (
                  <p className="text-muted">No notifications found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
