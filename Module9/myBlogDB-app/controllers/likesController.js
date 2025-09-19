"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getLikes = (res) => {
Models.Likes.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createLikes= (data, res) => {
Models.Likes.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

// uses JSON from request body to update user ID from params
const updateLikes = (req, res) => {
Models.Likes.update(req.body, { where: { id: req.params.id },
returning: true })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};

// // deletes user matching ID from params
const deleteLikes = (req, res) => {
Models.Likes.destroy({ where: { id: req.params.id } })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};

module.exports = {
getLikes, createLikes, updateLikes, deleteLikes
}