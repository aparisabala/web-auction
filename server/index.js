require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (for dev). Set specific origin in production
  }
});

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("Hello from Express + Socket.IO!");
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('🔌 A user connected:', socket.id);

  socket.on('chat message', (msg) => {
    console.log('💬 Message:', msg);
    io.emit('chat message', msg); // broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});