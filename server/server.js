const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 8000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    // socket.emit('newEmail',{
    //     from: 'jude@example.com',
    //     text: 'How is it going on',
    //     createdAt: 123
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    // socket.on('disconnect', () => {
    //     console.log('User was disconnected');
    // });

    socket.emit('newMessage',{
        from: 'NiluMessage@example.com',
        text: 'How is it going on',
        createdAt: 123123
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});