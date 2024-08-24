import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/users/signup",
        userData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log('sign up ', response.data);

      // Return the user data upon successful sign-up
      return response.data;
    } catch (error) {
      console.log('sign up error', error);

      // Capture and return the error to the Redux slice
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export { signUp };
