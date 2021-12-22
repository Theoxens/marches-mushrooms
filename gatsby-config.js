require("dotenv").config()

const { URL } = process.env
const url = URL || "http://localhost:8000"

const metaData = {
  companyName: "Marches Mushrooms",
  altCompanyName: "Marches",
  title: `Marches Mushrooms`,
  description: `Marches Mushrooms is a Herefordshire based gourmet mushroom producer.`,
  author: `@4SightDesigns`,
  siteUrl: url,
}

const sitePrimaryColor = "#061326"

module.exports = {
  siteMetadata: metaData,
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
        name: metaData.companyName,
        short_name: metaData.altCompanyName,
        start_url: `/`,
        background_color: sitePrimaryColor,
        theme_color: sitePrimaryColor,
        display: `minimal-ui`,
        icon: `src/icons/MM-icon.inline.svg`,
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
          "@icons": `src/icons/`,
          "@titles": `src/titles/`,
          "@utils": `src/utils/`,
          "@validation": `src/validation/`,
          "@src": `src/`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-dts-css-modules",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
  ],
}
