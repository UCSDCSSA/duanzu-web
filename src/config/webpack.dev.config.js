const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  devServer: {
    contentBase: 'src/public',
    historyApiFallback: true,
    port: 9000,
    proxy: {
      '/ajax/*': {
        target: 'http://localhost:3002',
      },
    },
  },
});
