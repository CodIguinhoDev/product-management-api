import mysql from "mysql2/promise";
import "dotenv/config";

export const db_connection = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
});
