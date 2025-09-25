import axios from "axios";

import { AWS_BASE_URL } from "../utils/api_base_url_configration";

//loan list

// export const userDetailsServ = async (id , token) => {

//   try {
//     const response = await axios.get(AWS_BASE_URL + `user/${id}` ,  {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });
//     return response.data;
//   } catch (error) {
//     console.error("loan list Error:", error);
//     throw error;
//   }
// };

export const userDetailsServ = async (id , token) => {

  try {
    const response = await axios.get(AWS_BASE_URL + `user/details/${id}`);
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};

export const userDetailsUpdateServ = async (formData , token) => {
  try {
    const response = await axios.put(AWS_BASE_URL + "user/update" , formData , {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data", 
    },
  });
    return response.data;
  } catch (error) {
    console.error("loan list Error:", error);
    throw error;
  }
};