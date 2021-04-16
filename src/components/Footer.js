import React from "react";

import styled from "styled-components";

const Container = styled.footer`
  text-align: center;
  padding: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 50px !important;
`;

const FooterText = styled.p``;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <FooterText>Alegre Imports &copy; {year}</FooterText>
    </Container>
  );
};

export default Footer;
