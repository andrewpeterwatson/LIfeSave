const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const path = require('path');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/'),
  COMP: path.resolve(__dirname, 'src/components'),
  MODULES: path.resolve(__dirname, 'node_modules')
};

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: '3001',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
        ],
      },
    ],
  }
});
