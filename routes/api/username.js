// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from connection.js
const sequelize = require('../config/connection.js');

// initialize username model (table) by extending off Sequelize's Model class
class username extends Model {}

// set up fields and rules for username model
username.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'username'
  }
);

module.exports = username;