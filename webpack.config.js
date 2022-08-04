const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"),
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
