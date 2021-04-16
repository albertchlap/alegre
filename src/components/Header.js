import React from "react";
import styled from "styled-components";

import Logo from "../images/alegre-logo.svg";

const Container = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  background: #f0f0f0;
`;

const LogoWrapper = styled.div`
  transform: translate(10px, 15px);
  height: 100px;
  width: 180px;
`;

const Navbar = styled.nav`
  position: relative;
`;

const ListItems = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* & a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  } */
`;

const Item = styled.li`
  color: var(--color);
  text-decoration: none;
  margin-right: 35px;
  font-weight: bold;
  z-index: 20;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 0.5;
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt='Alegre Imports' width='190px' height='70px' />
      </LogoWrapper>
      <Navbar>
        <ListItems>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Portfolio</Item>
          <Item>LCBO/SAQ</Item>
          <Item>Contact</Item>
        </ListItems>
      </Navbar>
    </Container>
  );
};

export default Header;
