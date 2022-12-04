import React from "react";
import NavbarHome from "../pages/home page/NavbarHome";
import SearchItems from "./Home components/SearchItems";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
`;
const Navbar = () => {
  return (
    <Main>
      <NavbarHome />
    </Main>
  );
};

export default Navbar;
