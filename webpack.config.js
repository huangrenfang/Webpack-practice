// import {Configuration} from 'webpack';

/**
 * @type {Configuration}
 */

 const config = {
     mode: "none",
     entry: './src/main.js',
     output:{
         filename: 'bundle.js'
     },
     module:{
         rules:[
             {
                 test: /\.md$/,
                 use: './src/markdown-loader'
             }
         ]
     }
 }
module.exports = config