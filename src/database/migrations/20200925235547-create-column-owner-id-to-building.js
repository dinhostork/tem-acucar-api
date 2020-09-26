module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('buildings', 'id_owner', {
    type: Sequelize.INTEGER,
    allowNull: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'residents',
      key: 'id',
    },
  }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn('buildings', 'id_owner'),
};
