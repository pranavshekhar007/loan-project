

"use client";
import React, { act, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useContext } from "react";
import ProfileSidebar from "../Components/ProfileSidebar";
import {
  userDetailsServ,
  userDetailsUpdateServ,
} from "../services/user.service";
import { LoggedDataContext } from "../context/Context";
import { toast } from "react-toastify";
import CountryPhoneInput from "../Components/CountryPhoneInput";
import { FaEye, FaEdit, FaSpinner } from "react-icons/fa";

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const { loggedUserData, updateLoggedUserData } =
    useContext(LoggedDataContext);
  const [errors, setErrors] = useState({});

   const [loadingUpdate, setLoadingUpdate] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const aadharRef = useRef(null);
  const panRef = useRef(null);
  const pincodeRef = useRef(null);

  const id = loggedUserData?._id;
  const token = loggedUserData?.token;

const [showPreview, setShowPreview] = useState(false);
const fileInputRef = useRef(null);


  const getUserData = async () => {
    try {
      const res = await userDetailsServ(id);
      if (res?.statusCode == 200) {
        setFormData(res?.data);
        setOriginalData(res?.data);
        if (res?.data?.profilePic) {
          setProfilePic(res.data.profilePic);
        }
      }
    } catch (err) {
      console.log("user details error", err);
    }
  };

  useEffect(() => {
    if (loggedUserData?._id && loggedUserData?.token) {
      getUserData();
    }
  }, [loggedUserData?._id, loggedUserData?.token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e?.target.name]: e?.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // const [fullName, setFullName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);

  // useEffect(() => {
  //   setFullName(
  //     `${formData?.firstName || ""} ${formData?.lastName || ""}`.trim()
  //   );
  // }, [formData?.firstName, formData?.lastName]);

  // useEffect (() => {
  //      console.log("formdata change", formData)
  // },[formData])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicFile(file);
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    let firstErrorRef = null;

    if (!formData?.firstName?.trim()) {
      newErrors.firstName = "This field can't be empty";
      if (!firstErrorRef) firstErrorRef = firstNameRef;
    }
    if (!formData?.lastName?.trim()) {
      newErrors.lastName = "This field can't be empty";
      if (!firstErrorRef) firstErrorRef = lastNameRef;
    }
    if (!formData?.email?.trim()) {
      newErrors.email = "This field can't be empty";
      if (!firstErrorRef) firstErrorRef = emailRef;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      if (!firstErrorRef) firstErrorRef = emailRef;
    }
    if (!formData?.phone?.trim()) {
      newErrors.phone = "This field can't be empty";
      if (!firstErrorRef) firstErrorRef = phoneRef;
    }

    // else if (!/^[0-9]{10}$/.test(formData.phone)) {
    //   newErrors.phone = "Mobile number must be 10 digits";
    // }

    if (formData?.aadharNumber && !/^[0-9]{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = "Aadhar number must be 12 digits";
      if (!firstErrorRef) firstErrorRef = aadharRef;
    }
    if (
      formData?.panNumber &&
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)
    ) {
      newErrors.panNumber = "Invalid PAN number format (e.g. ABCDE1234F)";
      if (!firstErrorRef) firstErrorRef = panRef;
    }

    if (formData?.pincode && !/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
      if (!firstErrorRef) firstErrorRef = pincodeRef;
    }
    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, firstErrorRef };
  };

  const handleUpdate = async () => {

    const { isValid, firstErrorRef } = validateFields();


    if (!isValid) {
      if (firstErrorRef?.current) {
        firstErrorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        firstErrorRef.current.focus();
      }
      return;
    }
    try {
      const fd = new FormData();
      let hasChanges = false;

      Object.keys(formData).forEach((key) => {
        if (formData[key] !== originalData[key]) {
          fd.append(key, formData[key]);
          hasChanges = true;
        }
      });

      if (profilePicFile) {
        fd.append("profilePic", profilePicFile);
        hasChanges = true;
      }
      if (formData.countryCode !== originalData.countryCode) {
        fd.append("countryCode", formData.countryCode);
        hasChanges = true;
      }

      if (!hasChanges) {
        setIsEditing(false);
        return;
      }

      setLoadingUpdate(true)

      fd.append("id", id);
      const res = await userDetailsUpdateServ(fd, token);

      if (res?.statusCode === 200) {
        console.log(" Update successful");
        toast.success(res?.message);
        updateLoggedUserData(res?.data);
        setIsEditing(false);
        getUserData();
        setLoadingUpdate(false)
      }

    } catch (err) {
      console.log("Update error:", err);
      toast.error(err?.message);
       setLoadingUpdate(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="dashboard-container">
          <ProfileSidebar title={"Profile"} />

          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                <h1 className="h3-big fw-bold">Personal Information</h1>
                <p>Manage your account details and personal information</p>
              </div>
              {/* <div className="credit-score">
                <span className="score">782</span>
                <span className="label">Credit Score</span>
              </div> */}
              <button className="edit-btn" onClick={toggleEdit}>
                <i className={`fas ${isEditing ? "fa-times" : "fa-edit"}`}></i>{" "}
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <div className="main-content">
              <div className="section" style={{ textAlign: "start" }}>
                

                {/* <div className="profile-picture">
                  <label
                    htmlFor="profilePicUpload"
                    className="profile-pic-wrapper"
                  >
                    {profilePic ? (
                      <img
                        src={profilePic}
                        alt="Profile Photo"
                        className="profile-pic"
                      />
                    ) : (
                      <i className="fas fa-user-circle default-pic"></i>
                    )}
                  </label>
                  {isEditing && (
                    <input
                      type="file"
                      id="profilePicUpload"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  )}
                  <label className="profile-label">Profile Picture</label>
                </div> */}

               <div className="profile-picture">
  <div className="profile-pic-wrapper">
    {profilePic ? (
      <img src={profilePic} alt="Profile Photo" className="profile-pic" />
    ) : (
      <i className="fas fa-user-circle default-pic"></i>
    )}

    <div className="profile-pic-overlay">
      <div className="icon-btn" onClick={() => setShowPreview(true)}>
        <FaEye />
      </div>
      {isEditing && (
    <div className="icon-btn" onClick={() => fileInputRef.current?.click()}>
      <FaEdit />
    </div>
  )}
    </div>
  </div>

  {/* Hidden Input */}
  {isEditing && (
    <input
      ref={fileInputRef}
      type="file"
      id="profilePicUpload"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageChange}
    />
  )}

  <label className="profile-label">Profile Picture</label>
</div>


{showPreview && profilePic && (
  <div className="modal-backdrop" onClick={() => setShowPreview(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={profilePic} alt="Preview" className="modal-image" />
      <button className="close-btn" onClick={() => setShowPreview(false)}>
        ✖
      </button>
    </div>
  </div>
)}

                {/* <hr></hr> */}

                <div className="info-grid">
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <label for="">First Name</label>
                      {isEditing ? (
                        <>
                          <input
                            ref={firstNameRef}
                            className="info-input"
                            type="text"
                            value={formData?.firstName}
                            name="firstName"
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        <div className="info-value">{formData?.firstName}</div>
                      )}
                    </div>
                    {errors.firstName && (
                      <small className="text-danger">{errors.firstName}</small>
                    )}
                  </div>

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-id-card"></i>
                      </div>
                      <label for="">Last Name</label>
                      {isEditing ? (
                        <>
                          <input
                            ref={lastNameRef}
                            type="text"
                            name="lastName"
                            className="info-input"
                            value={formData?.lastName}
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        <div className="info-value">{formData?.lastName}</div>
                      )}
                    </div>
                    {errors.lastName && (
                      <small className="text-danger">{errors.lastName}</small>
                    )}
                  </div>

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        {!isEditing && <i className="fas fa-mobile-alt"></i>}
                      </div>
                      <label for="">Mobile Number</label>
                      {isEditing ? (
                        <div ref={phoneRef}>
                          {/* <input
                          type="text"
                          name="phone"
                          className="info-input"
                          value={formData?.phone}
                          onChange={handleChange}
                           maxLength={10}
  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                        /> */}

                          <CountryPhoneInput
                            value={{
                              countryCode: formData?.countryCode || "+91",
                              phone: formData?.phone || "",
                            }}
                            onChange={(val) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: val.phone,
                                countryCode: val.countryCode,
                              }))
                            }
                          />
                        </div>
                      ) : (
                        <div className="info-value">
                          {formData?.countryCode} {formData?.phone}
                        </div>
                      )}
                    </div>
                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <label for="">Email</label>
                      {isEditing ? (
                        <>
                          <input
                             ref={emailRef}
                            type="email"
                            name="email"
                            className="info-input"
                            value={formData?.email}
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        <div className="info-value">{formData?.email}</div>
                      )}
                    </div>

                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-id-card"></i>
                      </div>
                      <label for="">Aadhar Number</label>
                      {isEditing ? (
                        <input
                           ref={aadharRef}
                          type="text"
                          name="aadharNumber"
                          className="info-input"
                          value={formData?.aadharNumber}
                          onChange={handleChange}
                          maxLength={12}
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ))
                          }
                        />
                      ) : (
                        <div className="info-value">
                          {formData?.aadharNumber}
                        </div>
                      )}
                    </div>
                    {errors.aadharNumber && (
                      <small className="text-danger">
                        {errors.aadharNumber}
                      </small>
                    )}
                  </div>
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-address-card"></i>
                      </div>
                      <label for="">PAN Number</label>
                      {isEditing ? (
                        <input
                          ref={panRef}
                          type="text"
                          className="info-input"
                          name="panNumber"
                          value={formData?.panNumber}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData?.panNumber}</div>
                      )}
                    </div>
                    {errors.panNumber && (
                      <small className="text-danger">{errors.panNumber}</small>
                    )}
                  </div>

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-user-friends"></i>
                      </div>
                      <label htmlFor="gender">Gender</label>
                      {isEditing ? (
                        <select
                          className="info-input"
                          name="gender"
                          value={formData?.gender || ""}
                          onChange={handleChange}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      ) : (
                        <div className="info-value">{formData?.gender}</div>
                      )}
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-calendar"></i>
                      </div>
                      <label for="">Date of Birth</label>
                      {isEditing ? (
                        <input
                          type="date"
                          name="dob"
                          className="info-input"
                          value={formData?.dob}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData?.dob}</div>
                      )}
                    </div>
                  </div>

                 

                    {/* <div className="info-item">
                    <div className="input-with-icon">
                   
                      {isEditing ? (
                          <>
                           <div className="input-icon" style={{top:"30%"}}>
                        <i class="fa-solid fa-house-user"></i>
                      </div>
                      <label for="">Address</label>

                        <textarea
                        rows={2}
                          type="text"
                          name="address"
                          className="info-input"
                          value={formData?.address}
                          onChange={handleChange}
                        
                        />
                        </>
                      ) : (
                        <>
                           <div className="input-icon">
                        <i class="fa-solid fa-house-user"></i>
                      </div>
                      <label for="">Address</label>
                        <div className="info-value">{formData?.address}</div>
                        </>
                      )}
                    </div>
                    
                  </div>


                   <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <label for="">Pincode</label>
                      {isEditing ? (
                        <input
                          ref={pincodeRef}
                          type="text"
                          name="pincode"
                          className="info-input"
                          value={formData?.pincode}
                          onChange={handleChange}
                          maxLength={6}
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ))
                          }
                        />
                      ) : (
                        <div className="info-value">{formData?.pincode}</div>
                      )}
                    </div>
                    {errors.pincode && (
                      <small className="text-danger">{errors.pincode}</small>
                    )}
                  </div> */}
                </div>
                
                 <h5 className="mt-5 mb-4">Address details</h5>
                  <div className="info-grid">

                    {/* address textarea */}
                      {/* <div className="info-item">
                    <div className="input-with-icon">
                   
                      {isEditing ? (
                          <>
                           <div className="input-icon" style={{top:"30%"}}>
                        <i class="fa-solid fa-house-user"></i>
                      </div>
                      <label for="">Address</label>

                        <textarea
                        rows={2}
                          type="text"
                          name="address"
                          className="info-input"
                          value={formData?.address}
                          onChange={handleChange}
                        
                        />
                        </>
                      ) : (
                        <>
                           <div className="input-icon">
                        <i class="fa-solid fa-house-user"></i>
                      </div>
                      <label for="">Address</label>
                        <div className="info-value">{formData?.address}</div>
                        </>
                      )}
                    </div>
                    
                  </div> */}

                    

                  {/* address input */}
                   
                    <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fa-solid fa-house-user"></i>
                      </div>
                      <label for="">Address</label>
                      {isEditing ? (
                        <input
                          ref={pincodeRef}
                          type="text"
                          name="address"
                          className="info-input"
                          value={formData?.address}
                          onChange={handleChange}
                         
                        />
                      ) : (
                        <div className="info-value">{formData?.address}</div>
                      )}
                    </div>
                   
                  </div>
                  

                   <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fa-solid fa-map-pin"></i>
                      </div>
                      <label for="">Address Landmark</label>
                      {isEditing ? (
                        <input
                        
                          type="text"
                          name="landmark"
                          className="info-input"
                           value={formData?.landmark}
                          onChange={handleChange}
                         
                        />
                      ) : (
                        <div className="info-value">{formData?.landmark}</div>
                      )}
                    </div>
                   
                  </div>

                   

                     {/* <div className="info-item">
                    <div className="input-with-icon">
                   
                      {isEditing ? (
                          <>
                           <div className="input-icon" style={{top:"30%"}}>
                        <i class="fa-solid fa-flag"></i>
                      </div>
                      <label for="">State</label>

                        <input
                       
                          type="text"
                          name="address"
                          className="info-input"
                          // value={formData?.address}
                          onChange={handleChange}
                        
                        />
                        </>
                      ) : (
                        <>
                           <div className="input-icon">
                        <i class="fa-solid fa-flag"></i>
                      </div>
                      <label for="">State</label>
                        <div className="info-value"></div>
                        </>
                      )}
                    </div>
                    
                  </div> */}


                    <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                       <i class="fa-solid fa-flag"></i>
                      </div>
                      <label for="">State</label>
                      {isEditing ? (
                        <input
                          
                          type="text"
                          name="state"
                          className="info-input"
                          value={formData?.state}
                          onChange={handleChange}
                        
                        />
                      ) : (
                        <div className="info-value">{formData?.state}</div>
                      )}
                    </div>
                   
                  </div>

                   <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                       <i class="fa-solid fa-city"></i>
                      </div>
                      <label for="">City</label>
                      {isEditing ? (
                        <input
                         
                          type="text"
                           name="city"
                          className="info-input"
                          value={formData?.city}
                          onChange={handleChange}
                        
                        />
                      ) : (
                        <div className="info-value">{formData?.city}</div>
                      )}
                    </div>
                   
                  </div>

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fa-solid fa-mail-bulk"></i>
                      </div>
                      <label for="">Pincode</label>
                      {isEditing ? (
                        <input
                          ref={pincodeRef}
                          type="text"
                          name="pincode"
                          className="info-input"
                          value={formData?.pincode}
                          onChange={handleChange}
                          maxLength={6}
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ))
                          }
                        />
                      ) : (
                        <div className="info-value">{formData?.pincode}</div>
                      )}
                    </div>
                    {errors.pincode && (
                      <small className="text-danger">{errors.pincode}</small>
                    )}
                  </div>


                <div className="info-item">
  <div className="input-with-icon">
    <div className="input-icon">
      <i className="fa-solid fa-building"></i>
    </div>
    <label htmlFor="residenceType">Residence Type</label>
    {isEditing ? (
      <select
        name="residenceType"
        className="info-input"
        value={formData?.residenceType || ""}
        onChange={handleChange}
      >
        <option value="">Select Residence Type</option>
        <option value="owned">Owned</option>
        <option value="rented">Rented</option>
        <option value="company">Company Provided</option>
        <option value="other">Other</option>
      </select>
    ) : (
      <div className="info-value">{formData?.residenceType}</div>
    )}
  </div>
  {/* {errors.residenceType && (
    <small className="text-danger">{errors.residenceType}</small>
  )} */}
</div>

                  </div>

                <h5 className="mt-5 mb-4">Employment details</h5>

                <div className="info-grid">
                  {/* Employment Type */}
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-briefcase"></i>
                      </div>
                      <label htmlFor="employementType">Employment Type</label>
                      {isEditing ? (
                        <select
                          name="employementType"
                          className="info-input"
                          value={formData?.employementType || ""}
                          onChange={handleChange}
                        >
                          <option value="">Select Employment Type</option>
                          <option value="private sector">Private Sector</option>
                          <option value="goverment sector">Goverment Sector</option>
                          <option value="self employed">Self-Employed</option>
                          <option value="Freelancer / independent contractor">Freelancer / Independent Contractor</option>
                          <option value="daily wage / labour worker">Daily Wage / Labour Worker</option>
                          
                        </select>
                      ) : (
                        <div className="info-value">
                          {formData?.employementType}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Monthly Income */}
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-wallet"></i>
                      </div>
                      <label htmlFor="">Monthly Income</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="monthlyIncome"
                          className="info-input"
                          value={formData?.monthlyIncome || ""}
                          onChange={handleChange}
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ))
                          }
                        />
                      ) : (
                        <div className="info-value">
                          {formData?.monthlyIncome}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Annual Income */}
                  {/* <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-money-bill-wave"></i>
                      </div>
                      <label htmlFor="">Annual Income</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="annualIncome"
                          className="info-input"
                          value={formData?.annualIncome || ""}
                          onChange={handleChange}
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            ))
                          }
                        />
                      ) : (
                        <div className="info-value">
                          {formData?.annualIncome}
                        </div>
                      )}
                    </div>
                  </div> */}

                  {/* Current Company */}
                  {/* <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-building"></i>
                      </div>
                      <label htmlFor="">Current Company</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="currentCompany"
                          className="info-input"
                          value={formData?.currentCompany || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">
                          {formData?.currentCompany}
                        </div>
                      )}
                    </div>
                  </div> */}

                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-building"></i>
                      </div>
                      <label htmlFor="">Salary Date</label>
                      {isEditing ? (
                        <input
                          type="date"
                          name="salaryDate"
                          className="info-input"
                          value={formData?.salaryDate || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">
                          {formData?.salaryDate}
                        </div>
                      )}
                    </div>
                  </div> 

                  {/* Residence City */}
                  {/* <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fa-solid fa-city"></i>
                      </div>
                      <label htmlFor="">Residence City</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="residenceCity"
                          className="info-input"
                          value={formData?.residenceCity || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">
                          {formData?.residenceCity}
                        </div>
                      )}
                    </div>
                  </div> */}

                  {/* Salary Bank */}
                  {/* <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-university"></i>
                      </div>
                      <label htmlFor="">Salary Bank</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="salaryBank"
                          className="info-input"
                          value={formData?.salaryBank || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData?.salaryBank}</div>
                      )}
                    </div>
                  </div> */}
                  <div className="info-item">
                    <div className="input-with-icon">
                      <div className="input-icon">
                        <i className="fas fa-university"></i>
                      </div>
                      <label htmlFor="">Salary Mode</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="salaryType"
                          className="info-input"
                          value={formData?.salaryType || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="info-value">{formData?.salaryType}</div>
                      )}
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div
                    className="save-btn-wrapper"
                    style={{ marginTop: "20px", textAlign: "end" }}
                  >
                    <button
                      className="save-btn text-center"
                      onClick={handleUpdate}
                      style={{ marginTop: "6px", width: "200px" }}
                    >
                      
                       {loadingUpdate ? (
  <FaSpinner className="spin"  />
) : (
  <>
    <i className="fas fa-save"></i> Save Changes
  </>
)}

                    </button>
                  </div>
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

export default page;
