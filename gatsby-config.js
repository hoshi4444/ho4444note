const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: ':/',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
     },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `localhost:80`,
        protocol: `http`,
        hostingWPCOM: false,
        includedRoutes: [
          '**/posts',
          '**/tags',
          '**/categories'
        ],
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options:
            {
              baseUrl: `localhost:80`,
              protocol: `http`
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-plugin-twitter`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    'gatsby-plugin-offline',
  ],
}
