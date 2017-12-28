// We are using node's native package 'path'
// https://nodejs.org/api/path.html
'use strict'

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/'),
  COMP: path.resolve(__dirname, 'src/components'),
  MODULES: path.resolve(__dirname, 'node_modules')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: '[name].bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.scss$/,
        include: path.appSrc,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
      {
         test: /\.css$/,
         loader: ExtractTextPlugin.extract({
           use: 'css-loader',
         }),
       },
       {
         test: /\.(png|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
