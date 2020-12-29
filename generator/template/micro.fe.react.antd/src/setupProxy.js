const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/ids',
    createProxyMiddleware({
      target: 'http://121.41.109.132:15088/admin',
      changeOrigin: true,
      pathRewrite: { '^/ids': '' },
    })
  );
  app.use(
    '/fus',
    createProxyMiddleware({
      target: 'http://121.40.88.181:16088',
      changeOrigin: true,
      pathRewrite: { '^/fus': '' },
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://121.41.109.132:15088/admin',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
