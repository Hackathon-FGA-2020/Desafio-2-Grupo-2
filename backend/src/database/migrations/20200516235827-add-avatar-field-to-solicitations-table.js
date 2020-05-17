module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('solicitations', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'avatars',
          schema: 'public',
        },
        key: 'id',
      },
      onDelete: 'set null',
      onUpdate: 'cascade',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('solicitations', 'avatar_id');
  },
};
