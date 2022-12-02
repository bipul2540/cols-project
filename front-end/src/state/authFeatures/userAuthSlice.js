import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: {},
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,

  reducers: {
    authData: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const { authData } = userAuthSlice.actions;
export default userAuthSlice.reducer;
