const mysql = require("mysql");
const util = require("util");
const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: "contacts",
  port: 3306,
});

const query = util.promisify(conn.query).bind(conn);

module.exports = { query, conn };
