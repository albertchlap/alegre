import React from "react";

import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Container = styled.footer`
  text-align: center;
  padding-top: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #fff;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (max-width: 945px) {
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 606px) {
    width: 95%;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
  @media screen and (max-width: 466px) {
  }
`;

const LocationIcon = styled(LocationOnIcon)`
  color: var(--textColor);
`;

const Address = styled.p`
  font-weight: bold;
  color: var(--textColor);
  margin-left: 15px;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;

const Envelope = styled(EmailIcon)`
  color: var(--textColor);
`;

const EmailAddress = styled.p`
  font-weight: bold;
  color: var(--textColor);
  margin-left: 15px;
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Phone = styled(PhoneIcon)`
  color: var(--textColor);
`;

const PhoneNumber = styled.p`
  font-weight: bold;
  color: var(--textColor);
  margin-left: 15px;
`;

const FooterText = styled.p`
  color: var(--textColor);
  font-weight: bold;
`;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <InfoContainer>
        <AddressContainer>
          <LocationIcon />
          <Address>63 Armadale Ave, Toronto, Ontario, Canada</Address>
        </AddressContainer>
        <EmailContainer>
          <Envelope />
          <EmailAddress>info@alegreimports.com</EmailAddress>
        </EmailContainer>
        <PhoneContainer>
          <Phone />
          <PhoneNumber>+ 1 647 500-3584</PhoneNumber>
        </PhoneContainer>
      </InfoContainer>

      <FooterText>
        &copy; {year} Alegre Imports. All rights reserved.
      </FooterText>
    </Container>
  );
};

export default Footer;
