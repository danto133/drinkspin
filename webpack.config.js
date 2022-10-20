const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    server: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: "/\.js$/",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}