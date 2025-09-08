import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

//signup

export const signupServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/sign-up",formData );
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};

//login with password

export const loginServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/password-login", formData );
    return response.data;
  } catch (error) {
    console.error("login Error:", error);
    throw error;
  }
};

//login with otp

export const loginWithOtpServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/login-with-otp", formData );
    return response.data;
  } catch (error) {
    console.error("login Error:", error);
    throw error;
  }
};

//login with otp

export const verifyOtpServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/otp-verification", formData );
    return response.data;
  } catch (error) {
    console.error("login Error:", error);
    throw error;
  }
};


 
//resend otp 

export const resendOtpServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "user/resend-otp", formData );
    return response.data;
  } catch (error) {
    console.error("resend Error:", error);
    throw error;
  }
};

 

