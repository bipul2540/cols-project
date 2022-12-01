import axios from "axios";
import { useDispatch } from "react-redux";

export const sendSignupData = async (
  name,
  email,
  password,
  confirmPassword
) => {
  console.log(name, email, password);

  const data = await axios
    .post("http://localhost:8080/api/signup", {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then((reponse) => {
      return reponse.data;
    })
    .catch((e) => {
      return e.response.data;
    });
  console.log(data);
  return data;
};
