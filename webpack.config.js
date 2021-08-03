const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
  },
  watch:true,
  module: { 
    rules:[
       { 
        test: /\.css$/,
        use : ['style-loader','css-loader'] 
      } 
    ] 
  }
};