import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendEmailError: "",
  sendEmailSuccess: "",
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
  },
});

export const { setError, setSuccess } = resetPassSlice.actions;

export default resetPassSlice.reducer;
