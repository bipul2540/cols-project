import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendEmailError: "",
  sendEmailSuccess: "",
  isPagePopup: false,
};

export const resetPassSlice = createSlice({
  name: "resetPassword",
  initialState: initialState,

  reducers: {
    setError: (state, action) => {
      state.sendEmailError = action.payload;
    },
    setSuccess: (state, action) => {
      state.sendEmailSuccess = action.payload;
    },

    popupPage: (state, action) => {
      state.isPagePopup = action.payload;
    },
  },
});

export const { setError, setSuccess, popupPage } = resetPassSlice.actions;

export default resetPassSlice.reducer;
