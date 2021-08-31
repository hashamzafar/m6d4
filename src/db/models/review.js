import sequelize from "../dbConnection.js";
import s from 'sequelize'


const { DataTypes } = s

const reviews = sequelize.define("review", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
export default reviews