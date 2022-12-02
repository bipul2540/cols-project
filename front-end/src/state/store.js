import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./authFeatures/signupSlice";
import userAuthReducer from "./authFeatures/userAuthSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    userAuth: userAuthReducer,
  },
});
