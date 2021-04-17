import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const Container = styled.div`
  padding-bottom: 50px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.h3`
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin: 50px auto;
  width: 80%;
  box-shadow: var(--shadow);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListItems = styled.ul`
  padding-right: 30px;
  list-style: none;
`;

const Item = styled.li`
  padding: 20px;
  font-weight: bold;
`;

const Product = ({ data }) => {
  const image = getImage(data.strapiProducts.image);

  return (
    <Layout>
      <Container>
        <Title>{data.strapiProducts.Brand}</Title>
        <Description>{data.strapiProducts.Description}</Description>
        <ContentWrapper
          data-sal='slide-left'
          data-sal-delay='300'
          data-sal-duration='800'
          data-sal-easing='ease'>
          <Box style={{ padding: "50px 0" }}>
            <GatsbyImage image={image} alt={data.strapiProducts.Brand} />
          </Box>
          <Box>
            <ListItems>
              <Item>{`Category: ${data.strapiProducts.Category}`}</Item>
              <Item>{`Country: ${data.strapiProducts.Country}`}</Item>
              <Item>{`Style: ${data.strapiProducts.Style}`}</Item>
              <Item>{`Volume: ${data.strapiProducts.Volume}`}</Item>
              <Item>{`ABV: ${data.strapiProducts.ABV}`}</Item>
              <Item>{`Producer: ${data.strapiProducts.Producer}`}</Item>
              {data.strapiProducts.Supplier && (
                <Item>{`Supplier: ${data.strapiProducts.Supplier}`}</Item>
              )}
              {data.strapiProducts.Designations && (
                <Item>{`Designations: ${data.strapiProducts.Designations}`}</Item>
              )}
              {data.strapiProducts.Other && (
                <Item>{`Other: ${data.strapiProducts.Other}`}</Item>
              )}
              <Item>
                Website:{" "}
                <a
                  href={data.strapiProducts.url}
                  target='_blank'
                  rel='noreferrer'>
                  {data.strapiProducts.url}
                </a>
              </Item>
            </ListItems>
          </Box>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default Product;

export const data = graphql`
  query($id: String!) {
    strapiProducts(slug: { eq: $id }) {
      Brand
      Country
      Category
      Description
      url
      Volume
      Producer
      Designations
      Other
      Supplier
      ABV
      slug
      strapiId
      Style
      image {
        childImageSharp {
          gatsbyImageData(
            height: 600
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
