import React from "react";
import styles from "./SignupOtpVerifyPage.module.scss";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { OtpPagePopup } from "../../state/authFeatures/signupSlice";
import { useFormik } from "formik";
import axios from "axios";
import { useToken } from "../../utils/useToken";
import { useNavigate } from "react-router-dom";

const SignupOtpVerifyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseIconClick = () => {
    dispatch(OtpPagePopup(false));
    location.reload();
  };
  const initialValues = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  };

  const email = useSelector((state) => state.userAuth.authData);
  const [, setToken] = useToken();

  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, action) => {
      const otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
      await axios
        .post("http://localhost:8080/api/verify-otp", {
          email: email,
          verificationString: localStorage.getItem("verificationString"),
          otp: otp,
        })
        .then((res) => {
          const { token } = res.data;
          setToken(token);
   

          if (token) {
            navigate("/auth/login");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.card__container}>
        <div className={styles.close__icon} onClick={handleCloseIconClick}>
          <CgClose className={styles.icon} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.info__heading}>OTP Verification</h1>
          <p className={styles.info__text}>
            We will send you a one time password on this Email{" "}
            <small className={styles.info__text_email}>someone@gmail.com</small>{" "}
          </p>
        </div>
        <div className={styles.form__container}>
          <form action='' className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__inputs}>
              <input
                type='text'
                className={styles.form__input}
                maxLength='1'
                name='otp1'
                value={values.otp1}
                onBlur={handleBlur}
                onChange={handleChange}
                autoComplete='off'
              />
              <input
                type='text'
                maxLength='1'
                className={styles.form__input}
                name='otp2'
                value={values.otp2}
                onChange={handleChange}
                autoComplete='off'
                onBlur={handleBlur}
              />
              <input
                type='text'
                maxLength='1'
                className={styles.form__input}
                name='otp3'
                value={values.otp3}
                onChange={handleChange}
                autoComplete='off'
                onBlur={handleBlur}
              />
              <input
                type='text'
                maxLength='1'
                className={styles.form__input}
                name='otp4'
                value={values.otp4}
                onChange={handleChange}
                autoComplete='off'
                onBlur={handleBlur}
              />
            </div>

            <div className={styles.form__info_timer_text}>
              <div className={styles.timer__conatainer}>
                <p className={styles.timer}>00:00</p>
                <p>
                  Didn't received OTP ? <small>Resend</small>
                </p>
              </div>

              <div className={styles.btn__container}>
                <button type='submit' className={styles.btn}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupOtpVerifyPage;
