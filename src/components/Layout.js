import React from "react";

import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
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
    background: var(--background);
    overflow-y: ${({ fixed }) => fixed && "hidden"}
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 1.8px;
  }

`;

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Helmet>
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
