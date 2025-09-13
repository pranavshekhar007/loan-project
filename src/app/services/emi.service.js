import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";

//emi list

export const emiNotificationListServ = async (formData) => {

  try {
    const response = await axios.post(BASE_URL + "loan-application/emi-list",formData );
    return response.data;
  } catch (error) {
    console.error("emi list Error:", error);
    throw error;
  }
};

//applied loans