import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useUser } from "../../utils/useUser";

const Main = styled.div``;
const Content = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 70px;
  left: 12rem;
  z-index: -999;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;
const Home = () => {
  const user = useUser();
  console.log(user)

  return (
    <Main>
      <Navbar />
      <Center className='center__container'>
        <Sidebar />
        <Content>Lorem, ipsum dolor sit amet consectetur</Content>
      </Center>
    </Main>
  );
};

export default Home;
