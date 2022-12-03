import React from "react";
import styles from "./NewPasswordEntryPage.module.scss";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setError, popupPage } from "../../state/authFeatures/resetPassSlice";
import { useFormik } from "formik";
import { passwordSchema } from "../../utils/Input validations/resetPasswordForm";
import { useUser } from "../../utils/useUser";
import { changePassword } from "./resetAxios";
import { useNavigate } from "react-router-dom";

const NewPasswordEntryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseIcon = () => {
    dispatch(popupPage(false));
  };

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const userEmail = useSelector((state) => state.userAuth.authData);
  const [err, setErr] = useState("");

  const user = useUser();
  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: passwordSchema,

      onSubmit: async (values, action) => {
        const verificationString = localStorage.getItem("verificationString");

        if (verificationString) {
          const response = await changePassword(
            userEmail,
            values.password,
            values.confirmPassword,
            verificationString
          );

          const res = response.result;

          if (res.status === 200) {
            navigate("/auth/login");
          }

          if (res.response && res.response.status === 400) {
            setErr("some thing went wrong...");
          }
        }
      },
    });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.close__icon} onClick={handleCloseIcon}>
          <IoIosClose />
        </div>
        <div className={styles.info__container}>
          <h1>Password Reset</h1>
          <p>Enter the new password</p>
        </div>
        <p>{err}</p>
        <div className={styles.form__container}>
          <form action='' className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__input}>
              <label htmlFor='password'>New Password</label>
              <input
                type='password'
                placeholder='Enter the new password'
                name='password'
                value={values.password}
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
              <label htmlFor='password'>Confirm Password</label>
              <input
                type='password'
                placeholder='Enter the new password'
                name='confirmPassword'
                value={values.confirmPassword}
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
            <div className={styles.form__btn}>
              <button type='submit'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordEntryPage;
