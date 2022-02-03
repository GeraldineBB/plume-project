import { Sequelize } from "sequelize";
 
const db = new Sequelize('books_db', 'newuser', 'password', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;