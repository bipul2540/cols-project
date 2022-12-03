import axios from "axios";
import { useDispatch } from "react-redux";
import { authData } from "../../state/authFeatures/userAuthSlice";

export const sendSignupData = async (
  name,
  email,
  password,
  confirmPassword
) => {
  console.log(name, email, password);
  const result = await axios
    .post("http://localhost:8080/api/signup", {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then(async (reponse) => {
      const { token } = reponse.data;
      if (token) {
        await axios
          .post("http://localhost:8080/api/send-otp", { email: email })
          .then((res) => {
            console.log("send otp", res);
            localStorage.setItem(
              "verificationString",
              res.data.data.verificationString
            );
          })
          .catch((e) => {
            console.log(e);
          });
      }
      return reponse;
    })
    .catch((e) => {
      return e;
    });
  return { result };
};
