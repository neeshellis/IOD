const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
Controllers.userController.getComment(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
Controllers.userController.createComment(req.body,
res)
})

router.put('/:id', (req, res) => {
Controllers.userController.updateComment(req, res)
})

router.delete('/:id', (req, res) => {
Controllers.userController.deleteComment(req, res)
})

module.exports = router;