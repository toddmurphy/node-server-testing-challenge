const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/authRouter');
const userRouter = require('../users/userRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(200);
});

module.exports = server;
