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
