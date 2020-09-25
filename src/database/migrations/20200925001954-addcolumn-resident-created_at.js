module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('residents', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
  }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn('residents', 'created_at'),
};
