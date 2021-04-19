import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Logo from "../images/alegre-logo.svg";
import Menu from "../components/Menu";
import Headroom from "react-headroom";
import "./Header.css";

const Container = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  background: #f0f0f0;
  transition: top 0.3s ease;
  opacity: 1;
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
  & a {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
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
    <Headroom disableInlineStyles>
      <Container>
        <Menu />
        <LogoWrapper>
          <AnchorLink to='/#home'>
            <img src={Logo} alt='Alegre Imports' width='190px' height='70px' />
          </AnchorLink>
        </LogoWrapper>
        <Navbar>
          <ListItems>
            <AnchorLink to='/#home'>
              <Item>Home</Item>
            </AnchorLink>
            <AnchorLink to='/#about'>
              <Item>About</Item>
            </AnchorLink>
            <Link to='/portfolio'>
              <Item>Portfolio</Item>
            </Link>
            <Link to='/sales'>
              <Item>LCBO/SAQ</Item>
            </Link>
            <AnchorLink to='/#contact'>
              <Item>Contact</Item>
            </AnchorLink>
          </ListItems>
        </Navbar>
      </Container>
    </Headroom>
  );
};

export default Header;
