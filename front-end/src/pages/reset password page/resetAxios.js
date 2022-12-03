import axios from "axios";

export const sendEmailOtp = async (email) => {
  const result = await axios
    .post("http://localhost:8080/api/send-email/password-reset", { email })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });

  return { result };
};

export const verifyOtp = async (email, otp) => {
  const result = await axios
    .post("http://localhost:8080/api/verify-otp/reset-password", { email, otp })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });

  return { result };
};



export const changePassword = async (email, password, confirmPassword, verificationString)=>{

    const result =  await axios.post("http://localhost:8080/api/otp-verified/change-password")
}