const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src/views"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@store": path.resolve(__dirname, "src/store"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@sagas": path.resolve(__dirname, "src/sagas"),
      "@actions": path.resolve(__dirname, "src/actions"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@common": path.resolve(__dirname, "src/common"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
