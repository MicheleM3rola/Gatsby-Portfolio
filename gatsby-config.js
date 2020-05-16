/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Mike DevHub",
    description:
      "Michele Merola Portfolio with an integrated blog where he talks about his progress during his jurney in web development.",
    twitterUsername: "@MicheleMerola15",
    author: "Michele Merola",
    image: "/Michele.jpg",
    siteUrl: "https://michele-portfolio.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,

        footnotes: true,

        pedantic: true,

        gfm: true,

        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Liu Jian Mao Cao`,
          `cursive`,
          `Roboto Mono\:400`,
          `monospace`,
          `Nunito\:300`,
        ],
        display: "swap",
      },
    },
  ],
}
