const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const next = require('next')
const imgur = require('imgur')

const port = process.env.PORT || 3000
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
    if (data.file) {
      imgur.uploadBase64(data.file)
        .then(img => {
          data.file = img.data.link
          io.emit('chat', data)
        })
        .catch(err => console.error(err.message))
    } else {
      io.emit('chat', data)
    }
  })
})

nextApp
  .prepare()
  .then(() => {

    app.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      if (dev) console.log(`> Ready on http://localhost:${port}`)
    })
  })