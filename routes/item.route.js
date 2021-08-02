var express = require('express');
var router = express.Router();
var passport = require('passport');
var permission = require('../middleware/permission.middleware');
var itemController = require('../controllers/item.controller');

//POST create item
router.post('/', passport.authenticate('jwt', {session:false}), permission.AdminOnly, itemController.create);

//GET all items
router.get('/', passport.authenticate('jwt', {session:false}), itemController.getAll);

//GEt specific item
router.get('/:id', passport.authenticate('jwt', {session:false}), itemController.getOne);

//UPDATE specific item
router.put('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, itemController.update);

//DELETE specific item
router.delete('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, itemController.delete);

module.exports = router;
