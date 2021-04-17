import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import styled from "styled-components";
import Layout from "../components/Layout";
import Values from "../components/Values";
import ViewProducts from "../components/ViewProducts";

const Container = styled.div``;

const Index = () => {
  return (
    <Layout>
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
