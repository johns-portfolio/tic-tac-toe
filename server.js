require('dotenv').config()
const StaticServer = require('static-server')
const server = new StaticServer({
  rootPath: 'dist',
  port: process.env.PORT
})

server.start(function () {
  console.log('Server listening to', server.port)
})
