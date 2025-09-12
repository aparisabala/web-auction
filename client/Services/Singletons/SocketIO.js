
import { io } from "socket.io-client";

class SocketIO {
  constructor() {
    this.connection = io.connect('http://localhost:5000');
    SocketIO.instance = this;
    return SocketIO.instance;
  }
}
const socket = new SocketIO;
const live = socket?.connection;
export { live, socket};