
import { io } from "socket.io-client";

class SocketIO {
  constructor() {
    if (!SocketIO.instance) {
      this.connection = io(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        transports: ["websocket"], 
      });
      SocketIO.instance = this;
    }
    return SocketIO.instance;
  }
}
const socket = new SocketIO;
const live = socket?.connection;
export { live, socket};