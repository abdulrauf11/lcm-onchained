const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles/variables.scss'),
      path.join(__dirname, 'styles/reset.scss'),
    ],
    prependData: `
      @use 'sass:math';  
    `,
  },
};
