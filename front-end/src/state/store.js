import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./authFeatures/signupSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
