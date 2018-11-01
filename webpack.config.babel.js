// import webpack from 'webpack';
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: 'sass-loader' }
    ]
  }
}
