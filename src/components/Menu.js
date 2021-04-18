import React from "react";
import styled from "styled-components";
import { myContext } from "./Provider";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
  div {
    position: relative;
    width: 40px;
    height: 4px;

    background: ${({ open }) => (open ? "#000" : "#333")};
    border-radius: 40px !important;
    transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    transition: all 0.4s linear;

    &:before {
      content: "";
      position: absolute;
      top: -10px;
      width: inherit;
      height: inherit;
      background: inherit;
      transition: all 0.3s linear;
      transform: ${({ open }) => open && "rotate(90deg)"};
      top: ${({ open }) => (open ? "0" : "-10px")};
    }
    &:after {
      content: "";
      position: absolute;
      top: ${({ open }) => (open ? "0" : "10px")};
      width: inherit;
      height: inherit;
      background: inherit;
      transition: all 0.3s linear;
      transform: ${({ open }) => open && "rotate(90deg)"};
    }
  }
`;

const Menu = () => {
  return (
    <myContext.Consumer>
      {context => (
        <>
          <Button
            open={context.open}
            onClick={
              context.open === null
                ? () => context.setValue(true)
                : () => context.toggleValue()
            }>
            <div />
          </Button>
        </>
      )}
    </myContext.Consumer>
  );
};

export default Menu;
