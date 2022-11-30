import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(2).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .min(8)
    .max(16)
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Password don't match."),
});
