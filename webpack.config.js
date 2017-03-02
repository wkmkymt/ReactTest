const path    = require("path");

const srcPath  = path.join(__dirname, "/src");
const distPath = path.join(__dirname, "/dist");

module.exports = {
  context: srcPath,
  entry: {
    jsx:  "./app.jsx"
  },

  output: {
    path: distPath,
    filename: "./js/app.js"
  },

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devServer: {
    contentBase: distPath,
    port: 3000,
    publicPath: "/",
    historyApiFallback: true,
    open: true
  }
};
