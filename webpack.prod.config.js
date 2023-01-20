var path = require('path');
var merge = require('webpack-merge').merge;
var commonConfiguration = require('./webpack.config.js');
var TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfiguration, {
  output: {
    library: 'YOURPROJECT',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'your-project.min.js'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            passes: 2
          },
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
});
