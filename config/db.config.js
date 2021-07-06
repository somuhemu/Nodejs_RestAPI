const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
 port: 3307, 
  host: "localhost",
  user: "root",
  password: "somuhemu",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;