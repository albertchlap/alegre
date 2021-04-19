import React from "react";
import styled from "styled-components";
import FlagIcon from "@material-ui/icons/Flag";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";
import { useStaticQuery, graphql } from "gatsby";

const Container = styled.div`
  max-height: 400px;
  color: black;
  min-height: 250px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px 20px 20px 10px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 260px;
  background: #fff;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  @media screen and (max-width: 900px) {
    margin: 0 auto;
    width: 96%;
  }
`;

const Title = styled.h3`
  text-align: center;
  color: var(--secondary);
`;

const StyledFlag = styled(FlagIcon)`
  margin: 0 auto;
  padding-top: 20px;
  color: var(--secondary);
`;

const VisionIcon = styled(VisibilityIcon)`
  margin: 0 auto;
  padding-top: 20px;
  color: var(--secondary);
`;

const ValueIcon = styled(StarIcon)`
  margin: 0 auto;
  padding-top: 20px;
  color: var(--secondary);
`;

const Description = styled.p`
  font-size: 1rem;
  padding: 0 20px;
`;

const Values = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiValues {
        edges {
          node {
            Title
            Text
          }
        }
      }
    }
  `);

  let delay = 100;

  const values = data.allStrapiValues.edges.map((edge, i) => {
    if (i > 0) {
      delay += 400;
    }
    return (
      <Box
        key={i}
        data-sal='fade'
        data-sal-delay={delay}
        data-sal-duration='1000'
        data-sal-easing='ease'>
        {i === 0 ? <StyledFlag /> : i === 1 ? <VisionIcon /> : <ValueIcon />}
        <Title>{edge.node.Title}</Title>
        <Description>{edge.node.Text}</Description>
      </Box>
    );
  });

  return <Container>{values}</Container>;
};

export default Values;
