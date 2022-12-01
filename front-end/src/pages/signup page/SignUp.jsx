import React, { useEffect, useState } from "react";

import styled from "styled-components";
import AuthHeader from "../../components/AuthHeader";
import ErrorInfo from "../../components/ErrorInfo";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import { useToken } from "../../utils/useToken";
import SuccessInfo from "../../components/SuccessInfo";

const Main = styled.div`
  position: relative;
`;

const SignUp = () => {
  const isError = useSelector((state) => state.signup.isSignupError);
  const isSuccess = useSelector((state) => state.signup.isSignupSuccess);

  useEffect(() => {
    console.log(isError);
    console.log(("isSuccess", isSuccess));
  }, [isError, isSuccess]);

  return (
    <Main>
      <AuthHeader
        infoText={"Already have an account?"}
        btnText={"Sign In"}
        btnClassName={"btn-primary"}
      />

      {isError && isSuccess === false ? <ErrorInfo Message /> : ""}
      {isSuccess? <SuccessInfo Message /> : ""}

      <SignUpForm />
    </Main>
  );
};

export default SignUp;
