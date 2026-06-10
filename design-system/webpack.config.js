const path = require("path");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  return {
    entry: path.resolve(__dirname, "src/mr-design-system.js"),
    output: {
      filename: "mr-design-system.js",
      libraryTarget: "system",
      path: path.resolve(__dirname, "dist"),
      publicPath: isProd ? "" : "http://localhost:8502/",
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
    // React is provided at runtime by the host's import-map — never bundled here.
    externals: ["react", "react-dom", "react-dom/client"],
    devServer: {
      port: 8502,
      headers: { "Access-Control-Allow-Origin": "*" },
      static: { directory: path.resolve(__dirname, "dist") },
      hot: false,
      liveReload: false,
    },
  };
};
