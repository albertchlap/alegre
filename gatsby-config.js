module.exports = {
  siteMetadata: {
    title: "Alegre Imports",
    description: "Alcohol Importing Agency in Canada",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-anchor-links`,
    "gatsby-transformer-remark",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alegre Imports`,
        short_name: `Alegre Imports`,
        start_url: `/`,
        background_color: `#c9d6ff`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: "https://alegreimports.herokuapp.com",
        apiURL: process.env.DEPLOY_URL
          ? "https://alegreimports.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 5000, // Default to 100
        contentTypes: [
          `hero-images`,
          `products`,
          `abouts`,
          `sales`,
          `values`,
          `videos`,
        ],
        //If using single types place them in this array.

        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
};
