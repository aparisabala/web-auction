
import { io } from "socket.io-client";

class SocketIO {
  constructor() {
    this.connection = io.connect(process.env.NEXT_PUBLIC_API_ENDPOINT);
    SocketIO.instance = this;
    return SocketIO.instance;
  }
}
const socket = new SocketIO;
const live = socket?.connection;
export { live, socket};