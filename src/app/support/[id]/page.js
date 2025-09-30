"use client";
import React, { useEffect, useState, useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const page = () => {
  

  return (
    <>
      <Navbar />
      <div className="viewport-wrapper" style={{height:"80vh"}}>
        <div className="combined-support-container d-block">
               
               <div className="row p-5 h-100">
                 <div className="col-4">
                    
                 </div>
                 <div className="col-8 h-100">
                    <h3>Chat with us</h3>
                <div className="chat-box border p-4 rounded h-100 d-flex flex-column">
  <div className="flex-grow-1">
      <div className="d-flex justify-content-start">
        <div className="message d-flex gap-2 align-items-end"><p className="mb-0">Hello</p> <p className="mb-1 message-time">12:10</p></div>
      </div>

      <div className="d-flex justify-content-end">
        <div className="message2 mb-0 d-flex gap-2 align-items-end"  ><p className="mb-0">Hello , this is</p> <p className="mb-1 message-time">12:13</p></div>
      </div>
  </div>

  <div className="d-flex gap-2 mt-3" style={{height:"45px"}}>
    <input
      className="ticket-input border flex-grow-1"
      placeholder="Add Message"
    />
    <button className="btn btn-primary mt-0 mb-0" style={{width:"fit-content"}}>
      Send
    </button>
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
