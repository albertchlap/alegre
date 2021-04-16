import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  margin: 20px;
  padding: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 600px;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  transition: all 0.6s ease-in-out;

  &:before {
    content: "View Product";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.6s ease-in-out;
  }
  &:hover {
    transform: scale(1.03);
  }
  &:hover:before {
    opacity: 1;
  }
`;
const Title = styled.h2`
  margin-bottom: 60px;
  color: #333;
  text-decoration: none;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-bottom: 20px;
`;

const Country = styled.h4``;

const Description = styled.p`
  text-align: center;
`;

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProducts {
        edges {
          node {
            Brand
            Country
            Category
            slug
            strapiId
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 300
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

  const renderedList = data.allStrapiProducts.edges.map(item => {
    const image = getImage(item.node.image);

    return (
      // <Link
      //   key={item.node.st}
      //   to={`/portfolio/${item.node.slug}`}
      //   style={{ color: "#333", textDecoration: "none" }}>
      <GridItem>
        <Title>{item.node.Brand}</Title>
        <ImgContainer>
          <GatsbyImage image={image} alt={item.node.Brand} />
        </ImgContainer>
        <Country>{item.node.Country}</Country>
        <Description>{item.node.Category}</Description>
      </GridItem>
      // </Link>
    );
  });

  return (
    <Layout>
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "60px",
            paddingTop: "40px",
          }}>
          Portfolio
        </h1>
        <Grid>{renderedList}</Grid>
      </Container>
    </Layout>
  );
};

export default Portfolio;
