const server = require('http').createServer();

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

io.on('connection', client =>{
    setInterval(() => {

    }, 1000)
})

server.listen(3000);