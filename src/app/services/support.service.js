import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

//faq list

export const faqListServ = async (formData) => {

  try {
    const response = await axios.post(BASE_URL + "support/list-faq",formData );
    return response.data;
  } catch (error) {
    console.error("faq list Error:", error);
    throw error;
  }
};

export const contactQueryServ = async (formData) => {

  try {
    const response = await axios.post(BASE_URL + "support/add-contact-query" , formData);
    return response.data;
  } catch (error) {
    console.error("contact Error:", error);
    throw error;
  }
};