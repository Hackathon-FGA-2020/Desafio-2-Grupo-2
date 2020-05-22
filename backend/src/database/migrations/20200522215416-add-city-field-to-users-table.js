module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'city', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'city');
  },
};
