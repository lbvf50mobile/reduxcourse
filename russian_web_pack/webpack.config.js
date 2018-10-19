'use strict';

module.exports = {
    entry: './home',
    output: {
      filename: 'build.js',
      library: 'libvar'
    },
    optimization: {
      minimize: false
    }
  
};