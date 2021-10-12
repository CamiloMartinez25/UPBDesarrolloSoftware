var express = require('express');
var router = express.Router();
var users = require("../Database/users/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.getUsers(req, res);
});

router.post('/', (req, res, next) => {
  users.createUser(req, res);
})

module.exports = router;
