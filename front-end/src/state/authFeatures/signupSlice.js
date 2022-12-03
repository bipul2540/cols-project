import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignupError: false,
  isSignupSuccess: false,
  OtpPagePopup: false,
  token: "",
  signupErrorMsg: "",
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,

  reducers: {
    signupError: (state, action) => {
      state.isSignupError = action.payload;
    },
    signupSuccess: (state, action) => {
      state.isSignupSuccess = action.payload;
    },

    OtpPagePopup: (state, action) => {
      state.OtpPagePopup = action.payload;
    },
    signupToken: (state, action) => {
      state.signupToken = action.payload;
    },

    signupErrorMsg: (state, action) => {
      state.signupErrorMsg = action.payload;
    },
  },
});

export const {
  signupError,
  signupSuccess,
  OtpPagePopup,
  signupToken,
  signupErrorMsg,
} = signupSlice.actions;
export default signupSlice.reducer;
