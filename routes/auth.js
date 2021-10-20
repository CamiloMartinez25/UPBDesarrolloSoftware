var express = require('express');
var router = express.Router();
var users = require("../Database/users/users");

//check credetianls
router.post('/', (req, res, next) => {
  users.getUser(req, res);
})

module.exports = router;
