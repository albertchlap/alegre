import React from "react";
import styled from "styled-components";
import Video from "./Video";
import { Link } from "gatsby";

const Container = styled.div`
  height: 70vh;
  width: 100%;
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
  position: relative;
  top: -70vh;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  z-index: 2;
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  color: #fff;
  /* @media screen and (max-width: 444px) {
    font-size: 1.5rem;
  } */
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
        <Text>Brands We Represent</Text>
        <Link to='/portfolio'>
          <Button primary>Our Portfolio</Button>
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export default ViewProducts;
