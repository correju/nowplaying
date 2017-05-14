/**
 * @file This is the realtime server to update twits in real time. This was not use
 * the realtime feed had a problem, I could not set geo location for each realtime feeed using socket io
 * I leave this in the docs because some time was spend on this
 * @author Julian Correa
 */
/**
 * chalk to make pretty the console
 * @const
 */
const chalk = require('chalk')

const {getTwits$} = require('./app/')
/**
 * sockectIp to make connections reltime to ciient
 * @const
 */
const socketio = require('socket.io')
/**
 * http to create the web server
 * @const
 */
const http = require('http')
/**
 * http server instance
 * @instance
 */
const server = http.createServer()
/**
 * socketio instance
 * @instance
 */
const io = socketio(server)


/**
 * PORT {number} if not set 8080 it will be used
 * @param
 */
const port = process.env.RTPORT || 5151

getTwits$.subscribe(
  data => {
    io.sockets.emit('twit', data)
  },
  err => {
    console.log(chalk.red(err))
  },
  complete => {
    console.log('done')
  }
)

server.listen(port, function(){
    console.log(chalk.green(`server running in port ${port}`))
})