const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')
const keys = require('./config/key')

module.exports = {
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: process.env.NODE_ENV === 'production' ? `bundle${keys.bundleHash}.js` : 'bundle.[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hahow recruit project",
      template: path.resolve('public', 'index.html'),
      filename: path.resolve('build', 'index.html'),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true
      }
    })
  ],
  optimization: {
    runtimeChunk: true,
  }
}