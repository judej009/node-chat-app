var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

//     socket.emit('createEmail', {
//         to: 'jen@example.com',
//         text: 'Hey. This is Prasad.'
//     });
 
 
// socket.on('disconnect', function () {
//     console.log('Disconnected from server');
// });

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });


socket.emit('createMessage', {
    from: 'jewel@example.com',
    text: 'Hey. This is Ravin its working.'
});
});

socket.on('disconnect', function () {
console.log('Disconnected from server'); 
});

socket.on('newMessage', function (message) {
console.log('New Message', message);
});