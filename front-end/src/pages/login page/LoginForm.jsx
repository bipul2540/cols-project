import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";
import styles from "./LoginForm.module.scss";

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "../../utils/Input validations/LoginForm";
import { sendLoginData } from "./loginAxios";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,

    onSubmit: async (values, action) => {
      await sendLoginData(values.email, values.password)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign up</h1>
      <div className={styles.google_btn}>
        <Button
          btnText={`Sign in using google`}
          btnIcon={<FcGoogle />}
          className='btn-secondry'
        />
      </div>

      <div className={styles.or__line}>
        <p className={styles.line}>or sign in with email </p>
      </div>

      <div className={styles.form__container}>
        <form action='' className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__input}>
            <label htmlFor='email'>Email address</label>
            <input
              type='text'
              placeholder='Enter your Email address'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? styles.input__err : ""}
            />
          </div>
          <div className={styles.form__input}>
            <label htmlFor='email'>Password</label>
            <input
              type='passwor'
              placeholder='Enter your password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? styles.input__err : ""}
            />
          </div>
          <div className={styles.submit__btn}>
            <button type='submit'>Sign In</button>
          </div>
        </form>
      </div>

      <p className={styles.forgot}>
        Forgotton password? <small>cick here</small>
      </p>
    </div>
  );
};

export default LoginForm;
