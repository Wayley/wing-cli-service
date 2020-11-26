const path = require('path');
const webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');
const CracoLessPlugin = require('craco-less');

const pathResolve = (url) => path.join(__dirname, url);

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
    },
    plugins: [
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: new RegExp(/.(js|css)$/),
        threshold: 10240, // 单位: kb
        minRatio: 0.8,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
  plugins: [
    // craco-less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@theme-color': 'pink' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
