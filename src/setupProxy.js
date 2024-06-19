const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/auth',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
        })
    );
    app.use(
        '/api/projects',
        createProxyMiddleware({
            target: 'http://localhost:8001',
            changeOrigin: true,
        })
    );
};
