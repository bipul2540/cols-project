import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  otp: yup
    .number()
    .min(4)
    .required("Please Enter the 4 digit Otp sent to you."),
});
