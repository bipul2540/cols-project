import axios from "axios";

export const sendLoginData = async (email, password) => {
  const result = await axios
    .post("http://localhost:8080/api/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });

  return { result };
};
