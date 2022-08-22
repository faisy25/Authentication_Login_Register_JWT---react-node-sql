import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "Faisy@25", {
  host: "localhost",
  dialect: "mysql"
});

export default db;
