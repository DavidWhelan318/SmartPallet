var express = require('express');
var router = express.Router();
var labelController = require('../controllers/label.controller');

//POST create item
router.post('/', labelController.create);

//GET all items
router.get('/', labelController.getAll);

//GEt specific item
router.get('/:id', labelController.getOne);

//UPDATE specific item
router.put('/:id', labelController.update);

//DELETE specific item
router.delete('/:id', labelController.delete);

module.exports = router;
