import { Sequelize } from "sequelize"; 
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Follow = db.define ('follows', {
    id : {
        type: DataTypes.INTEGER
    },
    follow_name : {
        type: DataTypes.STRING
    }, 
    follow_content : {
        type: DataTypes.STRING
    }, 
}, {
    freezeTableName: true
}); 

export default Follow; 