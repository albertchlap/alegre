import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import styled from "styled-components";
import Layout from "../components/Layout";
import Values from "../components/Values";
import ViewProducts from "../components/ViewProducts";
import SEO from "../components/SEO";

const Container = styled.div``;

const Index = () => {
  return (
    <Layout>
      <SEO
        title='Home | Alegre Imports'
        description='Alegre Imports Home Page'
      />
      <Container>
        <Hero />
        <About />
        <ViewProducts />
        <Values />
        <Contact />
      </Container>
    </Layout>
  );
};

export default Index;
