'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('favors', 'id_volunteer', {
      type: Sequelize.INTEGER,
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'residents',
        key: 'id',
      }
  })  
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('favors', 'id_volunteer');
  }
};
