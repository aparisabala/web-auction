const { Server } = require('socket.io');
class SocketServices {

    constructor(server) {
        this.io = new Server(server, {
          cors: {
            origin: process.env.ORIGIN || '*',
          }
        });
    }

    init(){
        this.io.on('connection', (socket) => {
                socket.on('chat', (data) => {
                this.io.emit('chat', data); 
            });

            socket.on('disconnect', () => {
                console.log('❌ User disconnected:', socket.id);
            });
        });
    }
}

module.exports = SocketServices;