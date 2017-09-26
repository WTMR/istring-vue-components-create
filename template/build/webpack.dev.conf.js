var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('./devConfig')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
let entry = {
  app: './example/app.js'
};
// add hot-reload related code to entry chunks
Object.keys(entry).forEach(function (name) {
  entry[name] = ['./build/dev-client'].concat(entry[name])
})

module.exports = {
  entry: entry,
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: config.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=50000&name=assets/[name].[ext]'
      }
    ]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new CopyWebpackPlugin([
      // {
      //   from: 'node_modules/istrong-fonticon/dist/fonts',
      //   to: 'fonts',
      //   ignore: ['.*']
      // }
    ])
  ]
}
