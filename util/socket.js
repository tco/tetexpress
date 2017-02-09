var socketIO = require('socket.io');

module.exports = function initializeSocket(server) {
    var io = socketIO(server);

    io.on('connection', function (socket) {
        socket.emit('init');
        socket.on('changeColor', function (data) {
            io.sockets.emit('colorChange', data);
        });
    });
};
