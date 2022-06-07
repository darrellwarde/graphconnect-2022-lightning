require("dotenv").config();

const path = require("path");

const environment = {
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_URL: process.env.DB_URL,
  TYPE_DEFS_PATH: path.join(__dirname, "type-defs.graphql"),
};

module.exports = environment;
