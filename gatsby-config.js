const defaultTheme = require('tailwindcss/defaultTheme');
const DOTENV = require('dotenv');

if (process.env.NODE_ENV !== 'PRODUCTION') {
  DOTENV.config();
}


module.exports = {
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