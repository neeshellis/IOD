const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");
Post.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
userID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: User, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
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
module.exports = Post;