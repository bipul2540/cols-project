import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./authFeatures/signupSlice";
import userAuthReducer from "./authFeatures/userAuthSlice";
import loginReucer from "././authFeatures/loginSlice";
import resetPassReducer from "./authFeatures/resetPassSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    userAuth: userAuthReducer,
    login: loginReucer,
    resetPass: resetPassReducer,
  },
});
