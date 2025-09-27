"use client";

import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import Faq from "../Components/Faq";
import { contactQueryServ } from "../services/support.service";
import { toast } from "react-toastify";
import { LoggedDataContext } from "../context/Context";
import { useRouter } from "next/navigation";

export default function Support() {
  const router = useRouter();
  const [activeIndexes, setActiveIndexes] = useState([]);
  const { loggedUserData } = useContext(LoggedDataContext);

  const toggleFAQ = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <Head>
        <title>Customer Support - Rupee Loan</title>
        <meta
          name="description"
          content="Get 24/7 customer support for your loan applications, repayments, and account queries with RupeeLoan."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      <div className="container mt-3 p-3">
        <div className="d-flex gap-2 justify-content-center align-items-center">
          {/* <i class="fa-solid fa-headset"></i> */}
          <img
            src="https://cdn-icons-png.flaticon.com/128/4460/4460756.png"
            style={{ width: "43px", height: "43px" }}
          ></img>
          <h2 className="h2 text-center">Support</h2>
        </div>
        {loggedUserData ? (
          <p className="text-center">
            Raise a support ticket for any queries or issues, and our team will
            assist you promptly.
          </p>
        ) : (
          <p className="text-center">Have question about Rupee Loan</p>
        )}

        <section className="support">
          {!loggedUserData ? (
            <div
              className="d-flex justify-content-center align-items-center w-100"
              style={{ minHeight: "60vh" }}
            >
              <div
                className="bg-white p-4 shadow"
                style={{
                  width: "440px",
                  maxWidth: "90%",
                  borderRadius: "16px",
                }}
              >
                <div className="d-flex flex-column align-items-center justify-content-center ">
                  <p className="text-center">
                    Please Signin or Signup to view your tickets or open a new
                    one.
                  </p>
                  <div className="d-flex w-100 flex-column">
                    <button
                      className=" px-sm-4 px-2 mt-3 cancel-login"
                      onClick={() => router.push("/sign-up")}

                      //  onClick={handleClosePopup}
                    >
                      {/* <i class="fa-solid fa-xmark"></i> */} Sign In
                    </button>

                    {/* <button className=" px-sm-4 px-2"
              
                >
                <img
                  className="log-out-icon"
                  src="https://cdn-icons-png.flaticon.com/128/9208/9208320.png"
                  alt="log out icon"
                  style={{ height: "22px", width: "22px" }}
                ></img>
                {" "}
                Sign Up
               
              </button> */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="border p-4 w-100  bg-white shadow-sm" style={{borderRadius:"20px"}}>
                <h3>Create New Ticket</h3>
                <p style={{ fontSize: "1rem" }}>
                  Fill up all the information here, then click submit button
                </p>

                <form className="mt-3">
                  {/* Subject */}
                  <div className="row">
                    <div className="mb-3 col-6">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ticket subject"
                        name="subject"
                      />
                    </div>

                    {/* Category */}
                    <div className="mb-3 col-6">
                      <label className="form-label">Category</label>
                      <select className="form-control" name="category">
                        <option value="">Select category</option>
                        <option value="loan">Loan Queries</option>
                        <option value="repayment">Repayment Issues</option>
                        <option value="account">Account / Login</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-3 col-6">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your contact number"
                        name="contactNumber"
                      />
                    </div>

                    {/* Priority */}
                    <div className="mb-3 col-6">
                      <label className="form-label">Priority</label>
                      <select className="form-control" name="priority">
                        <option value="">Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Describe your issue in detail"
                        name="message"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-start">
                    <button type="submit" className=" btn-primary px-4" style={{width:"fit-content"}}>
                      Submit Ticket
                    </button>
                  </div>
                </form>
              </div>

              {/* ticket list */}

              {/* Ticket History Section */}
<div className="border p-4 w-100 bg-white shadow-sm mt-4" style={{ borderRadius: "20px" }}>
  <h3>My Ticket History</h3>
  <p style={{ fontSize: "1rem" }}>Here you can view all your previous support tickets.</p>

  <div className=" mt-3">
    <div className="row">
     <div className="col-7">
     <table className="table  align-middle ticket-table">
      <thead className="table-light">
        <tr>
          <th scope="col">Ticket ID</th>
          <th scope="col">Subject</th>
          <th scope="col">Category</th>
          <th scope="col">Status</th>
          <th scope="col">Last Updated</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <td>#1023</td>
          <td>Loan application delay</td>
          <td>Loan Queries</td>
          <td><p className="ticket-status">In Progress</p></td>
          <td>26 Sep 2025</td>
        </tr>
        <tr>
          <td>#1015</td>
          <td>Unable to login</td>
          <td>Account / Login</td>
          <td><p className="ticket-status">Resolved</p></td>
          <td>22 Sep 2025</td>
        </tr>
        <tr>
          <td>#1008</td>
          <td>Repayment not reflecting</td>
          <td>Repayment Issues</td>
          <td><p className="ticket-status">Open</p></td>
          <td>20 Sep 2025</td>
        </tr>
      </tbody>
    </table>
     </div>
    </div>
  </div>
</div>

            </div>
          )}
        </section>

        {/* <Faq/> */}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
