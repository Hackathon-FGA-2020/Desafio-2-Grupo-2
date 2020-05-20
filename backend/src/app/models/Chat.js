import Sequelize, { Model } from 'sequelize';
import User from './User';

export default class Chat extends Model {
	static init(sequelize) {
		super.init(
			{
				message: Sequelize.TEXT,
				senderid: {
					type: Sequelize.INTEGER,
					references: {
						model: User,
						key: 'id',
					},
				},
				receiverid: {
					type: Sequelize.INTEGER,
					references: {
						model: User,
						key: 'id',
					},
				},
			},
			{ sequelize, }
		);
		return this;
	}
}
