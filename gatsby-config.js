module.exports = {
  siteMetadata: {
    title: `Austin Nguyen's Portfolio`,
    description: `Austin Nguyen's Portfolio Website`,
    author: `Austin Nguyen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Austin Nguyen's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profileImage.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
