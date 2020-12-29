const path = require('path');
const resolve = (f) => path.resolve(__dirname, f);
module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('@root', resolve(''));
    config.resolve.alias.set('@', resolve('src'));
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/styles/common.less')],
    },
  },
  devServer: {
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
  },
};
