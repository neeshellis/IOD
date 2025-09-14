const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }
// Sequelize will create this table if it doesn't exist on startup
User.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
userid: {
type: DataTypes.INTEGER, allowNull: false
},
title: {
type: DataTypes.STRING, allowNull: false
},
description: {
type: DataTypes.STRING, allowNull: false, unique: true
}},
{
sequelize: sequelizeInstance, modelName: 'post', 
timestamps: true, freezeTableName: true
}
)
module.exports = User;