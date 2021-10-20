module.exports = {
  dev: {
    proxyTable: {
      '/api/': {
        target: 'http://1.1.1.1:8080/',
        changeOrigin: true
      }
    },
    useEslint: true,
    host: '127.0.0.1',
    port: 8888,
    open: true
  },
  build: {}
}
