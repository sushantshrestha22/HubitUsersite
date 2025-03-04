import axios from "axios";
import { API_URL } from "../constant/constant";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log(API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Include credentials for cross-origin requests
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = "hello"; // Get the token from the context
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // Return the modified config
  },
  (error) => {
    // Handle the error
    return Promise.reject(error); // Reject the promise
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response data
  },
  (error) => {
    // Handle the error
    return Promise.reject(error); // Reject the promise
  }
);

// Export the configured axios instance
export default axiosInstance;
