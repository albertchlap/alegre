const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("./src/templates/product.js");
  const response = await graphql(`
    query {
      allStrapiProducts {
        edges {
          node {
            slug
            strapiId
          }
        }
      }
    }
  `);

  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  response.data.allStrapiProducts.edges.forEach(edge => {
    createPage({
      component: productTemplate,
      path: `/portfolio/${edge.node.slug}`,
      context: {
        // slug: edge.node.slug,
        id: edge.node.slug,
      },
    });
  });
};
