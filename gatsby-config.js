module.exports = {
  siteMetadata: {
    title: "alegre",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://YOUR-APP-URL.herokuapp.com"
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
