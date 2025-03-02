const path = require("path");

module.exports = {
  devtool: "source-map", // Set to "false" if you don't want source maps
  devServer: {
    port: 3000, // Change if needed
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' 'wasm-eval';",
    },
    static: {
      directory: path.join(__dirname, "public"), // Serve files from public/
    },
    hot: true, // Enable hot reloading
    open: true, // Auto open in browser
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
        exclude: /node_modules\/lucide-react/,
      },
    ],
  },
};
