import React from "react";
import styles from "./SignUpForm.module.scss";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const SignupLogo = () => {
  return (
    <>
      <div className={styles.other__signup__options}>
        <p>or sign up with social platforms</p>
        <div className={styles.icons}>
          <div className={styles.icon__div}>
            <FaGoogle className={styles.icon} />
          </div>
          <div className={styles.icon__div}>
            <FaGithub className={styles.icon} />
          </div>
          <div className={styles.icon__div}>
            <BsFacebook className={styles.icon} />
          </div>
          <div className={styles.icon__div}>
            <FaLinkedin className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupLogo;
