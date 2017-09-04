const constants = require('../constants.js');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: constants.public
  }
});

