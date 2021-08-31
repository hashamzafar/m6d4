import sequelize from "../dbConnection.js";
import s from 'sequelize'


const { DataTypes } = s

const Products = sequelize.define("product", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})

export default Products