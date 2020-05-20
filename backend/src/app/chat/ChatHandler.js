import Chat from '../models/Chat'
import User from '../models/User'
import Sequelize from 'sequelize'

class ChatHandler {
	async fetch(userid){
		return Chat.findAll({
			where: {
				[Sequelize.Op.or]: [
					{
						receiverid: {
							[Sequelize.Op.like]: `%${userid},%`
						}
					},
					{
					senderid: userid
					}
				]
			}
		});
	}
	async store(message, sender, receiver){
		const chat = await Chat.create({
			senderid: sender,
			receiverid: receiver,
			message: message
		});
	}

	async valid(userid){
		return await User.findByPk(userid);
	}
}

export default ChatHandler;
