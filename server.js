const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(3000);
const io = new socketio(expressServer);

io.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log(data);
        io.sockets.emit(data.to, data);
    });
});
