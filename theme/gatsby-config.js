//const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@nejcm/docz-theme-extended`]
      }
    }
  ],
};
