// server.ts - Next.js + Socket.IO custom server
import { setupSocket } from '@/lib/socket'
import { createServer } from 'http'
import { Server } from 'socket.io'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const currentPort = Number(process.env.PORT) || 3000
const host = process.env.HOST || process.env.HOSTNAME || '0.0.0.0'

async function createCustomServer() {
  try {
    const nextApp = next({
      dev,
      dir: process.cwd(),
      conf: dev ? undefined : { distDir: './.next' },
    })

    await nextApp.prepare()
    const handle = nextApp.getRequestHandler()

    const server = createServer((req, res) => {
      if (req.url?.startsWith('/api/socketio')) return
      handle(req, res)
    })

    const io = new Server(server, {
      path: '/api/socketio',
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    })

    setupSocket(io)

    server.listen(currentPort, host, () => {
      const localUrl = `http://localhost:${currentPort}`
      const networkUrl = `http://${host}:${currentPort}`
      console.log(`> Ready on ${localUrl}`)
      console.log(`> Network URL ${networkUrl}`)
      console.log(`> Socket.IO endpoint ws://${host}:${currentPort}/api/socketio`)
    })
  } catch (err) {
    console.error('Server startup error:', err)
    process.exit(1)
  }
}

createCustomServer()
