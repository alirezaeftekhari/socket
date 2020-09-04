const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(process.env.PORT || 3000);
const io = new socketio(expressServer);

io.on('connection', (socket) => {
    io.sockets.emit('hello', 'Salam');
    socket.on('data', (data) => {
        console.log(data);
        io.sockets.emit(data.to, data);
    });
});
