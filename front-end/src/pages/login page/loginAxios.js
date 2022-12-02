import axios from "axios";

export const sendLoginData = async (email, password) => {
  await axios
    .post("http://localhost:8080/api/signin", { email, password })
    .then((res) => {
      console.log("hey this is Login", res);
    })
    .catch((e) => {
      console.log("Hey this is Error: ", e);
    });
};
