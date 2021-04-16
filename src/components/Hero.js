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
  top: 160px;
  left: 170px;
  z-index: 5;
  @media screen and (max-width: 768px) {
    width: 400px;
    left: 100px;
  }
  @media screen and (max-width: 500px) {
    top: 120px;
    left: 70px;
  }
`;

const HeroHeader = styled.h1`
  color: #fff;
  font-size: clamp(2rem, 7vw, 5rem);
  z-index: 30;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHeroImages {
        edges {
          node {
            alt
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
        <HeroHeader>Canada is at your Doorstep</HeroHeader>
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
