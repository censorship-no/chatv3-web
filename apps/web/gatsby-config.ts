const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")

module.exports = {
  siteMetadata: {
    title: `Альтернативные способы коммуникации на случай изоляции Рунета`,
    description: `Мы предлагаем вам заранее установить и потестировать сет из приложений, которые могут работать автономно и вне зависимости от интернет-ограничений.`,
    author: `eQualitie`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `eQualitie`,
    //     short_name: `eQualitie`,
    //     start_url: `/`,
    //     background_color: `#DB573B`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#DB573B`,
    //     display: `minimal-ui`,
    //     icon: `src/images/small-logo.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "3t6w9t63",
        dataset: "production",
        watchMode: true,
        // overlayDrafts: true,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
  ],
}
