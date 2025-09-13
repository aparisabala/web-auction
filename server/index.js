import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import models from '#src/models/index';
import homeRouter from '#src/routes/public/homeRoutes';
import socket from '#src/services/socket/SocketServices';

// Start express
const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: process.env.ORIGIN || '*',
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

// Register router
app.get('/', (req, res) => res.status(200).json({ success: true, data: [], message: 'API is running' }));
app.use('/api/public',homeRouter);

// Init socket
socket.init(server);

// Run the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  try {
      await models.sequelize.authenticate();
  } catch (e) {
    console.error('DB connection failed:', e.message);
  }
  console.log(`Server running at ${process.env.ORIGIN || 'http://localhost'}:${PORT}`);
});