import React from "react";
import Logo from "./Logo";

import styled from "styled-components";
import Button from "./Button";

const Main = styled.div`
  padding: 0.5rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid var(--bg-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  color: var(--text-gray-dark);
`;

const AuthHeader = ({ infoText, btnText, btnClassName }) => {
  return (
    <Main>
      <Logo />
      <Info>
        <P>{infoText}</P>
        <Button className={btnClassName} btnText={btnText} />
      </Info>
    </Main>
  );
};

export default AuthHeader;
