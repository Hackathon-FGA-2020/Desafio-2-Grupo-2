import Chat from '../models/Chat'
import User from '../models/User'
import Sequelize from 'sequelize'

class ChatHandler {
	async fetch(socket, chatLimit){
		const userid = socket.userid;
		const scroll = socket.scroll;
		var chat = await Chat.findAll({
			where: {
				[Sequelize.Op.or]: [
					{
						receiverid: { [Sequelize.Op.like]: `%[${userid},%` }
					},
					{
						receiverid: { [Sequelize.Op.like]: `%,${userid},%` }
					},
					{
						receiverid: { [Sequelize.Op.like]: `%,${userid}]%` }
						
					},
					{
						receiverid: { [Sequelize.Op.like]: `[${userid}]`}
					},
					{
					senderid: userid
					},
				]
			},
			limit: chatLimit,
			offset: chatLimit * scroll
		});
		if(chat.length > 0)
			socket.emit('history', chat);
		else
			socket.emit('empty');
	}
	
	async store(message, sender, receiver){
		const chat = await Chat.create({
			senderid: sender,
			receiverid: JSON.stringify(receiver),
			message: message
		});
	}

	async chatServer(){
		const port = 30003;
		const io = require('socket.io').listen(port);
		const socketList = {}
		const chatLimit = 20;
		io.on('connection', (socket) => {
			socket.on('join', (data) => {
				User.findByPk(data.userid).then(user => {
					socket.userid = data.userid;
					socket.scroll = 0;
					if(user){
						socketList[data.userid] = socket;
						this.fetch(socket, chatLimit);
					} else {
						console.log('Bad Request');
						socket.emit('failure');
					}
				})
			});

			socket.on('message', (data) => {
				const fail = false;
				for(var receiver of data.receiver){
					const user = User.findByPk(receiver);
					console.log(user);
					User.findByPk(receiver).then(user => {
						if(user) {
							//user is online
							if(socketList.hasOwnProperty(receiver)){
								socketList[receiver].emit('message', {
									userid: socket.userid,
									message: data.message
								});
							}
						} else {
							fail = true;
							console.log('Bad receiver');
							socket.emit('failure');
						}
					});
				}
				if(!fail)
					this.store(data.message, socket.userid, data.receiver);
			});

			socket.on('scroll', () => {
				socket.scroll++;
				this.fetch(socket, chatLimit);
			})
			
			socket.on('typing', () => {});
			socket.on('stop typing', () => {});
			socket.on('disconnect', () => {
				delete socketList[socket.userid];
			})
});

io.on('disconnect', () => {
	io.socket.removeAllListeners();
});
	}
}

export default ChatHandler;
