const express = require('express');
const projectRoutes = require('./api/projectRoutes');
const actionRoutes = require('./api/actionRoutes');
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

const port = 8000;

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

server.listen(port, () => console.log(`The server is running on port ${port}`));
