import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styled from "styled-components";

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
  return (
    <Main>
      <Navbar />
      <Center className='center__container'>
        <Sidebar />
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ex nam
          sint expedita id quae incidunt, unde voluptatibus repellat odio non
          facere deleniti voluptatem reprehenderit quod nisi quidem amet natus
          consectetur tempora voluptatum necessitatibus maiores. Eligendi natus
          dolor consectetur, a necessitatibus dicta porro nisi earum est, omnis
          ea, debitis veniam? Quaerat, nulla neque? Consequatur perferendis,
          temporibus dolor modi eos reprehenderit beatae cum, excepturi ipsam
          non provident dignissimos voluptatum ab impedit alias! Sunt voluptatem
          perferendis sequi magnam cum vel accusamus ratione nihil, quidem,
          assumenda rem, officiis error! Corrupti maxime beatae optio, eveniet
          dolore accusamus, ab aut accusantium explicabo illo mollitia enim?
        </Content>
      </Center>
    </Main>
  );
};

export default Home;
