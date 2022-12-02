import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
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
        <form action='' className={styles.form}>
          <div className={styles.form__input}>
            <label htmlFor='email'>Email address</label>
            <input type='text' placeholder='Enter your Email address' />
          </div>
          <div className={styles.form__input}>
            <label htmlFor='email'>Password</label>
            <input type='text' placeholder='Enter your password' />
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
