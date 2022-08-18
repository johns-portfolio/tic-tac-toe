import * as dotenv from 'dotenv'
import StaticServer from 'static-server'
dotenv.config()

const server = new StaticServer({
  rootPath: 'dist',
  port: process.env.PORT
})

server.start(function () {
  console.log('Server listening to', server.port)
})
