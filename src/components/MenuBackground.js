import React from "react";

import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { myContext } from "./Provider";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  height: 100vh;
  width: 100vw;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  transform: ${({ open }) => (open ? "translateX(0px)" : "translateX(-100vw)")};
  animation: ${({ open }) =>
    open === null
      ? "none"
      : !open
      ? "0.2s ease-in-out slideout"
      : "0.5s ease-in-out slidein"};
  @keyframes slidein {
    from {
      transform: translateX(-100vw);
    }

    to {
      transform: translateX(0);
    }
  }
  @keyframes slideout {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100vw);
    }
  }
`;

const Navbar = styled.nav``;

const ListItems = styled.ul`
  margin-top: 50px;
  list-style: none;
  a {
    text-decoration: none;
  }
`;

const Item = styled.li`
  text-decoration: none;
  color: #000;
  margin-bottom: 60px;
  font-size: 2rem;
  &:hover {
    opacity: 0.6;
  }
`;

const MenuBackground = () => {
  return (
    <myContext.Consumer>
      {context => (
        <>
          <Background open={context.open}>
            <Navbar>
              <ListItems>
                <AnchorLink to='/#home'>
                  <Item onClick={() => context.toggleValue(false)}>Home</Item>
                </AnchorLink>
                <AnchorLink to='/#about'>
                  <Item onClick={() => context.toggleValue(false)}>About</Item>
                </AnchorLink>
                <Link to='/portfolio'>
                  <Item onClick={() => context.toggleValue(false)}>
                    Portfolio
                  </Item>
                </Link>
                <Link to='/sales'>
                  <Item onClick={() => context.toggleValue(false)}>
                    LCBO/SAQ
                  </Item>
                </Link>
                <AnchorLink to='/#contact'>
                  <Item onClick={() => context.toggleValue(false)}>
                    Contact
                  </Item>
                </AnchorLink>
              </ListItems>
            </Navbar>
          </Background>
        </>
      )}
    </myContext.Consumer>
  );
};

export default MenuBackground;
