import { signUpRoute } from "./signUpRoute";
import { otpVerification } from "./otpVerification";
import { verifyOtpRoute } from "./verifyOtpRoute";
import { loginRoute } from "./loginRoute";
import { resetPasswordEmailRoute } from "./resetPasswordEmailRoute";
import { resetPasswordOtpRoute } from "./resetPasswordOtpRoute";
import { changePasswordRoute } from "./changePasswordRoute";

export const routes = [
  signUpRoute,
  otpVerification,
  verifyOtpRoute,
  loginRoute,
  resetPasswordEmailRoute,
  resetPasswordOtpRoute,
  changePasswordRoute,
];
