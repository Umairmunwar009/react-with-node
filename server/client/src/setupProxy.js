const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('Proxy is running');
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:5000'
    })
  );
};