var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    library: 'UnionFind',
    filename: './dist/unionfind.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
