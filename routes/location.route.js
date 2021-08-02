var express = require('express');
var router = express.Router();
var passport = require('passport');
var permission = require('../middleware/permission.middleware');
var locationController = require('../controllers/location.controller');

//POST create item
router.post('/', passport.authenticate('jwt', {session:false}), permission.AdminOnly, locationController.create);

//GET all items
router.get('/', passport.authenticate('jwt', {session:false}), locationController.getAll);

//GEt specific item
router.get('/:id', passport.authenticate('jwt', {session:false}), locationController.getOne);

//UPDATE specific item
router.put('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, locationController.update);

//DELETE specific item
router.delete('/:id', passport.authenticate('jwt', {session:false}), permission.AdminOnly, locationController.delete);

module.exports = router;
