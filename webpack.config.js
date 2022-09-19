const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const BASE_JS_PART = "./src/client/js/";

module.exports = {
  entry: {
    main: `${BASE_JS_PART}main.js`,
    videoPlayer: `${BASE_JS_PART}videoPlayer.js`,
    recorder: `${BASE_JS_PART}recorder.js`,
    commentSection: `${BASE_JS_PART}commentSection.js`,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /.scss$/,
        // 역순으로 동작함 sass -> css -> styles
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
