"use client";
import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  ticketCategoryListServ,
  ticketCreateServ,
  ticketlistServ,
} from "../services/support.service";
import { LoggedDataContext } from "../context/Context";
import { toast } from "react-toastify";
import { formatDistanceToNowStrict } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    }finally{
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

  return (
    <>
      <Navbar />
      <div className="viewport-wrapper">
        <div className="combined-support-container">
          <div className="panel new-ticket-panel">
            <h3>New Support Ticket</h3>
            <p className="panel-intro">
              Use this form to submit a new inquiry.
            </p>

            <form className="ticket-form">
              {/* <div className="form-group">
                    <label for="loan-account-s">Acct. No. (Optional)</label>
                    <input type="text" id="loan-account-s" name="loan-account-s" placeholder="e.g., LNW-123456" className='ticket-input'/>
                </div> */}

              <div className="form-group">
                <label for="issue-category-s" className="d-flex gap-2">
                  Category <span className="required mb-0">*</span>
                </label>
                <select
                  style={{marginTop: "8px"}}
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
                  {/* <option value="payment">Payment/EMI Issue</option>
                        <option value="application">Application Status</option>
                        <option value="other">Other Inquiry</option> */}
                </select>
              </div>

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

              {/* <div className="form-group flexible-field-s">
                    <label for="ticket-description-s" className='d-flex gap-2'>Detailed Description <span className="required">*</span></label>
                    <textarea id="ticket-description-s" name="ticket-description-s" placeholder="Explain your issue in detail..." required></textarea>
                </div> */}

              <button
                type="submit"
                className="submit-button"
                onClick={handleSubmit}
              >
                Submit Ticket
              </button>
            </form>
          </div>

          <div className="panel all-tickets-panel">
            <h3>My Active Tickets</h3>

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
                    <th>Last Update</th>
                    <th>Action</th>
                  </tr>
                </thead>
               <tbody>
  {loading ? (
    Array(5).fill(0).map((_, i) => (
      <tr key={i}>
        <td><Skeleton width={50} /></td>
        <td><Skeleton width={150} /></td>
        <td><Skeleton width={70} /></td>
        <td><Skeleton width={100} /></td>
        <td><Skeleton width={50} /></td>
      </tr>
    ))
  ) : filteredList.length > 0 ? (
    filteredList.map((ticket) => (
      <tr key={ticket._id}>
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
        <td>{ticket.updatedAt ? formatDistanceToNowStrict(new Date(ticket.updatedAt), { addSuffix: true }) : "N/A"}</td>
        <td><a href="#" className="view-link">View</a></td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center">No tickets found</td>
    </tr>
  )}
</tbody>

              </table>

              {/* mobile view */}

             <div className="d-block d-md-none">
  <div className="tickets-card-container row">
    {loading ? (
      Array(5).fill(0).map((_, i) => (
        <div className="col-12 p-2" key={i}>
          <div className="ticket-card h-100">
            <Skeleton width={80} height={20} />
            <Skeleton width={150} height={20} style={{ margin: "5px 0" }} />
            <Skeleton width={100} height={20} style={{ margin: "5px 0" }} />
            <Skeleton width={120} height={20} style={{ margin: "5px 0" }} />
            <Skeleton width={60} height={20} style={{ marginTop: "10px" }} />
          </div>
        </div>
      ))
    ) : filteredList.length > 0 ? (
      filteredList.map((ticket) => (
        <div className="col-12 p-2" key={ticket._id}>
          <div className="ticket-card h-100">
            <div><strong>ID:</strong> {ticket.code}</div>
            <div><strong>Subject:</strong> {ticket.subject}</div>
            <div><strong>Status:</strong> <span className={`status-tag ${ticket.status}`}>{ticket.status}</span></div>
            <div><strong>Last Update:</strong> {ticket.updatedAt ? formatDistanceToNowStrict(new Date(ticket.updatedAt), { addSuffix: true }) : "N/A"}</div>
            <div><a href="#" className="view-link">View</a></div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">No tickets found</div>
    )}
  </div>
</div>

            </div>

            {/* <div className="pagination-area">
              <button>&laquo; Prev</button>
              <span>Page 1 of 5</span>
              <button>Next &raquo;</button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
