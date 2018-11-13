const express = require('express');
const router = express.Router();

const carCtrl = require('../controllers/car.controller');

router.get('/', carCtrl.getCars);
router.get('/order/:order', carCtrl.getCarsOrderedBy);
router.post('/', carCtrl.createCar);
router.get('/:id', carCtrl.getCar);
router.put('/:id', carCtrl.editCar);
router.delete('/:id', carCtrl.deleteCar);

module.exports = router;
