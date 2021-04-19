import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: #fff;
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
  transform: translateY(-20px);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

const TextOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  /* transform: translateX(50px); */
  margin-bottom: 40px;
  font-size: 1.2rem;
  p {
    padding: 20px;
  }
`;

const TextTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translate(-40px, 280px); */
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin-bottom: 60px;
  font-size: 1.2rem;
  p {
    padding: 20px;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAbouts {
        edges {
          node {
            Text
          }
        }
      }
    }
  `);
  return (
    <Container id='about'>
      <TextWrapper>
        <Title>
          <span style={{ color: "var(--secondary)" }}>Alegre Imports</span>{" "}
          opens the door to Canada
        </Title>
        <TextOne
          data-sal='slide-right'
          data-sal-delay='300'
          data-sal-duration='800'
          data-sal-easing='ease'>
          <p>{data.allStrapiAbouts.edges[0].node.Text}</p>
        </TextOne>
        <TextTwo
          data-sal='slide-left'
          data-sal-delay='600'
          data-sal-duration='800'
          data-sal-easing='ease'>
          <p>{data.allStrapiAbouts.edges[1].node.Text}</p>
        </TextTwo>
      </TextWrapper>
    </Container>
  );
};

export default About;
