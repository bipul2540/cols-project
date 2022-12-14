import React from "react";
import Button from "../../components/Button";
import styles from "./SignUpForm.module.scss";
import { useFormik } from "formik";
import { userSchema } from "../../utils/Input validations/SignupForm";
import SignupLogo from "./SignupLogo";
import { sendSignupData } from "./fetchData";
import ErrorInfo from "../../components/ErrorInfo";

import { useDispatch } from "react-redux";
import {
  OtpPagePopup,
  signupError,
  signupErrorMsg,
  signupSuccess,
} from "../../state/authFeatures/signupSlice";
import { useToken } from "../../utils/useToken";
import { authData } from "../../state/authFeatures/userAuthSlice";

const SignUpForm = () => {
  const [, setToken] = useToken();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,

      onSubmit: async (values, action) => {
        const response = await sendSignupData(
          values.name,
          values.email,
          values.password,
          values.confirmPassword
        );
        const res = response.result;

        if (res.status === 200) {
          setToken(res.data.token);
          dispatch(signupSuccess(true));
          setTimeout(() => {
            dispatch(OtpPagePopup(true));
          }, 5000);
        }

        if (res.response && res.response.status === 409) {
          dispatch(signupError(true));
          dispatch(signupErrorMsg(res.response.data.message));
        }
      },
    });

  dispatch(authData({ email: values.email }));

  return (
    <>
      <div className={styles.main__container}>
        <h1 className={styles.heading}>Create an account</h1>

        <div className={styles.form__container}>
          <form action='' onSubmit={handleSubmit}>
            <div className={styles.form__input}>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                placeholder='Enter your full name'
                name='name'
                value={values.name}
                autoComplete='off'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? styles.input__err : ""}
              />
              {errors.name && touched.name ? (
                <p className={styles.form__err__msg}>{errors.name} </p>
              ) : null}
            </div>

            <div className={styles.form__input}>
              <label htmlFor='email'>Email Address</label>
              <input
                type='text'
                placeholder='Enter your email address'
                name='email'
                value={values.email}
                autoComplete='off'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? styles.input__err : ""
                }
              />
              {errors.email && touched.email ? (
                <p className={styles.form__err__msg}>{errors.email} </p>
              ) : null}
            </div>

            <div className={styles.form__input}>
              <label htmlFor='password'>Password</label>
              <input
                type='text'
                placeholder='Enter your password'
                name='password'
                value={values.password}
                autoComplete='off'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? styles.input__err : ""
                }
              />
              {errors.password && touched.password ? (
                <p className={styles.form__err__msg}>{errors.password} </p>
              ) : null}
            </div>
            <div className={styles.form__input}>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='text'
                placeholder='Enter your confirm password'
                name='confirmPassword'
                value={values.confirmPassword}
                autoComplete='off'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? styles.input__err
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className={styles.form__err__msg}>
                  {errors.confirmPassword}{" "}
                </p>
              ) : null}
            </div>

            <div className={styles.signup__btn}>
              <Button
                btnText={"Sign Up"}
                className='btn-secondry'
                type={"submit"}
              />
            </div>
          </form>
        </div>
        <SignupLogo />
      </div>
    </>
  );
};

export default SignUpForm;
