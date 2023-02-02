"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("employees", [
      {
        name: "J. Jonah Jameson",
        salary: 10000,
        department: "Editorial",
      },
      {
        name: "Perry White",
        salary: 10000,
        department: "Editorial",
      },
      {
        name: "Peter Parker",
        salary: 200,
        department: "Photography",
      },
      {
        name: "Betty Brant",
        salary: 5000,
        department: "HR",
      },
      {
        name: "Hoffman",
        salary: 5000,
        department: "Editorial",
      },
      {
        name: "Eddie Brock",
        salary: 0,
        department: "Fired",
      },
      {
        name: "Robbie Robertson",
        salary: 10000,
        department: "Editorial",
      },
      {
        name: "Ned Lee",
        salary: 3000,
        department: "Reporter",
      },
      {
        name: "Frederick Foswell",
        salary: 3000,
        department: "Reporter",
      },
      {
        name: "Clark Kent",
        salary: 3000,
        department: "Reporter",
      },
      {
        name: "Lois Lane",
        salary: 3000,
        department: "Reporter",
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
