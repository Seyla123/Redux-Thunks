import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "../thunks/signUp";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isCreatingUser: false,
    creatingUserError: null,
    signUpSuccess: false,
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.isCreatingUser = true;
      state.creatingUserError = null;
      state.signUpSuccess = false;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isCreatingUser = false;
      state.signUpSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isCreatingUser = false;
      state.creatingUserError = action.payload;
      state.signUpSuccess = false;
    });
  },
});

export const authReducer = authSlice.reducer;
