import React from "react";
import styled from "styled-components";
import Video from "./Video";
import { Link } from "gatsby";

const Container = styled.div`
  height: 50vh;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
`;

const ContentWrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 50px;
  left: 100px;
`;

const Text = styled.h1`
  z-index: 2;
  font-size: 3rem;
  color: #fff;
`;

const Button = styled.button`
  font-size: 1.4rem;
  z-index: 2;
  background: ${props => props.primary && "none"};
  outline: none;
  border: 2px solid #fff;
  color: #fff;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.6s ease;
  &:hover {
    background: #fff;
    color: black;
  }
`;

const ViewProducts = () => {
  return (
    <Container>
      <Video />
      <ContentWrapper>
        <Text>View Our Products</Text>
        <Button primary>Our Brands</Button>
      </ContentWrapper>
    </Container>
  );
};

export default ViewProducts;
