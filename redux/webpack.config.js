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
    mode: 'development', 
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        }
      ]
    }
  
};