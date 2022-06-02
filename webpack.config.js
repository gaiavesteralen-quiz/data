const path = require('path');

module.exports = {
    mode: 'production',
    watch: true,
    entry: ['./src/index.js', './src/firebase.js', './src/responsive-tables.js',],
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist',
    },
    /*optimization: {
      splitChunks: {
        chunks: 'all',
      }
    }*/
  };