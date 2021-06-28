const path = require('path')

module.exports = ({ accessToken, channelSlug }) => {
  return {
    siteMetadata: {
      title: 'gatsby-theme-portfolio-are.na',
    },
    plugins: [
      {
        resolve: 'gatsby-source-are.na',
        options: {
          accessToken,
          channelSlugs: [channelSlug],
        },
      },
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve(`./src/components/Layout.js`),
          },
        },
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: path.join(__dirname, 'src', 'pages'),
        },
      },
    ],
  }
}
