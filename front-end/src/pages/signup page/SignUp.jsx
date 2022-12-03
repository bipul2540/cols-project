import React, { useEffect, useState } from "react";

import styled from "styled-components";
import AuthHeader from "../../components/AuthHeader";
import ErrorInfo from "../../components/ErrorInfo";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import { useToken } from "../../utils/useToken";
import SuccessInfo from "../../components/SuccessInfo";
import SignupOtpVerifyPage from "./SignupOtpVerifyPage";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  position: relative;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const isError = useSelector((state) => state.signup.isSignupError);
  const isSuccess = useSelector((state) => state.signup.isSignupSuccess);
  const isPopup = useSelector((state) => state.signup.OtpPagePopup);

  const signupErrMsg = useSelector((state) => state.signup.signupErrorMsg);

  const goToLoginPageClick = () => {
    navigate("/auth/login");
  };

  return (
    <Main>
      <AuthHeader
        infoText={"Already have an account?"}
        btnText={"Sign In"}
        btnClassName={"btn-primary"}
        click={goToLoginPageClick}
      />

      {isError && isSuccess === false ? (
        <ErrorInfo Message={signupErrMsg} />
      ) : (
        ""
      )}
      {isSuccess ? (
        <SuccessInfo Message='your account has been successfully created' />
      ) : (
        ""
      )}

      <SignUpForm />
      {isPopup ? <SignupOtpVerifyPage /> : ""}
    </Main>
  );
};

export default SignUp;
