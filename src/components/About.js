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
  background-color: var(--logoColor);
  background-image: url("https://www.transparenttextures.com/patterns/arches.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 20px;
  transform: translateY(-20px);
  color: var(--textColor);
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 5px 10px;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: var(--radius);
  /* transform: translateX(50px); */
  margin-bottom: 40px;
  font-size: 1.2rem;
  p {
    padding: 20px;
    color: var(--textColor);
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
  border-radius: var(--radius);
  margin-bottom: 60px;
  font-size: 1.2rem;
  p {
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
        <Title>Alegre Imports opens the door for you</Title>
        <TextOne
          data-sal='slide-right'
          data-sal-delay='300'
          data-sal-duration='800'
          data-sal-easing='ease'>
          <p>{data.allStrapiAbouts.edges[0].node.Text}</p>

          <p style={{ marginTop: "-10px" }}>
            {data.allStrapiAbouts.edges[1].node.Text}
          </p>
        </TextOne>
      </TextWrapper>
    </Container>
  );
};

export default About;
