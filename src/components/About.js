import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { myContext } from "../components/Provider";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000 !important;
  background-color: var(--logoColor);
  padding-bottom: 40px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 20px;
  transform: translateY(-20px);
  color: var(--textColor);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
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
    padding: 10px;
    color: var(--textColor);
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
    <myContext.Consumer>
      {context => (
        <Container id='about'>
          <TextWrapper>
            <Title>Alegre Imports opens the door for you</Title>
            <TextOne
              data-sal={context.width > 960 ? "slide-right" : ""}
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
      )}
    </myContext.Consumer>
  );
};

export default About;
