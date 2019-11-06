/*
GET
POST
PUT OR PATCH
DELETE
*/ 
const express = require('express');
var router = express.Router();
const registerController = require('../controllers/RegisterController');

router.get('/', registerController.getAll);
router.get('/:id', registerController.getOneById)

router.post('/insert', registerController.insert);
router.put('/update', registerController.update);
router.delete('/delete', registerController.deleteById);

module.exports = {
    router
}
