var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'AFRAME',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'your-project.js'
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    port: process.env.PORT || 9000,
    hot: false,
    liveReload: true,
    static: {
      directory: 'examples'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
