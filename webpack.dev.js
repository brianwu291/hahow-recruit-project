const common = require("./webpack.config")
const merge = require("webpack-merge")

module.exports = merge(common, {
  mode: "development",
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./src",
    historyApiFallback: true
  }
})