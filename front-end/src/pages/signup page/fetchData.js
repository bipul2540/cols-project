import axios from "axios";

export const sendSignupData = async ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const token = await axios
    .post("http://localhost:8080/api/signup", {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then((response) => {
      const { token } = response.data;
    })
    .catch((e) => {
      console.log(e);
    });

  return token;
};
