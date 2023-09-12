/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      }
    }
  ],
  siteMetadata:{
    title: 'Event Planner Pro',
    description: 'Create Unforgettable Events with EventPlanner Pro’s Seamless Management!',
    copyright: 'This website is copyright 2023 Event Planner Pro',
    contact: 'webdev@eventplanner-pro.com'
  }
}
