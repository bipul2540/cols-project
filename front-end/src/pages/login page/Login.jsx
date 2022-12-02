import React from "react";
import styled from "styled-components";
import AuthHeader from "./../../components/AuthHeader";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorInfo from "../../components/ErrorInfo";

const Main = styled.div`
  position: relative;
`;

const Login = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/auth/signup");
  };

  const errPopupCloseHandle = ()=>{
    
  }

  const isError = useSelector((state) => state.login.isError);
  const errMsg = useSelector((state) => state.login.errMsg);
  return (
    <Main>
      <AuthHeader
        infoText={"New to Cols?"}
        btnText={"Create an account"}
        btnClassName={"btn-primary"}
        click={goToSignup}
      />
      {isError ? <ErrorInfo Message={errMsg} /> : ""}

      <LoginForm />
    </Main>
  );
};

export default Login;
