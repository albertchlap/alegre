import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name='description' content='Alcohol Importing Agency in Canada' />
      <meta
        name='keywords'
        content='alcohol, canada, import, spirits, beer, alegre, imports, toronto, montreal, lcbo, saq'></meta>
      <link rel='canonical' href='https://alegreimports.com/'></link>
    </Helmet>
  );
};

export default SEO;
