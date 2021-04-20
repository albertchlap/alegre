import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  padding-bottom: 50px;
`;

const ContactTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
  color: var(--secondary);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: start;
  align-items: center;
  width: 700px;
  min-height: 600px;
  box-shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin-bottom: 30px;
  background: #fff;
  margin-top: 60px;
  @media screen and (max-width: 900px) {
    margin-top: 570px;
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    margin-top: 600px;
  }
  @media screen and (max-width: 353px) {
    margin-top: 670px;
  }
  @media screen and (max-width: 353px) {
    margin-top: 700px;
  }
`;

const Label = styled.label`
  padding: 10px;
`;

const Input = styled.input`
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid #333;
  outline: none;
  padding: 5px 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  @media screen and (min-width: 500px) {
    width: 80%;
  }
  @media screen and (max-width: 499px) {
    width: 80%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const HalfInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 499px) {
    width: 100%;
  }
`;

const Text = styled.textarea`
  margin-top: 30px;
  width: 80%;
  border-radius: 10px;
  padding: 10px 10px;
  outline: none;
  font-size: 0.9rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 1.1rem;
  background: none;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 30px 0;
  width: 50%;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  box-shadow: 0 3px 0px 0px rgba(0, 0, 0, 0.4);

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;

const Contact = () => {
  return (
    <Container>
      <ContactForm
        data-sal='fade'
        data-sal-delay='100'
        data-sal-duration='800'
        data-sal-easing='ease'
        id='contact'
        method='post'
        data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <ContactTitle>Get in Touch</ContactTitle>
        <InputContainer>
          <HalfInput>
            <Label htmlFor='firstName'>First Name</Label>
            <Input type='text' name='firstName' id='firstName' />
          </HalfInput>
          <HalfInput>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input type='text' name='lastName' id='lastName' />
          </HalfInput>
        </InputContainer>
        <InputContainer>
          <HalfInput>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' name='email' id='email' />
          </HalfInput>
          <HalfInput>
            <Label htmlFor='company'>Company</Label>
            <Input type='text' name='company' id='company' />
          </HalfInput>
        </InputContainer>
        <InputContainer>
          <HalfInput>
            <Label htmlFor='country'>Country</Label>
            <Input type='text' name='country' id='country' />
          </HalfInput>
          <HalfInput>
            <Label htmlFor='tel'>Phone Number</Label>
            <Input type='tel' name='tel' id='tel' />
          </HalfInput>
        </InputContainer>
        <Text
          name='body'
          rows='15'
          cols='40'
          placeholder='Write Your Message...'
        />
        <Button type='submit'>Submit</Button>
      </ContactForm>
    </Container>
  );
};

export default Contact;
