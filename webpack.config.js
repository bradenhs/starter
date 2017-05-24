const path = require('path')
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin
const webpack = require('webpack');

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index',
  devtool: PRODUCTION ? false : 'source-map',
  output: {
    path: path.resolve('www'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'www'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.tsx?$/, use: 'awesome-typescript-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      MODE: JSON.stringify(PRODUCTION ? 'production' : 'development')
    })
  ],
}
