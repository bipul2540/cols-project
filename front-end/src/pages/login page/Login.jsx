import React from "react";
import styled from "styled-components";
import AuthHeader from "./../../components/AuthHeader";
import LoginForm from "./LoginForm";

const Main = styled.div`
  position: relative;
`;

const Login = () => {
  return (
    <Main>
      <AuthHeader
        infoText={"New to Cols?"}
        btnText={"Create an account"}
        btnClassName={"btn-primary"}
      />

      <LoginForm />
    </Main>
  );
};

export default Login;
