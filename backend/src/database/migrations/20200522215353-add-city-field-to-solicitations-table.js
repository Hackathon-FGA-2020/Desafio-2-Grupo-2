module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('solicitations', 'city', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('solicitations', 'city');
  },
};
