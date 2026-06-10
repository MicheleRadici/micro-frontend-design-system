const path = require("path");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  return {
    entry: path.resolve(__dirname, "src/mr-accounts.js"),
    output: {
      filename: "mr-accounts.js",
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      publicPath: isProd ? "" : "http://localhost:8500/",
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
    // Everything here is resolved at runtime by the host import-map:
    //   - react / react-dom: shared singletons (one React instance for all apps)
    //   - @mr/design-system: the LIVE design system, not an npm copy
    externals: [
      "react",
      "react-dom",
      "react-dom/client",
      "single-spa",
      /^@mr\//,
    ],
    devServer: {
      port: 8500,
      headers: { "Access-Control-Allow-Origin": "*" },
      static: { directory: path.resolve(__dirname, "dist") },
      historyApiFallback: true,
      hot: false,
      liveReload: false,
    },
  };
};
