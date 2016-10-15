var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'file-loader' 
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright Tweaklab.org @dos"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tpl.html"
    }),
   new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  } 
}
 
