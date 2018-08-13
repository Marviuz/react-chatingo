const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const next = require('next')

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
const dev = process.env.NODE_ENV !== 'production'

const app = express()
const server = http.Server(app)
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const io = socketIo(server)

// User connects
io.on('connection', socket => {
  console.log(`[CONNECT] ${socket.id}`)

  // User disconnects
  socket.on('disconnect', data => {
    console.log(`[DISCONNECT] ${socket.id}`)
  })

  // Send message
  socket.on('chat', data => {
    io.emit('chat', data)
  })
})

nextApp
  .prepare()
  .then(() => {

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, host, err => {
      if (err) throw err
      console.log(`> Ready on http://${host}:${port}`)
    })
  })