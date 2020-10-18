const defaultTheme = require('tailwindcss/defaultTheme');
const DOTENV = require('dotenv');

if (process.env.NODE_ENV !== 'PRODUCTION') {
  DOTENV.config();
}


module.exports = {
  siteMetadata: {
    title: 'DJM Blog',
    // titleTemplate: '%s · The Real Hero',
    description:
        'Web development and design articles by David James Mitten. ',
    url: 'https://www.davidjamesmitten.com' // No trailing slash allowed!
    // image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    // twitterUsername: '@occlumency'
  },
  plugins: [`gatsby-plugin-postcss`, {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `xkjjro6kcwla`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  }, `gatsby-plugin-sharp`,
  `@contentful/gatsby-transformer-contentful-richtext`
  ]
};