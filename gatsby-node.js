const types = require("./graphql/types.graphql")
const resolvers = require("./graphql/resolvers")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Create product pages
  const productTemplate = require.resolve(`./src/templates/Product.tsx`)

  const result = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  result.data.allProductsJson.edges.forEach(({ node }) => {
    createPage({
      path: `/products${node.path}`,
      component: productTemplate,
      context: {
        id: node.path,
      },
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers(resolvers)
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(types)
}
