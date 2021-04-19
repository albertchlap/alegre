import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  /* transform: translateX(50px); */
  margin-bottom: 40px;
  background: #fff;
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
          <span style={{ color: "var(--secondary)", fontStyle: "italic" }}>
            Alegre Imports
          </span>{" "}
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
