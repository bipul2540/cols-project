import React from "react";
import styles from "./../style/SuccessInfo.module.scss";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { signupSuccess } from "./../state/authFeatures/signupSlice";
const SuccessInfo = ({ Message }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signupSuccess(false));
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.errContainer}>
        <div className={styles.err_icon}>
          <MdOutlineCheckCircleOutline className={styles.icon} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.err_heading}>Success</h3>
          <p className={styles.err_msg}>{Message}</p>
        </div>
        <div className={styles.buttons} onClick={handleClick}>
          CLOSE
        </div>
      </div>
    </div>
  );
};

export default SuccessInfo;
