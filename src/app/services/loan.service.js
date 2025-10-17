import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

//loan list

export const loanListServ = async (formData) => {

  try {
    const response = await axios.post(BASE_URL + "loan/list",formData );
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};

//loan details

export const loanDetailsServ = async (slug) => {

  try {
    const response = await axios.get(BASE_URL + `loan/details-for-web/${slug}`, );
    return response.data;
  } catch (error) {
    console.error("loan details Error:", error);
    throw error;
  }
};

//applied loans

export const AppliedLoanListServ = async (formData) => {

  try {
    const response = await axios.post(BASE_URL + "loan-application/list",formData );
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};

//applied loans details

export const AppliedLoanDetailsServ = async (formData , id) => {

  try {
    const response = await axios.get(BASE_URL + `loan-application/details/${id}`);
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};

//loan list

export const purposeListServ = async (formData) => {

  try {
    const response = await axios.post(BASE_URL + "loan-purpose/list",formData );
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};
