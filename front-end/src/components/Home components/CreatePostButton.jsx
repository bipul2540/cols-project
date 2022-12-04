import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const Btn = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 10rem;
  background-color: var(--color-danger);
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: var(--box-shadow);
`;

const CreatePostButton = () => {
  return (
    <Main>
      <Btn>Create post +</Btn>
    </Main>
  );
};

export default CreatePostButton;
