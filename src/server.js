import { fastify } from 'fastify'
import VideoRouter from './routes/video.js'
import formBody from '@fastify/formbody'
import db from './database/db.js'

await db.sync()

const server = fastify()

server.register(formBody)
server.register(VideoRouter)


server.listen({
    port: 3000, 
})