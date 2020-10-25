import { Server } from 'http'
import socket from 'socket.io'

interface IUsers {
  [roomId: string]: string[]
}

interface ISocketRoom {
  [socketId: string]: string
}

const users: IUsers = {}

const socketToRoom: ISocketRoom = {}

const createSocket = (server: Server) => {
  const io = socket(server)
  const nsp = io.of('websocket')

  nsp.on('connection', (socket) => {
    socket.on('join-room', (roomId) => {
      if (users[roomId]) {
        users[roomId].push(socket.id)
      } else {
        users[roomId] = [socket.id]
      }

      socketToRoom[socket.id] = roomId
      const usersInRoom = users[roomId].filter((id: string) => id !== socket.id)

      socket.emit('users', usersInRoom)
    })

    socket.on('signal', (payload: { signal: any, callerId: string, userToSignal: string }) => {
      nsp.to(payload.userToSignal).emit('user-joined', { signal: payload.signal, callerId: payload.callerId })
    })

    socket.on('return-signal', (payload: { signal: any, callerId: string, userToSignal: string }) => {
      nsp.to(payload.callerId).emit('returned-signal', { signal: payload.signal, id: socket.id })
    })

    socket.on('disconnect', () => {
      const roomId = socketToRoom[socket.id]
      let room = users[roomId]

      if (room) {
        room = room.filter((id: string) => id !== socket.id)
        users[roomId] = room
      }
    })
  })
}

export default createSocket