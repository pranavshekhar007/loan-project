"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaPhone, FaUser, FaMapMarkerAlt, FaEye, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function AuthPage() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [authMode, setAuthMode] = useState("password"); // "password" | "otp"
  const [showPassword, setShowPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  // OTP inputs state
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <section className="loginform">
      <div
        className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
        id="container"
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
          <form>
            <h1>Create Account</h1>
            <span>Join our community today</span>

            {/* First Name + Last Name */}
            <div className="form-row">
              <div className="form-col">
                <div className="form-group">
                  <FaUser className="form-icon" />
                  <input type="text" placeholder="First Name" required />
                </div>
              </div>
              <div className="form-col">
                <div className="form-group">
                  <FaUser className="form-icon" />
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
            </div>

            {/* Email + Phone */}
            <div className="form-row">
              <div className="form-col">
                <div className="form-group">
                  <FaEnvelope className="form-icon" />
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-col">
                <div className="form-group">
                  <FaPhone className="form-icon phone-icon" />
                  <input type="tel" placeholder="Phone Number" required />
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
                  <input type="text" placeholder="Pincode" required />
                </div>
              </div>
            </div>

            <button type="submit">Sign Up</button>

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
          <form>
            <h1>Sign In</h1>
            <span>Access your account</span>

            {/* Auth Toggle */}
            <div className="auth-toggle">
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
            </div>

            {authMode === "password" ? (
              <>
                <div className="form-group">
                  <FaEnvelope className="form-icon" />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <FaLock className="form-icon" />
                  <input
                    type={showSignInPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                  />
                  <FaEye
                    className="password-toggle"
                    onClick={() => setShowSignInPassword(!showSignInPassword)}
                  />
                </div>
                <div className="form-footer">
                  <label className="remember-me">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="forgot-password">
                    Forgot password?
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <FaPhone className="form-icon phone-icon" />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <button type="submit" className="otp">Send Otp</button>
                <div className="otp-inputs">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      className="otp-input"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                    />
                  ))}
                </div>
                <div className="otp-note">
                  We’ll send an OTP to your phone number
                  <a href="#" className="resend-otp">
                    Resend OTP
                  </a>
                </div>
              </>
            )}

            <button type="submit">Sign In</button>

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
              <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
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
              <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
