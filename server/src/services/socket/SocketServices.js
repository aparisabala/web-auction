import saveChat from "#src/repository/saveChat";
import { Server } from "socket.io";

class SocketServices {
  constructor() {
    this.io = null; 
  }
  init(server) {
    if (!this.io) {
      this.io = new Server(server, {
      cors: {
        origin: process.env.ORIGIN || '*',
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
      this.io.on("connection", (socket) => {
        
        socket.on("chat", (data) => {
          saveChat(this,data);
        });
        socket.on("publish_content", (data) => {
            this.io.emit("publish_content", data)
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