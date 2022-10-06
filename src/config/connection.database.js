const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const Client = require("pg").Client;
const db = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

db.connect();
db.query("select * from test")
  .then((results) => {
    const resultado = results.rows;
    console.table(resultado);
  })
  .finally(() => db.end());
