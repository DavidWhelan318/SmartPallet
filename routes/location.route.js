var express = require('express');
var router = express.Router();
var locationController = require('../controllers/location.controller');

//POST create item
router.post('/', locationController.create);

//GET all items
router.get('/', locationController.getAll);

//GEt specific item
router.get('/:id', locationController.getOne);

//UPDATE specific item
router.put('/:id', locationController.update);

//DELETE specific item
router.delete('/:id', locationController.delete);

module.exports = router;
