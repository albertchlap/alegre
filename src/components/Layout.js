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
    --background: #F0F0F0;
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
    color: var(--color);
    width: 100%;
    height: 100%;
    background: #c9d6ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e2e2e2,
      #c9d6ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e2e2e2,
      #c9d6ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    overflow-y: ${({ fixed }) => fixed && "hidden"}
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 1.8px;
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
