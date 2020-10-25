import express from 'express'
import cors, { CorsOptions } from 'cors'

const whitelist = ['http://localhost:3000', 'http://34.76.39.20/', 'http://10.56.2.*/', '']

const corsOptions: CorsOptions = {
  credentials: true,
  origin: (origin = '', callback) => {
    if (whitelist.includes(origin)) return callback(null, true)
    return callback(null, true)
  }
}

const app = express()
app.set('trust proxy', true)
app.use(cors())
app.options('*', cors());

app.get('/', (_req, res) => {
  res.send('Hello')
})

app.get('/api', (_req, res) => {
  res.send('Hello')
})

export default app