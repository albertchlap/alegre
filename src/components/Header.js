import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { myContext } from "./Provider";

import Logo from "../images/alegre-logo.svg";
import Menu from "../components/Menu";

const Container = styled.header`
  height: 90px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  background: #f0f0f0;
  transition: top 0.3s ease;
  top: ${({ hide }) => (hide ? "-100px" : "0")};
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
    <myContext.Consumer>
      {context => (
        <Container hide={context.hideNav}>
          <Menu />
          <LogoWrapper
            onClick={() => {
              context.setAnchor(false);
              context.setNav(false);
              setTimeout(() => {
                context.setAnchor(true);
              }, 1000);
            }}>
            {console.log(context.anchorLink)}
            <AnchorLink to='/#home'>
              <img
                src={Logo}
                alt='Alegre Imports'
                width='190px'
                height='70px'
              />
            </AnchorLink>
          </LogoWrapper>
          <Navbar>
            <ListItems>
              <AnchorLink to='/#home'>
                <Item
                  onClick={() => {
                    context.setAnchor(false);
                    context.setNav(false);
                    setTimeout(() => {
                      context.setAnchor(true);
                    }, 1000);
                  }}>
                  Home
                </Item>
              </AnchorLink>
              <AnchorLink to='/#about'>
                <Item
                  onClick={() => {
                    context.setAnchor(false);
                    context.setNav(true);
                    setTimeout(() => {
                      context.setAnchor(true);
                    }, 1000);
                  }}>
                  About
                </Item>
              </AnchorLink>
              <Link to='/portfolio'>
                <Item onclick={() => context.setNav(false)}>Portfolio</Item>
              </Link>
              <Link to='/sales'>
                <Item onclick={() => context.setNav(false)}>LCBO/SAQ</Item>
              </Link>
              <AnchorLink to='/#contact'>
                <Item
                  onClick={() => {
                    context.setAnchor(false);
                    context.setNav(true);
                    setTimeout(() => {
                      context.setAnchor(true);
                    }, 1000);
                  }}>
                  Contact
                </Item>
              </AnchorLink>
            </ListItems>
          </Navbar>
        </Container>
      )}
    </myContext.Consumer>
  );
};

export default Header;
