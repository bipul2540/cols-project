import React from "react";
import AuthHeader from "./../../components/AuthHeader";
import styled from "styled-components";
import ResetPasswordForm from "./ResetPasswordForm";
import ErrorInfo from "./../../components/ErrorInfo";
import SuccessInfo from "./../../components/SuccessInfo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../../state/authFeatures/resetPassSlice";
import NewPasswordEntryPage from "./NewPasswordEntryPage";

const Main = styled.div`
  position: relative;
`;

const ResetPassword = () => {
  const dispatch = useDispatch();
  const errMsg = useSelector((state) => state.resetPass.sendEmailError);
  const succMsg = useSelector((state) => state.resetPass.sendEmailSuccess);

  const isPagePopup = useSelector((state) => state.resetPass.isPagePopup);

  if (succMsg) {
    dispatch(setError(""));
  }

  return (
    <Main>
      <AuthHeader />
      {errMsg ? <ErrorInfo Message={errMsg} /> : ""}
      {succMsg ? <SuccessInfo Message={succMsg} /> : ""}

      {isPagePopup ? <NewPasswordEntryPage /> : ""}
      <ResetPasswordForm />
    </Main>
  );
};

export default ResetPassword;
