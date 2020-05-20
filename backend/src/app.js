import 'dotenv/config';

import Youch from 'youch';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import ChatHandler from './app/chat/ChatHandler'

import routes from './routes';

import './database';

const port = 30003;
const io = require('socket.io').listen(port);
const socketList = {}
const handler = new ChatHandler();
io.on('connection', (socket) => {
	socket.on('join', (data) => {
		if(handler.valid(data.userid)){
			socket.userid = data.userid;
			socketList[data.userid] = socket;
		} else {
			socket.disconnect();
		}
	});

	socket.on('message', (data) => {
		if(socketList.hasOwnProperty(data.receiver)){
			socketList[data.receiver].emit('message', {
				userid: socket.userid,
				message: data.message
			})
		};
		handler.store(data.message, socket.userid, data.receiver);
	});

	socket.on('typing', () => {});
	socket.on('stop typing', () => {});
});

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
