const path = require('path');
const { name } = require('./package');

const resolve = (f) => path.resolve(__dirname, f);
module.exports = {
  productionSourceMap: false,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@root', resolve(''));
  //   config.resolve.alias.set('@', resolve('src'));
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@root': resolve(''),
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/styles/common.less')],
    },
  },
  devServer: {
    port: 6002,
    proxy: {
      '/ids': {
        target: 'http://121.41.109.132:15088/admin',
        changeOrigin: true,
        pathRewrite: { '^/ids': '' },
      },
      '/fus': {
        target: 'http://121.40.88.181:16088',
        changeOrigin: true,
        pathRewrite: { '^/fus': '' },
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
