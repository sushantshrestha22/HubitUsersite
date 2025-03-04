// utils/Providers/api/query.js

import axiosInstance from "../api/axiosinstance";

// Fetch data
export const fetchData = async (url: any) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Post data
export const postData = async (url: string, data: FormData) => {
  try {
    const response = await axiosInstance.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postDataa = async (url: string, data: FormData) => {
  try {
    const response = await axiosInstance.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Edit data
export const editData = async (url: string, data: FormData) => {
  try {
    const response = await axiosInstance.patch(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editDataa = async (url: string, data: FormData) => {
  try {
    const response = await axiosInstance.patch(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete data
export const deleteData = async (url: string) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
