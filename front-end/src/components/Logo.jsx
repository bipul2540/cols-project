import React from "react";
import logo from "./../assets/logo.png";
import styled from "styled-components";

const IMG = styled.img`
  width: 3.5rem;
  object-fit: contain;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <>
      <IMG src={logo} alt='' />
    </>
  );
};

export default Logo;
