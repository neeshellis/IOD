const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }
// Sequelize will create this table if it doesn't exist on startup
const User=require("./user");
const Post=require("./post");

Comment.init({

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
comment: {
type: DataTypes.STRING, allowNull: false
}},
{
sequelize: sequelizeInstance, modelName: 'comment', 
timestamps: true, freezeTableName: true
}
)
module.exports = Comment;





