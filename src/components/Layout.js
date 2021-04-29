import React from "react";

import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import "@fontsource/montserrat";
import MenuBackground from "./MenuBackground";
import { myContext } from "./Provider";

const GlobalStyle = createGlobalStyle`
  :root {
    --shadow: 0 19px 51px 0 rgba(0, 0, 0, 0.16),
    0 14px 19px 0 rgba(0, 0, 0, 0.02);
    --color: #333;
    --secondary: #000080;
    --background: #f0f0f0;
    --radius: 10px;
    --boxColor: #D0D0D0;
    --logoColor: #fee5b1;
    --textColor: #08376B;
  }
  * {
    box-sizing: border-box;
  }
  
  html {
    overflow-x: hidden;
  }

   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
    color: var(--textColor);
    width: 100%;
    height: 100%;
    background: var(--logoColor);
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    
   
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 1.8px;
  }
  p {
    line-height: 1.5;
  }

`;

const Layout = ({ children }) => {
  return (
    <>
      <myContext.Consumer>
        {context => <GlobalStyle fixed={context.open} />}
      </myContext.Consumer>
      <MenuBackground />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
