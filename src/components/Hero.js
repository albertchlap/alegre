import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const Container = styled.div`
  max-height: 100vh;

  width: 100%;
  position: relative;
  margin-top: -85px;
  z-index: -1;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  width: 700px;
  height: 300px;
  position: absolute;
  top: 300px;
  left: 100px;
  z-index: 5;
  @media screen and (max-width: 1000px) {
    top: 250px;
    width: 500px;
    height: 400px;
  }
  @media screen and (max-width: 900px) {
    top: 200px;
  }
`;

const HeroHeader = styled.h1`
  color: #fff;
  font-size: 4rem;
  z-index: 30;
  @media screen and (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 710px) {
    font-size: 2rem;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHeroImages(sort: { fields: [Position], order: ASC }) {
        edges {
          node {
            alt
            Position
            Images {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
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

  let altDescription;

  const imageArray = data.allStrapiHeroImages.edges.map(edge => {
    altDescription = edge.node.alt;
    return getImage(edge.node.Images);
  });

  const slides = imageArray.map((image, i) => {
    return (
      <div className='each-fade' key={i}>
        <GatsbyImage
          image={image}
          alt={altDescription}
          imgStyle={{ filter: "brightness(45%)" }}
        />
      </div>
    );
  });

  return (
    <Container id='home'>
      <ContentWrapper
        data-sal='fade'
        data-sal-delay='200'
        data-sal-duration='800'
        data-sal-easing='ease'>
        <HeroHeader>Bringing the World to Canada</HeroHeader>
      </ContentWrapper>
      <div className='slide-container'>
        <Fade
          duration={4000}
          arrows={false}
          pauseOnHover={false}
          style={{ height: "100%" }}>
          {slides}
        </Fade>
      </div>
    </Container>
  );
};

export default Hero;
