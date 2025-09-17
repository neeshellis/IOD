const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
Controllers.userController.getLikes(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
Controllers.userController.createLikes(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.userController.updateLikes(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.userController.deleteLikes(req, res)
})

module.exports = router;