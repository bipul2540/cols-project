import React from "react";
import styles from "./ResetPasswordForm.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useFormik } from "formik";
import { useState } from "react";
import { userSchema } from "../../utils/Input validations/resetPasswordForm";
import { sendEmailOtp, verifyOtp } from "./resetAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  popupPage,
  setError,
  setSuccess,
} from "../../state/authFeatures/resetPassSlice";
import { useNavigate } from "react-router-dom";
import { authData } from "../../state/authFeatures/userAuthSlice";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    otp: "",
  };

  const [isEmailsent, setisEmailSent] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
    });

  const handleSentOtpClick = async () => {
    const response = await sendEmailOtp(values.email);
    const data = response.result;

    if (data.response && data.response.status === 400) {
      console.log("wrong user id entered");
      dispatch(setError("Account with this Email address is not found."));
    }

    if (data.status === 200) {
      console.log("success");
      setisEmailSent(true);
      document.getElementById("email__field").disabled = true;
      dispatch(setSuccess("Email has been successfully sent."));
    }
  };

  const handleContinueClick = async () => {
    const response = await verifyOtp(values.email, values.otp);
    dispatch(authData({ email: values.email }));
    const data = response.result;
    console.log(data);
    if (data.response && data.response.status === 404) {
      dispatch(setSuccess(""));
      dispatch(setError("Wrong Otp entered, please try again."));
    }
    if (data.status === 200) {
      dispatch(setSuccess("Successfully verified."));
      dispatch(setError(""));
      dispatch(popupPage(true));
      setTimeout(() => {}, 5000);
    }
  };

  const HandleBackToLogin = () => {
    navigate("/auth/login");
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Forgot Password</h1>
      <p className={styles.info}>
        Enter the Email associated with your account and will sned and email
        with instrution to reset yor password
      </p>

      <div className={styles.form__container}>
        <form
          action=''
          className={styles.container__form}
          onSubmit={handleSubmit}>
          <div className={styles.email__field}>
            <p className={styles.form__input__label}>Email</p>

            <label>
              <input
                id='email__field'
                type='text'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete='off'
                name='email'
                className={
                  errors.email && touched.email ? styles.input__err : " "
                }
              />
              <button
                id='sendOtpbtn'
                className={styles.sendOtpbtn}
                type='button'
                onClick={handleSentOtpClick}>
                {!isEmailsent ? (
                  " send otp "
                ) : (
                  <BsFillCheckCircleFill className={styles.check__icon} />
                )}
              </button>
            </label>

            {errors.email && touched.email ? (
              <p className={styles.form__err__msg}>{errors.email} </p>
            ) : null}
          </div>

          <div className={styles.otp__field}>
            <p className={styles.form__input__label}>Verification Code</p>
            <input
              type='text'
              placeholder='Enter your Otp'
              className={errors.otp && touched.otp ? styles.input__err : ""}
              value={values.otp}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='off'
              name='otp'
            />
            {errors.otp && touched.otp ? (
              <p className={styles.form__err__msg}>{errors.otp} </p>
            ) : null}
          </div>

          <div className={styles.btn__design}>
            <p className={styles.go__back} onClick={HandleBackToLogin}>
              <IoIosArrowRoundBack /> Back to log in
            </p>
            <button
              className={styles.form__sendEmailbtn}
              type='submit'
              onClick={handleContinueClick}>
              continue <IoIosArrowRoundForward />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
