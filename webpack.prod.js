const path = require('path');
//This is only for showing that we can use different webpack config for different app.

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
