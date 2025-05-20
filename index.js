const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if (cluster.isPrimary) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
} else {
  // Workers share the TCP connection
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Handled by process ${process.pid}`)
  }).listen(8000)
}
