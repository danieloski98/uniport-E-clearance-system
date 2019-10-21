module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("tailwindcss")("./tailwind.config.js")]
            }
          }
        ]
      }
    ]
  }
};
