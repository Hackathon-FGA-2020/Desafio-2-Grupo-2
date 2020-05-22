'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
			message: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			senderid: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'cascade',
        onUpdate: 'cascade',
				references: {
					model: 'users',
					key: 'id',
				}
			},
			receiverid: {
				allowNull: false,
				type: Sequelize.STRING
			},
			channel: {
				allowNull: false,
				type: Sequelize.STRING
			},
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chats');
  }
};
