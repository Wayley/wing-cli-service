const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ids',
    createProxyMiddleware({
      target: 'http://121.40.88.181:48279',
      changeOrigin: true,
    })
  );
  app.use(
    '/fus',
    createProxyMiddleware({
      target: 'http://121.40.88.181:16088',
      changeOrigin: true,
    })
  );
};
