const { Server } = require("socket.io");
class SocketServices {
  constructor() {
    this.io = null; 
  }
  init(server) {
    if (!this.io) {
      this.io = new Server(server, {
        cors: {
          origin: process.env.ORIGIN || "*",
        },
      });
      this.io.on("connection", (socket) => {
        socket.on("chat", (data) => {
          this.io.emit("chat", data);
        });
        socket.on("disconnect", () => {
        });
      });
    }
    return this.io;
  }
}
const socket = new SocketServices();
module.exports = socket;