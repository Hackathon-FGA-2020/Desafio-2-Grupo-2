import Chat from '../models/Chat'
import User from '../models/User'

class ChatHandler {
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
