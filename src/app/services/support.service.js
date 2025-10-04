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

// terms and condition and privacy policy

export const supportDetailsServ  = async () => {

  try {
    const response = await axios.get(BASE_URL + "support/details" );
    return response.data;
  } catch (error) {
    console.error("contact Error:", error);
    throw error;
  }
  
};

// ticket category list

export const ticketCategoryListServ  = async (payload) => {

  try {
    const response = await axios.post(BASE_URL + "ticket-category/list" , payload );
    return response.data;
  } catch (error) {
    console.error("category Error:", error);
    throw error;
  }
  
};


// support ticket create

export const ticketCreateServ  = async (payload) => {

  try {
    const response = await axios.post(BASE_URL + "ticket/create" , payload );
    return response.data;
  } catch (error) {
    console.error("ticket create Error:", error);
    throw error;
  }
  
};

// support ticket list

export const ticketlistServ  = async (payload) => {

  try {
    const response = await axios.post(BASE_URL + "ticket/list" , payload);
    return response.data;
  } catch (error) {
    console.error("ticket create Error:", error);
    throw error;
  }
  
};

// chat list serve

export const chatListServ  = async (id) => {

  try {
    const response = await axios.post(BASE_URL + `chat/list/${id}`);
    return response.data;
  } catch (error) {
    console.error("ticket create Error:", error);
    throw error;
  }
  
};

export const chatCreateServ  = async (payload) => {

  try {
    const response = await axios.post(BASE_URL + "chat/create" , payload ,      {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      }
 );
    return response.data;
  } catch (error) {
    console.error("ticket create Error:", error);
    throw error;
  }
  
};