require('dotenv').config();
require('module-alias/register');
const SocketServices = require('@src/services/socket/SocketServices');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.use(express.json());
const socketService = new SocketServices(server);
socketService.init();
app.get('/', (req, res) => {
  res.json({success: true,mgs: 'Hello Api','data':[]});
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});