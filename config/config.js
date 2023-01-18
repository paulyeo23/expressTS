"use strict";

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database: "employees",
    host: "emp_api_db",
    dialect: "postgres",
    // query: { raw: true },
  },
};
