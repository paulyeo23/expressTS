"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn(
      "employees", // table name
      "departmentId", // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "employees",
          },
        },
        key: "id",
      }
    );

    const employeeIdQuery = await queryInterface.sequelize.query(
      "SELECT id,department FROM employees"
    );
    const employees = employeeIdQuery[0];

    employees.forEach(async (employee) => {
      await queryInterface.sequelize.query(
        `UPDATE employees SET "departmentId" = (SELECT id FROM departments WHERE department = '${employee.department}') WHERE id = ${employee.id}`
      );
    });

    await queryInterface.removeColumn("employees", "department");
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
