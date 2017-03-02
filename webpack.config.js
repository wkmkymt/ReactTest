const path    = require("path");
const webpack = require("webpack");

const srcPath  = path.join(__dirname, "/src");
const distPath = path.join(__dirname, "/dist");

module.exports = {
  context: srcPath,
  entry: [
    "./index.jsx"
  ],

  output: {
    path: distPath,
    filename: "./js/bundle.js"
  },

  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },

  devServer: {
    contentBase: distPath,
    port: 3000,
    publicPath: "/",
    historyApiFallback: true,
    open: true
  },

  resolve: {
    extensions: [".js", ".jsx"]
  }

};
