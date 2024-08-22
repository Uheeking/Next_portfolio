const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/v1/databases', {
            target: 'https://api.notion.com', //접속하려는 서버의 루트 URL
            pathRewrite: {
                '^/v1/databases':''
              },
            changeOrigin: true
        })
    );
};