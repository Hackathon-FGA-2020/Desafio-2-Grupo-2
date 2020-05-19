module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('donations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      donor_id: {
        type: Sequelize.INTEGER,
        refernces: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      entity_id: {
        type: Sequelize.INTEGER,
        refernces: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        refernces: { model: 'campaigns', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      items: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        defaultValue: [],
      },
      pending_delivery: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      closed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      origin: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        defaultValue: [],
      },
      destiny: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        defaultValue: [],
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
    return queryInterface.dropTable('donations');
  },
};
