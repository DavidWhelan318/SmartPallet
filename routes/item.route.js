var express = require('express');
var router = express.Router();
var itemController = require('../controllers/item.controller');

//POST create item
router.post('/', itemController.create);

//GET all items
router.get('/', itemController.getAll);

//GEt specific item
router.get('/:id', itemController.getOne);

//UPDATE specific item
router.put('/:id', itemController.update);

//DELETE specific item
router.delete('/:id', itemController.delete);

module.exports = router;
