import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";

const Container = styled.div`
  padding: 50px 0;
`;

const Title = styled.h1`
  text-align: center;
`;

const IntroContainer = styled.div`
  margin: 50px auto 0;
  padding: 30px;
  width: 72%;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 619px) {
    width: 64%;
  }
`;

const CardsContainer = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: -50px auto 0;
  @media screen and (max-width: 1260px) {
    flex-direction: column;
    width: 80%;
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lcbo = styled.div`
  margin: 50px 60px 30px;
  padding: 30px;
  min-height: 550px;

  /* transform: translate(-40px, 280px); */
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  text-align: center;
  p {
    text-align: start;
    margin-top: 70px;
  }
  @media screen and (max-width: 1260px) {
    margin-bottom: -20px;
  }

  @media screen and (min-width: 620px) {
    min-width: 450px;
  }
  @media screen and (max-width: 619px) {
    width: 80%;
  }
`;

const Saq = styled.div`
  margin: 50px 60px 30px;
  padding: 30px;
  min-height: 550px;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  text-align: center;

  p {
    text-align: start;
    margin-top: 70px;
  }

  @media screen and (min-width: 620px) {
    min-width: 450px;
  }
  @media screen and (max-width: 619px) {
    width: 80%;
  }
`;

const BottomText = styled.div`
  padding: 30px;
  width: 72%;
  margin: 0 auto 60px;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  @media screen and (max-width: 619px) {
    width: 64%;
  }
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
            <h2 style={{ paddingBottom: "40px", color: "var(--secondary)" }}>
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
            <h2 style={{ paddingBottom: "40px", color: "var(--secondary)" }}>
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
      </Container>
    </Layout>
  );
};

export default Sales;
