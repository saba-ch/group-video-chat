import express from 'express'
import cors, { CorsOptions } from 'cors'

const whitelist = ['http://localhost:3000']

const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin = '', callback) => {
    if (whitelist.includes(origin))
      return callback(null, true)

    callback(new Error('Not allowed by CORS'))
  }
}

const app = express()
app.use(cors(corsOptions))

export default app