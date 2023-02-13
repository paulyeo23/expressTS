"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const sequelize = queryInterface.sequelize;
    const departmentQuery = await sequelize.query("SELECT id FROM departments");

    const departments = departmentQuery[0];

    departments.forEach(async (department) => {
      let hash = bcrypt.hashSync(String(department.id), 10);

      await queryInterface.bulkInsert("users", [
        {
          username: String(department.id),
          password: hash,
          departmentId: department.id,
        },
      ]);
    });
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
