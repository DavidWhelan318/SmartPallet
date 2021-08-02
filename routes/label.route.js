var express = require('express');
var router = express.Router();
var passport = require('passport');
var permission = require('../middleware/permission.middleware');
var labelController = require('../controllers/label.controller');

//POST create item
router.post('/', passport.authenticate('jwt', {session:false}), permission.AdminOnly, labelController.create);

//GET all items
router.get('/', passport.authenticate('jwt', {session:false}),  labelController.getAll);

//GEt specific item
router.get('/:id', passport.authenticate('jwt', {session:false}), labelController.getOne);

//UPDATE specific item
router.put('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, labelController.update);

//DELETE specific item
router.delete('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, labelController.delete);

module.exports = router;
