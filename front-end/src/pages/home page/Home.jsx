import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useUser } from "../../utils/useUser";
import Aside from "./Aside";
import CreatePostButton from "../../components/Home components/CreatePostButton";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

const Center = styled.div`
  display: flex;
  margin-top: 4rem;
  gap: 1rem;
`;

const Content = styled.div`
  width: 100%;
  flex: 2;
`;
const Home = () => {
  const user = useUser();
  console.log(user);

  return (
    <Main>
      <Navbar />
      <Center className='center__container'>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
        <Aside />
      </Center>
      <CreatePostButton />
    </Main>
  );
};

export default Home;
