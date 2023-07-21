import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

app
  .listen({
    port: 4444,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:4444')
  })
