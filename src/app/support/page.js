

"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  chatCreateServ,
  chatListServ,
  ticketCategoryListServ,
  ticketCreateServ,
  ticketlistServ,
} from "../services/support.service";
import { LoggedDataContext } from "../context/Context";
import { toast } from "react-toastify";
import { formatDistanceToNowStrict } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from "moment";
import { FaSpinner } from "react-icons/fa";


const page = () => {
  const { loggedUserData } = useContext(LoggedDataContext);
  const id = loggedUserData?._id;
  const [categoryList, setCategoryList] = useState([]);
  const [formData, setFormData] = useState({
    userId: loggedUserData?._id,
    subject: "",
    ticketCategoryId: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await ticketCreateServ(formData);
      if (res?.statusCode == 200) {
        console.log("sumbited successfully");
        toast.success(res?.message || "Support created ");
        setFormData({
          userId: loggedUserData?._id || "",
          subject: "",
          ticketCategoryId: "",
        });
             setShowPopup(false);
        getTicketList();
    
      }
    } catch (err) {
      console.log("err", err);
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    }

    console.log("Form Data:", formData);
  };

  const categoryListGet = async () => {
    const payload = {
      status: true,
    };
    try {
      const res = await ticketCategoryListServ(payload);
      setCategoryList(res?.data);
    } catch (err) {
      console.log("getting err", err);
    }
  };

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTicketList = async () => {
    setLoading(true);
    const payload = {
      userId: loggedUserData?._id,
    };
    try {
      const res = await ticketlistServ(payload);
      setList(res?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    categoryListGet();
  }, []);

  useEffect(() => {
    getTicketList();

    setFormData((prev) => ({
      ...prev,
      userId: loggedUserData?._id || "",
    }));
  }, [loggedUserData?._id]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filtered = list.filter((ticket) => {
      if (statusFilter !== "all" && ticket.status !== statusFilter) {
        return false;
      }

      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        return (
          ticket.code.toLowerCase().includes(term) ||
          ticket.subject.toLowerCase().includes(term)
        );
      }

      return true;
    });

    setFilteredList(filtered);
  }, [list, searchTerm, statusFilter]);

  //file input

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);


  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // setMobileView("tickets");

    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }

    setChatData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
    setChatData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [mobileView, setMobileView] = useState("tickets");

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setMobileView("chat");
  };

  const [chatList, setChatList] = useState([]);

  const getChatList = async (id) => {
    try {
      const res = await chatListServ(id);
      if (res.statusCode == 200) {
        setChatList(res?.data);
      }
    } catch (err) {
      console.log("getting error");
    }
  };

  useEffect(() => {
    getChatList(selectedTicket?._id);
  }, [selectedTicket]);

  const [chatData, setChatData] = useState({
    message: "",
    userId: loggedUserData?._id,
    userType: "User",
    ticketId: selectedTicket?._id,
  });

  const handleSubmitChat = async () => {
     if (!chatData.message && !selectedFile) return; 
  setChatLoading(true);
    try {
      const res = await chatCreateServ(chatData);
      console.log("created successfully");
      getChatList(selectedTicket?._id);
      setChatData((prev) => ({
        ...prev,
        message: "",
        image: null,
      }));
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      console.log("error");
    } finally {
    setChatLoading(false); 
  }
    setShowUploadPopup(false) 
  };

  useEffect(() => {
    setChatData({
      message: "",
      userId: loggedUserData?._id || "",
      userType: "User",
      ticketId: selectedTicket?._id || "",
    });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [selectedTicket, loggedUserData?._id]);

 
const [currentPage, setCurrentPage] = useState(1);
const [ticketsPerPage] = useState(5); 
const [maxPageNumbers] = useState(1); 

const indexOfLastTicket = currentPage * ticketsPerPage;
const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
const currentTickets = filteredList.slice(indexOfFirstTicket, indexOfLastTicket);

const totalPages = Math.ceil(filteredList.length / ticketsPerPage);


let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
let endPage = startPage + maxPageNumbers - 1;
if (endPage > totalPages) {
  endPage = totalPages;
  startPage = Math.max(1, endPage - maxPageNumbers + 1);
}
const pageNumbers = [];
for (let i = startPage; i <= endPage; i++) {
  pageNumbers.push(i);
}


useEffect(() => {
  setCurrentPage(1);
}, [searchTerm, statusFilter]);

const [previewImage, setPreviewImage] = useState(null);

//file upload popup

const [showUploadPopup, setShowUploadPopup] = useState(false);
const [popupImage, setPopupImage] = useState(null);
const [popupMessage, setPopupMessage] = useState("");

 const chatContainerRef = useRef(null);

useEffect(() => {
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  scrollToBottom();

  const timeout = setTimeout(scrollToBottom, 500);
  return () => clearTimeout(timeout);
}, [chatList, selectedTicket]);

  return (
    <>
      <Navbar />
      <div className="viewport-wrapper">
        <div className="combined-support-container container">
          {/* list of ticekts */}

          <div className="row">
            <div className="col-lg-4 col-md-5 col-12 position-relative">
              {/* desktp list */}
              <div className="panel all-tickets-panel pe-2 d-md-block d-none ps-3"  >
                <h1 className="h3-big" style={{fontWeight:"500"}}> My Active Tickets</h1>

                <div className="filter-bar d-sm-flex">
                  <input
                    type="text"
                    placeholder="Search by Ticket ID or Subject..."
                    className="search-input ticket-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select
                    className="status-filter ticket-input"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>

                <div className="tickets-list-container">
                  {/* desktop view */}

                  <table className="tickets-table d-md-table d-none">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Status</th>
                        {/* <th>Last Update</th> */}
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <tr key={i}>
                              <td>
                                <Skeleton width={50} />
                              </td>
                              <td>
                                <Skeleton width={50} />
                              </td>
                              <td>
                                <Skeleton width={70} />
                              </td>
                              {/* <td>
                                <Skeleton width={100} />
                              </td>
                              <td>
                                <Skeleton width={50} />
                              </td> */}
                            </tr>
                          ))
                      ) : filteredList.length > 0 ? (
                        currentTickets.map((ticket) => (
                          <tr
                            key={ticket._id}
                            onClick={() => setSelectedTicket(ticket)}
                            style={{ cursor: "pointer" }}
                            className={
                              selectedTicket?._id === ticket._id
                                ? "active-ticket"
                                : ""
                            }
                          >
                            <td>{ticket.code || "N/A"}</td>
                            <td>{ticket.subject || "N/A"}</td>
                            <td>
                              <span
                                className={`status-tag ${
                                  ticket.status === "open"
                                    ? "status-open"
                                    : ticket.status === "resolved"
                                    ? "status-resolved"
                                    : "status-progress"
                                }`}
                              >
                                {ticket.status || "N/A"}
                              </span>
                            </td>
                            {/* <td>{ticket.updatedAt ? formatDistanceToNowStrict(new Date(ticket.updatedAt), { addSuffix: true }) : "N/A"}</td> */}
                            {/* <td><a href="#" className="view-link">View</a></td> */}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">
                           <p className="my-4"> No tickets found</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                   {filteredList.length > 5 && (
              <div className="pagination-area d-flex justify-content-center align-items-center gap-2">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((prev) => prev - 1)}
    className="btn btn-light"
  >
    &laquo; Prev
  </button>

  {pageNumbers.map((num) => (
    <button
      key={num}
      onClick={() => setCurrentPage(num)}
      className={`btn ${num === currentPage ? "btn-primary" : "btn-light"}`}
    >
      {num}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((prev) => prev + 1)}
    className="btn btn-light"
  >
    Next &raquo;
  </button>
              </div>
             )}
                </div>

                {/* <div className="pagination-area">
              <button>&laquo; Prev</button>
              <span>Page 1 of 5</span>
              <button>Next &raquo;</button>
            </div> */}
              </div>

              {/* mobile view list */}

              <div
                className={`panel all-tickets-panel pe-2   d-md-none ${
                  mobileView === "tickets" ? "d-block" : "d-none"
                }`}
                style={{minHeight:"82vh"}}
              >
                <div className="d-flex justify-content-between">
                  <h3 className="h3-big">My Active Tickets</h3>
                  <i
                    class="fa-solid fa-plus add-icon"
                    onClick={() => setShowPopup(true)}
                  ></i>
                </div>

                <div className="filter-bar d-sm-flex">
                  <input
                    type="text"
                    placeholder="Search by Ticket ID or Subject..."
                    className="search-input ticket-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select
                    className="status-filter ticket-input"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
                <div
                  className={` d-md-none ${
                    mobileView === "tickets" ? "d-block" : "d-none"
                  }`}
                >
                  <div className="tickets-card-container row gx-0">
                    {loading ? (
                      Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div className="col-sm-6" key={i}>
                            <div className="p-2 h-100">
                              <div className="ticket-card h-100">
                                <Skeleton width={80} height={20} />
                                <Skeleton
                                  width={150}
                                  height={20}
                                  style={{ margin: "5px 0" }}
                                />
                                <Skeleton
                                  width={100}
                                  height={20}
                                  style={{ margin: "5px 0" }}
                                />
                                <Skeleton
                                  width={120}
                                  height={20}
                                  style={{ margin: "5px 0" }}
                                />
                                <Skeleton
                                  width={60}
                                  height={20}
                                  style={{ marginTop: "10px" }}
                                />
                              </div>
                            </div>
                          </div>
                        ))
                    ) : filteredList.length > 0 ? (
                      currentTickets.map((ticket) => (
                        <div className="col-sm-6 col-12" key={ticket._id}>
                          <div className="p-2 h-100">
                            <div
                              className="ticket-card h-100"
                              onClick={() => handleTicketClick(ticket)}
                            >
                              <div className="d-flex gap-2">
                                <strong className="ticket-card-heading">
                                  ID:
                                </strong>
                                <p>{ticket.code}</p>
                              </div>
                              <div className="d-flex gap-2">
                                <strong className="ticket-card-heading">
                                  Subject:
                                </strong>
                                <p> {ticket.subject}</p>
                              </div>
                              <div className="d-flex gap-2">
                                <strong className="ticket-card-heading">
                                  Status:
                                </strong>{" "}
                                {/* <span className={`status-tag ${ticket.status}`}>  </span> */}
                                <p>
                                  <span
                                    className={`status-tag ${
                                      ticket.status === "open"
                                        ? "status-open"
                                        : ticket.status === "resolved"
                                        ? "status-resolved"
                                        : "status-progress"
                                    }`}
                                  >
                                    {ticket.status || "N/A"}
                                  </span>
                                </p>
                              </div>
                              {/* <div>
                                <strong>Last Update:</strong>{" "}
                                {ticket.updatedAt
                                  ? formatDistanceToNowStrict(
                                      new Date(ticket.updatedAt),
                                      { addSuffix: true }
                                    )
                                  : "N/A"}
                              </div> */}
                              <div>
                                {/* <a href="#" className="view-link">
                                  View
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center h-100 d-flex justify-content-center align-items-center">No tickets found</div>
                    )}
                  </div>
                </div>
                 {filteredList.length > 5 && (
              <div className="pagination-area d-flex justify-content-center align-items-center gap-2">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((prev) => prev - 1)}
    className="btn btn-light"
  >
    &laquo; Prev
  </button>

  {pageNumbers.map((num) => (
    <button
      key={num}
      onClick={() => setCurrentPage(num)}
      className={`btn ${num === currentPage ? "btn-primary" : "btn-light"}`}
    >
      {num}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((prev) => prev + 1)}
    className="btn btn-light"
  >
    Next &raquo;
  </button>
              </div>
             )}
              </div>

            

            </div>

            {/* chat box desktop */}

            <div className="col-lg-8 col-md-7 d-none d-md-block px-0">
              <div className="panel  chat-pannel ps-2">
                <div className="d-flex justify-content-between">
                  <h3 className="h3-big">Chat with us</h3>

                  <button
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      padding: "10px 30px",
                    }}
                    className="my-0"
                    onClick={() => setShowPopup(true)}
                  >
                    New Ticket
                  </button>
                </div>

                <div className="chat-box  pt-3 pb-3 px-3  d-flex flex-column position-relative ">
                  {selectedTicket ? (
                    <>
                      <div className="mb-2 border-bottom pb-1 position-sticky">
                        <p
                          className="mb-1  p-2 py-1"
                          style={{
                            color: "#402a57",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            fontSize:"1rem"
                          }}
                        >
                          # {selectedTicket.code}
                        </p>
                      </div>

                      <div className="flex-grow-1 chat-scroll-container" style={{overflowY:"scroll"}}  ref={chatContainerRef} >
                        { chatList.length > 0 ?
                       ( chatList.map((chat) => (
                          <div
                          
                            className={`d-flex ${
                              chat.userType === "User"
                                ? "justify-content-end"
                                : "justify-content-start"
                            }`}
                            key={chat._id}
                          >
                            <div
                              className={`${
                                chat.userType === "User"
                                  ? "message2"
                                  : "message"
                              } mb-0 d-flex gap-2 align-items-end`}
                            >

                            
                              {chat?.image ? (
                                <div className="d-flex flex-column">
                                  {chat.image && (
                                    <img
                                      src={chat.image}
                                      alt="chat-attachment"
                                      className="chat-image rounded"
                                      style={{
                                        minHeight: "150px",
                                        maxHeight:"150px",
                                        width: "auto",
                                        maxWidth:"300px",
                                        borderRadius: "10px",
                                      }}
                                       onClick={() => setPreviewImage(chat.image)} 
                                    />
                                  )}

                                  <div   className={`d-flex align-items-end justify-content-${
    chat.userType === "User" ? "end" : "start"
  }`}
>
  {chat.message && (
    <p className="mb-0 mx-1">
      {chat.message}
    </p>
  )}
                                    <p className="mb-0 message-time">
                                     {chat.createdAt ? moment(chat.createdAt).fromNow() : ""}
                                    </p>
                                     {chat.userType === "User" && (
      <span className="tick-icon">
        {chat.isRead ? (
          <i className="fas fa-check-double isReadIcon "></i> // double tick
        ) : (
          <i className="fas fa-check isReadIcon"></i> // single tick
        )}
      </span>
    )}
                                   
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {chat.message && (
                                    <p className="mb-0 mx-1">{chat.message}</p>
                                  )}

                                  {chat.image && (
                                    <img
                                      src={chat.image}
                                      alt="chat-attachment"
                                      className="chat-image rounded"
                                      style={{
                                        minHeight: "150px",
                                        maxHeight:"150px",
                                        width: "auto",
                                        maxWidth:"300px",
                                        borderRadius: "10px",
                                      }}
                                      onClick={() => setPreviewImage(chat.image)}
                                    />
                                  )}

                                  <p className="mb-0 message-time">
                                    {chat.createdAt ? moment(chat.createdAt).fromNow() : ""}
                                  </p>
                                      {chat.userType === "User" && (
      <span className="tick-icon">
        {chat.isRead ? (
          <i className="fas fa-check-double isReadIcon "></i> // double tick
        ) : (
          <i className="fas fa-check isReadIcon"></i> // single tick
        )}
      </span>
    )}
                                </>
                              )}
                            </div>
                          </div>
                        ))
                      ):(
                         <div className="text-center text-muted py-4">
      No messages yet
    </div>

    
                      )
                        }
                       
                      </div>

                      {selectedFile && (
                        <div
                          className="d-inline-flex align-items-center gap-2 px-2 py-1 mb-2 rounded-pill"
                          style={{
                            background: "#e9ecef",
                            fontSize: "13px",
                            maxWidth: "fit-content",
                          }}
                        >
                          📎{" "}
                          <span className="text-truncate">
                            {selectedFile.name}
                          </span>
                          <i
                            className="fa-solid fa-xmark text-danger"
                            style={{ cursor: "pointer", fontSize: "14px" }}
                            onClick={handleRemoveFile}
                          ></i>
                        </div>
                      )}

                      {/* input + actions */}
                      <div
                        className="d-flex gap-2 mt-1 align-items-center  position-sticky"
                        style={{ minHeight: "42px" }}
                      >
                        <input
                          name="message"
                          onChange={(e) =>
                            setChatData((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          value={chatData?.message}
                          className="ticket-input border flex-grow-1"
                          placeholder="Add Message"
                        />

                        {/* hidden file input */}
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />

                        {/* upload icon */}
                        <div
                          onClick={() => setShowUploadPopup(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
                        </div>

                        <button
                          className="btn btn-primary mt-0 mb-0 send-btn"
                          style={{ width: "fit-content" }}
                          onClick={handleSubmitChat}
                        >
                          Send
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-muted text-center mb-3 h-100 d-flex align-items-center justify-content-center">
                      Your support conversation will appear here. Select a
                      ticket to begin.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* chat box mibile view */}

            <div
              className={`col-12 d-md-none ${
                mobileView === "chat" ? "d-block" : "d-none"
              }`}
            >
              <p
                className="mb-2 mt-2 mb-1 "
                style={{
                  color: "#281B36",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
                onClick={() => setMobileView("tickets")}
              >
                ← Back to Tickets
              </p>

              <div
                className="panel  chat-pannel ps-2"
                style={{ height: "81vh" }}
              >
                <div className="d-flex justify-content-between">
                  <h3 className="h3-big">Chat with us</h3>

                  {/* <button style={{width:"fit-content" , height:"fit-content" , padding :"6px 10px" , fontSize:"13px"}} className="my-0"
                onClick={() => setShowPopup(true)}
               >
                New Ticket
               </button> */}
                </div>

                <div className="chat-box  p-2  h-100 d-flex flex-column position-relative">
                  {selectedTicket ? (
                    <>
                      <div className="mb-2 border-bottom pb-1 position-sticky">
                        <p
                          className="mb-1 p-2 py-1"
                          style={{
                            color: "#402a57",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            fontSize:"0.9 rem"
                          }}
                        >
                          # {selectedTicket.code}
                        </p>
                      </div>

                      <div className="flex-grow-1 chat-scroll-container"  style={{overflowY:"scroll"}}  ref={chatContainerRef}>
                        
                        { chatList.length > 0 ? 
                       ( chatList.map((chat) => (
                          <div
                            className={`d-flex ${
                              chat.userType === "User"
                                ? "justify-content-end"
                                : "justify-content-start"
                            }`}
                            key={chat._id}
                          >
                            <div
                              className={`${
                                chat.userType === "User"
                                  ? "message2"
                                  : "message"
                              } mb-0 d-flex gap-2 align-items-end`}
                            >
                              {chat?.image ? (
                                <div className="d-flex flex-column">
                                  {chat.image && (
                                    <img
                                      src={chat.image}
                                      alt="chat-attachment"
                                      className="chat-image rounded"
                                      style={{
                                        minHeight: "70px",
                                        maxHeight:"70px",
                                        width: "auto",
                                        maxWidth: "130px",
                                        borderRadius: "10px",
                                      }}
                                       onClick={() => setPreviewImage(chat.image)} 
                                    />
                                  )}

                                  <div className="d-flex align-items-end justify-content-end">
                                    {chat.message && (
                                      <p className="mb-0 mx-1">
                                        {chat.message}
                                      </p>
                                    )}

                                    <p className="mb-0 message-time">
                                     {chat.createdAt ? moment(chat.createdAt).fromNow() : ""}
                                    </p>
                                        {chat.userType === "User" && (
      <span className="tick-icon">
        {chat.isRead ? (
          <i className="fas fa-check-double isReadIcon "></i> // double tick
        ) : (
          <i className="fas fa-check isReadIcon"></i> // single tick
        )}
      </span>
    )}
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {chat.message && (
                                    <p className="mb-0 mx-1">{chat.message}</p>
                                  )}

                                  {chat.image && (
                                    <img
                                      src={chat.image}
                                      alt="chat-attachment"
                                      className="chat-image rounded"
                                      style={{
                                        minHeight: "90px",
                                         maxHeight:"100px",
                                        width: "auto",
                                        maxWidth: "180px",
                                        borderRadius: "10px",
                                      }}
                                       onClick={() => setPreviewImage(chat.image)}
                                    />
                                  )}

                                  <p className="mb-0 message-time">
                                   {chat.createdAt ? moment(chat.createdAt).fromNow() : ""}
                                  </p>
                                     {chat.userType === "User" && (
      <span className="tick-icon">
        {chat.isRead ? (
          <i className="fas fa-check-double isReadIcon "></i> // double tick
        ) : (
          <i className="fas fa-check isReadIcon"></i> // single tick
        )}
      </span>
    )}
                                </>
                              )}
                            </div>
                          </div>
                        ))
                      ):(
                         <div className="text-center text-muted py-4">
                        No messages yet
                        </div>
                      )
                        } 
                      </div>

                      {selectedFile && (
                        <div
                          className="d-inline-flex align-items-center gap-2 px-2 py-1 mb-2 rounded-pill"
                          style={{
                            background: "#e9ecef",
                            fontSize: "13px",
                            maxWidth: "fit-content",
                          }}
                        >
                          📎{" "}
                          <span className="text-truncate">
                            {selectedFile.name}
                          </span>
                          <i
                            className="fa-solid fa-xmark text-danger"
                            style={{ cursor: "pointer", fontSize: "14px" }}
                            onClick={handleRemoveFile}
                          ></i>
                        </div>
                      )}

                      {/* input + actions */}
                      <div
                        className="d-flex gap-2 mt-1 align-items-center  position-sticky"
                        style={{ minHeight: "30px" }}
                      >
                        <input
                          className="ticket-input border flex-grow-1 px-2 py-1"
                          name="message"
                          onChange={(e) =>
                            setChatData((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          value={chatData?.message}
                          placeholder="Add Message"
                        />

                        {/* hidden file input */}
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />

                        {/* upload icon */}
                        <div
                         onClick={() => setShowUploadPopup(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
                        </div>

                        <button
                          className="btn btn-primary mt-0 mb-0 px-2 py-1"
                          style={{ width: "fit-content" }}
                          onClick={handleSubmitChat}
                        >
                          Send
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-muted text-center mb-3 h-100 d-flex align-items-center justify-content-center">
                      Your support conversation will appear here. Select a
                      ticket to begin.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     {/* file upload popup */}

     {showUploadPopup && (
  <div
    className="payment-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
  >
    <div
      className="bg-white p-4 shadow ticket-create-popup"
      style={{ maxWidth: "90%", width: "500px", borderRadius: "16px" }}
    >
      <div className="d-flex justify-content-center align-items-center mb-3">
        <h3 className="w-100 d-flex justify-content-end h3-big">
          Upload File
        </h3>
        <div className="d-flex justify-content-end" style={{ width: "50%" }}>
          <button
            className="btn-close"
            onClick={() => {
              setShowUploadPopup(false);
              setSelectedFile(null);
              setChatData((prev) => ({ ...prev, message: "", image: null }));
            }}
          ></button>
        </div>
      </div>

      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();   
          handleSubmitChat(); 
        }}
      >
        {/* File input */}
        <div className="form-group mb-2">
          <label className="form-label">Select File</label>
          <input
            type="file"
            accept="image/*"
            className="form-control p-2"
            onChange={(e) => {
              handleFileChange(e)
            }}
          />
        </div>

       
        {selectedFile && (
          <div className="mb-2 text-center">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="img-fluid rounded"
              style={{ maxHeight: "130px", minHeight:"100px", objectFit: "contain" }}
            />
          </div>
        )}

        {/* Message input */}
        <div className="form-group mb-3">
          <label className="form-label">Message (optional)</label>
          <textarea
            className="form-control p-2"
            rows="2"
            placeholder="Add a message"
            value={chatData.message}
            onChange={(e) =>
              setChatData((prev) => ({ ...prev, message: e.target.value }))
            }
          ></textarea>
        </div>

        {/* Send button */}
        <button type="submit" className="submit-button">
         {chatLoading ? (
    <FaSpinner className="icon-spin" />  
  ) : (
    "Send"
  )}
        </button>
      </form>
    </div>
  </div>
)}


    {/* chat image preivew */}
      {previewImage && (
  <div
    className="image-preview-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{
      backgroundColor: "rgb(45 44 44 / 72%)",
      zIndex: 99999,
    }}
    onClick={() => setPreviewImage(null)}
  >
    <img
      src={previewImage}
      alt="preview"
      className="chat-preview-image"
      style={{
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "10px",
        cursor:"pointer",
        // boxShadow: "0 0 20px rgba(255,255,255,0.3)",
      }}
    />

    {/* <button
      className="btn btn-light position-absolute top-0 end-0 m-3"
      onClick={() => setPreviewImage(null)}
    >
      ✕
    </button> */}
  </div>
     )}

      {/* new ticket create popup */}
      {showPopup && (
        <div
          className="payment-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
        >
          <div
            className="bg-white p-4 shadow ticket-create-popup"
            style={{ maxWidth: "90%", borderRadius: "16px" }}
          >
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h3 className="w-100 d-flex justify-content-end h3-big">
                New Support Ticket
              </h3>
              <div
                className=" d-flex justify-content-end"
                style={{ width: "50%" }}
              >
                <button
                  className="btn-close"
                  onClick={() => setShowPopup(false)}
                ></button>
              </div>
            </div>

            <form className="ticket-form" onSubmit={handleSubmit}>
              {/* <div className="form-group">
                    <label for="loan-account-s">Acct. No. (Optional)</label>
                    <input type="text" id="loan-account-s" name="loan-account-s" placeholder="e.g., LNW-123456" className='ticket-input'/>
                </div> */}

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="issue-category-s" className="d-flex gap-2">
                      Category <span className="required mb-0">*</span>
                    </label>
                    <select
                      style={{ marginTop: "8px" }}
                      id="issue-category-s"
                      name="ticketCategoryId"
                      className="ticket-input"
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled selected>
                        --- Select Category ---
                      </option>
                      {categoryList.map((cat) => (
                        <option value={cat?._id}>{cat?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="ticket-subject-s" className="d-flex gap-2">
                      Subject <span className="required mb-0">*</span>
                    </label>
                    <input
                      type="text"
                      id="ticket-subject-s"
                      name="subject"
                      className="ticket-input"
                      placeholder="Enter a brief title"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group flexible-field-s">
                <label for="description" className="d-flex gap-2">
                  Detailed Description 
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Explain your issue in detail..."
                  className="ticket-input"
                 
                    onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                // onClick={handleSubmit}
              >
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default page;
