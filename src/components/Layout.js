import React from "react";

import { createGlobalStyle } from "styled-components";
import "@fontsource/rubik";
import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  :root {
    --shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.02);
    --color: #333;
    --background: #F0F0F0;
  }

   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    font-family: 'Rubik', sans-serif;
    color: var(--color);
    letter-spacing: 2px;
    width: 100%;
    height: 100%;
    background: var(--background);
  }

`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
