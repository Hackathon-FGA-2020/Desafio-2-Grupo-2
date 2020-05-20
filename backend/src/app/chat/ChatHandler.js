import Chat from '../models/Chat'
import User from '../models/User'
import Sequelize from 'sequelize'

class ChatHandler {
	async fetch(userid){
		const chatLimit = 20;
		return await Chat.findAll({
			where: {
				[Sequelize.Op.or]: [
					{
						receiverid: {
							[Sequelize.Op.or]: {
								[Sequelize.Op.like]: `%[${userid},%`,
								[Sequelize.Op.like]: `%,${userid},%`,
								[Sequelize.Op.like]: `%,${userid}]%`,
							}
						}
					},
					{
					senderid: userid
					}
				]
			},
			limit: chatLimit
		});
			
	}
	async store(message, sender, receiver){
		const chat = await Chat.create({
			senderid: sender,
			receiverid: JSON.stringify(receiver),
			message: message
		});
	}

	async valid(userid){
		return await User.findByPk(userid);
	}
}

export default ChatHandler;
