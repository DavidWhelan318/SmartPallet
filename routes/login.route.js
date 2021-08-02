var express = require('express');
var router = express.Router();
var passport = require('passport');
var loginController = require('../controllers/login.controller');

//GET all items
router.post('/', passport.authenticate('local', {session: false}), loginController.jsonwebtoken);

module.exports = router;
