"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("employees", [
      {
        name: "J. Jonah Jameson",
        salary: 10000,
        department: "HR",
      },
      {
        name: "Peter Parker",
        salary: 200,
        department: "HR",
      },
      {
        name: "Betty Brant",
        salary: 5000,
        department: "HR",
      },
      {
        name: "Hoffman",
        salary: 5000,
        department: "HR",
      },
    ]);
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
