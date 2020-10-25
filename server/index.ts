import http from 'http'

import app from "./app"
import socket from './socket'

const start = () => {
  const server = http.createServer(app)

  server.listen(8000, () => console.info('Listening on port 8000'))

  socket(server)
}

start()