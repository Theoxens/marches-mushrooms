module.exports = {
  Query: {
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
