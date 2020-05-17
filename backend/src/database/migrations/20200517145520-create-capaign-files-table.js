module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campaign_files', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      proprietary: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'campaigns',
            schema: 'public',
          },
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('campaign_files');
  },
};
