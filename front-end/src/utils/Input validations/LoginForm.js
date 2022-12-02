import * as yup from "yup";

export const userSchema = yup.object().shape({
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
});
