"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allConfig = void 0;
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
exports.allConfig = {
    development: {
        username: "postgres",
        password: "password",
        database: "employees",
        // host: "127.0.0.1",
        host: "emp_api_db",
        dialect: "postgres",
        // query: { raw: true },
    },
};
