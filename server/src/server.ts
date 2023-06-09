import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads/'),
  prefix: '/uploads'
})
app.register(multipart)
// ['https://', 'https://'] the adress where the frontend pages can acess
app.register(cors, {
  origin: true, 
})

app.register(jwt, {
  secret: 'spacetime'
})

app.register(uploadRoutes)
app.register(authRoutes)

app.register(memoriesRoutes)

app
  .listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('😁 Running on http://localhost:3333')
  })
