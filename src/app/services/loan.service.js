import axios from "axios";

import { VERCEL_BASE_URL } from "../utils/api_base_url_configration";

//loan list

export const loanListServ = async (formData) => {

  try {
    const response = await axios.post(VERCEL_BASE_URL + "loan/list",formData );
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};

//applied loans

export const AppliedLoanListServ = async (formData) => {

  try {
    const response = await axios.post(VERCEL_BASE_URL + "loan-application/list",formData );
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};

//applied loans details

export const AppliedLoanDetailsServ = async (formData , id) => {

  try {
    const response = await axios.get(VERCEL_BASE_URL + `loan-application/details/${id}`);
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};
