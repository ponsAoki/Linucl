const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_TARGET_ORIGIN,
      changeOrigin: true,
    })
  );
};
