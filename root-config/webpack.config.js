const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: path.resolve(__dirname, "src/mr-root-config.js"),
    output: {
      filename: "mr-root-config.js",
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader", options: { rootMode: "upward" } },
        },
      ],
    },
    resolve: { extensions: [".js"] },
    externals: ["single-spa"],
    plugins: [
      new HtmlWebpackPlugin({
        inject: false, // root-config is loaded via System.import, not a <script src>
        template: path.resolve(__dirname, "src/index.ejs"),
      }),
    ],
    devServer: {
      port: 9000,
      headers: { "Access-Control-Allow-Origin": "*" },
      historyApiFallback: true,
      hot: false,
      liveReload: false,
    },
  };
};
