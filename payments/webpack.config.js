const path = require("path");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  return {
    entry: path.resolve(__dirname, "src/mr-payments.js"),
    output: {
      filename: "mr-payments.js",
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      publicPath: isProd ? "" : "http://localhost:8501/",
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
    resolve: { extensions: [".js", ".jsx"] },
    externals: [
      "react",
      "react-dom",
      "react-dom/client",
      "single-spa",
      /^@mr\//,
    ],
    devServer: {
      port: 8501,
      headers: { "Access-Control-Allow-Origin": "*" },
      static: { directory: path.resolve(__dirname, "dist") },
      historyApiFallback: true,
      hot: false,
      liveReload: false,
    },
  };
};
