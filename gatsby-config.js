require("dotenv").config()
const { URL, STAGING_URL } = process.env
const url = URL || STAGING_URL

module.exports = {
  siteMetadata: {
    title: `Marches Mushrooms`,
    description: `Marches Mushrooms is a Herefordshire based gourmet mushroom producer.`,
    author: `@4SightDesigns`,
    siteUrl: url,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contacts`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@constants": `src/constants/`,
          "@context": `src/context/`,
          "@components": `src/components/`,
          "@scss": `src/scss/`,
          "@hooks": `src/hooks/`,
          "@content": `content/`,
          "@images": `src/images/`,
          "@utils": `src/utils/`,
          "@validation": `src/validation/`,
          "@src": `src/`,
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
  ],
}
