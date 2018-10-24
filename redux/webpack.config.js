'use strict';

module.exports = {
    entry: './reduxcode',
    output: {
      filename: 'build.js',
      library: 'libvar'
    },
    optimization: {
      minimize: false
    },
    watch: true
  
};