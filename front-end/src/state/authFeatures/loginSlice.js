import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isSuccess: false,
  errMsg: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,

  reducers: {
    showErrorPage: (state, action) => {
      state.isError = action.payload;
    },

    showSuccessPage: (state, action) => {
      state.isSuccess = action.payload;
    },

    setErrorMessage: (state, action) => {
      state.errMsg = action.payload;
    },
  },
});

export const { showErrorPage, showSuccessPage, setErrorMessage } =
  loginSlice.actions;

export default loginSlice.reducer;
