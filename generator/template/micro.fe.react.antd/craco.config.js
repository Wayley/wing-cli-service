const path = require('path');
const webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');
const CracoLessPlugin = require('craco-less');
const { name } = require('./package');
const pathResolve = (url) => path.join(__dirname, url);

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@root': pathResolve(''),
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
    configure: (webpackConfig) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`,
        globalObject: 'window',
      };
      return webpackConfig;
    },
  },
  plugins: [
    // craco-less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@theme-color': '#1890ff' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    port: 6001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
