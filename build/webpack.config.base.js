'use strict'

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const utils = require('./utils');

let environment = (process.env.webpackEnvironment) ? process.env.webpackEnvironment : process.env.NODE_ENV;
//console.log("environment == ", environment);

/*********************************
* Entry
*********************************/
function siteScripts(name) {
  return `./src/${name}.site.js`;
}

function siteStyles(name) {
  return `./src/sass/${name}.site.scss`;
}

function siteScriptsAndStyles(name) {
  return [
    siteStyles(name),
    siteScripts(name),
  ];
}

let entry = {
  'main': siteScriptsAndStyles('app')
};

const plugins = [
  require('autoprefixer'),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    title: 'Test App',
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }),
  new CopyWebpackPlugin([{
    from: utils.resolve('assets/images'),
    to: utils.resolve('dist/assets/images'),
    toType: 'dir'
  }]),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Vue: ['vue/dist/vue.esm.js', 'default'],
    // _map: ['lodash', 'map']
  })
];

module.exports = {
  entry: entry,
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'], // not sure .scss works here
    alias: {
      'assets': utils.resolve('assets'),
      'pages': utils.resolve('src/pages'),
      'components': utils.resolve('src/components'),
      'mixins': utils.resolve('src/mixins'),
      'data': utils.resolve('src/data'),
      '@': utils.resolve('src'),
      '@fortawesome/fontawesome-free-solid$': '@fortawesome/fontawesome-free-solid/shakable.es.js',
      '@fortawesome/fontawesome-free-regular$': '@fortawesome/fontawesome-free-regular/shakable.es.js'
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              {
                loader: 'vue-style-loader'
              },
              {
                loader: 'css-loader',
                options: { sourceMap: true }
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
          // name: '[name].[hash:7].[ext]',
          // publicPath: utils.assetsPath('images/')
        }
      },
      {
        test: /\.(mp4|webm|ogg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('videos/[name].[ext]')
        }
      },
      {
        test: /\.(mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
          // name: '[name].[hash:7].[ext]',
          // publicPath: utils.assetsPath('media/')
        }
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options:
          {
            // name: utils.assetsPath('fonts/[name].[ext]')
            // name: '[path]/[name].[ext]'
            // name: utils.cssPath('fonts/[name].[ext]')
            name: '[name].[ext]',
            outputPath: 'css/fonts/',
            publicPath: '../css/fonts/'
          }
        }]
      }
    ]
  }
}
