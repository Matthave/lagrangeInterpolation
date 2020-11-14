//REQUIRES
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//WEBPACK SETTINGS
const settings = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "app-[contenthash:5].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lagrange Interpolation",
      template: "src/templates/template.html",
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = settings;
