import React from "react";
import styles from "./../style/ErrorInfo.module.scss";
import { GrClose } from "react-icons/gr";
import { signupError } from "../state/authFeatures/signupSlice";
import { useDispatch } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";

const ErrorInfo = () => {
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    dispatch(signupError(false));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.errContainer}>
        <div className={styles.err_icon}>
          <RiCloseCircleLine className={styles.icon} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.err_heading}>Error</h3>
          <p className={styles.err_msg}>This Email id is Already registered.</p>
        </div>
        <div className={styles.buttons} onClick={handleCloseClick}>
          CLOSE
        </div>
      </div>
    </div>
  );
};

export default ErrorInfo;
