const path = require ('path')
const CopyPlugin = require('copy-webpack-plugin');
const uglifyJS = require("uglify-js");
const RunAfterBuildPlugin = require('webpack-run-after-build-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const minify = require('@node-minify/core');
const gcc = require('@node-minify/google-closure-compiler');



let cssLoaders = [
  'style-loader',
  { loader: 'css-loader'},
  {
    loader : 'postcss-loader',
    options: {
      plugins: (loader) => [
        require ('autoprefixer')({
          overrideBrowserslist: ['last 2 versions']
        }),
      ]
    }
  },
  'sass-loader'
]

module.exports = {

  entry: {

    index: './module/index.js',
    geoviz: './module/geoviz.js',
    info: './module/info.js',
  },
  context: path.join(__dirname, 'src'),
  output: {
    path : path.resolve('dist'),
    filename: '[name].js',
    publicPath:'/assets'
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    concatenateModules: true,
  },
  module: {

    rules: [
      {
        test: /\.(gif|eot|woff|woff2|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts',
        }
      }, {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',

          },
        ],
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.scss$/,
        use: [...cssLoaders,
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'images', to: 'assets' },
        {from: 'scripts', to: 'scripts'},
      ],
    }),


]
};
