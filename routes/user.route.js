var express = require('express');
var router = express.Router();
var passport = require('passport');
var permission = require('../middleware/permission.middleware');
var userController = require('../controllers/user.controller');

//POST create item
router.post('/', passport.authenticate('jwt', {session:false}), permission.AdminOnly, userController.create);

//router.post('/', userController.create);

//GET all items
router.get('/', passport.authenticate('jwt', {session:false}), permission.AdminOnly, userController.getAll);

//GEt specific item
router.get('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, userController.getOne);

//UPDATE specific item
router.put('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, userController.update);

//DELETE specific item
router.delete('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, userController.delete);

module.exports = router;
