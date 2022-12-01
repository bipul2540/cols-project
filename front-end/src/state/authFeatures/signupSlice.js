import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignupError: false,
  isSignupSuccess: false,
  token: "",
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
    signupToken: (state, action) => {
      state.signupToken = action.payload;
    },
  },
});

export const { signupError, signupSuccess, signupToken } = signupSlice.actions;
export default signupSlice.reducer;
