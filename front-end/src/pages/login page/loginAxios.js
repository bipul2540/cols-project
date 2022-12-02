import axios from "axios";

export const sendLoginData = async (email, password) => {
  const res = await axios
    .post("http://localhost:8080/api/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data;
    });

  return res;
};
