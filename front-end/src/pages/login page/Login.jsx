import React from "react";
import styled from "styled-components";
import AuthHeader from "./../../components/AuthHeader";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  position: relative;
`;

const Login = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/auth/signup");
  };

  return (
    <Main>
      <AuthHeader
        infoText={"New to Cols?"}
        btnText={"Create an account"}
        btnClassName={"btn-primary"}
        click={goToSignup}
      />

      <LoginForm />
    </Main>
  );
};

export default Login;
