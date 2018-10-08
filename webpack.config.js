const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            /*presets: ["@babel/preset-env"],*/
          }
        }
      },
      {
        test:/\.css$/,
        use:["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
};
