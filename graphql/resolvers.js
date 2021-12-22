module.exports = {
  Query: {
    HomePageData: {
      type: "HomePageData",
      resolve: (source, args, context, info) =>
        context.nodeModel.findOne({
          type: `PagesJson`,
          query: { filter: { page: { eq: "home" } } },
        }),
    },

    AboutPageData: {
      type: "AboutPageData",
      resolve: (source, args, context, info) =>
        context.nodeModel.findOne({
          type: `PagesJson`,
          query: { filter: { page: { eq: "about" } } },
        }),
    },

    ProductPageData: {
      type: "ProductPageData",
      args: {
        path: `String!`,
      },
      resolve: (source, args, context, info) =>
        context.nodeModel.findOne({
          type: `ProductsJson`,
          query: { filter: { path: { eq: args.path } } },
        }),
    },
  },
}
