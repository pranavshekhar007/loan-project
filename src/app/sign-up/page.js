// "use client";

// import { useState  , useRef , useContext} from "react";
// import { FaEnvelope, FaLock, FaPhone, FaUser, FaMapMarkerAlt, FaEye, FaSignInAlt, FaUserPlus } from "react-icons/fa";
// import Navbar from "../Components/Navbar";
// import { loginServ, loginWithOtpServ, resendOtpServ, signupServ, verifyOtpServ } from "../services/authentication.service";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import { FaSpinner } from "react-icons/fa";
// import { LoggedDataContext } from "../context/Context";
// import Footer from "../Components/Footer";
// import CountryPhoneInput from "../Components/CountryPhoneInput";


// export default function AuthPage() {
   
//   const router = useRouter();
//     const { updateLoggedUserData } = useContext(LoggedDataContext);

//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);
//   const [authMode, setAuthMode] = useState("password"); // "password" | "otp"
//   const [showPassword, setShowPassword] = useState(false);
//   const [showSignInPassword, setShowSignInPassword] = useState(false);

//   const [loadingSignUp, setLoadingSignUp] = useState(false);
// const [loadingSignIn, setLoadingSignIn] = useState(false);
// const [loadingSendOtp, setLoadingSendOtp] = useState(false);
// const [loadingResendOtp, setLoadingResendOtp] = useState(false);

  

//   // OTP inputs state
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const inputRefs = useRef([]);

//   const handleOtpChange = (index, value) => {
//     if (/^[0-9]?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       setLoginOtpFormData((prev) => ({
//       ...prev,
//       otp: newOtp,
//     }));

//      if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//     }
//   };

//   const handleOtpKeyDown = (index, e) => {
//   if (e.key === "Backspace" && !otp[index] && index > 0) {
//     inputRefs.current[index - 1].focus();
//   }
// };

// const [rememberMe, setRememberMe] = useState(false);


//   //signup

//    const [signUpFormData, setSignUpFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     pincode: "",
//   });

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//    const handleSignUpSubmit =  async (e) => {
//     e.preventDefault();
//     console.log("Sign Up Data:", signUpFormData);
//       setLoadingSignUp(true);
//     try{
//        const res = await signupServ(signUpFormData);
//       if(res?.statusCode == 200){
//          console.log("signup successfully" , res);
       
//           sessionStorage.setItem("signupPhone", signUpFormData.phone);
//          toast.success(res?.message);
//           router.push("/otp-verify");
//       } 
//     }catch(err){
//         console.log("signup failed" , err)
//         toast.error(err?.response?.data?.message)
//     }finally {
//     setLoadingSignUp(false); 
//   }
//   };

//   //login with password

//    const [loginFormData, setLoginFormData] = useState({
//       email: "",
//     password: "",

//   });

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//      setLoginFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleLoginSubmit = async (e) => {
//   e.preventDefault();
//   console.log("Login Data:", loginFormData);
//     setLoadingSignIn(true);
//    try{ 
//        const res = await loginServ(loginFormData);
//       if (res?.statusCode == 200){
//          console.log("login successfully" , res);
//        updateLoggedUserData(res?.data, rememberMe);
//          toast.success(res?.message);
//          router.push("/");
//       } 
//     }catch(err){
//         console.log("login failed" , err)
//         toast.error(err?.response?.data?.message)
//     }finally {
//     setLoadingSignIn(false); 
//   }

//   }

//     // login with otp

//      const [loginOtpFormData, setLoginOtpFormData] = useState({
//     phone: "",
//     otp: otp,
//   });

//   const handleLoginOtpChange = (e) => {
//     const { name, value } = e.target;
//      setLoginOtpFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSendOtp = async (e) => {
//   e.preventDefault();
//   console.log("Send OTP Request" , loginOtpFormData?.phone);
//      setLoadingSendOtp(true);
//     try{
//        const res = await loginWithOtpServ({phone: loginOtpFormData?.phone});
//       if (res?.statusCode == 200){
//          console.log("login successfully" , res);
//          toast.success(res?.message)
//       } 
//     }catch(err){
//         console.log("login failed" , err)
//         toast.error(err?.response?.data?.message)
//     }finally {
//     setLoadingSendOtp(false); 
//   }

//   }

//   const handleLoginOtpSubmit = async (e) => {
//   e.preventDefault();
//   console.log("Login OTP Data:", loginOtpFormData);

//    const payload = {
//     phone: loginOtpFormData.phone,
//     otp: loginOtpFormData.otp.join("") 
//   };
//     setLoadingSignIn(true);
//    try{
//        const res = await verifyOtpServ(payload);
//       if (res?.statusCode == 200){
//          console.log("login successfully" , res);
//         updateLoggedUserData(res?.data, rememberMe);
//          toast.success(res?.message);
//          router.push("/")
//       } 
//     }catch(err){
//         console.log("login failed" , err)
//         toast.error(err?.response?.data?.message)
//     }finally {
//     setLoadingSignIn(false); 
//   }
//   }

//   //resend otp 


//   const handleResendOtp = async (e) => {
//   e.preventDefault();

//    if (!loginOtpFormData?.phone) {
//     toast.error("Please enter your phone number first");
//     return; 
//   }
//     setLoadingResendOtp(true);
    
//     try{
//        const res = await resendOtpServ({phone: loginOtpFormData?.phone});
//       if (res?.statusCode == 200){
//          console.log("login successfully" , res);
//          toast.success(res?.message)
//       } 
//     }catch(err){
//         console.log("login failed" , err)
//         toast.error(err?.response?.data?.message)
//     }finally {
//     setLoadingResendOtp(false); 
//   }
  
//   }





//   return (
//     <>
//     <Navbar/>
//      <section className="loginform">
//       <div
//         className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
//         id="container"
//       >
//         {/* Mobile Toggle Buttons */}
//         <button
//           className="mobile-form-toggle signin"
//           onClick={() => setIsRightPanelActive(false)}
//         >
//           <FaSignInAlt />
//         </button>
//         <button
//           className="mobile-form-toggle signup"
//           onClick={() => setIsRightPanelActive(true)}
//         >
//           <FaUserPlus />
//         </button>

//         {/* Sign Up */}
//         <div className="form-container sign-up-container">
//           <form onSubmit={handleSignUpSubmit}>
//             <h1>Create Account</h1>
//             <span>Join our community today</span>

//             {/* First Name + Last Name */}
//             <div className="form-row">
//               <div className="form-col">
//                 <div className="form-group">
//                   <FaUser className="form-icon" />
//                   <input type="text" placeholder="First Name" 
//                     name="firstName"
//                     value={signUpFormData.firstName}
//                     onChange={handleSignUpChange} required />
//                 </div>
//               </div>
//               <div className="form-col">
//                 <div className="form-group">
//                   <FaUser className="form-icon" />
//                   <input type="text" placeholder="Last Name"
//                     name="lastName"
//                    value={signUpFormData.lastName}
//                     onChange={handleSignUpChange} required />
//                 </div>
//               </div>
//             </div>

//             {/* Email + Phone */}
//             <div className="form-row">
//               <div className="form-col">
//                 <div className="form-group">
//                   <FaEnvelope className="form-icon" />
//                   <input type="email" placeholder="Email Address"
//                    name="email"
//                    value={signUpFormData.email}
//                     onChange={handleSignUpChange} required />
//                 </div>
//               </div>
//               <div className="form-col">
//                 <div className="form-group">
//                   {/* <FaPhone className="form-icon phone-icon" />
//                   <input type="tel" placeholder="Phone Number"
//                     name="phone"
//                    value={signUpFormData.phone}
//                     onChange={handleSignUpChange} required /> */}
//                      <CountryPhoneInput
//                 value={signUpFormData.phone}
//                 onChange={(value) =>
//     setSignUpFormData((prev) => ({ ...prev, phone: value }))
//   } required
//               />
                    
//                 </div>
//               </div>
//             </div>

//             {/* Password + Pincode */}
//             <div className="form-row">
//               <div className="form-col">
//                 <div className="form-group">
//                   <FaLock className="form-icon" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     required
//                       name="password"
//                       value={signUpFormData.password}
//                     onChange={handleSignUpChange}
//                   />
//                   <FaEye
//                     className="password-toggle"
//                     onClick={() => setShowPassword(!showPassword)}
//                   />
//                 </div>
//               </div>
//               <div className="form-col">
//                 <div className="form-group">
//                   <FaMapMarkerAlt className="form-icon" />
//                   <input type="text" placeholder="Pincode" name="pincode"
//                       value={signUpFormData.pincode}
//                     onChange={handleSignUpChange} required />
//                 </div>
//               </div>
//             </div>

//             <button type="submit">{loadingSignUp ? <FaSpinner className="spin" /> : "Sign Up"}
// </button>

//             {/* Mobile switch link */}
//             <a
//               href="#"
//               className="form-switch-link"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsRightPanelActive(false);
//               }}
//             >
//               Already have an account? Sign In
//             </a>
//           </form>
//         </div>

//         {/* Sign In */}
//         <div className="form-container sign-in-container">
//           <form  onSubmit={
//       authMode === "password" ? handleLoginSubmit : handleLoginOtpSubmit
//     }>
//             <h1>Sign In</h1>
//             <span>Access your account</span>

//             {/* Auth Toggle */}
//             <div className="auth-toggle">
//               <button
//                 type="button"
//                 className={`auth-toggle-btn ${authMode === "password" ? "active" : ""}`}
//                 onClick={() => setAuthMode("password")}
//               >
//                 Password
//               </button>
//               <button
//                 type="button"
//                 className={`auth-toggle-btn ${authMode === "otp" ? "active" : ""}`}
//                 onClick={() => setAuthMode("otp")}
//               >
//                 OTP
//               </button>
//             </div>

//             {authMode === "password" ? (
//               <>
//                 <div className="form-group">
//                   <FaEnvelope className="form-icon" />
//                   <input type="email" placeholder="Email Address" required name="email" value={loginFormData?.email} onChange={handleLoginChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <FaLock className="form-icon" />
//                   <input
//                     type={showSignInPassword ? "text" : "password"}
//                     placeholder="Password"
//                     required
//                     name="password"
//                     value={loginFormData?.password}
//                     onChange={handleLoginChange}
                   
//                   />
//                   <FaEye
//                     className="password-toggle"
//                     onClick={() => setShowSignInPassword(!showSignInPassword)}
//                   />
//                 </div>
//                 <div className="form-footer">
//                   <label className="remember-me">
//                     <input type="checkbox"  checked={rememberMe}
//     onChange={(e) => setRememberMe(e.target.checked)}/> Remember me
//                   </label>
//                   {/* <a href="#" className="forgot-password">
//                     Forgot password?
//                   </a> */}
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="form-group">
//                   <FaPhone className="form-icon phone-icon" />
//                   <input type="tel" placeholder="Phone Number" required  name="phone" value={loginOtpFormData?.phone} onChange={handleLoginOtpChange}/>
//                 </div>
//                 <button type="submit" className="otp" onClick={handleSendOtp} >{loadingSendOtp ? <FaSpinner className="spin" /> : "Send Otp"}
//                  </button>

//                 <div className="otp-inputs">
//                   {otp.map((digit, i) => (
//                     <input
//                       key={i}
//                       type="text"
//                       className="otp-input"
//                       maxLength="1"
//                       value={digit}
//                       onChange={(e) => handleOtpChange(i, e.target.value)}
//                        ref={(el) => (inputRefs.current[i] = el)}
//                         onKeyDown={(e) => handleOtpKeyDown(i, e)}
//                     />
//                   ))}
//                 </div>
//                 <div className="otp-note">
//                   We’ll send an OTP to your phone number{" "}
//                   <a onClick={handleResendOtp} className="resend-otp">
//                    {loadingResendOtp ? <FaSpinner className="spin" /> : "Resend Otp"}
//                   </a>
//                 </div>
//               </>
//             )}

//             <button type="submit">{loadingSignIn ? <FaSpinner className="spin" /> : "Sign In"}
// </button>

//             <a
//               href="#"
//               className="form-switch-link"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsRightPanelActive(true);
//               }}
//             >
//               Don’t have an account? Sign Up
//             </a>
//           </form>
//         </div>

//         {/* Overlay */}
//         <div className="overlay-container">
//           <div className="overlay">
//             {/* Left Overlay */}
//             <div className="overlay-panel overlay-left">
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/people-get-instant-personal-bank-loan-and-using-special-financial-credit-program-for-secure-finance-investment-illustration-svg-png-download-7898140.png"
//                 alt="Finance Secure"
//                 width={200}
//                 height={200}
//                 className="overlay-gif"
//               />
//               <h1>Welcome Back to Rupee Loan!</h1>
//               <p>Log in to check your active loans, EMI schedules and offers.</p>
//               <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
//                 Sign In
//               </button>
//             </div>

//             {/* Right Overlay */}
//             <div className="overlay-panel overlay-right">
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/business-person-taking-business-loan-7771593-6247705.png"
//                 alt="Get Loan"
//                 width={200}
//                 height={200}
//                 className="overlay-gif"
//               />
//               <h1>Need Quick Cash?</h1>
//               <p>Sign up with Rupee Loan to apply for instant loans and track repayments.</p>
//               <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </section>
//     <Footer/>
//     </>
   
//   );
// }


// after removing the login with password

"use client";

import { useState  , useRef , useContext} from "react";
import { FaEnvelope, FaLock, FaPhone, FaUser, FaMapMarkerAlt, FaEye, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { loginServ, loginWithOtpServ, resendOtpServ, signupServ, verifyOtpServ } from "../services/authentication.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { LoggedDataContext } from "../context/Context";
import Footer from "../Components/Footer";
import CountryPhoneInput from "../Components/CountryPhoneInput";


export default function AuthPage() {
   
  const router = useRouter();
    const { updateLoggedUserData } = useContext(LoggedDataContext);

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [authMode, setAuthMode] = useState("password"); // "password" | "otp"
  const [showPassword, setShowPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  const [loadingSignUp, setLoadingSignUp] = useState(false);
const [loadingSignIn, setLoadingSignIn] = useState(false);
const [loadingSendOtp, setLoadingSendOtp] = useState(false);
const [loadingResendOtp, setLoadingResendOtp] = useState(false);

  

  // OTP inputs state
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      setLoginOtpFormData((prev) => ({
      ...prev,
      otp: newOtp,
    }));

     if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    }
  };

  const handleOtpKeyDown = (index, e) => {
  if (e.key === "Backspace" && !otp[index] && index > 0) {
    inputRefs.current[index - 1].focus();
  }
};

const [rememberMe, setRememberMe] = useState(true);


  //signup

   const [signUpFormData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
     countryCode: "",
    phone: "",
    password: "",
    pincode: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSignUpSubmit =  async (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpFormData);
      setLoadingSignUp(true);
    try{
       const res = await signupServ(signUpFormData);
      if(res?.statusCode == 200){
         console.log("signup successfully" , res);
       
          sessionStorage.setItem("signupPhone", signUpFormData.phone);
         toast.success(res?.message);
          router.push("/otp-verify");
      } 
    }catch(err){
        console.log("signup failed" , err)
        toast.error(err?.response?.data?.message)
    }finally {
    setLoadingSignUp(false); 
  }
  };

  //login with password

   const [loginFormData, setLoginFormData] = useState({
      email: "",
    password: "",

  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
     setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
  e.preventDefault();
  console.log("Login Data:", loginFormData);
    setLoadingSignIn(true);
   try{ 
       const res = await loginServ(loginFormData);
      if (res?.statusCode == 200){
         console.log("login successfully" , res);
       updateLoggedUserData(res?.data, rememberMe);
         toast.success(res?.message);
         router.push("/");
      } 
    }catch(err){
        console.log("login failed" , err)
        toast.error(err?.response?.data?.message)
    }finally {
    setLoadingSignIn(false); 
  }

  }

    // login with otp

     const [loginOtpFormData, setLoginOtpFormData] = useState({
    phone: "",
    countryCode: "IN",
    otp: otp,
  });

  const handleLoginOtpChange = (e) => {
    const { name, value } = e.target;
     setLoginOtpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [phone, setPhone] = useState("");

  const handleSendOtp = async (e) => {

     if (!loginOtpFormData?.phone) {
    toast.error("Please enter your phone number");
    return;
  }
  if (!/^[6-9]\d{9}$/.test(loginOtpFormData?.phone)) {
    toast.error("Please enter a valid 10-digit phone number");
    return;
  }
  e.preventDefault();
  console.log("Send OTP Request" , loginOtpFormData?.phone);
     setLoadingSendOtp(true);
    try{
       const res = await loginWithOtpServ({
          phone: loginOtpFormData?.phone,
      countryCode: loginOtpFormData?.countryCode,
      });
      if (res?.statusCode == 200){
         console.log("login successfully" , res);
         toast.success(res?.message)
      } 
    }catch(err){
        console.log("login failed" , err)
        toast.error(err?.response?.data?.message)
    }finally {
    setLoadingSendOtp(false); 
  }

  }

  const handleLoginOtpSubmit = async (e) => {
      e.preventDefault();
    const otpValue = otp.join("");


  


  e.preventDefault();
  console.log("Login OTP Data:", loginOtpFormData);

   const payload = {
    phone: loginOtpFormData.phone,
     countryCode: loginOtpFormData.countryCode,
    otp: loginOtpFormData.otp.join("") 
  };
  // ✅ Validation
  if (!payload?.phone) {
    toast.error("Phone number is missing. Please try again.");
    return;
  }
  if (!/^[6-9]\d{9}$/.test(payload?.phone)) {
    toast.error("Please enter a valid 10-digit phone number");
    return;
  }
  if (otpValue.length !== 4) {
    toast.error("Please enter a valid 4-digit OTP");
    return;
  }
    setLoadingSignIn(true);
   try{
       const res = await verifyOtpServ(payload);
      if (res?.statusCode == 200){
         console.log("login successfully" , res);
        updateLoggedUserData(res?.data, rememberMe);
         toast.success(res?.message);
         router.push("/")
      } 
    }catch(err){
        console.log("login failed" , err)
        toast.error(err?.response?.data?.message)
    }finally {
    setLoadingSignIn(false); 
  }
  }

  //resend otp 


  const handleResendOtp = async (e) => {
  e.preventDefault();

   if (!loginOtpFormData?.phone) {
    toast.error("Please enter your phone number first");
    return; 
  }
    setLoadingResendOtp(true);
    
    try{
       const res = await resendOtpServ({phone: loginOtpFormData?.phone});
      if (res?.statusCode == 200){
         console.log("login successfully" , res);
         toast.success(res?.message)
      } 
    }catch(err){
        console.log("login failed" , err)
        toast.error(err?.response?.data?.message)
    }finally {
    setLoadingResendOtp(false); 
  }
  
  }





  return (
    <>
    <Navbar/>
     <section className="loginform" style={{minHeight:"90vh"}}>
      <div
        className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
        id="container" style={{minHeight:"81vh"}}
      >
        {/* Mobile Toggle Buttons */}
        <button
          className="mobile-form-toggle signin"
          onClick={() => setIsRightPanelActive(false)}
        >
          <FaSignInAlt />
        </button>
        <button
          className="mobile-form-toggle signup"
          onClick={() => setIsRightPanelActive(true)}
        >
          <FaUserPlus />
        </button>

        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <span>Join our community today</span>

            {/* First Name + Last Name */}
            <div className="form-row">
              <div className="form-col">
                <div className="form-group">
                  <FaUser className="form-icon" />
                  <input type="text" placeholder="First Name" 
                    name="firstName"
                    value={signUpFormData.firstName}
                    onChange={handleSignUpChange} required />
                </div>
              </div>
              <div className="form-col">
                <div className="form-group">
                  <FaUser className="form-icon" />
                  <input type="text" placeholder="Last Name"
                    name="lastName"
                   value={signUpFormData.lastName}
                    onChange={handleSignUpChange} required />
                </div>
              </div>
            </div>

            {/* Email + Phone */}
            <div className="form-row">
              <div className="form-col">
                <div className="form-group">
                  <FaEnvelope className="form-icon" />
                  <input type="email" placeholder="Email Address"
                   name="email"
                   value={signUpFormData.email}
                    onChange={handleSignUpChange} required />
                </div>
              </div>
              <div className="form-col">
                <div className="form-group">
                  {/* <FaPhone className="form-icon phone-icon" />
                  <input type="tel" placeholder="Phone Number"
                    name="phone"
                   value={signUpFormData.phone}
                    onChange={handleSignUpChange} required /> */}
                  <CountryPhoneInput
  value={{ phone: signUpFormData.phone, countryCode: signUpFormData.countryCode }}
  onChange={(val) =>
    setSignUpFormData((prev) => ({
      ...prev,
      phone: val.phone,
      countryCode: val.countryCode,
    }))
  }
  required
/>

                    
                </div>
              </div>
            </div>

            {/* Password + Pincode */}
            <div className="form-row">
              <div className="form-col">
                <div className="form-group">
                  <FaLock className="form-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                      name="password"
                      value={signUpFormData.password}
                    onChange={handleSignUpChange}
                  />
                  <FaEye
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              <div className="form-col">
                <div className="form-group">
                  <FaMapMarkerAlt className="form-icon" />
                  <input type="text" placeholder="Pincode" name="pincode"
                      value={signUpFormData.pincode}
                    onChange={handleSignUpChange} required />
                </div>
              </div>
            </div>

            <button type="submit">{loadingSignUp ? <FaSpinner className="spin" /> : "Sign Up"}
</button>

            {/* Mobile switch link */}
            <a
              href="#"
              className="form-switch-link"
              onClick={(e) => {
                e.preventDefault();
                setIsRightPanelActive(false);
              }}
            >
              Already have an account? Sign In
            </a>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form  onSubmit={ handleLoginOtpSubmit }>
            <h1>Sign In</h1>
            <span>Access your account</span>

            {/* Auth Toggle */}
            {/* <div className="auth-toggle">
              <button
                type="button"
                className={`auth-toggle-btn ${authMode === "password" ? "active" : ""}`}
                onClick={() => setAuthMode("password")}
              >
                Password
              </button>
              <button
                type="button"
                className={`auth-toggle-btn ${authMode === "otp" ? "active" : ""}`}
                onClick={() => setAuthMode("otp")}
              >
                OTP
              </button>
            </div> */}

          
              
                {/* <div className="form-group">
                  <FaPhone className="form-icon phone-icon" />
                  <input type="tel" 
                  placeholder="Phone Number" 
                  required  name="phone" 
                  value={loginOtpFormData?.phone} 
                  onChange={handleLoginOtpChange}/>
                </div> */}

                <div className="form-group">
  <CountryPhoneInput
    value={{
      phone: loginOtpFormData.phone,
      countryCode: loginOtpFormData.countryCode,
    }}
    onChange={({ phone, countryCode }) =>
      setLoginOtpFormData((prev) => ({
        ...prev,
        phone,
        countryCode,
      }))
    }
    required
  />
</div>

                <button type="submit" className="otp" onClick={handleSendOtp} >{loadingSendOtp ? <FaSpinner className="spin" /> : "Send OTP"}
                 </button>

                <div className="otp-inputs">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      className="otp-input"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                       ref={(el) => (inputRefs.current[i] = el)}
                        onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    />
                  ))}
                </div>
                <div className="otp-note">
                  We’ll send an OTP to your phone number{" "}
                  <a onClick={handleResendOtp} className="resend-otp">
                   {loadingResendOtp ? <FaSpinner className="spin" /> : "Resend OTP"}
                  </a>
                </div>
              
          

            <button type="submit">{loadingSignIn ? <FaSpinner className="spin" /> : "Sign In"}
</button>

            <a
              href="#"
              className="form-switch-link"
              onClick={(e) => {
                e.preventDefault();
                setIsRightPanelActive(true);
              }}
            >
              Don’t have an account? Sign Up
            </a>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            {/* Left Overlay */}
            <div className="overlay-panel overlay-left">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/people-get-instant-personal-bank-loan-and-using-special-financial-credit-program-for-secure-finance-investment-illustration-svg-png-download-7898140.png"
                alt="Finance Secure"
                width={200}
                height={200}
                className="overlay-gif"
              />
              <h1>Welcome Back to Rupee Loan!</h1>
              <p>Log in to check your active loans, EMI schedules and offers.</p>
              <button className="ghost signin-change-btn" onClick={() => setIsRightPanelActive(false)}>
                Sign In
              </button>
            </div>

            {/* Right Overlay */}
            <div className="overlay-panel overlay-right">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/business-person-taking-business-loan-7771593-6247705.png"
                alt="Get Loan"
                width={200}
                height={200}
                className="overlay-gif"
              />
              <h1>Need Quick Cash?</h1>
              <p>Sign up with Rupee Loan to apply for instant loans and track repayments.</p>
              <button className="ghost signup-change-btn" onClick={() => setIsRightPanelActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
    <Footer/>
    </>
   
  );
}
