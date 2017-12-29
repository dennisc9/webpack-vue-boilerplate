const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FileLoaderOptions = { name: '[name].[ext]', outputPath: './fonts/' }; 


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
    siteScripts(name),
    siteStyles(name)
  ];
}

module.exports = {
  entry: {
    "main": siteScriptsAndStyles("main")
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/",
    filename: '[name].bundle.js'
  },
  resolve:{
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true,
          loaders: {
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              publicPath: "../",
              use: [
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ]
            }),
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: "../",
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } }, 
          { loader: 'css-loader', options: { sourceMap: true } }
        ],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: FileLoaderOptions
        }]
      },
      {
        test: /\.(png|jp(e*)g|svg|)$/,  
        use: [{
          loader: 'file-loader',
          options: { 
              //limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[name].[ext]'
          } 
        }]
      },
      {
        test: /\.(mov|mp4|)$/,  
        use: [{
          loader: 'file-loader',
          options: { 
              //limit: 8000, // Convert images < 8kb to base64 strings
              name: 'videos/[name].[ext]'
          } 
        }]
      },
      {
        test: /index\.html/,
        use: [{
          loader: "file-loader?name=[name].[ext]"
        }] 
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*']
    }),
    new ExtractTextPlugin({
      filename: '/css/[name].css',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  devtool: 'cheap-module-source-map',
};