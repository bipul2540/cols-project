import React from "react";

import styled from "styled-components";
import AuthHeader from "../../components/AuthHeader";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <AuthHeader
        infoText={"Already have an account?"}
        btnText={"Sign In"}
        btnClassName={"btn-primary"}
      />

      <SignUpForm />
    </>
  );
};

export default SignUp;
