import { Sequelize } from "sequelize"; 
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define ('stories', {
    title : {
        type: DataTypes.STRING
    },
    story : {
        type: DataTypes.STRING
    }, 
}, {
    freezeTableName: true
}); 

export default Product; 