import { Server } from "socket.io";

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
          console.log(data);
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
export default socket;