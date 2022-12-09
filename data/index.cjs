const { Pool } = require("pg");

if (process.env.DATABASE_URL === undefined) {
  console.log("DATABASE_URL is undefined")
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
  pool : pool
};