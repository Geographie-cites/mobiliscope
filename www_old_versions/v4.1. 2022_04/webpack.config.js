const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require("webpack");

let cssLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
  'sass-loader',
]



module.exports = {

  entry: {

    index: './module/index.js',
    geoviz: './module/geoviz.js',
    info: './module/info.js',
  },
  context: path.join(__dirname, 'src'),
  output: {
    path : path.resolve(__dirname,'dist'),
    filename: '[name].js',
    publicPath:'/dist/'
  },

  module: {

    rules: [
    {
          test: /\.(svg|png|jpeg|jpg)$/,
          type: 'asset/resource',
          generator: {
             filename: 'assets/[name][ext]'
          }
      },
      {
        test: /\.(eot|woff|woff2|ttf|otf)$/,
        type: 'asset/resource',
          generator: {
             filename: 'fonts/[name][ext]'
          }
      },{
        test: /\.css$/,
        use: cssLoaders,
        type: 'javascript/auto'
      },
      {
        test: /\.scss$/,
        use: cssLoaders,
        type: 'javascript/auto'
      },
      {
        test: /\.js$/,
        use: ["source-map-loader", "babel-loader"],
      }



    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'images', to: 'assets' },
        {from: 'scripts', to: 'scripts'},
      ],
    }),


]
};
