import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";

import Layout from "../components/Layout";
import Values from "../components/Values";
import ViewProducts from "../components/ViewProducts";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ViewProducts />
      <Values />
    </Layout>
  );
};

export default Index;
