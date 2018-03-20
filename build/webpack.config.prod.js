'use strict'

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].bundle.min.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true,
          loaders: {
            scss: [            
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true, importLoaders: false }
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
          }
        }
      }
    ]
  },
  plugins: [
    // Extract Imported css into own file
    //new ExtractTextPlugin({
    //  filename: '/css/[name].bundle.min.css',
      //allChunks: true,
    //}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].bundle.min.css',
      chunkFilename: "[id].css"
    })
    // // Minify JS
    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   uglifyOptions: {
    //     mangle: {
    //       keep_fnames: true
    //     },
    //     compress: {
    //       warnings: false
    //     },
    //     output: {
    //       comments: false
    //     },
    //   }
    // })
  ]
})
