module.exports = {
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-plain-loader',
      },
    ],
  },
};
