import express from 'express'
import cors, { CorsOptions } from 'cors'

const whitelist = ['http://localhost:3000', 'http://34.76.39.20/', 'http://10.56.2.*/']

const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin = '', callback) => {
    console.log("origin", origin)
    if (whitelist.includes(origin))
      return callback(null, true)

    callback(new Error('Not allowed by CORS'))
  }
}

const app = express()
app.set('trust proxy', true)
app.use(cors(corsOptions))

app.get('/', (_req, res) => {
  res.send('Hello')
})

app.get('/api', (_req, res) => {
  res.send('Hello')
})

export default app