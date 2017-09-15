var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var outputFile = '{{ name }}'
var globalName = '{{ library }}'

var config = require('../package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {
    vue: {
      amd: 'vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      root: 'vue'
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
        loader: 'babel-loader',
        query:
        {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
          },
        },
      },
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: 'css-loader'
        // })
        loaders: 'style-loader!css-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=50000&name=assets/[name].[ext]'
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),

    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
    new ExtractTextPlugin(outputFile + '.css')
  ]
};