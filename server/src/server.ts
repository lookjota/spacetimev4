import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 4444,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:4444')
  })
