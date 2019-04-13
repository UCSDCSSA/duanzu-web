const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC = path.resolve(__dirname, 'src/public/img');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     "@babel/preset-react",
          //     "@babel/preset-env",
          //   ],
          //   plugins: [
          //     "transform-flow-strip-types",
          //     [
          //       "babel-plugin-root-import",
          //       {
          //         "rootPathSuffix": "src/",
          //         "rootPathPrefix": "~"
          //       }
          //     ],
          //   ],
          // },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|mp3)$/i,
        include: SRC,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
