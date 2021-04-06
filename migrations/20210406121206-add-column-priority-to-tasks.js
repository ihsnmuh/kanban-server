"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Tasks", "priority", Sequelize.STRING);
    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Tasks", "priority");
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  },
};
