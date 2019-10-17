const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importLoaders: 0,
                alias: {
                  'assets': path.resolve(__dirname, '../src/assets')
                }
              }
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/assets/css/variables.scss'),
                path.resolve(__dirname, '../src/assets/css/mixin.scss'),
                path.resolve(__dirname, '../src/assets/css/function.scss'),
                path.resolve(__dirname, '../src/assets/css/global.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-plain-loader',
      },
    ],
  },
};
