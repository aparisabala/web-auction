require('dotenv').config();
require('module-alias/register');
const express = require('express');
const cors = require('cors');
const http = require('http');
const models = require('@src/models');
const socket = require('@src/services/socket/SocketServices');
const homeRoute = require('@src/routes/public/homeRoutes');

//start express 
const app = express();
const server = http.createServer(app);
app.use(cors({ origin: process.env.ORIGIN || '*' }));
app.use(express.json());

//init socket
socket.init(server)

//register router
app.get('/', (req, res) => res.status(200).json({ success: true, data: [], message: 'API is running' }));
app.use('/api/public',homeRoute);

//run the web
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    try {
        await models.sequelize.authenticate();
    } catch (e) {
        console.error('DB connection failed:', e.message);
    }
    console.log(`Server on http://localhost:${PORT}`);
});