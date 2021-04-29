import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";

const Container = styled.div`
  padding: 50px 0 200px;
  @media screen and (max-width: 945px) {
    padding-bottom: 300px;
  }
  @media screen and (max-width: 362px) {
    padding-bottom: 350px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1299px) {
    width: 90%;
  }
  @media screen and (min-width: 1550px) {
    width: 70%;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: var(--textColor);
`;

const IntroContainer = styled.div`
  margin: 50px auto 0;
  padding: 30px;

  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: var(--radius);
  margin-bottom: 30px;
  color: var(--textColor);
  /* @media screen and (max-width: 619px) {
    width: 90%;
  } */
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lcbo = styled.div`
  margin: 50px 0 30px;
  padding: 30px;
  min-height: 650px;
  max-width: 500px;
  color: var(--textColor);

  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: var(--radius);
  text-align: center;
  p {
    text-align: start;
    margin-top: 70px;
  }
  @media screen and (max-width: 1299px) {
    max-width: 450px;
  }
  @media screen and (max-width: 1050px) {
    max-width: 1000px;
    width: 100%;
  }
`;

const Saq = styled.div`
  margin: 50px 0 30px;
  padding: 30px;
  min-height: 650px;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: var(--radius);
  text-align: center;
  color: var(--textColor);
  max-width: 500px;

  p {
    text-align: start;
    margin-top: 70px;
  }
  @media screen and (max-width: 1299px) {
    max-width: 450px;
  }
  @media screen and (max-width: 1050px) {
    max-width: 1000px;
    width: 100%;
  }
`;

const BottomText = styled.div`
  padding: 30px;
  margin: 0 auto 60px;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: var(--radius);
  color: var(--textColor);
`;

const Sales = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSales {
        edges {
          node {
            Title
            Body
            Image {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  let introText, ontario, quebec, onTitle, qcTitle, lcboImg, saqImg, conclusion;

  data.allStrapiSales.edges.forEach(edge => {
    if (edge.node.Title === "Intro") {
      introText = edge.node.Body;
    } else if (edge.node.Title === "Conclusion") {
      conclusion = edge.node.Body;
    } else if (edge.node.Title === "Ontario") {
      lcboImg = getImage(edge.node.Image);
      onTitle = edge.node.Title;
      ontario = edge.node.Body;
    } else if (edge.node.Title === "Quebec") {
      saqImg = getImage(edge.node.Image);
      qcTitle = edge.node.Title;
      quebec = edge.node.Body;
    }
  });

  return (
    <Layout>
      <SEO
        title='Sales | Alegre Imports'
        description='Alegre Imports Sales Page'
      />
      <Container>
        <Title>LCBO/SAQ</Title>
        <ContentContainer>
          <IntroContainer
            data-sal='slide-right'
            data-sal-delay='300'
            data-sal-duration='800'
            data-sal-easing='ease'>
            <ReactMarkdown children={introText} />
          </IntroContainer>
          <CardsContainer>
            <Lcbo
              data-sal='slide-right'
              data-sal-delay='0'
              data-sal-duration='800'
              data-sal-easing='ease'>
              <h2 style={{ paddingBottom: "40px", color: "var(--textColor)" }}>
                {onTitle}
              </h2>
              <ImgContainer>
                <GatsbyImage
                  image={lcboImg}
                  alt='LCBO'
                  imgStyle={{ borderRadius: "10px" }}
                />
              </ImgContainer>
              <ReactMarkdown children={ontario} />
            </Lcbo>

            <Saq
              data-sal='slide-left'
              data-sal-delay='0'
              data-sal-duration='800'
              data-sal-easing='ease'>
              <h2 style={{ paddingBottom: "40px", color: "var(--textColor)" }}>
                {qcTitle}
              </h2>
              <ImgContainer>
                <GatsbyImage
                  image={saqImg}
                  alt='SAQ'
                  imgStyle={{ borderRadius: "10px" }}
                />
              </ImgContainer>
              <p>{quebec}</p>
            </Saq>
          </CardsContainer>
          <BottomText
            data-sal='slide-left'
            data-sal-delay='300'
            data-sal-duration='800'
            data-sal-easing='ease'>
            <ReactMarkdown children={conclusion} />
          </BottomText>
        </ContentContainer>
      </Container>
    </Layout>
  );
};

export default Sales;
