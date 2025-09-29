// "use client";

// import Head from "next/head";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useContext } from "react";
// import Faq from "../Components/Faq";
// import { contactQueryServ } from "../services/support.service";
// import { toast } from "react-toastify";
// import { LoggedDataContext } from "../context/Context";
// import { useRouter } from "next/navigation";

// export default function Support() {
//   const router = useRouter();
//   const [activeIndexes, setActiveIndexes] = useState([]);
//   const { loggedUserData } = useContext(LoggedDataContext);

//   const toggleFAQ = (index) => {
//     if (activeIndexes.includes(index)) {
//       setActiveIndexes(activeIndexes.filter((i) => i !== index));
//     } else {
//       setActiveIndexes([...activeIndexes, index]);
//     }
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     subject: "",
//     message: "",
//   });

//   return (
//     <>
//       <Head>
//         <title>Customer Support - Rupee Loan</title>
//         <meta
//           name="description"
//           content="Get 24/7 customer support for your loan applications, repayments, and account queries with RupeeLoan."
//         />
//       </Head>

//       {/* Navbar */}
//       <Navbar />

//       <div className="container mt-3 p-3">
//         <div className="d-flex gap-2 justify-content-center align-items-center">
//           {/* <i className="fa-solid fa-headset"></i> */}
//           <img
//             src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
//             style={{ width: "43px", height: "43px" }}
//           ></img>
//           <h2 className="h2 text-center">Support</h2>
//         </div>
//         {loggedUserData ? (
//           <p className="text-center">
//             Raise a support ticket for any queries or issues, and our team will
//             assist you promptly.
//           </p>
//         ) : (
//           <p className="text-center">Have question about Rupee Loan</p>
//         )}

//         <section className="support">
//           {!loggedUserData ? (
//             <div
//               className="d-flex justify-content-center align-items-center w-100"
//               style={{ minHeight: "60vh" }}
//             >
//               <div
//                 className="bg-white p-4 shadow"
//                 style={{
//                   width: "440px",
//                   maxWidth: "90%",
//                   borderRadius: "16px",
//                 }}
//               >
//                 <div className="d-flex flex-column align-items-center justify-content-center ">
//                   <p className="text-center">
//                     Please Signin or Signup to view your tickets or open a new
//                     one.
//                   </p>
//                   <div className="d-flex w-100 flex-column">
//                     <button
//                       className=" px-sm-4 px-2 mt-3 cancel-login"
//                       onClick={() => router.push("/sign-up")}

//                       //  onClick={handleClosePopup}
//                     >
//                       {/* <i className="fa-solid fa-xmark"></i> */} Sign In
//                     </button>

//                     {/* <button className=" px-sm-4 px-2"
              
//                 >
//                 <img
//                   className="log-out-icon"
//                   src="https://cdn-icons-png.flaticon.com/128/9208/9208320.png"
//                   alt="log out icon"
//                   style={{ height: "22px", width: "22px" }}
//                 ></img>
//                 {" "}
//                 Sign Up
               
//               </button> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <div className="border p-4 w-100  bg-white shadow-sm" style={{borderRadius:"20px"}}>
//                 <h3>Create New Ticket</h3>
//                 <p style={{ fontSize: "1rem" }}>
//                   Fill up all the information here, then click submit button
//                 </p>

//                 <form className="mt-3">
//                   {/* Subject */}
//                   <div className="row">
//                     <div className="mb-3 col-6">
//                       <label className="form-label">Subject</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter ticket subject"
//                         name="subject"
//                       />
//                     </div>

//                     {/* Category */}
//                     <div className="mb-3 col-6">
//                       <label className="form-label">Category</label>
//                       <select className="form-control" name="category">
//                         <option value="">Select category</option>
//                         <option value="loan">Loan Queries</option>
//                         <option value="repayment">Repayment Issues</option>
//                         <option value="account">Account / Login</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>

//                     <div className="mb-3 col-6">
//                       <label className="form-label">Contact Number</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter your contact number"
//                         name="contactNumber"
//                       />
//                     </div>

//                     {/* Priority */}
//                     <div className="mb-3 col-6">
//                       <label className="form-label">Priority</label>
//                       <select className="form-control" name="priority">
//                         <option value="">Select priority</option>
//                         <option value="low">Low</option>
//                         <option value="medium">Medium</option>
//                         <option value="high">High</option>
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div className="mb-3">
//                       <label className="form-label">Message</label>
//                       <textarea
//                         className="form-control"
//                         rows="4"
//                         placeholder="Describe your issue in detail"
//                         name="message"
//                       ></textarea>
//                     </div>
//                   </div>

//                   {/* Submit */}
//                   <div className="text-start">
//                     <button type="submit" className=" btn-primary px-4" style={{width:"fit-content"}}>
//                       Submit Ticket
//                     </button>
//                   </div>
//                 </form>
//               </div>

//               {/* ticket list */}

//               {/* Ticket History Section */}
// <div className="border p-4 w-100 bg-white shadow-sm mt-4" style={{ borderRadius: "20px" }}>
//   <h3>My Ticket History</h3>
//   <p style={{ fontSize: "1rem" }}>Here you can view all your previous support tickets.</p>

//   <div className=" mt-3">
//     <div className="row">
//      <div className="col-7">
//      <table className="table  align-middle ticket-table">
//       <thead className="table-light">
//         <tr>
//           <th scope="col">Ticket ID</th>
//           <th scope="col">Subject</th>
//           <th scope="col">Category</th>
//           <th scope="col">Status</th>
//           <th scope="col">Last Updated</th>
//         </tr>
//       </thead>
//       <tbody>
       
//         <tr>
//           <td>#1023</td>
//           <td>Loan application delay</td>
//           <td>Loan Queries</td>
//           <td><p className="ticket-status">In Progress</p></td>
//           <td>26 Sep 2025</td>
//         </tr>
//         <tr>
//           <td>#1015</td>
//           <td>Unable to login</td>
//           <td>Account / Login</td>
//           <td><p className="ticket-status">Resolved</p></td>
//           <td>22 Sep 2025</td>
//         </tr>
//         <tr>
//           <td>#1008</td>
//           <td>Repayment not reflecting</td>
//           <td>Repayment Issues</td>
//           <td><p className="ticket-status">Open</p></td>
//           <td>20 Sep 2025</td>
//         </tr>
//       </tbody>
//     </table>
//      </div>
//     </div>
//   </div>
// </div>

//             </div>
//           )}
//         </section>

//         {/* <Faq/> */}
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }


"use client"
import React, { useEffect, useState , useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ticketCategoryListServ, ticketCreateServ, ticketlistServ } from '../services/support.service';
import { LoggedDataContext } from '../context/Context';
import { toast } from "react-toastify";

const page = () => {

  const {loggedUserData} = useContext(LoggedDataContext);
  const id = loggedUserData?._id;
  const [categoryList , setCategoryList]  = useState([]);
  const [formData, setFormData] = useState({
  userId:  loggedUserData?._id,
  subject: "",
   ticketCategoryId: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

 try{
   const res = await ticketCreateServ(formData);
   if(res?.statusCode == 200){
    console.log("sumbited successfully");
    toast.success(res?.data?.message);
   }
 }
 catch(err){
  console.log("err" , err);
      toast.error(err?.response?.data?.message || "Something went wrong. Please try again later.");
 }
  
  
  console.log("Form Data:", formData);
};

  
  const categoryListGet = async() => {
    const payload = {
      status : true
    }
    try{
       const res = await ticketCategoryListServ(payload);
       setCategoryList(res?.data)
    }
    catch(err){
      console.log("getting err" , err);
    }

  }







const getTicketList =   async() => {
  const payload = {
    userId : loggedUserData?._id
  }
 try{
    const res = await ticketlistServ(payload);
 }
 catch(err){
    console.log(err);
 }
}

  useEffect(() => {
    categoryListGet();
   
  }, []);

  useEffect(() => {
  
 getTicketList();

  setFormData((prev) => ({
    ...prev,
    userId: loggedUserData?._id || ""  
  }));
}, [loggedUserData?._id]);


  return (
    <>
    <Navbar/>
    <div className="viewport-wrapper">
    <div className="combined-support-container">
        
        <div className="panel new-ticket-panel">
            <h3>New Support Ticket</h3>
            <p className="panel-intro">Use this form to submit a new inquiry.</p>

            <form className="ticket-form">

                {/* <div className="form-group">
                    <label for="loan-account-s">Acct. No. (Optional)</label>
                    <input type="text" id="loan-account-s" name="loan-account-s" placeholder="e.g., LNW-123456" className='ticket-input'/>
                </div> */}

                <div className="form-group">
                    <label for="issue-category-s" className='d-flex gap-2' >Category <span className="required">*</span></label>
                    <select id="issue-category-s" name="ticketCategoryId" className='ticket-input'  onChange={handleChange} required>
                        <option value="" disabled selected>--- Select Category ---</option>
                        {categoryList.map((cat) => (
                           <option value={cat?._id}>{cat?.name}</option>
                        ))

                        }
                        {/* <option value="payment">Payment/EMI Issue</option>
                        <option value="application">Application Status</option>
                        <option value="other">Other Inquiry</option> */}
                    </select>
                </div>

                <div className="form-group">
                    <label for="ticket-subject-s" className='d-flex gap-2'>Subject <span className="required">*</span></label>
                    <input type="text" id="ticket-subject-s" name="subject" className='ticket-input'
                     placeholder="Enter a brief title"
                      required
                       onChange={handleChange}
                      />
                </div>

                {/* <div className="form-group flexible-field-s">
                    <label for="ticket-description-s" className='d-flex gap-2'>Detailed Description <span className="required">*</span></label>
                    <textarea id="ticket-description-s" name="ticket-description-s" placeholder="Explain your issue in detail..." required></textarea>
                </div> */}

                <button type="submit" className="submit-button" onClick={handleSubmit}>Submit Ticket</button>
            </form>
        </div>

        <div className="panel all-tickets-panel">
            <h3>My Active Tickets</h3>
            
            <div className="filter-bar">
                <input type="text" placeholder="Search by Ticket ID or Subject..." className="search-input ticket-input"/>
                <select className="status-filter ticket-input">
                    <option value="all">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>

            <div className="tickets-list-container">
                <table className="tickets-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Last Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#100123</td>
                            <td>EMI deducted twice</td>
                            <td><span className="status-tag status-open">Open</span></td>
                            <td>2h ago</td>
                            <td><a href="#" className="view-link">View</a></td>
                        </tr>
                        <tr>
                            <td>#100122</td>
                            <td>Query about prepayment fee</td>
                            <td><span className="status-tag status-resolved">Resolved</span></td>
                            <td>1 day ago</td>
                            <td><a href="#" className="view-link">View</a></td>
                        </tr>
                        <tr>
                            <td>#100121</td>
                            <td>Unable to download statement</td>
                            <td><span className="status-tag status-progress">In Progress</span></td>
                            <td>5h ago</td>
                            <td><a href="#" className="view-link">View</a></td>
                        </tr>
                         <tr>
                            <td>#100120</td>
                            <td>Address change request</td>
                            <td><span className="status-tag status-open">Open</span></td>
                            <td>3 days ago</td>
                            <td><a href="#" className="view-link">View</a></td>
                        </tr>
                        <tr>
                            <td>#100119</td>
                            <td>Application documents needed</td>
                            <td><span className="status-tag status-progress">In Progress</span></td>
                            <td>1 week ago</td>
                            <td><a href="#" className="view-link">View</a></td>
                        </tr>
                        </tbody>
                </table>
            </div> 
            
            <div className="pagination-area">
                <button>&laquo; Prev</button>
                <span>Page 1 of 5</span>
                <button>Next &raquo;</button>
            </div>
        </div>
        
    </div>
</div>
<Footer/>
      
    </>
  )
}

export default page



