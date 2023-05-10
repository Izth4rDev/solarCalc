const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    proxy: {
      '/agenda.json': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/agenda.json': '/agenda.json'
        },
        onProxyReq: function (proxyReq, req, res) {
          if (req.method === 'POST' && req.body) {
            const bodyData = JSON.stringify(req.body)
            proxyReq.setHeader('Content-Type', 'application/json')
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
            proxyReq.write(bodyData)
          }
        }
      }
    }
  }
}
