"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const departmentQuery = await queryInterface.sequelize.query(
      "SELECT DISTINCT department FROM employees"
    );
    await queryInterface.bulkInsert("departments", [{ department: "admin" }]);
    await queryInterface.bulkInsert("departments", departmentQuery[0]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
