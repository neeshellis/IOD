const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");
const User=require("./user");
const Post=require("./post");
const Comment=require("./comment");

const sequelizeInstance = dbConnect.Sequelize;


class Likes extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Likes.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
},
userID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: User, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
postID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Post, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
commentID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Comment, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    }},
{
sequelize: sequelizeInstance, modelName: 'likes', 
timestamps: true, freezeTableName: true
}
)

module.exports = Likes;





