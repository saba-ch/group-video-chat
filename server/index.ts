import http from 'http'

import app from "./app"
import socket from './socket'

const start = () => {
  const server = http.createServer(app)

  socket(server)

  server.listen(8000, () => console.info('Listening on port 8000'))
}

start()